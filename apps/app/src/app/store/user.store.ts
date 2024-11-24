import { Injectable, inject } from '@angular/core';
import { patchState, signalStore, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';

import { GetUserInfoGQL, GetUserInfoQuery } from '@playsetonline/apollo-definitions';

type UserInfo = GetUserInfoQuery['getUserInfo'];

type UserInfoError = {
	name: string;
	graphQLErrors: {
		message: string;
		locations: {
			line: number;
			column: number;
		}[];
		path: string[];
		extensions: {
			name: string;
			code: number;
			details: {
				authorization: string;
			};
			stacktrace: string[];
		};
	}[];
	protocolErrors: unknown[];
	clientErrors: unknown[];
	networkError: null;
	message: string;
};

type UserState = {
	data: UserInfo | undefined;
	isLoading: boolean;
	error: UserInfoError | undefined;
};

const initialState: UserState = {
	data: undefined,
	isLoading: false,
	error: undefined,
};

@Injectable({
	providedIn: 'root',
})
export class UserStore extends signalStore(
	{
		protectedState: false,
	},
	withState(initialState),
) {
	private readonly getUserInfoGQL = inject(GetUserInfoGQL);

	reset(): void {
		patchState(this, initialState);
	}

	async fetchData(): Promise<void> {
		patchState(this, { isLoading: true });

		try {
			const { data } = await firstValueFrom(this.getUserInfoGQL.fetch());

			patchState(this, { data: data.getUserInfo, isLoading: false, error: undefined });
		} catch (error) {
			patchState(this, { error: error as UserInfoError, isLoading: false });
		}
	}
}
