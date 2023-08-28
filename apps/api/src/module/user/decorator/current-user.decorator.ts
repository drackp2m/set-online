import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';

import { User } from '../user.entity';

export const CurrentUser = createParamDecorator((_: unknown, context: ExecutionContext): User => {
	const gqlExecutionContext = GqlExecutionContext.create(context);

	const gqlContext = gqlExecutionContext.getContext<{ req: Request & { user: User } }>();

	return gqlContext.req.user;
});
