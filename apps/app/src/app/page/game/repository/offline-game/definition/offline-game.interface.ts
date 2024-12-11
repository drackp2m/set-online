import { Card } from '../../../../../definition/card.interface';

import { OfflineGameStatus } from './offline-game-status.enum';

export interface OfflineGame {
	uuid: string;
	status: OfflineGameStatus;
	board_cards: Card[];
	cloud_backup: boolean;
	created_at: Date;
	updated_at: Date;
}
