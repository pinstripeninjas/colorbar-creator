import { useContext, useEffect, useState } from 'react';
import chroma from 'chroma-js';
import { brewerConfig } from '../../config/contentConfig';
import { AppContext } from '../../context/AppContext';

function ColorBrewer() {
	const [colorBrewerOpt, setColorBrewerOpt] = useState(brewerConfig[0].id);
	const [isInverse, setIsInverse] = useState(false);
	const { setAppState } = useContext(AppContext);
	const [numColors, setNumColors] = useState(5);

	const handleNumColors = (e) => {
		const value = e.target.value || '';
		setNumColors(value);
	};

	const handleBrewerChange = (e) => {
		const value = e.target.value || '';
		setColorBrewerOpt(value);
	};

	const handleInverseChange = (e) => {
		const value = e.target.checked || false;
		setIsInverse(value);
	};

	useEffect(() => {
		const makeColorsArray = () => {
			const colorsArray = chroma.scale(colorBrewerOpt).colors(Number(numColors));
			// css colors, also perform check to see if we need to inverse the colors
			const cssColorsArray = (isInverse ? colorsArray.reverse() : colorsArray).map(
				(color) => {
					const rgba = chroma(color).rgba();
					const cssColor = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
					return cssColor;
				}
			);

			return cssColorsArray;
		};
		setAppState((prevState) => ({
			...prevState,
			cssColorsArray: makeColorsArray(),
		}));
	}, [colorBrewerOpt, isInverse, numColors, setAppState]);

	console.log('rendering ColorBrewer');

	return (
		<div className="flex-column gap-4">
			<div className="flex-row gap-3 align-center">
				<div>Number of Colors:</div>
				<input type="number" min={2} value={numColors} onChange={handleNumColors} />
			</div>
			<div className="flex-row gap-3 align-center">
				<div>Color Scheme:</div>
				<select value={colorBrewerOpt} onChange={handleBrewerChange}>
					{brewerConfig.map((item) => (
						<option key={item.id} value={item.id}>
							{item.name}
						</option>
					))}
				</select>
				<label style={{ marginRight: '1rem' }}>
					<input type="checkbox" checked={isInverse} onChange={handleInverseChange} />
					<span className={isInverse ? 'checked' : null}>Inverse</span>
				</label>
			</div>
		</div>
	);
}

export default ColorBrewer;
