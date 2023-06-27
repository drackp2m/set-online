import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import bcrypt from 'bcryptjs';

import { NotFoundException, UnauthorizedException } from '../../common/exceptions';
import { UserFaker } from '../user/factories';
import { UserService } from '../user/user.service';

import { AuthService } from './auth.service';

const mockUuid = '00000000-0000-4000-0000-000000000000';

describe('AuthService', () => {
	let service: AuthService;
	let userService: jest.Mocked<Partial<UserService>>;
	let jwtService: jest.Mocked<Partial<JwtService>>;

	const userFaker = new UserFaker();
	const mockUser = userFaker.makeOne({ uuid: mockUuid }, { createdFrom: '2010' });
	const mockJwtToken =
		'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJKZXN0IiwiaXNzIjoiVW5pdmVyc2UiLCJzdWIiOiI0MiIsImV4cCI6NjQ4NjAwMTIwfQ.VJK798GWnHeEm3dETnrlKemINGqaZ286tDZg9aUhAh8';

	beforeAll(async () => {
		userService = {
			getOneBy: jest.fn(),
		};

		jwtService = {
			sign: jest.fn(),
		};

		const module: TestingModule = await Test.createTestingModule({
			providers: [
				AuthService,
				{ provide: UserService, useValue: userService },
				{ provide: JwtService, useValue: jwtService },
			],
		}).compile();

		service = module.get<AuthService>(AuthService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('login', () => {
		it('should throw NotFoundException when UserService.getOneBy throw exception', async () => {
			userService.getOneBy.mockRejectedValueOnce(() => {
				throw new NotFoundException();
			});

			const tokenModel = service.login({ username: 'user', password: 'pass' });

			await expect(tokenModel).rejects.toThrow(NotFoundException);

			expect(userService.getOneBy).toBeCalledTimes(1);
			expect(userService.getOneBy).toBeCalledWith('username', 'user');
		});

		it('should throw UnauthorizedException when BcryptService.compare return False', async () => {
			userService.getOneBy.mockResolvedValueOnce(mockUser);
			jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(false as never);

			const tokenModel = service.login({ username: 'user', password: 'pass' });

			await expect(tokenModel).rejects.toThrow(UnauthorizedException);

			expect(userService.getOneBy).toBeCalledTimes(1);
			expect(userService.getOneBy).toBeCalledWith('username', 'user');
		});

		it('should return TokenModel when JwtService.sign return a token', async () => {
			userService.getOneBy.mockResolvedValueOnce(mockUser);
			jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(true as never);
			jwtService.sign.mockReturnValueOnce(mockJwtToken);

			const tokenModel = await service.login({
				username: 'user',
				password: 'pass',
			});

			expect(tokenModel).toStrictEqual(mockJwtToken);

			expect(userService.getOneBy).toBeCalledTimes(1);
			expect(userService.getOneBy).toBeCalledWith('username', 'user');

			expect(jwtService.sign).toBeCalledTimes(1);
			expect(jwtService.sign).toBeCalledWith({}, { subject: mockUuid });
		});
	});
});
