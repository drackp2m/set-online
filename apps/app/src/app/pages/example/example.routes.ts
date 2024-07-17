import { Routes } from '@angular/router';

import BorderRadiusPage from './border-radius/border-radius.page';
import CardPage from './card/card.page';
import ColorPage from './color/color.page';
import ExamplePage from './example.page';
import ShadowPage from './shadow/shadow.page';
import SpacingPage from './spacing/spacing.page';
import TypographyPage from './typography/typography.page';

export default [
	{
		path: '',
		component: ExamplePage,
	},
	{
		path: 'typographies',
		component: TypographyPage,
	},
	{
		path: 'shadows',
		component: ShadowPage,
	},
	{
		path: 'colors',
		component: ColorPage,
	},
	{
		path: 'border-radius',
		component: BorderRadiusPage,
	},
	{
		path: 'spacings',
		component: SpacingPage,
	},
	{
		path: 'cards',
		component: CardPage,
	},
] satisfies Routes;
