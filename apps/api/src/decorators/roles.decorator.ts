import { CustomDecorator, SetMetadata } from '@nestjs/common';

import { RolesEnum } from '../models/enums/roles.enum';

export const Roles = (...roles: RolesEnum[]): CustomDecorator =>
	SetMetadata('roles', roles);
