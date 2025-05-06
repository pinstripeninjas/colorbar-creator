import { useState, useReducer, useEffect, useContext } from 'react';
import chroma from 'chroma-js';
import { AppContext } from '../../context/AppContext';
import { PiPlusCircleLight } from 'react-icons/pi';
import ColorInput from '../ColorInput';

const gradientReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_COLOR_STOP': {
			const { newColorStop, prevStopId } = action.payload;
			console.log('prevStopId:', prevStopId);
			console.log('newColorStop:', newColorStop);
			const prevStopIndex = state.findIndex((stop) => stop.id === prevStopId);
			// insert the new color stop after the previous one
			const newState = [...state];
			newState.splice(prevStopIndex + 1, 0, newColorStop);
			console.log('newState:', newState);
			return newState;
		}
		case 'UPDATE_COLOR_STOP':
			return state.map((stop) =>
				stop.id === action.payload.id ? { ...stop, ...action.payload } : stop
			);
		case 'REMOVE_COLOR_STOP':
			return state.filter((stop) => stop.id !== action.payload.id);
		default:
			return state;
	}
};

function CustomGradient() {
	const [numColors, setNumColors] = useState(5);

	const { setAppState } = useContext(AppContext);

	const [gradientStops, dispatch] = useReducer(gradientReducer, [
		{ id: 1, name: 'Start', color: chroma.random() },
		{ id: 2, name: 'End', color: chroma.random() },
	]);

	const handleNumColors = (e) => {
		const value = e.target.value || '';
		setNumColors(value);
	};

	const addColorStop = (prevStopId) => {
		const newColorStop = {
			id: Date.now(), // Unique ID
			name: `Stop`,
			color: chroma.random(),
		};
		console.log('newStop:', newColorStop);
		console.log('prevStopId:', prevStopId);
		dispatch({ type: 'ADD_COLOR_STOP', payload: { newColorStop, prevStopId } });
	};

	const updateColorStop = (id, color) => {
		dispatch({ type: 'UPDATE_COLOR_STOP', payload: { id, color } });
	};

	const removeColorStop = (id) => {
		dispatch({ type: 'REMOVE_COLOR_STOP', payload: { id } });
	};

	useEffect(() => {
		const makeColorsArray = () => {
			// get the colors from the gradient stops
			const colors = gradientStops.map((stop) => stop.color);
			// create a color scale from the colors
			const colorsArray = chroma.scale(colors).colors(Number(numColors));
			// css colors, also perform check to see if we need to inverse the colors
			const cssColorsArray = colorsArray.map((color) => {
				const rgba = chroma(color).rgba();
				const cssColor = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
				return cssColor;
			});

			return cssColorsArray;
		};
		setAppState((prevState) => ({
			...prevState,
			cssColorsArray: makeColorsArray(),
		}));
	}, [numColors, gradientStops, setAppState]);

	return (
		<div className="flex-column gap-4">
			<div className="flex-row gap-3 align-center">
				<div>Number of Colors:</div>
				<input type="number" min={2} value={numColors} onChange={handleNumColors} />
			</div>
			<div className="flex-row gap-4">
				{gradientStops.map((stop) => (
					<div key={stop.id} className="flex-row gap-3 align-center">
						<ColorInput
							stop={stop}
							updateColorStop={updateColorStop}
							removeColorStop={removeColorStop}
						/>
						{/* add the plus button if not the final color stop */}
						{stop.id !== 2 ? (
							<button onClick={() => addColorStop(stop.id)}>
								<PiPlusCircleLight fontSize="30px" />
							</button>
						) : null}
					</div>
				))}
			</div>
		</div>
	);
}

export default CustomGradient;
