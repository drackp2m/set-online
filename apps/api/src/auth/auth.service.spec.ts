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

const uuid = '433b2725-c483-46b2-8b80-1b944158e04c';

jest.mock('uuid', () => ({
	v4: () => uuid,
}));

describe('AuthService', () => {
	let service: AuthService;
	let userService: jest.Mocked<Partial<UserService>>;
	let jwtService: jest.Mocked<Partial<JwtService>>;
	let bcryptService: jest.Mocked<Partial<BcryptService>>;

	const userFaker = new UserFaker();
	const fakeUser: User = userFaker.make(
		{ uuid },
		{ createdFrom: '2010' },
	) as User;
	const jwtToken =
		'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJKZXN0IiwiaXNzIjoiVW5pdmVyc2UiLCJzdWIiOiI0MiIsImV4cCI6NjQ4NjAwMTIwfQ.VJK798GWnHeEm3dETnrlKemINGqaZ286tDZg9aUhAh8';

	beforeAll(async () => {
		userService = {
			getOneBy: jest.fn(),
		};

		jwtService = {
			sign: jest.fn(),
		};

		bcryptService = {
			compare: jest.fn(),
		};

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
		it('should throw NotFoundException when UserService.getOneBy throw exception', async () => {
			userService.getOneBy.mockImplementationOnce(() => {
				throw new NotFoundException();
			});

			const tokenModel = service.login({ username: 'user', password: 'pass' });

			await expect(tokenModel).rejects.toThrow(NotFoundException);

			expect(userService.getOneBy).toBeCalledTimes(1);
			expect(userService.getOneBy).toBeCalledWith('username', 'user');
		});

		it('should throw UnauthorizedException when BcryptService.compare return False', async () => {
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
			jwtService.sign.mockReturnValueOnce(jwtToken);

			const tokenModel = await service.login({
				username: 'user',
				password: 'pass',
			});

			expect(tokenModel).toStrictEqual(new TokenModel({ token: jwtToken }));

			expect(userService.getOneBy).toBeCalledTimes(1);
			expect(userService.getOneBy).toBeCalledWith('username', 'user');

			expect(bcryptService.compare).toBeCalledTimes(1);
			expect(bcryptService.compare).toBeCalledWith('pass', fakeUser.password);

			expect(jwtService.sign).toBeCalledTimes(1);
			expect(jwtService.sign).toBeCalledWith({}, { subject: uuid });
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

	describe('getPayloadFromJwt', () => {
		it('should throw Error when pass not jwt', () => {
			const decodeHeaderAndPayload = service.getPayloadFromJwt;

			expect(() => decodeHeaderAndPayload('anything')).toThrow(BaseException);
		});

		it('should throw Error when pass invalid jwt', () => {
			const decodeHeaderAndPayload = service['getPayloadFromJwt'];

			expect(() => decodeHeaderAndPayload('bad.jwt')).toThrow(SyntaxError);
		});

		it('should return JwtPayload when pass valid jwt', () => {
			const jwtPayload = service.getPayloadFromJwt(jwtToken);

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
