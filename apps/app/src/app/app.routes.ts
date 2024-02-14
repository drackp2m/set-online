import { Routes } from '@angular/router';

import MainLayout from './shared/layouts/main/main.layout';
import GamePage from './pages/game/game.page';
import LoginPage from './pages/login/login.page';
import RegisterPage from './pages/register/register.page';

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
        component: RegisterPage,
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
