import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'public',
  plugins: [react()],
  base: '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
