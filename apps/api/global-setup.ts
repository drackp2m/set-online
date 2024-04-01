declare let globalThis: {
	__TEARDOWN_MESSAGE__: string | undefined;
};

export default async () => {
	console.log('\nSetting up...\n');

	globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';
};
