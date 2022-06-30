import { applyDecorators, UseGuards } from '@nestjs/common';

import { JwtGuard } from '../guards/jwt.guard';
import { RolesGuard } from '../guards/roles.guard';
import { UserRoleEnum } from '../models/enums/user-role.enum';
import { Roles } from './roles.decorator';

export const ProtectTo = (
	...roles: UserRoleEnum[]
): <TFunction extends () => void, Y>(
	target: object | TFunction,
	propertyKey?: string | symbol,
	descriptor?: TypedPropertyDescriptor<Y>,
) => void => applyDecorators(Roles(...roles), UseGuards(JwtGuard, RolesGuard))
