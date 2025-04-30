import { useState } from 'react';
import { turboColormap } from '../js/turboFunctions';
import ColorSwatch from './ColorSwatch';
import CodeBlock from './CodeBlock';

function TurboColors() {
	const [numColors, setNumColors] = useState(5);

	const handleNumColors = (e) => {
		const value = e.target.value || '';
		setNumColors(value);
	};

	const turboColorsArray = turboColormap(numColors);

	return (
		<>
			<h1 style={{ marginBottom: '1rem' }}>Turbo Colors</h1>
			<div className="flex-column gap-4">
				<div className="flex-row gap-3 align-center">
					<div>Number of Colors:</div>
					<input type="number" min={2} value={numColors} onChange={handleNumColors} />
				</div>
				<ColorSwatch colorsArray={turboColorsArray} />
				<CodeBlock code={turboColorsArray} formatColorArray />
			</div>
		</>
	);
}

export default TurboColors;
