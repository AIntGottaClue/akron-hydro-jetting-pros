import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://akronhydrojetting.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
