import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';

import { User } from '../user.entity';

export const CurrentUser = createParamDecorator(
	(_: unknown, context: ExecutionContext): User => {
		const gqlContext = GqlExecutionContext.create(context);

		return gqlContext.getContext<{ req: Request & { user: User } }>().req.user;
	},
);
