export class ShuffleArrayUseCase {
	execute<T>(array: T[]): T[] {
		const shuffledArray = structuredClone(array);

		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
		}

		return shuffledArray;
	}
}
