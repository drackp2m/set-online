import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom, take } from 'rxjs';

import { GetUserInfoGQL, GetUserInfoQuery } from '../graphql/apollo-operations';

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

type CurrentUserState = {
	data: UserInfo | null;
	isLoading: boolean;
	error: UserInfoError | null;
};

const initialState: CurrentUserState = {
	data: null,
	isLoading: false,
	error: null,
};

export const CurrentUserStore = signalStore(
	{ providedIn: 'root' },
	withState(initialState),
	withMethods((store, getUserInfoGQL = inject(GetUserInfoGQL)) => ({
		reset(): void {
			patchState(store, initialState);
		},
		async fetchData(): Promise<void> {
			patchState(store, { isLoading: true });

			try {
				const { data } = await firstValueFrom(getUserInfoGQL.fetch().pipe(take(1)));
				patchState(store, { data: data.getUserInfo, isLoading: false });
			} catch (error) {
				patchState(store, { error: error as UserInfoError, isLoading: false });
			}
		},
	})),
);
