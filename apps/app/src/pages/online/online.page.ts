import { Component, OnInit, WritableSignal, signal } from '@angular/core';

import { ListGamesGQL, ListGamesQuery, NewGameGQL } from '../../graphql/apollo-operations';

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
	) {}

	ngOnInit(): void {
		this.listGamesGQL.fetch().subscribe({
			next: (data) => {
				this.games.set(data.data.listGames);
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
				this.error.set(error.message);
			},
		});
	}
}
