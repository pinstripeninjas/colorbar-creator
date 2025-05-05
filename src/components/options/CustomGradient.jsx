import { useState } from 'react';
import { PiPlusCircleLight } from 'react-icons/pi';

function CustomGradient() {
	const [numColors, setNumColors] = useState(5);

	const handleNumColors = (e) => {
		const value = e.target.value || '';
		setNumColors(value);
	};

	return (
		<div className="flex-column gap-4">
			<div className="flex-row gap-3 align-center">
				<div>Number of Colors:</div>
				<input type="number" min={2} value={numColors} onChange={handleNumColors} />
			</div>
			<div className="flex-row gap-4">
				<div className="flex-column gap-1">
					<div>Start Color</div>
					<input type="color" />
				</div>
				<button>
					<PiPlusCircleLight fontSize="30px" />
				</button>
				<div className="flex-column gap-1">
					<div>End Color</div>
					<input type="color" />
				</div>
			</div>
		</div>
	);
}

export default CustomGradient;
