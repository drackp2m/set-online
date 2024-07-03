import { registerEnumType } from '@nestjs/graphql';

export enum GameStatus {
	waitingOpponents = 'waiting_opponents',
	inProgress = 'in_progress',
	completed = 'completed',
	expired = 'expired',
}

registerEnumType(GameStatus, {
	name: 'GameStatus',
});
