import { Routes } from '@angular/router';

import ExamplePage from './example.page';

export const EXAMPLE_ROUTES: Routes = [
	{
		path: '',
		component: ExamplePage,
	},
	{
		path: 'typographies',
		loadComponent: () => import('./typography/typography.page'),
	},
	{
		path: 'shadows',
		loadComponent: () => import('./shadow/shadow.page'),
	},
	{
		path: 'colors',
		loadComponent: () => import('./color/color.page'),
	},
	{
		path: 'border-radius',
		loadComponent: () => import('./border-radius/border-radius.page'),
	},
	{
		path: 'spacings',
		loadComponent: () => import('./spacing/spacing.page'),
	},
	{
		path: 'cards',
		loadComponent: () => import('./card/card.page'),
	},
];
