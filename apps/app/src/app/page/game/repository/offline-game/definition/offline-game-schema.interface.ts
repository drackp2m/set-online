import { DBSchema } from 'idb';

import { OfflineGame } from './offline-game.interface';

export interface OfflineGameSchema extends DBSchema {
	game: {
		key: string;
		value: OfflineGame;
	};
}
