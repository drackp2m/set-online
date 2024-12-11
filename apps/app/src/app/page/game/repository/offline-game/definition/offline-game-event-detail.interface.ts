import { Card } from '../../../../../definition/card.interface';
import { AddCardsToBoardError } from '../../../error/add-cards-to-board.error';

export interface OfflineGameEventAddCardsDetails {
	cards: Card[];
	error: AddCardsToBoardError | null;
}

export interface OfflineGameEventAbsentDetails {
	absentStart: Date;
}
