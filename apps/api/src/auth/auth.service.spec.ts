import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

import { TokenModel } from '@set-online/api-interfaces';

import { BcryptService } from '../common/wrappers/bcript.service';
import { UserRole } from '../user/interfaces/user-role.enum';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
	const user = new User({
		uuid: 'ad88163b-c853-49cb-971b-45fd525a2074',
		username: 'user',
		email: 'user@email.com',
		password: '$2a$10$EJdQoWXnQ7U6roghEJvED.moURIQatf6wBdfDtqS9CTf0p3xo1Pm.',
		role: UserRole.Registered,
		createdAt: new Date('2022-08-28T21:16:33.000Z'),
		updatedAt: new Date('2022-08-28T21:16:33.000Z'),
	});

	const jwt: TokenModel = {
		token:
			'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjIzMTQ3MzYsIm5iZiI6MTY2MjMxNDczNiwiZXhwIjoxNjYyNDAxMTM2LCJhdWQiOiJzZXQtb25saW5lIiwiaXNzIjoic2V0LW9ubGluZSIsInN1YiI6ImFkODgxNjNiLWM4NTMtNDljYi05NzFiLTQ1ZmQ1MjVhMjA3NCIsImp0aSI6ImM4NWU4Zjk0LTg3NzctNGUzYS1iZWJmLWY4Yjg4NmVhNmQ5ZSJ9.RBfxbFsqFVqUhK1QgtSuF8MiAR3BIfo0HJ8IQVJRWmAIE4aVeHpRNfhWKyeLQg-h0Yd4G-33TDWKo5jrJvRHdw',
	};

	let service: AuthService;
	const userService: Partial<UserService> = {
		getOneBy: jest.fn().mockReturnValue(user),
	};
	const jwtService: Partial<JwtService> = {
		sign: jest.fn().mockReturnValue(jwt),
	};
	const bcryptService: Partial<BcryptService> = {
		hash: jest.fn().mockReturnValue(user.password),
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

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('login', () => {
		test('should return TokenModel', async () => {
			const tokenModel = await service.login({
				username: 'user',
				password: 'pass',
			});

			expect(tokenModel).toBe(tokenModel);
		});
	});
});
