declare let globalThis: {
	__TEARDOWN_MESSAGE__: string | undefined;
};

export default async () => {
	console.log(globalThis.__TEARDOWN_MESSAGE__);
};
