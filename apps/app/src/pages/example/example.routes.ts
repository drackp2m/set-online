import { Routes } from '@angular/router';

import ExamplePage from './example.page';

export const EXAMPLE_ROUTES: Routes = [
	{
		path: '',
		component: ExamplePage,
	},
	{
		path: 'typographies',
		loadComponent: () => import('./typographies/typography.page'),
	},
];
