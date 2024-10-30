interface BaseStateInterface<Error> {
	isLoading: boolean;
	lastFetch: Date | undefined;
	error: Error | undefined;
}

export type BaseState<Data, Error> = Data & BaseStateInterface<Error>;

export function getInitialBaseState<Type, Error>(data: Type): BaseState<Type, Error> {
	return {
		...data,
		isLoading: false,
		lastFetch: undefined,
		error: undefined,
	};
}
