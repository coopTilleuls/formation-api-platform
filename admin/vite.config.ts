import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// L'admin est servie par Caddy sur https://localhost/admin (reverse proxy vers ce serveur Vite).
export default defineConfig({
  base: '/admin/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
});
