import { Component, OnInit, computed, signal } from '@angular/core';
import { confetti } from 'tsparticles-confetti';

import { CardColorEnum, CardShadingEnum, CardShapeEnum } from '@set-online/api-definitions';

import { CardInterface } from '../../shared/definitions/card.interface';

@Component({
	templateUrl: './game.page.html',
	styleUrls: ['./game.page.scss'],
})
export default class GamePage implements OnInit {
	private readonly shapes: (keyof typeof CardShapeEnum)[] = ['oval', 'squiggle', 'diamond'];
	private readonly colors: (keyof typeof CardColorEnum)[] = ['red', 'purple', 'green'];
	private readonly shadings: (keyof typeof CardShadingEnum)[] = ['solid', 'striped', 'outlined'];
	private readonly counts: number[] = [1, 2, 3];

	boardCards = signal<CardInterface[]>([]);
	sets = signal<CardInterface[]>([]);
	remainingCardsCount = computed(() => 81 - this.boardCards().length - this.sets().length);
	cardsInSets = signal<CardInterface[]>([]);
	selectedCards = signal<CardInterface[]>([]);
	wrongSetsCount = signal<number>(0);
	showSets = signal<number>(0);
	message = signal<string>('');

	ngOnInit(): void {
		this.prepareNewGame();

		this.ultraCheats();
	}

	isSelected(card: CardInterface): boolean {
		return this.selectedCards().includes(card);
	}

	selectCard(card: CardInterface): void {
		if (this.selectedCards().includes(card)) {
			this.selectedCards.update((cards) => cards.filter((c) => c !== card));
		} else {
			this.selectedCards.update((cards) => [...cards, card]);
		}

		this.checkSet();
	}

	imInSet(card: CardInterface): boolean {
		return this.cardsInSets().includes(card);
	}

	checkIfSetExists(): void {
		const cards = this.boardCards();

		this.cardsInSets.set([]);

		for (let i = 0; i < cards.length - 2; i++) {
			for (let j = i + 1; j < cards.length - 1; j++) {
				for (let k = j + 1; k < cards.length; k++) {
					if (this.isSet(cards[i], cards[j], cards[k])) {
						// this.cardsInSets.update((cards) => [...cards, cards[i], cards[j], cards[k]]);
						this.cardsInSets.set([cards[i], cards[j], cards[k]]);
					}
				}
			}
		}

		if (this.sets().length + this.boardCards().length === 81 && this.cardsInSets().length === 0) {
			this.startConfetti();
			this.showMessages('You won!');
		}
	}

	addExtraCards(): void {
		if (this.remainingCardsCount() === 0) {
			this.showMessages('There are no more cards in the deck.');

			return;
		}

		if (this.boardCards().length >= 15) {
			this.showMessages('You can only add extra cards once per game!');

			return;
		}

		if (this.cardsInSets().length > 0) {
			this.showMessages('Yes there is, keep looking.');

			return;
		}

		for (let i = 0; i < 3; i++) {
			this.boardCards.update((cards) => [...cards, this.getValidCard()]);
		}

		this.checkIfSetExists();
	}

	toggleShowSets(): void {
		if (this.showSets() !== 0) return;

		this.showSets.set(6);
		for (let i = 0; i < 6; i++) {
			setTimeout(() => {
				this.showSets.update((show) => show - 1);
			}, i * 300);
		}
	}

	newGame(): void {
		this.sets.set([]);
		this.boardCards.set([]);
		this.wrongSetsCount.set(0);
		this.selectedCards.set([]);
		this.cardsInSets.set([]);
		this.message.set('');

		this.prepareNewGame();
	}

	private prepareNewGame(): void {
		for (let i = 0; i < 12; i++) {
			this.boardCards.update((cards) => [...cards, this.getValidCard()]);
		}

		this.checkIfSetExists();
	}

