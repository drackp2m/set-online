import { Component, OnInit, WritableSignal, signal } from '@angular/core';

import {
	JoinGameGQL,
	ListGamesGQL,
	ListGamesQuery,
	NewGameGQL,
} from '../../graphql/apollo-operations';

@Component({
	templateUrl: './online.page.html',
	styleUrls: ['./online.page.scss'],
})
export default class OnlinePage implements OnInit {
	games: WritableSignal<ListGamesQuery['listGames'] | undefined> = signal(undefined);
	error: WritableSignal<string | undefined> = signal(undefined);

	constructor(
		private readonly newGameGQL: NewGameGQL,
		private readonly listGamesGQL: ListGamesGQL,
		private readonly joinGameGQL: JoinGameGQL,
	) {}

	ngOnInit(): void {
		this.listGamesGQL.fetch().subscribe({
			next: (data) => {
				this.games.set(data.data.listGames);
			},
		});

		const data = {
			data: {
				joinGame: {
					participants: [],
				},
			},
		};

		this.games.update((games) => {
			const game = games?.find((game) => game.uuid);

			if (game && data.data?.joinGame.participants) {
				game.participants = data.data?.joinGame.participants;
			}

      return games;
		});
	}

	joinGame(gameToJoin: ListGamesQuery['listGames'][0]): void {
		this.joinGameGQL.mutate({ input: { gameUuid: gameToJoin.uuid } }).subscribe({
			next: (data) => {
				this.games.update((games) => {
					const game = games?.find((game) => game.uuid === gameToJoin.uuid);

					if (game && data.data?.joinGame.participants) {
						game.participants = data.data?.joinGame.participants;
					}

          return games;
				});
			},
			error: (error) => {
				const details = error.graphQLErrors[0].extensions.details;

				this.error.set(JSON.stringify(details));
			},
		});
	}

	newGame(): void {
		this.newGameGQL.mutate().subscribe({
			next: (data) => {
				const game = data.data?.newGame;

				if (game) {
					this.games.update((games) => {
						games?.push(game);

						return games;
					});
				}
			},
			error: (error) => {
				const details = error.graphQLErrors[0].extensions.details;

				this.error.set(JSON.stringify(details));
			},
		});
	}

	listParticipants(game: ListGamesQuery['listGames'][0]): string {
		return game.participants.map((participant) => participant.username).join(', ');
	}
}
