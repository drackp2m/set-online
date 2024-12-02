import { CardInterface } from '../../../../../definition/card.interface';

import { OfflineGameStatus } from './offline-game-status.enum';

export interface OfflineGame {
	uuid: string;
	status: OfflineGameStatus;
	board_cards: CardInterface[];
	cloud_backup: boolean;
	created_at: Date;
	updated_at: Date;
}
