/** @type {import('cz-git').UserConfig} */
module.exports = {
	extends: ['@commitlint/config-nx-scopes'],
	rules: {
		'type-empty': [2, 'always'],
		'type-enum': [
			2,
			'always',
			[
				'feat',
				'fix',
				'docs',
				'style',
				'refactor',
				'perf',
				'test',
				'build',
				'ci',
				'chore',
				'revert',
			],
		],
		'subject-full-stop': [0],
		'subject-min-length': [2, 'always', 10],
		'subject-max-length': [2, 'always', 70],
	},
	prompt: {
		useEmoji: true,
		emojiAlign: 'left',
		enableMultipleScopes: true,
		emptyScopesAlias: 'no scopes',
		skipQuestions: ['body', 'footerPrefix', 'footer'],
		messages: {
			type: "Select the type of change that you're committing",
			scope: 'What is the scope of this change (e.g. app or api-e2e)',
			subject: 'Type the subject'
		},
		types: [
			{ value: 'feat', name: 'feat:     ✨ A new feature', emoji: '✨' },
			{
				value: 'style',
				name: 'style:    🎨 Changes that do not affect the meaning of the code',
				emoji: '🎨',
			},
			{
				value: 'test',
				name: 'test:     🧪 Adding missing tests or correcting existing tests',
				emoji: '🧪',
			},
			{
				value: 'refactor',
				name: 'refactor: ♻️  A code change that neither fixes a bug nor adds a feature',
				emoji: '♻️ ',
			},
			{ value: 'fix', name: 'fix:      🐛 A bug fix', emoji: '🐛' },
			{
				value: 'docs',
				name: 'docs:     📚 Documentation only changes',
				emoji: '📚',
			},
			{
				value: 'perf',
				name: 'perf:     🚀 A code change that improves performance',
				emoji: '🚀',
			},
			{
				value: 'build',
				name: 'build:    🏗️  Changes that affect the build system or external dependencies',
				emoji: '🏗️ ',
			},
			{
				value: 'ci',
				name: 'ci:       💻 Changes to our CI configuration files and scripts',
				emoji: '💻',
			},
			{
				value: 'chore',
				name: "chore:    🎒 Other changes that don't modify src or test files",
				emoji: '🎒',
			},
			{
				value: 'revert',
				name: 'revert:   🗑️  Reverts a previous commit',
				emoji: '🗑 ',
			},
		],
	},
};
