import { createFileRoute } from "@tanstack/react-router";
import { PageHero, StepsBand } from "@/components/site/Sections";
import { seo } from "@/lib/site-data";

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    seo(
      "/how-it-works",
      "How It Works | WholeLottaSites",
      "Four simple steps: a free mock-up homepage, you approve it, your site is built from scratch within days, then I help you go live.",
    ),
  component: HowItWorks,
});

function HowItWorks() {
  return (
    <div className="bg-background">
      <PageHero eyebrow="How it works" title="From free mock-up to live website." lead="No strings attached until you’re happy with the design." />
      <div className="h-16" />
      <StepsBand />
    </div>
  );
}

