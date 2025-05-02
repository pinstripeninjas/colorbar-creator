import { useEffect, useState, useContext } from 'react';
import chroma from 'chroma-js';
import { AppContext } from '../../context/AppContext';

function CustomColors() {
	// possible color formats:
	// #432371, #714674, #9f6976, #cc8b79, #faae7b
	// ["432371","714674","9f6976","cc8b79","faae7b"]
	const [colorEntry, setColorEntry] = useState();
	const { setAppState } = useContext(AppContext);

	const handleTextChange = (e) => {
		const value = e.target.value || '';
		// setColorEntry(value);
		let parsedColors = [];
		try {
			// Attempt to parse as JSON (array format)
			parsedColors = JSON.parse(value);
			if (!Array.isArray(parsedColors)) {
				throw new Error('Not an array');
			}
		} catch {
			// Fallback to splitting by commas for basic string format
			parsedColors = value.split(',').map((item) => item.trim());
		}

		setColorEntry(parsedColors);
	};

	useEffect(() => {
		let rgbaColors = [];
		if (colorEntry) {
			colorEntry.forEach((color) => {
				const isValid = chroma.valid(color);
				if (isValid) {
					const rgba = chroma(color).rgba();
					const cssColor = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
					rgbaColors.push(cssColor);
				} else {
					rgbaColors.push('Invalid Color');
				}
			});
		}

		setAppState((prevState) => ({
			...prevState,
			cssColorsArray: rgbaColors,
		}));
	}, [colorEntry, setAppState]);

	return (
		<div className="flex-column gap-4">
			<p>Enter Your Colors Bro</p>
			<textarea onChange={handleTextChange} />
		</div>
	);
}

export default CustomColors;
