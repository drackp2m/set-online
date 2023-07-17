import { ESLint } from 'eslint';

const removeIgnoredFiles = async (files) => {
	const eslint = new ESLint();
	const isIgnored = await Promise.all(
		files.map((file) => {
			return eslint.isPathIgnored(file);
		}),
	);
	const filteredFiles = files.filter((_, i) => !isIgnored[i]);
	return filteredFiles.join(' ');
};

export default {
	'*.{html,json,yml,yaml,md}': ['npm prettier:fix'],
	'*.{js,ts}': async (files) => {
		const filesToLint = await removeIgnoredFiles(files);
		return [`npm eslint:fix ${filesToLint}`];
	},
	'*.{css,scss}': ['npm stylelint:fix'],
};
