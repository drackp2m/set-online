import { Routes } from '@angular/router';

export default [
	{
		path: '',
		loadComponent: () => import('./example.page').then((mod) => mod.ExamplePage),
	},
	{
		path: 'typographies',
		loadComponent: () =>
			import('./section/typography/typography.page').then((mod) => mod.TypographyPage),
	},
	{
		path: 'shadows',
		loadComponent: () => import('./section/shadow/shadow.page').then((mod) => mod.ShadowPage),
	},
	{
		path: 'colors',
		loadComponent: () => import('./section/color/color.page').then((mod) => mod.ColorPage),
	},
	{
		path: 'border-radius',
		loadComponent: () =>
			import('./section/border-radius/border-radius.page').then((mod) => mod.BorderRadiusPage),
	},
	{
		path: 'spacings',
		loadComponent: () => import('./section/spacing/spacing.page').then((mod) => mod.SpacingPage),
	},
	{
		path: 'cards',
		loadComponent: () => import('./section/card/card.page').then((mod) => mod.CardPage),
	},
] satisfies Routes;
