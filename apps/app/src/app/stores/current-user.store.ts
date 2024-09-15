import { Injectable, inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';

import { GetUserInfoGQL, GetUserInfoQuery } from '@set-online/apollo-definitions';

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
	data: UserInfo | undefined;
	isLoading: boolean;
	error: UserInfoError | undefined;
};

const initialState: CurrentUserState = {
	data: undefined,
	isLoading: false,
	error: undefined,
};

export type CurrentUserStorex = InstanceType<typeof CurrentUserStorex>;

export const CurrentUserStorex = signalStore(
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
);

@Injectable({ providedIn: 'root' })
export class CurrentUserStore extends signalStore(
	{ protectedState: false },
	withState(initialState),
) {
	reset(): void {
		patchState(this, initialState);
	}

	async fetchData(getUserInfoGQL = inject(GetUserInfoGQL)): Promise<void> {
		patchState(this, { isLoading: true });

		try {
			const { data } = await firstValueFrom(getUserInfoGQL.fetch());

			patchState(this, { data: data.getUserInfo, isLoading: false, error: undefined });
		} catch (error) {
			patchState(this, { error: error as UserInfoError, isLoading: false });
		}
	}
}
