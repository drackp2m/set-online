import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';

import { UserEntity } from '../user.entity';

export const CurrentUser = createParamDecorator(
	(_: unknown, context: ExecutionContext): UserEntity => {
		const gqlContext = GqlExecutionContext.create(context);

		return gqlContext.getContext<{ req: Request & { user: UserEntity } }>().req.user;
	},
);
