import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

import { NotFoundException } from '../common/exceptions/not-found.exception';
import { UnauthorizedException } from '../common/exceptions/unauthorized-exception.exception';
import { BcryptService } from '../common/wrappers/bcript.service';
import { User } from '../user/user.entity';
import { UserFaker } from '../user/user.faker';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
	const userFaker = new UserFaker();
	const fakeUser: User = userFaker.make({ createdFrom: '2010' }) as User;
	const jwtToken =
		'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjIzMTQ3MzYsIm5iZiI6MTY2.pRNfhWKyeLQg-h0Yd4G-33TDWKo5jrJvRHdw';

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
			userService.getOneBy.mockImplementation(() => {
				throw new NotFoundException();
			});

			const tokenModel = service.login({ username: 'user', password: 'pass' });

			await expect(tokenModel).rejects.toThrow(NotFoundException);
			expect(userService.getOneBy).toBeCalledTimes(1);
			expect(userService.getOneBy).toBeCalledWith('username', 'user');
		});

		it('should return UnauthorizedException when BcryptService.compare return False', async () => {
			userService.getOneBy.mockReturnValue(Promise.resolve(fakeUser));
			bcryptService.compare.mockReturnValue(Promise.resolve(false));

			const tokenModel = service.login({
				username: 'user',
				password: 'pass',
			});

			await expect(tokenModel).rejects.toThrow(UnauthorizedException);
			expect(bcryptService.compare).toBeCalledTimes(1);
			expect(bcryptService.compare).toBeCalledWith('pass', fakeUser.password);
		});

		it('should return TokenModel when JwtService.sign return a token', async () => {
			userService.getOneBy.mockReturnValue(Promise.resolve(fakeUser));
			bcryptService.compare.mockReturnValue(Promise.resolve(true));
			jwtService.sign.mockReturnValue(jwtToken);

			const tokenModel = await service.login({
				username: 'user',
				password: 'pass',
			});

			expect(tokenModel).toEqual({ token: jwtToken });
		});
	});
});
