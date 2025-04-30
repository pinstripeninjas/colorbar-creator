import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

function MapContainer() {
	return (
		<div style={{ width: '100%', position: 'relative', height: '100%' }}>
			<Map
				initialViewState={{
					longitude: -90,
					latitude: 32,
					zoom: 3,
				}}
				style={{ width: '100%', height: '100%' }}
				// mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
				mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
				// mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
			/>
		</div>
	);
}

export default MapContainer;
