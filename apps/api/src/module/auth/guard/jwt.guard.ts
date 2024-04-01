import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

import { UnauthorizedException } from '../../../shared/exception/unauthorized-exception.exception';

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
	getRequest<T>(context: ExecutionContext): T {
		const gqlContext = GqlExecutionContext.create(context);

		return gqlContext.getContext<{ req: T }>().req;
	}

	handleRequest<T>(error?: Error, payload?: T): T | undefined {
		if (error) {
			throw new UnauthorizedException('invalid access token', 'jwt');
		}

		return payload;
	}
}
