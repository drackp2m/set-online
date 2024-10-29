import { Injectable } from '@angular/core';

import { CardColor, CardShading, CardShape } from '@set-online/api-definitions';

import { CardInterface } from '../../../definition/card.interface';

@Injectable({
	providedIn: 'root',
})
export class GameService {
	getNewCards(currentCards: CardInterface[], quantity: number): CardInterface[] {
		const cards: CardInterface[] = [];

		for (let i = 0; i < quantity; i++) {
			cards.push(this.getValidCard([...currentCards, ...cards]));
		}

		return cards;
	}

	selectCard(card: CardInterface, selectedCards: CardInterface[]): CardInterface[] {
		if (selectedCards.includes(card)) {
			return selectedCards.filter((c) => c !== card);
		} else {
			return [...selectedCards, card];
		}
	}

	checkSet(selectedCards: CardInterface[]): boolean {
		const [firstCard, secondCard, thirdCard] = selectedCards;
		const allCardsAreDefined =
			firstCard !== undefined && secondCard !== undefined && thirdCard !== undefined;

		return allCardsAreDefined && this.isSet(firstCard, secondCard, thirdCard);
	}

	// FixMe => replace with fillBoardGaps (nulls)
	getUpdatedBoardCards(
		boardCards: CardInterface[],
		setCards: CardInterface[],
		selectedCards: CardInterface[],
	): CardInterface[] {
		setCards = [...setCards, ...selectedCards];

		const removeCards = boardCards.length > 12 || setCards.length + boardCards.length > 81;

		let updatedBoardCards = boardCards;

		selectedCards.forEach((card) => {
			const newCard = removeCards ? null : this.getValidCard([...updatedBoardCards, ...setCards]);
			updatedBoardCards = this.replaceCard(updatedBoardCards, card, newCard);
		});

		return updatedBoardCards;
	}

	searchSetOnBoard(boardCards: CardInterface[]): CardInterface[] {
		for (let i = 0; i < boardCards.length - 2; i++) {
			for (let j = i + 1; j < boardCards.length - 1; j++) {
				for (let k = j + 1; k < boardCards.length; k++) {
					const firstCard = boardCards[i];
					const secondCard = boardCards[j];
					const thirdCard = boardCards[k];

					const allCardsAreDefined =
						firstCard !== undefined && secondCard !== undefined && thirdCard !== undefined;

					if (allCardsAreDefined && this.isSet(firstCard, secondCard, thirdCard)) {
						return [firstCard, secondCard, thirdCard];
					}
				}
			}
		}

		return [];
	}

	private replaceCard(
		boardCards: CardInterface[],
		currentCard: CardInterface,
		newCard: CardInterface | null,
	): CardInterface[] {
		return boardCards
			.map((card) => (card.id === currentCard.id ? newCard : card))
			.filter((c) => c !== null) as CardInterface[];
	}

	private isSet(first: CardInterface, second: CardInterface, third: CardInterface): boolean {
		return (
			this.isSameOrDifferent<CardShape>(first.shape, second.shape, third.shape) &&
			this.isSameOrDifferent<CardColor>(first.color, second.color, third.color) &&
			this.isSameOrDifferent<CardShading>(first.shading, second.shading, third.shading) &&
			this.isSameOrDifferent<number>(first.number, second.number, third.number)
		);
	}

	private isSameOrDifferent<T>(first: T, second: T, third: T): boolean {
		return (
			(first === second && second === third) ||
			(first !== second && second !== third && third !== first)
		);
	}

	private getValidCard(cardsToAvoid: CardInterface[]): CardInterface {
		let card = this.generateCard();

		while (cardsToAvoid.find((c) => c.id === card.id)) {
			card = this.generateCard();
		}

		return card;
	}

	private generateCard(): CardInterface {
		const shape = this.randomEnum(CardShape);
		const color = this.randomEnum(CardColor);
		const shading = this.randomEnum(CardShading);
		const number = this.getRandomNumber();
		const id = `${CardShape[shape]}${CardColor[color]}${CardShading[shading]}${number}`;

		return { id, shape, color, shading, number };
	}

	// FixMe => move this to lib
	private getRandomNumber(): number {
		const randomNumber = Math.floor(Math.random() * 3) + 1;

		if (!randomNumber) {
			throw new Error('Random number is not defined');
		}

		return randomNumber;
	}

	// FixMe => move this to lib
	private randomEnum<T extends object>(enumInstance: T): T[keyof T] {
		const enumKeys = this.getEnumKeys(enumInstance);

		const firstEnumKey = enumKeys[0];

		if (firstEnumKey === undefined) {
			throw new Error('Enum is empty');
		}

		const randomIndex = Math.floor(Math.random() * enumKeys.length);
		const randomEnumKey = enumKeys[randomIndex];

		const enumKey = randomEnumKey ?? firstEnumKey;

		return enumInstance[enumKey];
	}

	// FixMe => move this to lib
	private getEnumKeys<T extends object>(enumInstance: T): Array<keyof T> {
		const enumKeys = Object.keys(enumInstance) as Array<keyof T>;

		if (enumKeys.length % 2 !== 0) {
			return enumKeys;
		}

		let isBasicEnum = true;
		const enumValues = Object.values(enumInstance) as string[];

		for (let index = 0; index < enumKeys.length / 2; index++) {
			if (enumKeys[enumKeys.length / 2 + index] !== enumValues[index]) {
				isBasicEnum = false;
			}
		}

		return isBasicEnum ? enumKeys.slice(enumKeys.length / 2) : enumKeys;
	}
}
