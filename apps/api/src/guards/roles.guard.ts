import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

import { Request } from 'express';
import { User } from '../modules/user/user.entity';
import { UserService } from '../modules/user/user.service';

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private readonly userService: UserService) {}

	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const roles = new Reflector().get<string[]>('roles', context.getHandler());

		if (!roles) {
			return true;
		}

		const userUuid = GqlExecutionContext.create(context).getContext<{
			req: Request & { user: User };
		}>().req.user.uuid;

		try {
			const user = await this.userService.getOneBy('uuid', userUuid);

			// const hasRole = user.roles.split('|').some((role) => roles.includes(role))

			// FixMe => implement role on UserEntity

			const hasRole = user.username === 'drackp2m';

			if (hasRole) {
				return true;
			}
		} catch {
			throw new ForbiddenException();
		}

		throw new ForbiddenException();
	}
}
