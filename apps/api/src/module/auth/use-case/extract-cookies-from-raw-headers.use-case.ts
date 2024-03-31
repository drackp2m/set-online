import { Injectable } from '@nestjs/common';

@Injectable()
export class ExtractCookiesFromRawHeadersUseCase {
	execute(rawHeaders: string): object {
		const headers: Map<string, string> = new Map();

		for (let i = 0; i < rawHeaders.length; i += 2) {
			const key = rawHeaders[i];
			const value = rawHeaders[i + 1];

			headers.set(key, value);
		}

		return (
			headers
				.get('Cookie')
				?.toString()
				.split(';')
				.reduce((obj, item) => {
					const [key, value] = item.trim().split('=');
					Object.assign(obj, { [key]: value });

					return obj;
				}, {}) ?? {}
		);
	}
}
