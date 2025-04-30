import MapContainer from './components/MapContainer';
import TurboColors from './components/TuboColors';
import OptionsContainer from './components/OptionsContainer';
import { AppContext } from './context/AppContext';
import { useContext } from 'react';

function App() {
	const { appState, setAppState } = useContext(AppContext);
	console.log('appState:', appState);

	return (
		<div className="app-container">
			<OptionsContainer />
			<div className="main-container">
				<main className="main-content">
					<TurboColors />
				</main>
				<MapContainer />
			</div>
		</div>
	);
}

export default App;
