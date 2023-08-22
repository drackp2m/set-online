import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';

import { ForbiddenException } from '../../../shared/exception/forbidden.exception';
import { UnauthorizedException } from '../../../shared/exception/unauthorized-exception.exception';
import { UserRole } from '../../user/definition/user-role.enum';
import { UserEntity } from '../../user/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
	async canActivate(context: ExecutionContext): Promise<boolean> {
		const roles = new Reflector().get<UserRole[]>('roles', context.getHandler());

		const user = GqlExecutionContext.create(context).getContext<{
			req: Request & { user: UserEntity };
		}>().req.user;

		if (!user) {
			throw new UnauthorizedException('invalid bearer', 'authorization');
		}

		if (roles.length === 0) {
			return true;
		}

		const hasRole = user.role === UserRole.Admin || roles.includes(user.role);

		if (hasRole) {
			return true;
		}

		throw new ForbiddenException('not allowed', 'role');
	}
}
