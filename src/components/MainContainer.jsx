import { AppContext } from '../context/AppContext';
import ColorbarExplorer from './ColorbarExplorer';

function MainContainer() {
	return (
		<main className="main-content">
			<nav>
				<h1 className="gradient-text">Colorbar Creator</h1>
			</nav>
			<ColorbarExplorer />
		</main>
	);
}

export default MainContainer;
