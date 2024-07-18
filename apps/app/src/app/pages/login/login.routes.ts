import { Routes } from '@angular/router';

export default [
	{
		path: '',
		loadComponent: () => import('./login.page').then((mod) => mod.LoginPage),
	},
] satisfies Routes;
