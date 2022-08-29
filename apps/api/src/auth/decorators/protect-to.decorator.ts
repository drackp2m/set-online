import { applyDecorators, UseGuards } from '@nestjs/common';

import { RolesGuard } from '../guards/roles.guard';
import { UserRole } from '../../user/interfaces/user-role.enum';
import { Roles } from './roles.decorator';

export const ProtectTo = (
	...roles: UserRole[]
): (<TFunction extends () => void, Y>(
	target: object | TFunction,
	propertyKey?: string | symbol,
	descriptor?: TypedPropertyDescriptor<Y>,
) => void) => applyDecorators(Roles(...roles), UseGuards(RolesGuard));
