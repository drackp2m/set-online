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
		// [
		// 	'@semantic-release/release-notes-generator',
		// 	{
		// 		writerOpts: {
		// 			commitsSort: ['subject', 'scope'],
		// 			transform: (commit) => {
		// 				const clonedCommit = { ...commit };

		// 				clonedCommit.notes.forEach((note) => {
		// 					note.title = 'BREAKING CHANGES';
		// 				});

		// 				if (clonedCommit.type === 'feat') {
		// 					clonedCommit.type = '✨ Features';
		// 				} else if (clonedCommit.type === 'style') {
		// 					clonedCommit.type = '🎨 Styles';
		// 				} else if (clonedCommit.type === 'test') {
		// 					clonedCommit.type = '🧪 Tests';
		// 				} else if (clonedCommit.type === 'refactor') {
		// 					clonedCommit.type = '♻️ Code Refactoring';
		// 				} else if (clonedCommit.type === 'fix') {
		// 					clonedCommit.type = '🐛 Bug Fixes';
		// 				} else if (clonedCommit.type === 'docs') {
		// 					clonedCommit.type = '📚 Documentation';
		// 				} else if (clonedCommit.type === 'perf') {
		// 					clonedCommit.type = '🚀 Performance Improvements';
		// 				} else if (clonedCommit.type === 'build') {
		// 					clonedCommit.type = '🏗️‍ Build System';
		// 				} else if (clonedCommit.type === 'ci') {
		// 					clonedCommit.type = '💻 Continuous Integration';
		// 				} else if (clonedCommit.type === 'Chore') {
		// 					clonedCommit.type = '🎒 Continuous Integration';
		// 				} else if (clonedCommit.type === 'revert') {
		// 					clonedCommit.type = '⏪ Reverts';
		// 				}

		// 				if (clonedCommit.scope === '*') {
		// 					clonedCommit.scope = '';
		// 				}

		// 				if (typeof clonedCommit.hash === 'string') {
		// 					clonedCommit.shortHash = clonedCommit.hash.substring(0, 7);
		// 				}

		// 				if (typeof clonedCommit.subject === 'string') {
		// 					clonedCommit.subject = clonedCommit.subject.substring(0, 72);
		// 				}

		// 				return commit;
		// 			},
		// 		},
		// 	},
		// ],
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
