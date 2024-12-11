export enum AddCardsToBoardError {
	DECK_EMPTY = 'deck-empty',
	ALREADY_ADDED = 'already-added',
	HAS_SET = 'has-set',
}

export const addCardsToBoardErrorMessage = new Map<AddCardsToBoardError, string>([
	[AddCardsToBoardError.DECK_EMPTY, 'There are no more cards in the deck.'],
	[AddCardsToBoardError.ALREADY_ADDED, 'You can only add extra cards once per game!'],
	[AddCardsToBoardError.HAS_SET, 'Nope, there are still sets on the table, look for them!'],
]);

export class AddCardsToBoardException extends Error {
	readonly typedError: AddCardsToBoardError;

	constructor(message: AddCardsToBoardError) {
		super(message);
		this.typedError = message;
		this.name = 'AddCardsToBoardError';
	}
}
