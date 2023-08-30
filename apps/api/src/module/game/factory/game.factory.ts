import { Constructor, EntityData } from '@mikro-orm/core';
import { Factory } from '@mikro-orm/seeder';

import { Game } from '../game.entity';

import { GameFaker } from './game.faker';

export class GameFactory extends Factory<Game> {
	model: Constructor<Game>;

	protected definition(): EntityData<Game> {
		return GameFaker.makeOne();
	}
}
