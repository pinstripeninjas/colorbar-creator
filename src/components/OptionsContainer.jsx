import { useContext } from 'react';
import { contentConfig } from '../config/contentConfig';
import { AppContext } from '../context/AppContext';

function OptionsContainer() {
	const { appState, setAppState } = useContext(AppContext);

	const handleClick = (e, id) => {
		setAppState((prevState) => ({
			...prevState,
			mainContent: id,
		}));
	};

	return (
		<div className="options-container">
			<h1 className="header gradient-text">Colorbar Creator</h1>
			<div className="flex-column gap-4 p-4">
				{contentConfig.map((item) => (
					<button
						key={item.id}
						className={appState.mainContent === item.id ? 'selected' : ''}
						onClick={(e) => handleClick(e, item.id)}>
						{item.title}
					</button>
				))}
				<p>Battle Tested Options</p>
				<p>---------------------</p>
				<p>Upload Sample Data</p>
				<p>Color Levels Array</p>
			</div>
		</div>
	);
}

export default OptionsContainer;
