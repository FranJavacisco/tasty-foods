import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/tasty-foods/', // Este debe ser el nombre exacto de tu repositorio
  plugins: [react()],
});
