export class ShuffleArrayUseCase {
	execute<T>(array: T[]): T[] {
		const shuffledArray = structuredClone(array);

		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));

			const valueAtPositionI = shuffledArray[i];
			const valueAtPositionJ = shuffledArray[j];

			if (valueAtPositionI !== undefined && valueAtPositionJ !== undefined) {
				[shuffledArray[i], shuffledArray[j]] = [valueAtPositionJ, valueAtPositionI];
			}
		}

		return shuffledArray;
	}
}
