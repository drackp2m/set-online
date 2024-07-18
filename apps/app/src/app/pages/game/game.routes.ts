import { Routes } from '@angular/router';

export default [
	{
		path: '',
		loadComponent: () => import('./game.page').then((mod) => mod.GamePage),
	},
] satisfies Routes;
