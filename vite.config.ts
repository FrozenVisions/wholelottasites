// Plain Vite + TanStack Start config (no Lovable build tooling).
// Every route is prerendered to static HTML in dist/client, so it can be hosted anywhere.
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import landing from "./src/data/landing-slugs.json" with { type: "json" };

// BASE_PATH lets the same build run in a subfolder (e.g. /wholelottasites/ on github.io) or at the domain root ("/").
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      prerender: { enabled: true, crawlLinks: true, failOnError: true },
      pages: [
        { path: "/" }, { path: "/services" }, { path: "/portfolio" }, { path: "/pricing" },
        { path: "/how-it-works" }, { path: "/faq" }, { path: "/contact" }, { path: "/about" }, { path: "/not-found" },
        { path: landing.hub }, ...landing.locations.map((path) => ({ path })),
        ...landing.trades.map((s) => ({ path: `${landing.hub}/${s}` })),
      ],
    }),
    viteReact(),
  ],
});
