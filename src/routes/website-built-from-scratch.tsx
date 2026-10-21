import { createFileRoute } from "@tanstack/react-router";
import { IntentView, intentHead } from "@/components/site/IntentView";

export const Route = createFileRoute("/website-built-from-scratch")({
  head: () => intentHead("website-built-from-scratch"),
  component: function FromScratchPage() {
    return <IntentView slug="website-built-from-scratch" />;
  },
});
