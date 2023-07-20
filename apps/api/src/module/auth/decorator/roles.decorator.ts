import { CustomDecorator, SetMetadata } from '@nestjs/common';

import { UserRole } from '../../user/definition/user-role.enum';

export const Roles = (...roles: UserRole[]): CustomDecorator => SetMetadata('roles', roles);
