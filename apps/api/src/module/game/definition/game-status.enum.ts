import { registerEnumType } from '@nestjs/graphql';

export enum GameStatus {
	WaitingOpponents = 'waiting_opponents',
	InProgress = 'in_progress',
	Completed = 'completed',
	Expired = 'expired',
}

registerEnumType(GameStatus, {
	name: 'GameStatus',
});
