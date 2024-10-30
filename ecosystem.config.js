module.exports = {
	apps: [
		{
			name: 'app',
			script: 'node --run start',
			exec_mode: 'fork',
			instances: 1,
			kill_timeout: 1000,
			autorestart: false,
			restart_delay: 10000,
			merge_logs: true,
			log_file: '/home/node/.pm2/logs/app/combined.log',
			out_file: '/home/node/.pm2/logs/app/out.log',
			error_file: '/home/node/.pm2/logs/app/error.log',
			output: '/dev/stdout',
			error: '/dev/stderr',
		},
	],
};
