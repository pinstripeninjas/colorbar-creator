import MapContainer from './components/MapContainer';
import OptionsContainer from './components/OptionsContainer';
import MainContainer from './components/MainContainer';

function App() {
	return (
		<div className="app-container">
			<div className="main-container">
				<MainContainer />
				<MapContainer />
			</div>
		</div>
	);
}

export default App;
