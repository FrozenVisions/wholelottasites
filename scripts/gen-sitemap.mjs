// Post-build: generate dist/client/sitemap.xml from the core pages plus the landing page data.
import { readFileSync, writeFileSync } from "node:fs";
const SITE = "https://wholelottasites.co.uk";
const data = JSON.parse(readFileSync("src/data/landing-slugs.json", "utf8"));
const today = new Date().toISOString().slice(0, 10);
const core = [["/", "1.0"], ["/services", "0.9"], ["/pricing", "0.9"], ["/portfolio", "0.8"], ["/how-it-works", "0.7"], ["/faq", "0.7"], ["/contact", "0.8"], ["/about", "0.7"]];
const pages = [...core, [data.hub, "0.8"], ...data.locations.map((p) => [p, "0.8"]), ...data.trades.map((s) => [`${data.hub}/${s}`, "0.7"])];
const url = (p) => `${SITE}${p === "/" ? "/" : p + "/"}`;
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(([p, pr]) => `  <url><loc>${url(p)}</loc><lastmod>${today}</lastmod><priority>${pr}</priority></url>`).join("\n")}\n</urlset>\n`;
writeFileSync("dist/client/sitemap.xml", xml);
console.log(`sitemap: ${pages.length} urls`);
