import { Routes } from '@angular/router';

import MainLayout from './shared/layouts/main/main.layout';

export const APP_ROUTES: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/game/game.routes'),
	},
	{
		path: '',
		component: MainLayout,
		children: [
			{
				path: 'home',
				loadChildren: () => import('./pages/home/home.routes'),
			},
			{
				path: 'register',
				loadChildren: () => import('./pages/register/register.routes'),
			},
			{
				path: 'login',
				loadChildren: () => import('./pages/login/login.routes'),
			},
			{
				path: 'logout',
				loadChildren: () => import('./pages/login/login.routes'),
			},
			{
				path: 'example',
				loadChildren: () => import('./pages/example/example.routes'),
			},
			{
				path: 'game',
				loadChildren: () => import('./pages/game/game.routes'),
			},
			{
				path: 'online',
				loadChildren: () => import('./pages/online/online.routes'),
			},
		],
	},
];
