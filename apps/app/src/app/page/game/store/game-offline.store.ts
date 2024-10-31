import { Injectable, inject } from '@angular/core';
import { patchState, signalStore, withState } from '@ngrx/signals';

import { CardInterface } from '../../../definition/card.interface';
import { LocalStorageKey } from '../../../service/indexed-db/definition/indexed-db-key.enum';
import { IndexedDBService } from '../../../service/indexed-db/indexed-db.service';
import { GameService } from '../service/game.service';

type GameOfflineStoreProps = {
	boardCards: CardInterface[];
	selectedCards: CardInterface[];
	setCards: CardInterface[];
	wrongSetCards: (CardInterface | null)[];
	boardSet: CardInterface[];
};

const initialState: GameOfflineStoreProps = {
	boardCards: [],
	selectedCards: [],
	setCards: [],
	wrongSetCards: [],
	boardSet: [],
};

@Injectable({
	providedIn: 'root',
})
export class GameOfflineStore extends signalStore(
	{
		protectedState: false,
	},
	withState(initialState),
) {
	private readonly gameService = inject(GameService);
	private readonly indexedDBService = inject(IndexedDBService);

	constructor() {
		super();

		this.indexedDBService
			.getItem<GameOfflineStoreProps>(LocalStorageKey.GameOffline)
			.then((data) => {
				if (data) {
					patchState(this, data);
				} else {
					this.newGame();
				}
			});
	}

	reset(): void {
		patchState(this, initialState);

		this.indexedDBService.clearStore();
	}

	newGame(): void {
		const boardCards = this.gameService.getNewCards(this.boardCards(), 12);

		patchState(this, { ...initialState, boardCards });

		this.searchSetOnBoard();

		this.saveStateOnIndexedDB();
	}

	selectCard(card: CardInterface): void {
		let selectedCards = this.selectedCards();
		selectedCards = this.gameService.selectCard(card, selectedCards);

		if (selectedCards.length !== 3) {
			patchState(this, { selectedCards });
		} else {
			patchState(this, { selectedCards: [] });

			const isSet = this.gameService.checkSet(selectedCards);

			if (isSet) {
				const boardCards = this.boardCards();
				const setCards = this.setCards();
				const updatedBoardCards = this.gameService.getUpdatedBoardCards(
					boardCards,
					setCards,
					selectedCards,
				);

				patchState(this, {
					boardCards: updatedBoardCards,
					setCards: [...setCards, ...selectedCards],
				});

				this.searchSetOnBoard();

				this.saveStateOnIndexedDB();
			} else {
				const wrongSets = this.wrongSetCards();

				patchState(this, { wrongSetCards: [...wrongSets, ...selectedCards] });

				this.saveStateOnIndexedDB();
			}
		}
	}

	addFakeWrongSet(): void {
		const wrongSetCards = this.wrongSetCards();

		patchState(this, { wrongSetCards: [...wrongSetCards, null, null, null] });

		this.saveStateOnIndexedDB();
	}

	addCardsToBoard(): void {
		const boardCards = this.boardCards();

		const newCards = this.gameService.getNewCards(boardCards, 3);

		patchState(this, { boardCards: [...boardCards, ...newCards] });

		this.searchSetOnBoard();

		this.saveStateOnIndexedDB();
	}

	private searchSetOnBoard(): void {
		const boardCards = this.boardCards();
		const boardSet = this.gameService.searchSetOnBoard(boardCards);

		patchState(this, { boardSet });

		this.saveStateOnIndexedDB();
	}

	private saveStateOnIndexedDB(): void {
		const data = Object.fromEntries(
			Object.entries(this)
				.filter((prop) => Object.keys(initialState).includes(prop[0]))
				.map(([key, value]) => [key, value()]),
		);

		this.indexedDBService.setItem(LocalStorageKey.GameOffline, data);
	}
}
