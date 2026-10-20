import { createFileRoute } from "@tanstack/react-router";
import { NotFoundComponent } from "./__root";

// Prerendered to /not-found/ and copied to 404.html for GitHub Pages.
export const Route = createFileRoute("/not-found")({
  head: () => ({ meta: [{ title: "Page not found | WholeLottaSites" }, { name: "robots", content: "noindex" }] }),
  component: NotFoundComponent,
});
