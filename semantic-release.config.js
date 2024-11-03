module.exports = {
	branches: ['main'],
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
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
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
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
