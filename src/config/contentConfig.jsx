import ColorbarExplorer from '../components/ColorbarExplorer';
import ColorBrewer from '../components/options/ColorBrewer';
import ColorFormat from '../components/ColorFormat';
import TurboColors from '../components/TuboColors';
import CustomColors from '../components/options/CustomColors';

export const contentConfig = [
	{
		component: <ColorBrewer />,
		id: 'colorBrewer',
		title: 'Color Brewer Tester',
	},
	{
		component: <ColorFormat />,
		id: 'colorFormat',
		title: 'Color Format Converter',
	},
	{
		component: <ColorbarExplorer />,
		id: 'colorbarExplorer',
		title: 'Colorbar Explorer',
	},
	{
		component: <TurboColors />,
		id: 'turboColors',
		title: 'Turbo Colorbar Creator',
	},
];

export const colorbarOptionsConfig = [
	{
		component: ColorBrewer,
		id: 'colorBrewer',
		name: 'Color Brewer',
	},
	{
		component: CustomColors,
		id: 'customColors',
		name: 'Custom Colors',
	},
	{
		component: <div>custom gradient</div>,
		id: 'customGradient',
		name: 'Custom Gradient',
	},
	{
		component: TurboColors,
		id: 'turboColors',
		name: 'Turbo Colors',
	},
];

export const brewerConfig = [
	{
		id: 'OrRd',
		name: 'Orange-Red',
		category: 'sequential',
		scheme: 'multi-hue',
	},
	{
		id: 'PuBu',
		name: 'Purple-Blue',
		category: 'sequential',
		scheme: 'multi-hue',
	},
	{
		id: 'BuPu',
		name: 'Blue-Purple',
		category: 'sequential',
		scheme: 'multi-hue',
	},
	{
		id: 'Oranges',
		name: 'Oranges',
		category: 'sequential',
		scheme: 'single-hue',
	},
	{
		id: 'BuGn',
		name: 'Blue-Green',
		category: 'sequential',
		scheme: 'multi-hue',
	},
	{
		id: 'YlOrBr',
		name: 'Yellow-Orange-Brown',
		category: 'sequential',
		scheme: 'multi-hue',
	},
	{
		id: 'YlGn',
		name: 'Yellow-Green',
		category: 'sequential',
		scheme: 'multi-hue',
	},
	{
		id: 'Reds',
		name: 'Reds',
		category: 'sequential',
		scheme: 'single-hue',
	},
	{
		id: 'RdPu',
		name: 'Red-Purple',
		category: 'sequential',
		scheme: 'multi-hue',
	},
	{
		id: 'Greens',
		name: 'Greens',
		category: 'sequential',
		scheme: 'single-hue',
	},
	{
		id: 'YlGnBu',
		name: 'Yellow-Green-Blue',
		category: 'sequential',
		scheme: 'multi-hue',
	},
	{
		id: 'Purples',
		name: 'Purples',
		category: 'sequential',
		scheme: 'single-hue',
	},
	{
		id: 'GnBu',
		name: 'Green-Blue',
		category: 'sequential',
		scheme: 'multi-hue',
	},
	{
		id: 'Greys',
		name: 'Greys',
		category: 'sequential',
		scheme: 'single-hue',
	},
	{
		id: 'YlOrRd',
		name: 'Yellow-Orange-Red',
		category: 'sequential',
		scheme: 'multi-hue',
	},
	{
		id: 'PuRd',
		name: 'Purple-Red',
		category: 'sequential',
		scheme: 'multi-hue',
	},
	{
		id: 'Blues',
		name: 'Blues',
		category: 'sequential',
		scheme: 'single-hue',
	},
	{
		id: 'PuBuGn',
		name: 'Purple-Blue-Green',
		category: 'sequential',
		scheme: 'multi-hue',
	},
	{
		id: 'Viridis',
		name: 'Viridis',
		category: 'diverging',
		scheme: 'multi-hue',
	},
	{
		id: 'Spectral',
		name: 'Spectral',
		category: 'diverging',
		scheme: 'multi-hue',
	},
	{
		id: 'RdYlGn',
		name: 'Red-Yellow-Green',
		category: 'diverging',
		scheme: 'multi-hue',
	},
	{
		id: 'RdBu',
		name: 'Red-Blue',
		category: 'diverging',
		scheme: 'multi-hue',
	},
	{
		id: 'PiYG',
		name: 'Pink-Yellow-Green',
		category: 'diverging',
		scheme: 'multi-hue',
	},
	{
		id: 'PRGn',
		name: 'Purple-Green',
		category: 'diverging',
		scheme: 'multi-hue',
	},
	{
		id: 'RdYlBu',
		name: 'Red-Yellow-Blue',
		category: 'diverging',
		scheme: 'multi-hue',
	},
	{
		id: 'BrBG',
		name: 'Brown-Blue-Green',
		category: 'diverging',
		scheme: 'multi-hue',
	},
	{
		id: 'RdGy',
		name: 'Red-Grey',
		category: 'diverging',
		scheme: 'multi-hue',
	},
	{
		id: 'PuOr',
		name: 'Purple-Orange',
		category: 'diverging',
		scheme: 'multi-hue',
	},
	{
		id: 'Accent',
		name: 'Accent',
		category: 'qualitative',
		scheme: 'single-hue',
	},
	{
		id: 'Set1',
		name: 'Set 1',
		category: 'qualitative',
		scheme: 'single-hue',
	},
	{
		id: 'Set2',
		name: 'Set 2',
		category: 'qualitative',
		scheme: 'single-hue',
	},
	{
		id: 'Set3',
		name: 'Set 3',
		category: 'qualitative',
		scheme: 'single-hue',
	},
	{
		id: 'Dark2',
		name: 'Dark 2',
		category: 'qualitative',
		scheme: 'single-hue',
	},
	{
		id: 'Paired',
		name: 'Paired',
		category: 'qualitative',
		scheme: 'single-hue',
	},
	{
		id: 'Pastel1',
		name: 'Pastel 1',
		category: 'qualitative',
		scheme: 'single-hue',
	},
	{
		id: 'Pastel2',
		name: 'Pastel 2',
		category: 'qualitative',
		scheme: 'single-hue',
	},
];
