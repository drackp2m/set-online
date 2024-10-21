import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { confetti } from '@tsparticles/confetti';

import { CardColor, CardShading, CardShape } from '@set-online/api-definitions';

import { CardComponent } from '../../shared/components/card/card.component';
import { CardInterface } from '../../shared/definitions/card.interface';

import { YouWonComponent } from './shared/components/you-won/you-won.component';

@Component({
	standalone: true,
	templateUrl: './game.page.html',
	styleUrl: './game.page.scss',
	imports: [NgIf, NgFor, CardComponent, YouWonComponent, RouterLink],
})
export class GamePage implements OnInit {
	private readonly SwUpdate = inject(SwUpdate);

	private readonly shapes: (keyof typeof CardShape)[] = ['oval', 'squiggle', 'diamond'];
	private readonly colors: (keyof typeof CardColor)[] = ['red', 'purple', 'green'];
	private readonly shadings: (keyof typeof CardShading)[] = ['solid', 'striped', 'outlined'];
	private readonly counts: number[] = [1, 2, 3];

	private highlightInterval!: number;

	boardCards = signal<CardInterface[]>([]);
	sets = signal<CardInterface[]>([]);
	remainingCardsCount = computed(() => {
		const boardCards = this.boardCards();
		const sets = this.sets();

		return 81 - boardCards.length - sets.length;
	});
	cardsInSets = signal<CardInterface[]>([]);
	selectedCards = signal<CardInterface[]>([]);
	wrongSetsCount = signal<number>(0);
	showSets = signal<number>(0);
	message = signal<string>('');

	ngOnInit(): void {
		this.prepareNewGame();
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
					const firstCard = cards[i];
					const secondCard = cards[j];
					const thirdCard = cards[k];

					const allCardsAreDefined = firstCard && secondCard && thirdCard;

					if (allCardsAreDefined && this.isSet(firstCard, secondCard, thirdCard)) {
						this.cardsInSets.update((cards) => [...cards, firstCard, secondCard, thirdCard]);
						this.cardsInSets.set([firstCard, secondCard, thirdCard]);
					}
				}
			}
		}

		if (this.sets().length + this.boardCards().length === 81 && this.cardsInSets().length === 0) {
			this.startConfetti();
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
			this.showMessages('Nope, there are still sets on the table, look for them!');

			return;
		}

		for (let i = 0; i < 3; i++) {
			this.boardCards.update((cards) => [...cards, this.getValidCard()]);
		}

		this.checkIfSetExists();
	}

	highlightSet(): void {
		this.wrongSetsCount.update((value) => value + 3);

		if (this.showSets() !== 0) {
			return;
		}

		if (this.cardsInSets().length === 0) {
			this.showMessages('There are no sets on the board.');

			return;
		}

		this.showSets.set(6);
		this.highlightInterval = window.setInterval(() => {
			this.showSets.update((show) => show - 1);

			if (this.showSets() === 0) {
				clearInterval(this.highlightInterval);
			}
		}, 300);
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

	cheatGame(): void {
		this.newGame();
		const remainingCardsInDeck = 3;

		for (let i = 0; i < (81 - this.boardCards().length - remainingCardsInDeck) / 3; i++) {
			if (!this.cardsInSets().length) {
				this.addExtraCards();
			}
			const [firstCard, secondCard, thirdCard] = this.cardsInSets();
			const allCardsAreDefined = firstCard && secondCard && thirdCard;

			if (allCardsAreDefined) {
				this.selectCard(firstCard);
				this.selectCard(secondCard);
				this.selectCard(thirdCard);
			}
		}
	}

	async serviceWorkerCheckUpdates(): Promise<void> {
		const haveUpdates = await this.SwUpdate.checkForUpdate();

		console.log({ haveUpdates });
	}

	private prepareNewGame(): void {
		for (let i = 0; i < 12; i++) {
			this.boardCards.update((cards) => [...cards, this.getValidCard()]);
		}

		this.checkIfSetExists();
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
		const id = `${CardShading[shading]}${CardColor[color]}${CardShape[shape]}${number}`;

		return { id, shape, color, shading, number };
	}

	private getRandomShape(): keyof typeof CardShape {
		const randomShape = this.shapes[Math.floor(Math.random() * this.shapes.length)];

		if (!randomShape) {
			throw new Error('Random shape is not defined');
		}

		return randomShape;
	}

	private getRandomColor(): keyof typeof CardColor {
		const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];

		if (!randomColor) {
			throw new Error('Random color is not defined');
		}

		return randomColor;
	}

	private getRandomShading(): keyof typeof CardShading {
		const randomShading = this.shadings[Math.floor(Math.random() * this.shadings.length)];

		if (!randomShading) {
			throw new Error('Random shading is not defined');
		}

		return randomShading;
	}

	private getRandomNumber(): number {
		const randomNumber = this.counts[Math.floor(Math.random() * this.counts.length)];

		if (!randomNumber) {
			throw new Error('Random number is not defined');
		}

		return randomNumber;
	}

	private checkSet(): void {
		if (this.selectedCards().length !== 3) {
			return;
		}

		const [firstCard, secondCard, thirdCard] = this.selectedCards();
		const allCardAreDefined = firstCard && secondCard && thirdCard;

		if (allCardAreDefined && this.isSet(firstCard, secondCard, thirdCard)) {
			this.clearHighlightInterval();

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
			this.isSameOrDifferent<keyof typeof CardShape>(first.shape, second.shape, third.shape) &&
			this.isSameOrDifferent<keyof typeof CardColor>(first.color, second.color, third.color) &&
			this.isSameOrDifferent<keyof typeof CardShading>(
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
			(first !== second && second !== third && third !== first)
		);
	}

	private replaceCard(currentCard: CardInterface, newCard: CardInterface | null): void {
		this.boardCards.update(
			(cards) =>
				cards
					.map((card) => {
						if (card.id === currentCard.id) {
							return newCard;
						}

						return card;
					})
					.filter((c) => c !== null) as CardInterface[],
		);
	}

	private clearHighlightInterval(): void {
		this.showSets.set(0);

		clearInterval(this.highlightInterval);
	}

	private showMessages(text: string): void {
		this.message.set(text);

		setTimeout(() => {
			this.message.set('');
		}, text.length * 100);
	}

	private startConfetti(): void {
		confetti('confetti', {
			shapes: ['image'],
			shapeOptions: {
				image: [
					this.getConfettiShapeConfig('oval', 'red'),
					this.getConfettiShapeConfig('oval', 'purple'),
					this.getConfettiShapeConfig('oval', 'green'),
					this.getConfettiShapeConfig('squiggle', 'red'),
					this.getConfettiShapeConfig('squiggle', 'purple'),
					this.getConfettiShapeConfig('squiggle', 'green'),
					this.getConfettiShapeConfig('diamond', 'red'),
					this.getConfettiShapeConfig('diamond', 'purple'),
					this.getConfettiShapeConfig('diamond', 'green'),
				],
			},
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

	private getConfettiShapeConfig(shape: keyof typeof CardShape, color: keyof typeof CardColor) {
		let width;
		let height;

		switch (shape) {
			case 'oval':
				width = 54;
				height = 111;
				break;
			case 'diamond':
				width = 57;
				height = 116;
				break;
			case 'squiggle':
				width = 52;
				height = 105;
				break;
		}

		return {
			src: `assets/icons/${shape}-solid-${color}.png`,
			width,
			height,
			particles: {
				size: {
					value: 4,
				},
			},
		};
	}
}
