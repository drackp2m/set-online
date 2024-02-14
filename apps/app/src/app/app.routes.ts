import { Routes } from '@angular/router';

import { EXAMPLE_ROUTES } from './pages/example/example.routes';
import GamePage from './pages/game/game.page';
import { GAME_ROUTES } from './pages/game/login.routes';
import { HOME_ROUTES } from './pages/home/home.routes';
import { LOGIN_ROUTES } from './pages/login/login.routes';
import { ONLINE_ROUTES } from './pages/online/online.routes';
import { REGISTER_ROUTES } from './pages/register/register.routes';
import MainLayout from './shared/layouts/main/main.layout';

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
				children: HOME_ROUTES,
			},
			{
				path: 'login',
				children: LOGIN_ROUTES,
			},
			{
				path: 'register',
				children: REGISTER_ROUTES,
			},
			{
				path: 'example',
				children: EXAMPLE_ROUTES,
			},
			{
				path: 'game',
				children: GAME_ROUTES,
			},
			{
				path: 'online',
				children: ONLINE_ROUTES,
			},
		],
	},
];
