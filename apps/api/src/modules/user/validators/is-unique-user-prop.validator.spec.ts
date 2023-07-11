import { Test, TestingModule } from '@nestjs/testing';
import { ValidationArguments } from 'class-validator';

import { NotFoundException } from '../../../shared/exceptions';
import { UserFaker } from '../factories';
import { UserEntity } from '../user.entity';
import { UserService } from '../user.service';

import { IsUniqueUserPropRule } from './is-unique-user-prop.validator';

describe('IsUniqueUserPropRule', () => {
	const userFaker = new UserFaker();

	let validator: IsUniqueUserPropRule;
	let userService: jest.Mocked<Partial<UserService>>;

	const mockUuid = '00000000-0000-4000-0000-000000000000';
	const mockUser = userFaker.makeOne({ uuid: mockUuid }, { createdFrom: '2010' }) as UserEntity;

	beforeAll(async () => {
		userService = {
			getOneBy: jest.fn(),
		};

		const module: TestingModule = await Test.createTestingModule({
			providers: [IsUniqueUserPropRule, { provide: UserService, useValue: userService }],
		}).compile();

		validator = module.get<IsUniqueUserPropRule>(IsUniqueUserPropRule);
	});

	it('should be defined', () => {
		expect(validator).toBeDefined();
	});

	describe('validate', () => {
		it('should return True when UserService.getOneBy throw exception', async () => {
			userService.getOneBy.mockRejectedValueOnce(() => {
				throw new NotFoundException();
			});

			const result = await validator.validate('admin', {
				property: 'username',
			} as ValidationArguments);

			expect(result).toStrictEqual(true);

			expect(userService.getOneBy).toBeCalledTimes(1);
			expect(userService.getOneBy).toBeCalledWith('username', 'admin');
		});

		it('should return False when UserService.getOneBy return a UserEntity', async () => {
			userService.getOneBy.mockResolvedValueOnce(mockUser);

			const result = await validator.validate('admin', {
				property: 'username',
			} as ValidationArguments);

			expect(result).toStrictEqual(false);

			expect(userService.getOneBy).toBeCalledTimes(1);
			expect(userService.getOneBy).toBeCalledWith('username', 'admin');
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
