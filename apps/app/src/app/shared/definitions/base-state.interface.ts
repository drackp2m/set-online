export interface BaseState<T> {
	data: T | null;
	loading: boolean;
	lastFetch: Date | null;
	error: object | null;
}

export function getInitialBaseState<T>(): BaseState<T> {
	return {
		data: null,
		loading: false,
		lastFetch: null,
		error: null,
	};
}
