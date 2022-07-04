import { CustomDecorator, SetMetadata } from '@nestjs/common';

import { EUserRole } from '../models/enums/user-role.enum';

export const Roles = (...roles: EUserRole[]): CustomDecorator =>
	SetMetadata('roles', roles);
