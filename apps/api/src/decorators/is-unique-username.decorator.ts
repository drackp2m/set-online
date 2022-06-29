import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsUniqueUsernameRule } from '../validators/is-unique-username.validator';

export function IsUniqueUsername(options?: ValidationOptions) {
	return function (object: object, propertyName: string) {
		console.log(object, propertyName);
		registerDecorator({
			name: 'IsUniqueUsername',
			validator: IsUniqueUsernameRule,
					target: object.constructor,
					propertyName,
			options,
		});
	};
}
