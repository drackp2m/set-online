const fs = require('node:fs');
const path = require('node:path');

module.exports = {
	branches: ['main', 'dev'],
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				preset: 'conventionalcommits',
				releaseRules: [
					{ type: 'feat', release: 'minor' },
					{ type: 'fix', release: 'patch' },
					{ type: 'style', release: 'patch' },
					{ type: 'refactor', release: 'patch' },
					{ type: 'perf', release: 'patch' },
					{ type: 'revert', release: 'patch' },
					{ type: 'BREAKING CHANGE', release: 'major' },
				],
				parserOpts: {
					headerPattern: /^(.+?)\s(?<type>\w+)(?:\((?<scope>[^)]*)\))?: (?<subject>.+)$/u,
					headerCorrespondence: ['emoji', 'type', 'scope', 'subject'],
				},
			},
		],
		[
			'@semantic-release/release-notes-generator',
			{
				preset: 'conventionalcommits',
				parserOpts: {
					headerPattern: /^(.+?)\s(?<type>\w+)(?:\((?<scope>[^)]*)\))?: (?<subject>.+)$/u,
					headerCorrespondence: ['emoji', 'type', 'scope', 'subject'],
				},
				commitsSort: ['scope', 'subject'],
				presetConfig: {
					types: [
						{ type: 'feat', section: '✨ Features' },
						{ type: 'style', section: '🎨 Styles', hidden: false },
						{ type: 'test', section: '🧪 Tests', hidden: false },
						{ type: 'refactor', section: '♻️ Code Refactoring', hidden: false },
						{ type: 'fix', section: '🐛 Bug Fixes' },
						{ type: 'docs', section: '📚 Documentation' },
						{ type: 'perf', section: '🚀 Performance Improvements', hidden: false },
						{ type: 'build', section: '🏗️‍ Build System', hidden: false },
						{ type: 'ci', section: '💻 Continuous Integration', hidden: false },
						{ type: 'chore', section: '🎒 Chores', hidden: false },
						{ type: 'revert', section: '⏪ Reverts', hidden: false },
					],
				},
				writerOpts: {
					mainTemplate: fs.readFileSync(
						path.resolve(__dirname, '.github', 'release-notes', 'template.hbs'),
						'utf8',
					),
				},
			},
		],
		'@semantic-release/changelog',
		[
			'@semantic-release/npm',
			{
				npmPublish: false,
			},
		],
		[
			'@semantic-release/github',
			{
				assets: [
					{ path: 'dist/*.zip', label: 'Build' },
					{ path: 'dist/*.tar.gz', label: 'Source code (tar.gz)' },
				],
			},
		],
		[
			'@semantic-release/git',
			{
				assets: ['package.json', 'CHANGELOG.md'],
				message: '🎒 chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
			},
		],
	],
};
