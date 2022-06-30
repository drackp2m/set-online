import { CustomDecorator, SetMetadata } from '@nestjs/common';

import { UserRoleEnum } from '../models/enums/user-role.enum';

export const Roles = (...roles: UserRoleEnum[]): CustomDecorator =>
	SetMetadata('roles', roles);
