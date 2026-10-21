import { createFileRoute } from "@tanstack/react-router";
import { NotFoundComponent } from "./__root";
import { seo } from "@/lib/site-data";

const share = seo(
  "/not-found",
  "Page not found | WholeLottaSites",
  "This page doesn’t exist. WholeLottaSites builds small-business websites from scratch in Mansfield.",
);

// Prerendered to /not-found/ and copied to 404.html for GitHub Pages.
export const Route = createFileRoute("/not-found")({
  head: () => ({
    meta: [...share.meta, { name: "robots", content: "noindex" }],
  }),
  component: NotFoundComponent,
});
