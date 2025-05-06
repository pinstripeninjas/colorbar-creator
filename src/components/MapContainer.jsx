import { useRef, useContext } from 'react';
import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import projDict from '../config/projection';
import {
	Projection,
	ShadedLayer,
	// configFields,
	Readout,
	Legend,
	DeckGLOverlay,
} from 'desi-graphics';
import { AppContext } from '../context/AppContext';
import temperatures from '../data/temp';
// import windMagnitude from '../data/wmag';
// import windDirection from '../data/wdir';

function MapContainer() {
	const { appState } = useContext(AppContext);
	const { cssColorsArray } = appState;

	const overlayRef = useRef();
	const mapWrapper = useRef();
	const mapRef = useRef();
	// Make the LonLatGrid of Data
	// This is HREF data sampled every 4 points (resLevel = 4)
	const resLevel = 4;
	const projection = new Projection(projDict, resLevel);
	projection.makeLonLatGrid();

	// Define colors, colorLevels, and contour levels (optional)
	// const field = 't2';
	// const colorInfo = configFields[field].colorBars.default;
	// const { colorType } = colorInfo;

	// Find the min and max values in the data
	let maxValue = -Infinity;
	let minValue = Infinity;

	// Format data (nulls to NaN)
	const data = new Float32Array(
		Object.values(temperatures).map((value) => {
			if (value === null) {
				return NaN;
			}
			maxValue = Math.max(maxValue, value);
			minValue = Math.min(minValue, value);
			return value;
		})
	);

	// Round minValue up to the next 10s place
	minValue = Math.ceil(minValue / 10) * 10;
	// Round maxValue down to the next 10s place
	maxValue = Math.floor(maxValue / 10) * 10;

	// set the color levels based on number of colors in cssColorsArray
	const numColors = cssColorsArray.length; // number of colors in cssColorsArray
	const colorLevels = Array.from(
		{ length: numColors - 1 }, // One less than numColors
		// round the value to the nearest integer
		(_, i) => Number((minValue + (i * (maxValue - minValue)) / (numColors - 2)).toFixed(0))
	);
	console.log('colorLevels:', colorLevels);

	const shadedLayer = new ShadedLayer({
		id: 'shadedLayer',
		beforeId: 'park_national_park',
		data,
		colors: cssColorsArray,
		colorLevels,
		colorType: 'scaleThreshold',
		projection,
		interpolateData: true,
		readout: [
			{
				data,
				prependText: 'Mean Temperature',
				decimals: 0,
				units: '°F',
				interpolate: true,
			},
		],
		legend: {
			type: 'staticBar', // 'staticBar', 'staticItems', 'dynamicItems'
			title: 'Temperature',
			units: '°F',
			colorbarTicks: 'byvalue',
			animatinospeed: 500,
			colorbar_lcap: true,
			colorbar_rcap: true,
		},
	});

	const layers = [shadedLayer];

	return (
		<div ref={mapWrapper} style={{ width: '100%', position: 'relative', height: '100%' }}>
			<Map
				initialViewState={{
					longitude: -97,
					latitude: 40,
					zoom: 4,
				}}
				ref={mapRef}
				antialias
				reuseMaps
				style={{ width: '100%', height: '100%' }}
				// mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
				mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
				// mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
			>
				<DeckGLOverlay overlayRef={overlayRef} layers={layers} interleaved />
				<Readout
					mapContainer={mapWrapper}
					overlayRef={overlayRef}
					title="Wed 06:00 am PST, Oct 21"
				/>
				<Legend overlayRef={overlayRef} />
			</Map>
		</div>
	);
}

export default MapContainer;
