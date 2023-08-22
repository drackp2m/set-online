import { Injectable } from '@nestjs/common';

import { CustomEntityRepository } from '../../shared/util/custom-entity.repository';

import { GameEntity } from './game.entity';

@Injectable()
export class GameRepository extends CustomEntityRepository<GameEntity> {}
