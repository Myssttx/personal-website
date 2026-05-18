import { defineConfig } from 'vite';

// Repo will be served at https://Myssttx.github.io/personal-website/
// so all built asset URLs need the /personal-website/ prefix.
export default defineConfig({
  base: '/personal-website/',
});
