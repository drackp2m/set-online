import { Routes } from '@angular/router';

import MainLayout from './layout/main/main.layout';

export const APP_ROUTES: Routes = [
	{
		path: '',
		data: { avoidStatusBar: true },
		loadChildren: () => import('./page/game/game.routes'),
	},
	{
		path: '',
		component: MainLayout,
		children: [
			{
				path: 'home',
				loadChildren: () => import('./page/home/home.routes'),
			},
			{
				path: 'register',
				loadChildren: () => import('./page/register/register.routes'),
			},
			{
				path: 'login',
				loadChildren: () => import('./page/login/login.routes'),
			},
			{
				path: 'logout',
				loadChildren: () => import('./page/login/login.routes'),
			},
			{
				path: 'example',
				loadChildren: () => import('./page/example/example.routes'),
			},
			{
				path: 'game',
				loadChildren: () => import('./page/game/game.routes'),
			},
			{
				path: 'online',
				loadChildren: () => import('./page/online/online.routes'),
			},
			{
				path: '**',
				loadChildren: () => import('./page/home/home.routes'),
			},
		],
	},
];
