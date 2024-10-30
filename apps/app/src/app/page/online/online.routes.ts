import { Routes } from '@angular/router';

export default [
	{
		path: '',
		loadComponent: () => import('./online.page').then((mod) => mod.OnlinePage),
	},
] satisfies Routes;
