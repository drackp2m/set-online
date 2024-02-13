import { Routes } from '@angular/router';

import MainLayout from './shared/layouts/main/main.layout';
import GamePage from './pages/game/game.page';
import LoginPage from './pages/login/login.page';

export const APP_ROUTES: Routes = [
	{
		path: '',
    component: GamePage,
	},
	{
		path: '',
		component: MainLayout,
		children: [
			{
				path: 'home',
        component: GamePage,
			},
			{
				path: 'login',
        component: LoginPage,
			},
			{
				path: 'register',
				loadChildren: () => import('./pages/register/register.module'),
			},
			{
				path: 'example',
				loadChildren: () => import('./pages/example/example.module'),
			},
			{
				path: 'game',
        component: GamePage,
			},
			{
				path: 'online',
				loadChildren: () => import('./pages/online/online.module'),
			},
		],
	},
];
