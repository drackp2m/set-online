import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { NotFoundException } from '../../../shared/exception/not-found.exception';
import { UnauthorizedException } from '../../../shared/exception/unauthorized-exception.exception';
import { CheckPasswordUseCase } from '../../../shared/use-case/check-password.use-case';
import { User } from '../../user/user.entity';
import { UserRepository } from '../../user/user.repository';
import { JwtCookie } from '../definition/jwt-cookie.enum';

import { CreateJwtAccessTokenUseCase } from './create-jwt-access-token.use-case';
import { CreateJwtRefreshTokenUseCase } from './create-jwt-refresh-token.use-case';
import { LoginUseCase } from './login.use-case';
import { SetJwtTokenUseCase } from './set-jwt-token.use-case';

describe('LoginUseCase', () => {
	let useCase: LoginUseCase;
	const userRepository = mock<UserRepository>();
	const checkPassword = mock<CheckPasswordUseCase>();
	const createAccessToken = mock<CreateJwtAccessTokenUseCase>();
	const createRefreshToken = mock<CreateJwtRefreshTokenUseCase>();
	const setJwtToken = mock<SetJwtTokenUseCase>();

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				LoginUseCase,
				{ provide: UserRepository, useValue: userRepository },
				{ provide: CheckPasswordUseCase, useValue: checkPassword },
				{ provide: CreateJwtAccessTokenUseCase, useValue: createAccessToken },
				{ provide: CreateJwtRefreshTokenUseCase, useValue: createRefreshToken },
				{ provide: SetJwtTokenUseCase, useValue: setJwtToken },
			],
		}).compile();

		useCase = await module.resolve(LoginUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('throw NotFoundException when UserService.getOne throw exception', async () => {
			userRepository.getOne.mockRejectedValueOnce(() => {
				throw new NotFoundException();
			});

			const tokenModel = useCase.execute({ username: 'not', password: 'found' });

			expect(tokenModel).rejects.toThrow(NotFoundException);

			expect(userRepository.getOne).toBeCalledTimes(1);
			expect(userRepository.getOne).toBeCalledWith({ username: 'not' });

			expect(checkPassword.execute).toBeCalledTimes(0);
		});

		it('throw UnauthorizedException when BcryptService.compare return False', async () => {
			userRepository.getOne.mockResolvedValueOnce(new User());
			checkPassword.execute.mockResolvedValueOnce(false);

			const tokenModel = useCase.execute({ username: 'bad', password: 'password' });

			await expect(tokenModel).rejects.toThrow(UnauthorizedException);
			expect(tokenModel).rejects.toMatchObject({ response: { password: 'not match' } });

			expect(userRepository.getOne).toBeCalledTimes(1);
			expect(userRepository.getOne).toBeCalledWith({ username: 'bad' });

			expect(checkPassword.execute).toBeCalledTimes(1);

			expect(createAccessToken.execute).toBeCalledTimes(0);
		});

		it('should call two times to setJwtToken useCase', async () => {
			userRepository.getOne.mockResolvedValueOnce(
				new User({ uuid: 'user-uuid', password: 'hashed-password' }),
			);
			checkPassword.execute.mockResolvedValueOnce(true);
			createAccessToken.execute.mockReturnValueOnce('access-token');
			createRefreshToken.execute.mockReturnValueOnce('refresh-token');

			const result = await useCase.execute({
				username: 'drackp2m',
				password: 'plaintext-password',
			});

			expect(result).toStrictEqual(undefined);

			expect(userRepository.getOne).toBeCalledTimes(1);
			expect(userRepository.getOne).toBeCalledWith({ username: 'drackp2m' });

			expect(checkPassword.execute).toBeCalledTimes(1);
			expect(checkPassword.execute).toBeCalledWith('plaintext-password', 'hashed-password');

			expect(createAccessToken.execute).toBeCalledTimes(1);
			expect(createAccessToken.execute).toBeCalledWith('user-uuid');

			expect(createRefreshToken.execute).toBeCalledTimes(1);
			expect(createRefreshToken.execute).toBeCalledWith('user-uuid');

			expect(setJwtToken.execute).toBeCalledTimes(2);
			expect(setJwtToken.execute).toHaveBeenNthCalledWith(1, JwtCookie.access, 'access-token');
			expect(setJwtToken.execute).toHaveBeenNthCalledWith(2, JwtCookie.refresh, 'refresh-token');
		});
	});
});
