import { EntityData } from '@mikro-orm/core';
import { ValidationOptions, registerDecorator } from 'class-validator';

import { UserEntity } from '..';
import { IsUniqueUserPropRule } from '../validators';

export const IsUniqueUserProp =
	(prop: keyof EntityData<UserEntity>, options?: ValidationOptions) =>
	(object: object, propertyName: string) =>
		registerDecorator({
			name: 'IsUniqueUserProp',
			validator: IsUniqueUserPropRule,
			target: object.constructor,
			propertyName,
			options,
			constraints: [prop],
		});
