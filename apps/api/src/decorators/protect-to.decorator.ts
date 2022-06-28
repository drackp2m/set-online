import { applyDecorators, UseGuards } from '@nestjs/common';

import { JwtGuard } from '../guards/jwt.guard';
import { RolesGuard } from '../guards/roles.guard';
import { RolesEnum } from '../models/enums/roles.enum';
import { Roles } from './roles.decorator';

export function ProtectTo(
	...roles: RolesEnum[]
): <TFunction extends () => void, Y>(
	target: object | TFunction,
	propertyKey?: string | symbol,
	descriptor?: TypedPropertyDescriptor<Y>,
) => void {
	return applyDecorators(Roles(...roles), UseGuards(JwtGuard, RolesGuard));
}