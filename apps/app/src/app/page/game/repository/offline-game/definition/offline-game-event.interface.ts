import { OfflineGameEventType } from './offline-game-event-type.enum';

export interface OfflineGameEvent {
	uuid: string;
	game_uuid: string;
	type: OfflineGameEventType;
	details: unknown;
	created_at: Date;
}
