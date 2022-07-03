import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

import { Request } from 'express';
import { ForbiddenException } from '../exceptions/forbiden.exception';
import { UserRoleEnum } from '../models/enums/user-role.enum';
import { User } from '../modules/user/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const roles = new Reflector().get<UserRoleEnum[]>(
			'roles',
			context.getHandler(),
		);

		if (!roles) {
			return true;
		}

		const user = GqlExecutionContext.create(context).getContext<{
			req: Request & { user: User };
		}>().req.user;

		const hasRole =
			user.role === UserRoleEnum.Admin || roles.includes(user.role);

		if (hasRole) {
			return true;
		}

		throw new ForbiddenException();
	}
}
