import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom, take } from 'rxjs';

import { ApiClient } from '../shared/services/api-client.service';

type AuthInfo = { tokensAreValid: boolean };

type AuthState = {
	data: AuthInfo | null;
	isLoading: boolean;
	error: unknown | null;
};

const initialState: AuthState = {
	data: null,
	isLoading: false,
	error: null,
};

export const AuthStore = signalStore(
	{ providedIn: 'root' },
	withState(initialState),
	withMethods((store, apiClient = inject(ApiClient)) => ({
		reset(): void {
			patchState(store, initialState);
		},
		async tryToRefreshTokens(): Promise<void> {
			patchState(store, { isLoading: true });

			try {
				await firstValueFrom(apiClient.auth.get('/refresh-session').pipe(take(1)));
				patchState(store, { data: { tokensAreValid: true }, isLoading: false });
			} catch (error) {
				patchState(store, { error, data: { tokensAreValid: false }, isLoading: false });
			}
		},
	})),
);
