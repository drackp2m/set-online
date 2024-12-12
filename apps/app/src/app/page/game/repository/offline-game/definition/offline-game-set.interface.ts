import { Card } from '../../../../../definition/card.interface';

export interface OfflineGameSet {
	uuid: string;
	game_uuid: string;
	cards: Card[];
	valid: boolean;
	created_at: Date;
}
