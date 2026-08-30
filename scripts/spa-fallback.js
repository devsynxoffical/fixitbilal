/**
 * Creates a physical index.html under each client route so refreshes
 * work on hosts (e.g. LiteSpeed/cPanel) that ignore SPA rewrite rules.
 */
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const indexHtml = path.join(buildDir, 'index.html');

const routes = [
  'services',
  'portfolio',
  'about',
  'contact',
  'wpc-outdoor-decking',
];

if (!fs.existsSync(indexHtml)) {
  console.error('spa-fallback: build/index.html not found. Run react-scripts build first.');
  process.exit(1);
}

for (const route of routes) {
  const dir = path.join(buildDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(indexHtml, path.join(dir, 'index.html'));
  console.log(`spa-fallback: ${route}/index.html`);
}

console.log('spa-fallback: done');
