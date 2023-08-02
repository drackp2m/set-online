import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { GqlArgumentsHost } from '@nestjs/graphql';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
	catch(exception: HttpException, host: ArgumentsHost) {
		if (host.getType() === 'http') {
			const ctx = host.switchToHttp();
			const response = ctx.getResponse<Response>();
			const request = ctx.getRequest<Request>();
			const status = exception.getStatus();
			const exceptionResponse = exception.getResponse();

			if (exceptionResponse instanceof Object) {
				response.status(status).json({ ...exceptionResponse, ip: request.ip });
			}
		} else {
			const gqlHost = GqlArgumentsHost.create(host);

			console.log(gqlHost.getType());

			return exception;
		}
	}
}
