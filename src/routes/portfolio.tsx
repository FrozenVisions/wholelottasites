import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ProjectGrid } from "@/components/site/Sections";
import { CaseStudies } from "@/components/site/CaseStudies";
import { caseStudies, projects, seo } from "@/lib/site-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    ...seo(
      "/portfolio",
      "Web Design Portfolio | WholeLottaSites, Mansfield",
      "Case studies of SafePlate, WholeLottaVinyl and Vinyl Buyback, plus example designs. Chris Faulkes, a web designer in Mansfield, built and runs these sites.",
    ),
    scripts: [jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }]))],
  }),
  component: Portfolio,
});

function Portfolio() {
  const examples = projects.filter((project) => !project.url);
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Recent web design work." lead="Case studies of the sites I built and run, then example designs. Screenshots only. Live links are shown for SafePlate and WholeLottaVinyl." crumbs={[{ name: "Home", href: "/" }, { name: "Portfolio" }]} />
      <Section className="!pt-4">
        <p className="max-w-3xl rounded-lg border bg-card px-5 py-4 text-base text-foreground">
          SafePlate, WholeLottaVinyl and Vinyl Buyback are built and run by Chris.
        </p>
        <h2 className="mt-12 text-3xl md:text-4xl">Sites I built and run.</h2>
        <CaseStudies items={caseStudies} />
        <h2 className="mt-20 text-3xl md:text-4xl">Example designs.</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Screenshots of designs. These are not live sites, so there is no link to visit.</p>
        <ProjectGrid items={examples} detailed />
      </Section>
    </>
  );
}

