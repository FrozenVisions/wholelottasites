// Post-build: generate dist/client/sitemap.xml and fail if it drifts from the built pages.
import { existsSync, readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const SITE = "https://wholelottasites.co.uk";
const landing = JSON.parse(readFileSync("src/data/landing-slugs.json", "utf8"));
const extra = JSON.parse(readFileSync("src/data/extra-pages.json", "utf8"));
const today = new Date().toISOString().slice(0, 10);
const posts = readdirSync("content/blog").filter((file) => file.endsWith(".md")).map((file) => `/blog/${file.replace(/\.md$/, "")}`);
const core = [
  ["/", "1.0"],
  ["/services", "0.9"],
  ["/pricing", "0.9"],
  ["/portfolio", "0.8"],
  ["/how-it-works", "0.7"],
  ["/faq", "0.7"],
  ["/contact", "0.8"],
  ["/about", "0.7"],
  ["/blog", "0.8"],
];
const pages = [
  ...core,
  ...extra.pages.map((path) => [path, "0.8"]),
  ...posts.map((path) => [path, "0.7"]),
  [landing.hub, "0.8"],
  ...landing.locations.map((path) => [path, "0.8"]),
  ...landing.trades.map((slug) => [`${landing.hub}/${slug}`, "0.7"]),
];
const seen = new Set();
const unique = [];
for (const row of pages) {
  if (seen.has(row[0])) continue;
  seen.add(row[0]);
  unique.push(row);
}

const fileFor = (path) => (path === "/" ? "dist/client/index.html" : `dist/client${path}/index.html`);
const missing = unique.filter(([path]) => !existsSync(fileFor(path)));
if (missing.length) {
  console.error("Sitemap URLs missing from the build:");
  for (const [path] of missing) console.error(`  ${path} -> ${fileFor(path)}`);
  process.exit(1);
}

const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name);
  return statSync(path).isDirectory() ? walk(path) : [path];
});
const built = walk("dist/client")
  .filter((file) => file.endsWith("/index.html"))
  .map((file) => (file === "dist/client/index.html" ? "/" : file.slice("dist/client".length, -"/index.html".length)));
const ignore = new Set(["/not-found"]);
const listed = new Set(unique.map(([path]) => path));
const extraBuilt = built.filter((path) => !ignore.has(path) && !listed.has(path));
if (extraBuilt.length) {
  console.error("Built pages missing from the sitemap:");
  for (const path of extraBuilt) console.error(`  ${path}`);
  process.exit(1);
}

const url = (path) => `${SITE}${path === "/" ? "/" : `${path}/`}`;
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${unique.map(([path, priority]) => `  <url><loc>${url(path)}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`).join("\n")}\n</urlset>\n`;
writeFileSync("dist/client/sitemap.xml", xml);
console.log(`sitemap: ${unique.length} urls`);
