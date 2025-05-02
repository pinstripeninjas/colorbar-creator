import { useState, createElement } from 'react';
import ColorSwatch from './ColorSwatch';
import CodeBlock from './CodeBlock';
import { colorbarOptionsConfig } from '../config/contentConfig';

function ColorbarExplorer() {
	const [radioButtonOpt, setRadioButtonOpt] = useState(colorbarOptionsConfig[0].id);

	// Find the selected option
	const selectedOption = colorbarOptionsConfig.find((option) => option.id === radioButtonOpt);

	return (
		<div className="flex-column gap-4">
			<div className="flex-row gap-3 align-center">
				<div>Options:</div>
				{colorbarOptionsConfig.map((item) => (
					<label key={item.id}>
						<input
							type="radio"
							name="options"
							value={item.id}
							checked={radioButtonOpt === item.id}
							onChange={() => setRadioButtonOpt(item.id)}
						/>
						<span className={radioButtonOpt === item.id ? 'checked' : null}>
							{item.name}
						</span>
					</label>
				))}
			</div>
			{/* Dynamically render the selected component */}
			{selectedOption && selectedOption.component
				? createElement(selectedOption.component, {})
				: null}
			<ColorSwatch />
			<CodeBlock isColorsArray />
		</div>
	);
}
export default ColorbarExplorer;
