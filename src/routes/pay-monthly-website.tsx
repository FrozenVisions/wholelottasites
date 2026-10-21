import { createFileRoute } from "@tanstack/react-router";
import { IntentView, intentHead } from "@/components/site/IntentView";

export const Route = createFileRoute("/pay-monthly-website")({
  head: () => intentHead("pay-monthly-website"),
  component: function PayMonthlyPage() {
    return <IntentView slug="pay-monthly-website" />;
  },
});
