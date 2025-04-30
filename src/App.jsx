import MapExample from './components/MapExample';
import TurboColors from './components/TuboColors';
import OptionsContainer from './components/OptionsContainer';

function App() {
	return (
		<div className="app-container">
			<OptionsContainer />
			<div className="main-container">
				<TurboColors />
				<MapExample />
			</div>
		</div>
	);
}

export default App;
