import { Test, TestingModule } from '@nestjs/testing';
import { ValidationArguments } from 'class-validator';

import { NotFoundException } from '../../../shared/exception/not-found.exception';
import { UserFaker } from '../factory/user.faker';
import { UserEntity } from '../user.entity';
import { UserEntityRepository } from '../user.repository';

import { IsUniqueUserPropRule } from './is-unique-user-prop.validator';

describe('IsUniqueUserPropRule', () => {
	const userFaker = new UserFaker();

	let validator: IsUniqueUserPropRule;
	let userEntityRepository: jest.Mocked<Partial<UserEntityRepository>>;

	const mockUuid = '00000000-0000-4000-0000-000000000000';
	const mockUser = userFaker.makeOne({ uuid: mockUuid }, { createdFrom: '2010' }) as UserEntity;

	beforeAll(async () => {
		userEntityRepository = {
			getOne: jest.fn(),
		};

		const module: TestingModule = await Test.createTestingModule({
			providers: [
				IsUniqueUserPropRule,
				{ provide: UserEntityRepository, useValue: userEntityRepository },
			],
		}).compile();

		validator = module.get<IsUniqueUserPropRule>(IsUniqueUserPropRule);
	});

	it('should be defined', () => {
		expect(validator).toBeDefined();
	});

	describe('validate', () => {
		it('should return True when UserService.getOne throw exception', async () => {
			userEntityRepository.getOne.mockRejectedValueOnce(() => {
				throw new NotFoundException();
			});

			const result = await validator.validate('admin', {
				property: 'username',
			} as ValidationArguments);

			expect(result).toStrictEqual(true);

			expect(userEntityRepository.getOne).toBeCalledTimes(1);
			expect(userEntityRepository.getOne).toBeCalledWith({ username: 'admin' });
		});

		it('should return False when UserService.getOne return a UserEntity', async () => {
			userEntityRepository.getOne.mockResolvedValueOnce(mockUser);

			const result = await validator.validate('admin', {
				property: 'username',
			} as ValidationArguments);

			expect(result).toStrictEqual(false);

			expect(userEntityRepository.getOne).toBeCalledTimes(1);
			expect(userEntityRepository.getOne).toBeCalledWith({ username: 'admin' });
		});
	});

	describe('defaultMessage', () => {
		it('should return valid messages when property is username', async () => {
			const result = validator.defaultMessage({
				property: 'username',
			} as ValidationArguments);

			expect(result).toStrictEqual('username already exists');
		});

		it('should return valid messages when property is email', async () => {
			const result = validator.defaultMessage({
				property: 'email',
			} as ValidationArguments);

			expect(result).toStrictEqual('email already exists');
		});
	});
});
