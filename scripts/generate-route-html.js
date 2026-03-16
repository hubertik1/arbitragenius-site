const fs = require('fs');
const path = require('path');
const routeMetadata = require('../src/seo/routeMetadata.json');

const SITE_URL = 'https://arbitragenius.hubertik.com';
const buildDir = path.resolve(__dirname, '..', 'build');
const templatePath = path.join(buildDir, 'index.html');

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function replaceTag(html, regex, replacement) {
  if (!regex.test(html)) {
    throw new Error(`Could not find tag for pattern: ${regex}`);
  }

  return html.replace(regex, replacement);
}

function injectSeo(html, route) {
  const canonical = new URL(route.path, SITE_URL).toString();
  const image = new URL(route.image, SITE_URL).toString();
  const robots = route.robots || 'index,follow';

  let result = html;
  result = replaceTag(result, /<title>.*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
  result = replaceTag(result, /<meta name="description" content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeHtml(route.description)}" />`);
  result = replaceTag(result, /<meta name="robots" content="[^"]*"\s*\/?>/i, `<meta name="robots" content="${escapeHtml(robots)}" />`);
  result = replaceTag(result, /<link rel="canonical" href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${escapeHtml(canonical)}" />`);
  result = replaceTag(result, /<meta property="og:title" content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escapeHtml(route.title)}" />`);
  result = replaceTag(result, /<meta property="og:description" content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escapeHtml(route.description)}" />`);
  result = replaceTag(result, /<meta property="og:url" content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${escapeHtml(canonical)}" />`);
  result = replaceTag(result, /<meta property="og:image" content="[^"]*"\s*\/?>/i, `<meta property="og:image" content="${escapeHtml(image)}" />`);
  result = replaceTag(result, /<meta property="og:image:alt" content="[^"]*"\s*\/?>/i, `<meta property="og:image:alt" content="${escapeHtml(route.imageAlt)}" />`);
  result = replaceTag(result, /<meta name="twitter:title" content="[^"]*"\s*\/?>/i, `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`);
  result = replaceTag(result, /<meta name="twitter:description" content="[^"]*"\s*\/?>/i, `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`);
  result = replaceTag(result, /<meta name="twitter:image" content="[^"]*"\s*\/?>/i, `<meta name="twitter:image" content="${escapeHtml(image)}" />`);

  return result;
}

function writeRouteHtml(route, template) {
  const html = injectSeo(template, route);

  if (route.path === '/') {
    fs.writeFileSync(templatePath, html);
    return;
  }

  const routeDir = path.join(buildDir, route.path.replace(/^\/+/, ''));
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
}

function writeSitemap() {
  const urls = routeMetadata
    .filter((route) => route.includeInSitemap)
    .map((route) => `  <url>\n    <loc>${new URL(route.path, SITE_URL).toString()}</loc>\n  </url>`)
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemap);
}

function main() {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Build template not found at ${templatePath}`);
  }

  const template = fs.readFileSync(templatePath, 'utf8');
  routeMetadata.forEach((route) => writeRouteHtml(route, template));
  writeSitemap();
}

main();
