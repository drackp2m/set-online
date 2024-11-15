/* eslint-disable max-lines */
import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { confetti } from '@tsparticles/confetti';

import { CardColor, CardShape } from '@playsetonline/api-definitions';

import { CardComponent } from '../../component/card/card.component';
import { CardInterface } from '../../definition/card.interface';

import { YouWonComponent } from './component/you-won/you-won.component';
import { GameOfflineStore } from './store/game-offline.store';

@Component({
	standalone: true,
	templateUrl: './game.page.html',
	styleUrl: './game.page.scss',
	imports: [CardComponent, YouWonComponent, RouterLink],
})
export class GamePage {
	private readonly gameOfflineStore = inject(GameOfflineStore);
	private readonly activatedRoute = inject(ActivatedRoute);

	private highlightInterval?: number;

	readonly boardCards = this.gameOfflineStore.boardCards;
	readonly setCards = this.gameOfflineStore.setCards;
	readonly remainingCardsCount = computed(() => {
		const boardCards = this.boardCards();
		const sets = this.setCards();

		return 81 - boardCards.length - sets.length;
	});
	readonly selectedCards = this.gameOfflineStore.selectedCards;
	readonly wrongSetCards = this.gameOfflineStore.wrongSetCards;

	readonly boardSet = this.gameOfflineStore.boardSet;
	readonly showSets = signal<number>(0);
	readonly message = signal<string>('');

	private readonly activatedRouteData = toSignal(this.activatedRoute.data);
	readonly avoidStatusBar = computed(() => this.activatedRouteData()?.['avoidStatusBar']);

	constructor() {
		effect(
			() => {
				this.gameOfflineStore.boardCards();

				const remainingCardsCount = this.remainingCardsCount();
				const boardSet = this.boardSet();

				clearInterval(this.highlightInterval);
				this.showSets.set(0);

				if (remainingCardsCount === 0 && boardSet.length === 0) {
					this.startConfetti();
				}
			},
			{ allowSignalWrites: true },
		);
	}

	newGame(): void {
		this.gameOfflineStore.newGame();
	}

	cheatGame(): void {
		this.newGame();
		const remainingCardsInDeck = 3;

		for (let i = 0; i < (81 - this.boardCards().length - remainingCardsInDeck) / 3; i++) {
			const boardSet = this.boardSet();

			if (boardSet.length === 0) {
				this.addCardsToBoard();
			}

			const [firstCard, secondCard, thirdCard] = boardSet;
			const allCardsAreDefined =
				firstCard !== undefined && secondCard !== undefined && thirdCard !== undefined;

			if (allCardsAreDefined) {
				this.selectCard(firstCard);
				this.selectCard(secondCard);
				this.selectCard(thirdCard);
			}
		}
	}

	selectCard(card: CardInterface): void {
		this.gameOfflineStore.selectCard(card);
	}

	highlightSet(): void {
		const boardSet = this.boardSet();
		const showSets = this.showSets();

		this.gameOfflineStore.addFakeWrongSet();

		if (showSets !== 0) {
			return;
		}

		if (boardSet.length === 0) {
			this.showMessages('There are no sets on the board.');

			return;
		}

		this.showSets.set(6);

		this.highlightInterval = window.setInterval(() => {
			const showSets = this.showSets() - 1;

			this.showSets.set(showSets);

			if (showSets === 0) {
				clearInterval(this.highlightInterval);
			}
		}, 300);
	}

	addCardsToBoard(): void {
		const boardSet = this.boardSet();
		const boardCards = this.boardCards();
		const remainingCardsCount = this.remainingCardsCount();

		if (remainingCardsCount === 0) {
			this.showMessages('There are no more cards in the deck.');
		} else if (boardCards.length >= 15) {
			this.showMessages('You can only add extra cards once per game!');
		} else if (boardSet.length !== 0) {
			this.showMessages('Nope, there are still sets on the table, look for them!');
		} else {
			this.gameOfflineStore.addCardsToBoard();
		}
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
