const { composePlugins, withNx } = require('@nx/webpack');
const patchNxSourceMapPaths = require('../../tools/helpers/patch-nx-source-map-paths');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
	// Update the webpack config as needed here.
	// e.g. `config.plugins.push(new MyPlugin())`

	patchNxSourceMapPaths(config)

	return config;
});
