import { Routes } from '@angular/router';

export default [
	{
		path: '',
		loadComponent: () => import('./register.page').then((mod) => mod.RegisterPage),
	},
] satisfies Routes;
