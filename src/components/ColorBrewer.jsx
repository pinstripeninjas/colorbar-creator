import { useState } from 'react';
import ColorSwatch from './ColorSwatch';
import chroma from 'chroma-js';
import { brewerConfig } from '../config/contentConfig';
import CodeBlock from './CodeBlock';

function ColorBrewer() {
	const [colorBrewerOpt, setColorBrewerOpt] = useState(brewerConfig[0].id);
	const [numColors, setNumColors] = useState(5);
	const [isInverse, setIsInverse] = useState(false);

	const handleNumColors = (e) => {
		const value = e.target.value || '';
		setNumColors(value);
	};

	// const colorsArray = chroma.brewer[colorBrewerOpt];
	const colorsArray = chroma.scale(colorBrewerOpt).colors(Number(numColors));
	// css colors, also perform check to see if we need to inverse the colors
	const cssColorsArray = (isInverse ? colorsArray.reverse() : colorsArray).map((color) => {
		const rgba = chroma(color).rgba();
		const cssColor = chroma(rgba).css();
		return cssColor;
	});

	return (
		<div className="flex-column gap-4">
			<div className="flex-row gap-3 align-center">
				<div>Number of Colors:</div>
				<input type="number" min={2} value={numColors} onChange={handleNumColors} />
			</div>
			<div className="flex-row gap-3 align-center">
				<div>Color Scheme:</div>
				<select value={colorBrewerOpt} onChange={(e) => setColorBrewerOpt(e.target.value)}>
					{brewerConfig.map((item) => (
						<option key={item.id} value={item.id}>
							{item.name}
						</option>
					))}
				</select>
				<label style={{ marginRight: '1rem' }}>
					<input
						type="checkbox"
						checked={isInverse}
						onChange={(e) => setIsInverse(e.target.checked)}
					/>
					Inverse
				</label>
			</div>
			{/* <select value={colorBrewerOpt} onChange={(e) => setColorBrewerOpt(e.target.value)}>
				{brewerConfig.map((item) => (
					<option key={item.id} value={item.id}>
						{item.name}
					</option>
				))}
			</select> */}
			<ColorSwatch colorsArray={cssColorsArray} />
			<CodeBlock code={cssColorsArray} formatColorArray />
		</div>
	);
}

export default ColorBrewer;
