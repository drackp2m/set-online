import { CustomDecorator, SetMetadata } from '@nestjs/common';

import { UserRole } from '../../user/definitions';

export const Roles = (...roles: UserRole[]): CustomDecorator => SetMetadata('roles', roles);
