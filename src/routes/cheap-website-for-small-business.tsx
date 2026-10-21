import { createFileRoute } from "@tanstack/react-router";
import { IntentView, intentHead } from "@/components/site/IntentView";

export const Route = createFileRoute("/cheap-website-for-small-business")({
  head: () => intentHead("cheap-website-for-small-business"),
  component: function CheapWebsitePage() {
    return <IntentView slug="cheap-website-for-small-business" />;
  },
});
