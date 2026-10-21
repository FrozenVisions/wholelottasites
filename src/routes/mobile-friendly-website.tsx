import { createFileRoute } from "@tanstack/react-router";
import { IntentView, intentHead } from "@/components/site/IntentView";

export const Route = createFileRoute("/mobile-friendly-website")({
  head: () => intentHead("mobile-friendly-website"),
  component: function MobileFriendlyPage() {
    return <IntentView slug="mobile-friendly-website" />;
  },
});
