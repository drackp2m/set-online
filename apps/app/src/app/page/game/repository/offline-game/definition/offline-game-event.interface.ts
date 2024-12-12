import {
	OfflineGameEventAbsentDetails,
	OfflineGameEventAddCardsDetails,
} from './offline-game-event-detail.interface';
import { OfflineGameEventType } from './offline-game-event-type.enum';

interface OfflineGameEventBase {
	uuid: string;
	game_uuid: string;
	created_at: Date;
}

interface OfflineGameEventAddCards extends OfflineGameEventBase {
	type: OfflineGameEventType.ADD_CARDS;
	details: OfflineGameEventAddCardsDetails;
}

interface OfflineGameEventAskForHelp extends OfflineGameEventBase {
	type: OfflineGameEventType.ASK_FOR_HELP;
}

interface OfflineGameEventSurrender extends OfflineGameEventBase {
	type: OfflineGameEventType.SURRENDER;
}

interface OfflineGameEventAbsent extends OfflineGameEventBase {
	type: OfflineGameEventType.ABSENT;
	details: OfflineGameEventAbsentDetails;
}

export type OfflineGameEvent =
	| OfflineGameEventAddCards
	| OfflineGameEventAskForHelp
	| OfflineGameEventSurrender
	| OfflineGameEventAbsent;
