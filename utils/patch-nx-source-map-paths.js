const path = require('path');

/*
 * Temporary workaround for debugging Node applications being built with webpack and Nx.
 * See: https://github.com/nrwl/nx/issues/14708#issuecomment-1457996600
 */
module.exports = function patchNxSourceMapPaths(config) {
	config.output.devtoolModuleFilenameTemplate = function (info) {
		const rel = path.relative(process.cwd(), info.absoluteResourcePath);
		return `webpack:///./${rel}`;
	};

	config.devtool = 'source-map';

	return config;
};
