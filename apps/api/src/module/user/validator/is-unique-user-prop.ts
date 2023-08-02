import { EntityData } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator';

import { UserEntity } from '../user.entity';
import { UserRepository } from '../user.repository';

@ValidatorConstraint({ name: 'IsUniqueUserProp', async: true })
@Injectable()
export class IsUniqueUserPropRule implements ValidatorConstraintInterface {
	constructor(private readonly userRepository: UserRepository) {}

	async validate(value: string, args: ValidationArguments) {
		const prop = args.property as keyof EntityData<UserEntity>;

		try {
			await this.userRepository.getOne({ [prop]: value });
		} catch {
			return true;
		}

		return false;
	}

	defaultMessage(args: ValidationArguments) {
		return `${args.property} already exists`;
	}
}
