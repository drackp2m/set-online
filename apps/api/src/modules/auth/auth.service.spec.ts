import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcryptjs';

import {
	BaseException,
	NotFoundException,
	UnauthorizedException,
} from '../../common/exceptions';
import { UserFaker } from '../user/factories';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { TokenModel } from './dtos/token.model';

const mockUuid = '00000000-0000-4000-0000-000000000000';

describe('AuthService', () => {
	let service: AuthService;
	let userService: jest.Mocked<Partial<UserService>>;
	let jwtService: jest.Mocked<Partial<JwtService>>;

	const userFaker = new UserFaker();
	const mockUser: UserEntity = userFaker.makeOne(
		{ uuid: mockUuid },
		{ createdFrom: '2010' },
	);
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

			expect(tokenModel).toStrictEqual(new TokenModel({ token: mockJwtToken }));

			expect(userService.getOneBy).toBeCalledTimes(1);
			expect(userService.getOneBy).toBeCalledWith('username', 'user');

			expect(jwtService.sign).toBeCalledTimes(1);
			expect(jwtService.sign).toBeCalledWith({}, { subject: mockUuid });
		});
	});

	describe('passwordMatch', () => {
		it('should return False when BcryptService.compare return False', async () => {
			jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(false as never);

			const passwordMatch = await service.passwordMatch('pass', 'hash');

			expect(passwordMatch).toBeFalsy();
		});

		it('should return True when BcryptService.compare return True', async () => {
			jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(true as never);

			const passwordMatch = await service.passwordMatch('pass', 'hash');

			expect(passwordMatch).toBeTruthy();
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
			const jwtPayload = service.getPayloadFromJwt(mockJwtToken);

			const expectedPayload = {
				aud: 'Jest',
				iss: 'Universe',
				sub: '42',
				exp: 648600120,
			};

			expect(jwtPayload).toEqual(expectedPayload);
		});
	});
});
