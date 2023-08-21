import { AuthenticationError } from '@nestjs/apollo';
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { GraphQLError } from 'graphql';

import { BaseException } from '../exception/base.exception';
import { UnauthorizedException } from '../exception/unauthorized-exception.exception';

@Catch(HttpException, BaseException)
export class HttpExceptionFilter implements ExceptionFilter {
	catch(exception: HttpException, host: ArgumentsHost) {
		if (host.getType() === 'http') {
			const ctx = host.switchToHttp();
			const response = ctx.getResponse<Response>();
			const request = ctx.getRequest<Request>();
			const status = exception.getStatus();
			const exceptionResponse = exception.getResponse();

			if (exception instanceof BaseException) {
				response.status(status).json({
					message: [exception.getResponse()],
					error: exception.stack.substring(
						exception.stack.indexOf(': ') + 2,
						exception.stack.indexOf('\n'),
					),
					statusCode: exception.getStatus(),
					ip: request.ip,
				});
			} else if (exceptionResponse instanceof Object) {
				response.status(status).json({ ...exceptionResponse, ip: request.ip });
			}
		} else {
			const exceptionDetails = JSON.stringify(exception.getResponse());

			if (exception instanceof UnauthorizedException) {
				throw new AuthenticationError(exceptionDetails);
			}

			throw new GraphQLError(exception.message, {
				extensions: {
					name: exception.name,
					code: exception.getStatus(),
					details: exception.getResponse(),
				},
			});
		}
	}
}
