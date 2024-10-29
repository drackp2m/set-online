import { Routes } from '@angular/router';

export default [
	{
		path: '',
		loadComponent: () => import('./home.page').then((mod) => mod.HomePage),
	},
] satisfies Routes;
