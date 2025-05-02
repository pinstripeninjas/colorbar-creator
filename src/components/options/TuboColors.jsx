import { useEffect, useState, useContext } from 'react';
import { turboColormap } from '../../config/turboFunctions';
import { AppContext } from '../../context/AppContext';

function TurboColors() {
	const [numColors, setNumColors] = useState(5);
	const { setAppState } = useContext(AppContext);

	const handleNumColors = (e) => {
		const value = e.target.value || '';
		setNumColors(value);
	};

	useEffect(() => {
		const turboColorsArray = turboColormap(numColors);
		console.log('turboColorsArray:', turboColorsArray);
		setAppState((prevState) => ({
			...prevState,
			cssColorsArray: turboColorsArray,
		}));
	}, [numColors, setAppState]);

	return (
		<>
			<div className="flex-column gap-4">
				<div className="flex-row gap-3 align-center">
					<div>Number of Colors:</div>
					<input type="number" min={2} value={numColors} onChange={handleNumColors} />
				</div>
			</div>
		</>
	);
}

export default TurboColors;
