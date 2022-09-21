export default (config, _) => {
	config.plugins = config.plugins.filter(
		(p) => p.constructor.name !== 'DefinePlugin',
	);

	return config;
};
