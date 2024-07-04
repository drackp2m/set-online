export enum CardProperties {
	shape = 'a',
	color = 'b',
	number = 'c',
	shading = 'd',
}

// ToDo => check if this is necessary
export const cardProperties = new Map<CardProperties, string>([
	[CardProperties.shape, 'shape'],
	[CardProperties.color, 'color'],
	[CardProperties.number, 'number'],
	[CardProperties.shading, 'shading'],
]);
