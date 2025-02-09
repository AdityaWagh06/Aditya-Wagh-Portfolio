import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Aditya-Wagh-Portfolio/',
  build: {
    outDir: 'dist',
  }
});
