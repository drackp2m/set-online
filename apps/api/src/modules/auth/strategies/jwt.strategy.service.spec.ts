import { Test, TestingModule } from '@nestjs/testing';

import { ConfigurationService } from '../../../common/config/configuration.service';
import { JwtConfig } from '../../../common/config/types/jwt-config.type';
import { NotFoundException } from '../../../common/exceptions/not-found.exception';
import { UserFaker } from '../../user/factories';
import { UserEntity } from '../../user/user.entity';
import { UserService } from '../../user/user.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

import { JwtStrategyService } from './jwt.strategy.service';

describe('JwtStrategyService', () => {
	const userFaker = new UserFaker();

	let service: JwtStrategyService;
	let configurationService: jest.Mocked<Partial<ConfigurationService>>;
	// let configService: jest.Mocked<Partial<ConfigService>>;
	let userService: jest.Mocked<Partial<UserService>>;

	const mockUuid = '00000000-0000-4000-0000-000000000000';
	const mockJwt: JwtPayload = {
		iat: 648600120,
		nbf: 648600120,
		exp: 1974062562,
		aud: 'Jest',
		iss: 'You',
		sub: '42',
		jti: mockUuid,
	};
	const mockUser = userFaker.makeOne({ uuid: mockUuid }, { createdFrom: '2010' }) as UserEntity;

	beforeAll(async () => {
		configurationService = {
			jwt: { secret: '1234' } as JwtConfig,
		};

		userService = {
			getOneBy: jest.fn(),
		};

		const module: TestingModule = await Test.createTestingModule({
			providers: [
				JwtStrategyService,
				{ provide: ConfigurationService, useValue: configurationService },
				// { provide: ConfigService, useValue: configService },
				{ provide: UserService, useValue: userService },
			],
		}).compile();

		service = module.get<JwtStrategyService>(JwtStrategyService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('validate', () => {
		it('should throw NotFoundException when EntityManager.getOneBy throw NotFoundException', async () => {
			userService.getOneBy.mockRejectedValueOnce(() => {
				throw new NotFoundException();
			});

			const user = service.validate(mockJwt);

			expect(user).rejects.toThrow(NotFoundException);
		});

		it('should return UserEntity when EntityManager.getOneBy return UserEntity', async () => {
			userService.getOneBy.mockResolvedValueOnce(mockUser);

			const user = await service.validate(mockJwt);

			expect(user).toStrictEqual(mockUser);
		});
	});
});
