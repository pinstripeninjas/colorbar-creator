import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

function MapExample() {
	return (
		<div style={{ width: '100%', position: 'relative', height: '600px' }}>
			<Map
				initialViewState={{
					longitude: -100,
					latitude: 30,
					zoom: 4,
				}}
				style={{ width: '100%', height: '100%' }}
				mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
			/>
		</div>
	);
}

export default MapExample;
