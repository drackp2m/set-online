module.exports = {
	branches: ['main'],
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				releaseRules: [
					{ type: 'feat', release: 'minor' },
					{ type: 'fix', release: 'patch' },
					{ type: 'docs', release: 'patch' },
					{ type: 'style', release: 'patch' },
					{ type: 'refactor', release: 'patch' },
					{ type: 'perf', release: 'patch' },
					{ type: 'test', release: 'patch' },
					{ type: 'build', release: 'patch' },
					{ type: 'ci', release: 'patch' },
					{ type: 'chore', release: 'patch' },
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
			'@semantic-release/npm',
			{
				npmPublish: false,
			},
		],
		[
			'@semantic-release/git',
			{
				assets: ['CHANGELOG.md', 'package.json'],
				message: '🎒 chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
			},
		],
	],
};
