import { UseGuards, applyDecorators } from '@nestjs/common';

import { UserRole } from '../../user/interfaces';
import { RolesGuard } from '../guards';

import { Roles } from '.';

export const ProtectTo = (
	...roles: UserRole[]
): (<TFunction extends () => void, Y>(
	target: object | TFunction,
	propertyKey?: string | symbol,
	descriptor?: TypedPropertyDescriptor<Y>,
) => void) => applyDecorators(Roles(...roles), UseGuards(RolesGuard));
