import { Injectable } from '@nestjs/common';
import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from '../modules/user/user.service';

@ValidatorConstraint({ name: 'IsUniqueUsername', async: true })
@Injectable()
export class IsUniqueUsernameRule implements ValidatorConstraintInterface {
	constructor(private userService: UserService) {}

	async validate(value: string, validationArguments: ValidationArguments) {
		try {
			await this.userService.getOneBy('username', value);
		} catch (error) {
			return false;
		}

		return true;
	}

	defaultMessage(_args: ValidationArguments) {
		return `username already exists`;
	}
}
