import { UseGuards, applyDecorators } from '@nestjs/common';

import { UserRole } from '../../user/definition/user-role.enum';
import { RolesGuard } from '../guard/roles.guard';

import { Roles } from './roles.decorator';

export const ProtectTo = (
	...roles: UserRole[]
): (<TFunction extends () => void, Y>(
	target: object | TFunction,
	propertyKey?: string | symbol,
	descriptor?: TypedPropertyDescriptor<Y>,
) => void) => applyDecorators(Roles(...roles), UseGuards(RolesGuard));
