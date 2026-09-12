import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base stays '/'. On a One9x site you are at the root of your own subdomain;
  // a base left over from a GitHub Pages project subdirectory is the usual
  // cause of a blank page with a 404 on every asset.
});
