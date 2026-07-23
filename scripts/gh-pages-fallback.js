import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientDir = path.join(__dirname, '..', 'build', 'client');
const indexPath = path.join(clientDir, 'index.html');
const fallbackPath = path.join(clientDir, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, fallbackPath);
  console.log('Copied index.html to 404.html for SPA routing on GitHub Pages.');
}
