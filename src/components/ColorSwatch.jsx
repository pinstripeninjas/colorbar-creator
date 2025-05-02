import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function ColorSwatch() {
	const { appState } = useContext(AppContext);
	const { cssColorsArray } = appState;

	return (
		<div>
			<p>Color Swatch</p>
			<div className="swatch-container">
				{cssColorsArray.map((color, index) => (
					<div key={index} style={{ backgroundColor: color, flex: '1 0 0' }}></div>
				))}
			</div>
		</div>
	);
}

export default ColorSwatch;
