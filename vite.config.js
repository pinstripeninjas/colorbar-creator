import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/colorbar-creator/',
	server: {
		port: 5174,
	},
});
