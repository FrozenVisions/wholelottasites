import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ProjectGrid } from "@/components/site/Sections";
import { projects, seo } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio")({
  head: () =>
    seo(
      "/portfolio",
      "Web Design Portfolio | WholeLottaSites, Mansfield",
      "Small business websites and example designs by Chris Faulkes, a web designer in Mansfield: a record shop, an allergy-safe restaurant finder and more.",
    ),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Recent web design work." lead="Live client websites and example designs — every one built from scratch, with no templates." />
      <Section className="!pt-4">
        <h2 className="sr-only">Projects</h2>
        <ProjectGrid items={projects} detailed />
      </Section>
    </>
  );
}

