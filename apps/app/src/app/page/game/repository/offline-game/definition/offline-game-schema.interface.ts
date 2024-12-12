import { DBSchema } from 'idb';

import { OfflineGameEvent } from './offline-game-event.interface';
import { OfflineGameSet } from './offline-game-set.interface';
import { OfflineGameStatus } from './offline-game-status.enum';
import { OfflineGame } from './offline-game.interface';

export interface OfflineGameSchema extends DBSchema {
	offline_game: {
		key: string;
		value: OfflineGame;
		indexes: { status: OfflineGameStatus };
	};
	offline_game_set: {
		key: string;
		value: OfflineGameSet;
		indexes: { game_uuid: string };
	};
	offline_game_event: {
		key: string;
		value: OfflineGameEvent;
		indexes: { game_uuid: string };
	};
}
