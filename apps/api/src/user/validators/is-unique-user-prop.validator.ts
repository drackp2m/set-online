import { EntityData } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator';
import { User } from '../user.entity';
import { UserService } from '../user.service';

@ValidatorConstraint({ name: 'IsUniqueUserProp', async: true })
@Injectable()
export class IsUniqueUserPropRule implements ValidatorConstraintInterface {
	constructor(private readonly userService: UserService) {}

	async validate(value: string, args: ValidationArguments) {
		const prop = args.property as keyof EntityData<User>;

		try {
			await this.userService.getOneBy(prop, value);
		} catch {
			return true;
		}

		return false;
	}

	defaultMessage(args: ValidationArguments) {
		return `${args.property} already exists`;
	}
}
