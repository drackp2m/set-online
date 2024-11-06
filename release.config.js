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
					mainTemplate: `# {{date}}

## What's Changed
{{#each commitGroups}}
### {{title}}

{{#each commits}}
{{> commit}}
{{/each}}

{{/each}}

**Full Changelog**: {{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}
`,
					commitPartial: `\\* {{#if scope}}**{{scope}}**: {{/if}}{{subject}} ([{{shortHash}}]({{@root.host}}/{{@root.owner}}/{{@root.repository}}/commit/{{hash}})) by {{committer.name}}
`,
					// transform: (originalCommit, context) => {
					// 	console.log({ originalCommit, context });

					// 	const commit = { ...originalCommit };

					// 	if (commit.emoji === null) {
					// 		return null;
					// 	}

					// 	console.log(`${commit.type}\n\n`);

					// 	getCommitTypeWithEmoji = (type) => {
					// 		switch (type) {
					// 			case 'feat':
					// 				return '✨ Features';
					// 			case 'style':
					// 				return '🎨 Styles';
					// 			case 'test':
					// 				return '🧪 Tests';
					// 			case 'refactor':
					// 				return '♻️ Code Refactoring';
					// 			case 'fix':
					// 				return '🐛 Bug Fixes';
					// 			case 'docs':
					// 				return '📚 Documentation';
					// 			case 'perf':
					// 				return '🚀 Performance Improvements';
					// 			case 'build':
					// 				return '🏗️‍ Build System';
					// 			case 'ci':
					// 				return '💻 Continuous Integration';
					// 			case 'chore':
					// 				return '🎒 Chore';
					// 			case 'revert':
					// 				return '⏪ Reverts';
					// 		}
					// 	};

					// 	const { host, owner, repository } = context;

					// 	commit.owner = owner;
					// 	commit.type = getCommitTypeWithEmoji(commit.type);
					// 	commit.url = `${host}/${owner}/${repository}/commit/${commit.hash}`;
					// 	commit.shortHash = commit.commit.short;

					// 	return commit;
					// },
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
			},
		],
	],
};
