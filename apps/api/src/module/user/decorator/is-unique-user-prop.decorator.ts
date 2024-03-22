import { EntityData } from '@mikro-orm/core';
import { ValidationOptions, registerDecorator } from 'class-validator';

import { User } from '../user.entity';
import { IsUniqueUserPropRule } from '../validator/is-unique-user-prop';

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
