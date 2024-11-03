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
		[
			'@semantic-release/release-notes-generator',
			{
				writerOpts: {
					commitsSort: ['subject', 'scope'],
					transform: (commit) => {
						commit.notes.forEach((note) => {
							note.title = 'BREAKING CHANGES';
						});

						if (commit.type === 'feat') {
							commit.type = '✨ Features';
						} else if (commit.type === 'style') {
							commit.type = '🎨 Styles';
						} else if (commit.type === 'test') {
							commit.type = '🧪 Tests';
						} else if (commit.type === 'refactor') {
							commit.type = '♻️ Code Refactoring';
						} else if (commit.type === 'fix') {
							commit.type = '🐛 Bug Fixes';
						} else if (commit.type === 'docs') {
							commit.type = '📚 Documentation';
						} else if (commit.type === 'perf') {
							commit.type = '🚀 Performance Improvements';
						} else if (commit.type === 'build') {
							commit.type = '🏗️‍ Build System';
						} else if (commit.type === 'ci') {
							commit.type = '💻 Continuous Integration';
						} else if (commit.type === 'Chore') {
							commit.type = '🎒 Continuous Integration';
						} else if (commit.type === 'revert') {
							commit.type = '⏪ Reverts';
						}

						if (commit.scope === '*') {
							commit.scope = '';
						}

						if (typeof commit.hash === 'string') {
							commit.shortHash = commit.hash.substring(0, 7);
						}

						if (typeof commit.subject === 'string') {
							commit.subject = commit.subject.substring(0, 72);
						}

						return commit;
					},
				},
			},
		],
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
				authorName: 'drackp2m-semantic-release-bot',
				authorEmail: '187212958+drackp2m-semantic-release-bot@users.noreply.github.com',
			},
		],
	],
};
