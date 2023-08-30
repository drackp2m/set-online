import { faker } from '@faker-js/faker';
import { EntityData } from '@mikro-orm/core';

import { BasicFaker } from '../../../shared/faker/basic.faker';
import { DateFaker } from '../../../shared/faker/date.faker';
import { GameStatus } from '../definition/game-status.enum';
import { Game } from '../game.entity';

export interface GameFakerOptions {
	createdSince?: string;
	expiresUntil?: string;
}

export class GameFaker {
	static makeOne = new GameFaker().makeEntity;

	static make(
		quantity: number,
		overrideParameters?: EntityData<Game>,
		options?: GameFakerOptions,
	): Game[] {
		return [...Array(quantity)].map(() => new GameFaker().makeEntity(overrideParameters, options));
	}

	private makeEntity(overrideParameters?: EntityData<Game>, options?: GameFakerOptions): Game {
		const dateFaker = new DateFaker();

		return new Game({
			uuid: faker.datatype.uuid(),
			deckCards: [],
			tableCards: [],
			participants: [],
			status: BasicFaker.randomEnum(GameStatus),
			expiresOn: dateFaker.expiresOn(options?.expiresUntil),
			createdAt: dateFaker.createdAt(options?.createdSince),
			updatedAt: dateFaker.modifiedAt(),

			...overrideParameters,
		});
	}
}