	private ultraCheats(): void {
		const remainingCardsInDeck = 3;

		for (let i = 0; i < (81 - this.boardCards().length - remainingCardsInDeck) / 3; i++) {
			if (!this.cardsInSets().length) {
				this.addExtraCards();
			}
			this.selectCard(this.cardsInSets()[0]);
			this.selectCard(this.cardsInSets()[1]);
			this.selectCard(this.cardsInSets()[2]);
		}
	}

	private getValidCard(): CardInterface {
		const currentCards = [...this.boardCards(), ...this.sets()];

		let card = this.generateCard();

		while (currentCards.find((c) => c.id === card.id)) {
			card = this.generateCard();
		}

		return card;
	}

	private generateCard(): CardInterface {
		const shape = this.getRandomShape();
		const color = this.getRandomColor();
		const shading = this.getRandomShading();
		const number = this.getRandomNumber();
		const id = `${CardShadingEnum[shading]}${CardColorEnum[color]}${CardShapeEnum[shape]}${number}`;

		return { id, shape, color, shading, number };
	}

	private getRandomShape(): keyof typeof CardShapeEnum {
		return this.shapes[Math.floor(Math.random() * this.shapes.length)];
	}

	private getRandomColor(): keyof typeof CardColorEnum {
		return this.colors[Math.floor(Math.random() * this.colors.length)];
	}

	private getRandomShading(): keyof typeof CardShadingEnum {
		return this.shadings[Math.floor(Math.random() * this.shadings.length)];
	}

	private getRandomNumber(): number {
		return this.counts[Math.floor(Math.random() * this.counts.length)];
	}

	private checkSet(): void {
		if (this.selectedCards().length !== 3) {
			return;
		}

		const [first, second, third] = this.selectedCards();

		if (this.isSet(first, second, third)) {
			this.sets.update((cards) => [...cards, ...this.selectedCards()]);

			const removeCards =
				this.boardCards().length > 12 || this.sets().length + this.boardCards().length > 81;

			this.selectedCards().forEach((card) => {
				const newCard = removeCards ? null : this.getValidCard();
				this.replaceCard(card, newCard);
			});

			this.selectedCards.set([]);

			this.checkIfSetExists();

			return;
		}

		this.wrongSetsCount.update((count) => count + 1);

		this.selectedCards.set([]);
	}

	private isSet(first: CardInterface, second: CardInterface, third: CardInterface): boolean {
		return (
			this.isSameOrDifferent<keyof typeof CardShapeEnum>(first.shape, second.shape, third.shape) &&
			this.isSameOrDifferent<keyof typeof CardColorEnum>(first.color, second.color, third.color) &&
			this.isSameOrDifferent<keyof typeof CardShadingEnum>(
				first.shading,
				second.shading,
				third.shading,
			) &&
			this.isSameOrDifferent<number>(first.number, second.number, third.number)
		);
	}

	private isSameOrDifferent<T>(first: T, second: T, third: T): boolean {
		return (
			(first === second && second === third) ||
			(first !== second && second !== third && first !== third)
		);
	}

	private replaceCard(card: CardInterface, replace: CardInterface | null): void {
		this.boardCards.update(
			(cards) =>
				cards
					.map((c) => {
						if (c.id === card.id) {
							return replace;
						}

						return c;
					})
					.filter((c) => c !== null) as CardInterface[],
		);
	}

	private showMessages(text: string): void {
		this.message.set(text);
		setTimeout(() => {
			this.message.set('');
		}, text.length * 100);
	}

	private startConfetti(): void {
		confetti({
			count: 500, // number of confetti particles; default: 50
			angle: 90, // angle of the burst; default: 90
			spread: 180, // spread of confetti particles in degrees; default 45, try 360 for fun
			ticks: 10, // time until confetti disappears; default: 200
			drift: 5, // random drift of confetti particles; default: 0
			gravity: 0.8,
			origin: {
				x: 0.5,
				y: 0,
			},
		});
	}
}
