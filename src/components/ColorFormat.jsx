import { useState } from 'react';
import chroma from 'chroma-js';
import ColorSwatch from './ColorSwatch';
import CodeBlock from './CodeBlock';

function ColorFormat() {
	/*
  #432371, #714674, #9f6976, #cc8b79, #faae7b
  ["432371","714674","9f6976","cc8b79","faae7b"]
  */
	const [colorEntry, setColorEntry] = useState();
	console.log('colorEntry:', colorEntry);

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

	let rgbaColors = [];
	if (colorEntry) {
		colorEntry.forEach((color) => {
			const isValid = chroma.valid(color);
			if (isValid) {
				const rgba = chroma(color).rgba();
				const cssColor = chroma(rgba).css();
				rgbaColors.push(cssColor);
			} else {
				rgbaColors.push('Invalid Color');
			}
		});
	}

	return (
		<div className="flex-column gap-4">
			<p>Enter Your Colors Bro</p>
			<textarea onChange={handleTextChange} />
			<ColorSwatch colorsArray={rgbaColors} />
			<CodeBlock code={rgbaColors} formatColorArray />
		</div>
	);
}

export default ColorFormat;
