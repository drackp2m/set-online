import { inject } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
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

// export type UserStore = InstanceType<typeof UserStore>;

export const UserStore = signalStore(
	{ providedIn: 'root' },
	withState(initialState),
	withMethods((store, getUserInfoGQL = inject(GetUserInfoGQL)) => ({
		reset(): void {
			patchState(store, initialState);
		},
		async fetchData(): Promise<void> {
			patchState(store, { isLoading: true });

			try {
				const { data } = await firstValueFrom(getUserInfoGQL.fetch());

				patchState(store, { data: data.getUserInfo, isLoading: false, error: undefined });
			} catch (error) {
				patchState(store, { error: error as UserInfoError, isLoading: false });
			}
		},
	})),
	withHooks({
		onInit(store): void {
			store.fetchData();
		},
	}),
);
