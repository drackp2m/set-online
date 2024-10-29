import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';

import { BaseState, getInitialBaseState } from '../definition/base-state.interface';
import { ApiClient } from '../service/api-client.service';

type AuthInfo = { tokensAreValid: boolean };

const initialState: BaseState<AuthInfo, unknown> = getInitialBaseState({
	tokensAreValid: false,
});

export const AuthStore = signalStore(
	{ providedIn: 'root' },
	withState(initialState),
	withMethods((store, apiClient = inject(ApiClient)) => ({
		reset(): void {
			patchState(store, initialState);
		},
		markTokensAs(status: 'valid' | 'invalid'): void {
			patchState(store, { tokensAreValid: status === 'valid', isLoading: false });
		},
		async tryToRefreshTokens(): Promise<void> {
			patchState(store, { isLoading: true });

			try {
				await firstValueFrom(apiClient.auth.get('/refresh-session'));

				patchState(store, { tokensAreValid: true, isLoading: false });
			} catch (error) {
				patchState(store, { error, tokensAreValid: false, isLoading: false });
			}
		},
	})),
);
