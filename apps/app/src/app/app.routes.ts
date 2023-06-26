import { Routes } from '@angular/router';

import MainLayout from '../layouts/main/main.layout';
import { HOME_ROUTES } from '../pages/home/home.routes';

export const APP_ROUTES: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
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
