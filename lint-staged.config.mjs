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
	'*.{json,yml,yaml,md}': 'npm run prettier',
	'*.{html,js,ts}': 'npm run eslint -- --no-warn-ignored',
	'*.{css,scss}': 'npm run stylelint',
};
