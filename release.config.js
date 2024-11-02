module.exports = {
	release: {
		branches: ['main'],
		plugins: [
			[
				'@semantic-release/commit-analyzer',
				{
					preset: 'conventionalcommits',
					releaseRules: [
						{ type: 'BREAKING CHANGE', release: 'major' },
						{ type: '✨ feat', release: 'minor' },
						{ type: '🎨 style', release: 'patch' },
						{ type: '�{ fix', release: 'patch' },
						{ type: '🚀 perf', release: 'patch' },
					],
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
	},
};
