import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { GqlArgumentsHost } from '@nestjs/graphql';
import { Request, Response } from 'express';

import { BaseException } from '../exception/base.exception';

@Catch(HttpException, BaseException)
export class HttpExceptionFilter implements ExceptionFilter {
	catch(exception: HttpException, host: ArgumentsHost) {
		if (host.getType() === 'http') {
			const ctx = host.switchToHttp();
			const response = ctx.getResponse<Response>();
			const request = ctx.getRequest<Request>();
			const status = exception.getStatus();
			const exceptionResponse = exception.getResponse();
			console.log(exception);

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
				console.log('is object');
				response.status(status).json({ ...exceptionResponse, ip: request.ip });
			}
		} else {
			const gqlHost = GqlArgumentsHost.create(host);

			console.log(gqlHost.getType());

			return exception;
		}
	}
}
