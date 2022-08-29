import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

import { Request } from 'express';
import { ForbiddenException } from '../../common/exceptions/forbiden.exception';
import { UnauthorizedException } from '../../common/exceptions/unauthorized-exception.exception';
import { UserRole } from '../../user/interfaces/user-role.enum';
import { User } from '../../user/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const roles = new Reflector().get<UserRole[]>(
			'roles',
			context.getHandler(),
		);

		if (!roles) {
			return true;
		}

		const user = GqlExecutionContext.create(context).getContext<{
			req: Request & { user: User };
		}>().req.user;

		if (!user) {
			throw new UnauthorizedException('invalid bearer', 'authorization');
		}

		const hasRole = user.role === UserRole.Admin || roles.includes(user.role);

		if (hasRole) {
			return true;
		}

		throw new ForbiddenException();
	}
}
