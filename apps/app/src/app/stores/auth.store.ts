import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';

import { ApiClient } from '../shared/services/api-client.service';

type AuthInfo = { tokensAreValid: boolean };

type AuthState = {
	data: AuthInfo | undefined;
	isLoading: boolean;

	error: unknown | undefined;
};

const initialState: AuthState = {
	data: undefined,
	isLoading: false,
	error: undefined,
};

export const AuthStore = signalStore(
	{ providedIn: 'root' },
	withState(initialState),
	withMethods((store, apiClient = inject(ApiClient)) => ({
		reset(): void {
			patchState(store, initialState);
		},
		markTokensAsValid(): void {
			patchState(store, { data: { tokensAreValid: true }, isLoading: false });
		},
		markTokensAsInvalid(): void {
			patchState(store, { data: { tokensAreValid: false }, isLoading: false });
		},
		async tryToRefreshTokens(): Promise<void> {
			if (store.isLoading() === true) {
				return;
			}

			patchState(store, { isLoading: true });

			try {
				await firstValueFrom(apiClient.auth.get('/refresh-session'));

				patchState(store, { data: { tokensAreValid: true }, isLoading: false });
				console.log('refresh works');
			} catch (error) {
				console.log('refresh fails');
				patchState(store, { error, data: { tokensAreValid: false }, isLoading: false });
			}
		},
	})),
);
