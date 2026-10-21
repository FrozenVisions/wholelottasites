import { createFileRoute } from "@tanstack/react-router";
import { IntentView, intentHead } from "@/components/site/IntentView";

export const Route = createFileRoute("/website-redesign")({
  head: () => intentHead("website-redesign"),
  component: function RedesignPage() {
    return <IntentView slug="website-redesign" />;
  },
});
