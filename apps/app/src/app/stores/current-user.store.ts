import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom, take } from 'rxjs';

import { GetUserInfoGQL, GetUserInfoQuery } from '../graphql/apollo-operations';

type UserInfo = GetUserInfoQuery['getUserInfo'];

type CurrentUserState = {
	data: UserInfo | null;
	isLoading: boolean;
	error: unknown | null;
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
			console.log('no me jodas');
			patchState(store, { isLoading: true });
			console.log('vamos va');

			setTimeout(async () => {
				console.log('me espero');
				try {
					console.log('e intento esto');
					const { data } = await firstValueFrom(getUserInfoGQL.fetch().pipe(take(1)));
					console.log(data);
					patchState(store, { data: data.getUserInfo, isLoading: false });
				} catch (error) {
					console.log(error);
					patchState(store, { error, isLoading: false });
				}
			}, 300);
		},
	})),
);
