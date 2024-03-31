import { Constructor, EntityData } from '@mikro-orm/core';
import { Factory } from '@mikro-orm/seeder';

import { Game } from '../game.entity';

import { GameFaker } from './game.faker';

// ToDo => make this abstract?
export abstract class GameFactory extends Factory<Game> {
	abstract readonly model: Constructor<Game>;

	protected definition(): EntityData<Game> {
		return GameFaker.makeOne();
	}
}
