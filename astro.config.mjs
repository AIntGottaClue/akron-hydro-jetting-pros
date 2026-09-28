import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://topekahydrojetting.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
