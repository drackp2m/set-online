const { composePlugins, withNx } = require('@nx/webpack');
const patchNxSourceMapPaths = require('../../tools/helpers/patch-nx-source-map-paths');
// const swcExecutor = require('../../tools/helpers/swc-executor');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
	// Update the webpack config as needed here.
	// e.g. `config.plugins.push(new MyPlugin())`

	patchNxSourceMapPaths(config);

	// swcExecutor(config);

	return config;
});
