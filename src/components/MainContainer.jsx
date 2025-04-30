import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { contentConfig } from '../config/contentConfig';

function MainContainer() {
	const { appState } = useContext(AppContext);
	const mainContent = appState.mainContent;

	// find the matching id in contentConfig
	const contentItem = contentConfig.find((item) => item.id === mainContent);
	const renderedComponent = contentItem?.component;

	return (
		<main className="main-content">
			<h1 style={{ marginBottom: '1rem' }}>{contentItem.title}</h1>
			{renderedComponent ? (
				renderedComponent
			) : (
				<div className="error-message">Component not found</div>
			)}
		</main>
	);
}

export default MainContainer;
