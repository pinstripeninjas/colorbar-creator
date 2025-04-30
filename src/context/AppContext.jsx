import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
	const [appState, setAppState] = useState({
		theme: 'light',
	});

	return <AppContext.Provider value={{ appState, setAppState }}>{children}</AppContext.Provider>;
}
