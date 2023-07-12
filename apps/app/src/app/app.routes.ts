import { Routes } from '@angular/router';

import MainLayout from '../shared/layouts/main/main.layout';

export const APP_ROUTES: Routes = [
	{
		path: '',
		component: MainLayout,
		children: [
			{
				path: '',
				loadChildren: () => import('../pages/game/game.module'),
			},
			{
				path: 'home',
				loadChildren: () => import('../pages/home/home.module'),
			},
			{
				path: 'login',
				loadChildren: () => import('../pages/login/login.module'),
			},
			{
				path: 'register',
				loadChildren: () => import('../pages/register/register.module'),
			},
			{
				path: 'example',
				loadChildren: () => import('../pages/example/example.module'),
			},
		],
	},
];
