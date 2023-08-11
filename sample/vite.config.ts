import { CorsOptions, defineConfig } from 'vite'
import fs from 'fs';
import { SecureContextOptions } from 'tls';

const HOST = 'sample';
const PORT = 5173;
const VHOST_FQDN = process.env.VHOST_FQDN ?? "test.test";
const HTTPS_OPTIONS: SecureContextOptions = {
  key: fs.readFileSync(`../certs/${VHOST_FQDN}/key.pem`),
  cert: fs.readFileSync(`../certs/${VHOST_FQDN}/cert.pem`)
};
const PROTOCOL = 'https://';
const CORS_OPTION: CorsOptions = {
  origin: `${PROTOCOL}${VHOST_FQDN}`
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: HOST,
    origin: `${PROTOCOL}${VHOST_FQDN}`,
    https: HTTPS_OPTIONS,
    hmr: {
      host: VHOST_FQDN,
      port: PORT
    },
    strictPort: true,
    cors: CORS_OPTION
  },
  preview: {
    host: HOST,
    port: PORT,
    https: HTTPS_OPTIONS,
    strictPort: true,
    cors: CORS_OPTION
  }
});
