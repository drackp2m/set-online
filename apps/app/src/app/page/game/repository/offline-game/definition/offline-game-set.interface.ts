import { CardInterface } from '../../../../../definition/card.interface';

export interface OfflineGameSet {
	uuid: string;
	game_uuid: string;
	cards: CardInterface[];
	valid: boolean;
	created_at: Date;
}
