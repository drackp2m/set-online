import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

import { BaseException } from '../common/exceptions/base.exception';
import { NotFoundException } from '../common/exceptions/not-found.exception';
import { UnauthorizedException } from '../common/exceptions/unauthorized-exception.exception';
import { BcryptService } from '../common/wrappers/bcript.service';
import { User } from '../user/user.entity';
import { UserFaker } from '../user/user.faker';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { TokenModel } from './dtos/token.model';

describe('AuthService', () => {
	const userFaker = new UserFaker();
	const fakeUser: User = userFaker.make({ createdFrom: '2010' }) as User;
	const jwtToken =
		'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJKZXN0IiwiaXNzIjoiVW5pdmVyc2UiLCJzdWIiOiI0MiIsImV4cCI6NjQ4NjAwMTIwfQ.VJK798GWnHeEm3dETnrlKemINGqaZ286tDZg9aUhAh8';

	let service: AuthService;

	const userService: jest.Mocked<Partial<UserService>> = {
		getOneBy: jest.fn(),
	};

	const jwtService: jest.Mocked<Partial<JwtService>> = {
		sign: jest.fn(),
	};

	const bcryptService: jest.Mocked<Partial<BcryptService>> = {
		compare: jest.fn().mockReturnValue(true),
	};

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				AuthService,
				{ provide: UserService, useValue: userService },
				{ provide: JwtService, useValue: jwtService },
				{ provide: BcryptService, useValue: bcryptService },
			],
		}).compile();

		service = module.get<AuthService>(AuthService);
	});

	beforeEach(async () => {
		jest.clearAllMocks();
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('login', () => {
		it('should return NotFoundException when UserService.getOneBy throw exception', async () => {
			userService.getOneBy.mockImplementationOnce(() => {
				throw new NotFoundException();
			});

			const tokenModel = service.login({ username: 'user', password: 'pass' });

			await expect(tokenModel).rejects.toThrow(NotFoundException);

			expect(userService.getOneBy).toBeCalledTimes(1);
			expect(userService.getOneBy).toBeCalledWith('username', 'user');
		});

		it('should return UnauthorizedException when BcryptService.compare return False', async () => {
			userService.getOneBy.mockResolvedValueOnce(fakeUser);
			bcryptService.compare.mockResolvedValueOnce(false);

			const tokenModel = service.login({ username: 'user', password: 'pass' });

			await expect(tokenModel).rejects.toThrow(UnauthorizedException);

			expect(userService.getOneBy).toBeCalledTimes(1);
			expect(userService.getOneBy).toBeCalledWith('username', 'user');

			expect(bcryptService.compare).toBeCalledTimes(1);
			expect(bcryptService.compare).toBeCalledWith('pass', fakeUser.password);
		});

		it('should return TokenModel when JwtService.sign return a token', async () => {
			userService.getOneBy.mockResolvedValueOnce(fakeUser);
			bcryptService.compare.mockResolvedValueOnce(true);
			jwtService.sign.mockReturnValue(jwtToken);

			const tokenModel = await service.login({
				username: 'user',
				password: 'pass',
			});

			expect(tokenModel).toStrictEqual(new TokenModel({ token: jwtToken }));

			expect(userService.getOneBy).toBeCalledTimes(1);
			expect(userService.getOneBy).toBeCalledWith('username', 'user');

			expect(bcryptService.compare).toBeCalledTimes(1);
			expect(bcryptService.compare).toBeCalledWith('pass', fakeUser.password);
		});
	});

	describe('comparePassword', () => {
		it('should return False when BcryptService.compare return False', async () => {
			bcryptService.compare.mockResolvedValueOnce(false);

			const passwordMatch = await service.comparePassword('pass', 'hash');

			expect(passwordMatch).toBeFalsy();

			expect(bcryptService.compare).toBeCalledTimes(1);
			expect(bcryptService.compare).toBeCalledWith('pass', 'hash');
		});

		it('should return True when BcryptService.compare return True', async () => {
			bcryptService.compare.mockResolvedValueOnce(true);

			const passwordMatch = await service.comparePassword('pass', 'hash');

			expect(passwordMatch).toBeTruthy();

			expect(bcryptService.compare).toBeCalledTimes(1);
			expect(bcryptService.compare).toBeCalledWith('pass', 'hash');
		});
	});

	describe('decodeHeaderAndPayload', () => {
		it('should return Error when pass invalid jwt', () => {
			const decodeHeaderAndPayload = service['decodeHeaderAndPayload'];

			expect(() => decodeHeaderAndPayload('anything')).toThrow(BaseException);
		});

		it('should return Error when pass invalid jwt', () => {
			const decodeHeaderAndPayload = service['decodeHeaderAndPayload'];

			expect(() => decodeHeaderAndPayload('bad.jwt')).toThrow(SyntaxError);
		});

		it('should return JwtPayload when pass valid jwt', () => {
			const jwtPayload = service['decodeHeaderAndPayload'](jwtToken);

			const expected = {
				aud: 'Jest',
				iss: 'Universe',
				sub: '42',
				exp: 648600120,
			};

			expect(jwtPayload).toEqual(expected);
		});
	});
});
