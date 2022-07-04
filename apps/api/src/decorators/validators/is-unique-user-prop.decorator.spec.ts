import { EntityData } from '@mikro-orm/core';
import { registerDecorator, ValidationOptions } from 'class-validator';
import { User } from '../../modules/user/user.entity';
import { IsUniqueUserPropRule } from '../../modules/user/validators/is-unique-user-prop.validator';

export const IsUniqueUserProp =
	(prop: keyof EntityData<User>, options?: ValidationOptions) =>
	(object: object, propertyName: string) =>
		registerDecorator({
			name: 'IsUniqueUserProp',
			validator: IsUniqueUserPropRule,
			target: object.constructor,
			propertyName,
			options,
			constraints: [prop],
		});
