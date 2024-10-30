import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

import { CardInterface } from '../../../definition/card.interface';
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
	withMethods((store, gameService = inject(GameService)) => ({
		reset(): void {
			patchState(store, initialState);
		},
		newGame(): void {
			const boardCards = gameService.getNewCards(store.boardCards(), 9);

			patchState(store, { ...initialState, boardCards });

			this._searchSetOnBoard();
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
				} else {
					const wrongSets = store.wrongSetCards();

					patchState(store, { wrongSetCards: [...wrongSets, ...selectedCards] });
				}
			}
		},
		addFakeWrongSet(): void {
			const wrongSetCards = store.wrongSetCards();

			patchState(store, { wrongSetCards: [...wrongSetCards, null, null, null] });
		},
		addCardsToBoard(): void {
			const boardCards = store.boardCards();

			const newCards = gameService.getNewCards(boardCards, 3);

			patchState(store, { boardCards: [...boardCards, ...newCards] });

			this._searchSetOnBoard();
		},
		_searchSetOnBoard(): void {
			const boardCards = store.boardCards();
			const boardSet = gameService.searchSetOnBoard(boardCards);

			patchState(store, { boardSet });
		},
	})),
);
