import ColorFormat from '../components/ColorFormat';
import TurboColors from '../components/TuboColors';

export const contentConfig = [
	{
		component: <ColorFormat />,
		id: 'colorFormat',
		title: 'Color Format Converter',
	},
	{
		component: <div>Gradient Explorer</div>,
		id: 'gradientExplorer',
		title: 'Gradient Explorer',
	},
	{
		component: <TurboColors />,
		id: 'turboColors',
		title: 'Turbo Colorbar Creator',
	},
];
