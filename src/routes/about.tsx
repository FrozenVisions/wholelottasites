import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, StepsBand } from "@/components/site/Sections";
import { AboutChris } from "@/components/site/Showcase";
import { seo } from "@/lib/site-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...seo(
      "/about",
      "Chris Faulkes, Web Designer in Mansfield | WholeLottaSites",
      "Chris Faulkes is a web designer in Mansfield, Nottinghamshire. He built and runs WholeLottaVinyl, SafePlate and Vinyl Buyback. Custom small business websites, £500.",
    ),
    scripts: [jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]))],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Hi, I’m Chris — a web designer in Mansfield." lead="I design and build websites from scratch for UK small businesses. No templates, no agency — just me, from free mock-up to launch." crumbs={[{ name: "Home", href: "/" }, { name: "About" }]} />
      <Section>
        <AboutChris full />
      </Section>
      <StepsBand />
    </>
  );
}
