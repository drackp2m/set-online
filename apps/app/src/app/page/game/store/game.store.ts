import { inject } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';

import { CardInterface } from '../../../definition/card.interface';
import { LocalStorageKey } from '../../../service/indexed-db/definition/indexed-db-key.enum';
import { IndexedDBService } from '../../../service/indexed-db/indexed-db.service';
import { GameService } from '../service/game.service';

type GameStoreProps = {
	boardCards: CardInterface[];
	selectedCards: CardInterface[];
	setCards: CardInterface[];
	wrongSetCards: (CardInterface | null)[];
	boardSet: CardInterface[];
};

const initialState: GameStoreProps = {
	boardCards: [],
	selectedCards: [],
	setCards: [],
	wrongSetCards: [],
	boardSet: [],
};

export const GameStore = signalStore(
	{ providedIn: 'root' },
	withState(initialState),
	withMethods(
		// eslint-disable-next-line max-lines-per-function
		(store, gameService = inject(GameService), indexedDBService = inject(IndexedDBService)) => ({
			reset(): void {
				patchState(store, initialState);

				indexedDBService.clearStore();
			},
			newGame(): void {
				const boardCards = gameService.getNewCards(store.boardCards(), 12);

				patchState(store, { ...initialState, boardCards });

				this._searchSetOnBoard();

				this._saveStateOnIndexedDB();
			},
			selectCard(card: CardInterface): void {
				let selectedCards = store.selectedCards();
				selectedCards = gameService.selectCard(card, selectedCards);

				if (selectedCards.length !== 3) {
					patchState(store, { selectedCards });
				} else {
					patchState(store, { selectedCards: [] });

					const isSet = gameService.checkSet(selectedCards);

					if (isSet) {
						const boardCards = store.boardCards();
						const setCards = store.setCards();
						const updatedBoardCards = gameService.getUpdatedBoardCards(
							boardCards,
							setCards,
							selectedCards,
						);

						patchState(store, {
							boardCards: updatedBoardCards,
							setCards: [...setCards, ...selectedCards],
						});

						this._searchSetOnBoard();

						this._saveStateOnIndexedDB();
					} else {
						const wrongSets = store.wrongSetCards();

						patchState(store, { wrongSetCards: [...wrongSets, ...selectedCards] });

						this._saveStateOnIndexedDB();
					}
				}
			},
			addFakeWrongSet(): void {
				const wrongSetCards = store.wrongSetCards();

				patchState(store, { wrongSetCards: [...wrongSetCards, null, null, null] });

				this._saveStateOnIndexedDB();
			},
			addCardsToBoard(): void {
				const boardCards = store.boardCards();

				const newCards = gameService.getNewCards(boardCards, 3);

				patchState(store, { boardCards: [...boardCards, ...newCards] });

				this._searchSetOnBoard();

				this._saveStateOnIndexedDB();
			},
			_searchSetOnBoard(): void {
				const boardCards = store.boardCards();
				const boardSet = gameService.searchSetOnBoard(boardCards);

				patchState(store, { boardSet });

				this._saveStateOnIndexedDB();
			},
			_saveStateOnIndexedDB(): void {
				const data = Object.fromEntries(
					Object.entries(store).map(([key, value]) => [key, value()]),
				);

				indexedDBService.setItem(LocalStorageKey.GameOffline, data);
			},
		}),
	),
	withHooks({
		onInit: (store, indexedDBService = inject(IndexedDBService)) => {
			indexedDBService.getItem<GameStoreProps>(LocalStorageKey.GameOffline).then((data) => {
				if (data) {
					patchState(store, data);
				} else {
					store.newGame();
				}
			});
		},
	}),
);
