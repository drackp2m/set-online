import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { NotFoundException } from '../../../shared/exception/not-found.exception';
import { UnauthorizedException } from '../../../shared/exception/unauthorized-exception.exception';
import { CheckPasswordUseCase } from '../../../shared/use-case/check-password.use-case';
import { UserEntity } from '../../user/user.entity';
import { UserRepository } from '../../user/user.repository';
import { JwtCookie } from '../definition/jwt-cookie.enum';

import { CreateJwtAccessTokenUseCase } from './create-jwt-access-token.use-case';
import { CreateJwtRefreshTokenUseCase } from './create-jwt-refresh-token.use-case';
import { LoginUseCase } from './login.use-case';
import { SetJwtTokenUseCase } from './set-jwt-token.use-case';

describe('LoginUseCase', () => {
	let useCase: LoginUseCase;
	const userEntityRepository = mock<UserRepository>();
	const checkPassword = mock<CheckPasswordUseCase>();
	const createAccessToken = mock<CreateJwtAccessTokenUseCase>();
	const createRefreshToken = mock<CreateJwtRefreshTokenUseCase>();
	const setToken = mock<SetJwtTokenUseCase>();

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				LoginUseCase,
				{ provide: UserRepository, useValue: userEntityRepository },
				{ provide: CheckPasswordUseCase, useValue: checkPassword },
				{ provide: CreateJwtAccessTokenUseCase, useValue: createAccessToken },
				{ provide: CreateJwtRefreshTokenUseCase, useValue: createRefreshToken },
				{ provide: SetJwtTokenUseCase, useValue: setToken },
			],
		}).compile();

		useCase = await module.resolve<LoginUseCase>(LoginUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('should throw NotFoundException when UserService.getOne throw exception', async () => {
			userEntityRepository.getOne.mockRejectedValueOnce(() => {
				throw new NotFoundException();
			});

			const tokenModel = useCase.execute({ username: 'not', password: 'found' });

			await expect(tokenModel).rejects.toThrow(NotFoundException);

			expect(userEntityRepository.getOne).toBeCalledTimes(1);
			expect(userEntityRepository.getOne).toBeCalledWith({ username: 'not' });

			expect(checkPassword.execute).toBeCalledTimes(0);
		});

		it('should throw UnauthorizedException when BcryptService.compare return False', async () => {
			userEntityRepository.getOne.mockResolvedValueOnce(new UserEntity());
			checkPassword.execute.mockResolvedValueOnce(false);

			const tokenModel = useCase.execute({ username: 'bad', password: 'password' });

			await expect(tokenModel).rejects.toThrow(UnauthorizedException);

			expect(userEntityRepository.getOne).toBeCalledTimes(1);
			expect(userEntityRepository.getOne).toBeCalledWith({ username: 'bad' });

			expect(checkPassword.execute).toBeCalledTimes(1);

			expect(createAccessToken.execute).toBeCalledTimes(0);
		});

		it('should return TokenModel when JwtService.sign return a token', async () => {
			userEntityRepository.getOne.mockResolvedValueOnce(
				new UserEntity({ uuid: 'a1b2', password: 's4T0' }),
			);
			checkPassword.execute.mockResolvedValueOnce(true);
			createAccessToken.execute.mockReturnValueOnce('access-token');
			createRefreshToken.execute.mockReturnValueOnce('refresh-token');

			const result = await useCase.execute({
				username: 'user',
				password: 'pass',
			});

			expect(result).toStrictEqual(undefined);

			expect(userEntityRepository.getOne).toBeCalledTimes(1);
			expect(userEntityRepository.getOne).toBeCalledWith({ username: 'user' });

			expect(checkPassword.execute).toBeCalledTimes(1);
			expect(checkPassword.execute).toBeCalledWith('pass', 's4T0');

			expect(createAccessToken.execute).toBeCalledTimes(1);
			expect(createAccessToken.execute).toBeCalledWith('a1b2');

			expect(createRefreshToken.execute).toBeCalledTimes(1);
			expect(createRefreshToken.execute).toBeCalledWith('a1b2');

			expect(setToken.execute).toBeCalledTimes(2);
			expect(setToken.execute).toHaveBeenNthCalledWith(1, 'access-token', JwtCookie.access);
			expect(setToken.execute).toHaveBeenNthCalledWith(2, 'refresh-token', JwtCookie.refresh);
		});
	});
});
