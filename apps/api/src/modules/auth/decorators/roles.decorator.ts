import { CustomDecorator, SetMetadata } from '@nestjs/common';

import { UserRole } from '../../user/interfaces';

export const Roles = (...roles: UserRole[]): CustomDecorator =>
	SetMetadata('roles', roles);
