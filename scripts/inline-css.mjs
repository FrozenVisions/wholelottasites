// Post-build: inline the site stylesheet into every prerendered HTML page so
// first paint doesn't wait on an extra CSS request (helps mobile Lighthouse).
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = "dist/client";
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
let n = 0;
for (const file of walk(root).filter((f) => f.endsWith(".html"))) {
  let html = readFileSync(file, "utf8");
  html = html.replace(/<link rel="stylesheet" href="([^"]+\.css)"[^>]*>/g, (m, href) => {
    const rel = href.replace(/^.*?\/assets\//, "assets/");
    try {
      const css = readFileSync(join(root, rel), "utf8").replace(/url\((?!["']?(?:data:|https?:|\/))["']?([^)"']+)["']?\)/g, (u, p) => `url(${href.replace(/[^/]+$/, "")}${p})`);
      n++;
      return `<style>${css}</style>`;
    } catch {
      return m;
    }
  });
  writeFileSync(file, html);
}
console.log(`inline-css: inlined ${n} stylesheet(s)`);
