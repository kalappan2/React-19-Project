import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-19-Project/', // ✅ must match GitHub repo name exactly!
  plugins: [react()],
});
