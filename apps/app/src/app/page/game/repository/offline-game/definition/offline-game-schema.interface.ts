import { DBSchema } from 'idb';

import { OfflineGameEventType } from './offline-game-event-type.enum';
import { OfflineGameSet } from './offline-game-set.interface';
import { OfflineGame } from './offline-game.interface';

export interface OfflineGameSchema extends DBSchema {
	offline_game: {
		key: string;
		value: OfflineGame;
	};
	offline_game_set: {
		key: string;
		value: OfflineGameSet;
	};
	offline_game_event: {
		key: string;
		value: OfflineGameEventType;
	};
}
