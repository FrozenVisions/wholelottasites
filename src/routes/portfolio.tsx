import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ProjectGrid } from "@/components/site/Sections";
import { projects, seo } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio")({
  head: () =>
    seo(
      "/portfolio",
      "Portfolio | WholeLottaSites",
      "Websites designed and built from scratch by Chris Faulkes: a vinyl record shop, a buy-it-now-or-bid marketplace, an allergy-safe restaurant finder and more.",
    ),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Recent work." lead="Every one of these was built from scratch for its owner." />
      <Section className="!pt-4">
        <ProjectGrid items={projects} detailed />
      </Section>
    </>
  );
}

