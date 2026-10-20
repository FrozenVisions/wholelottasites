import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, StepsBand } from "@/components/site/Sections";
import { AboutChris } from "@/components/site/Showcase";
import { seo } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () =>
    seo(
      "/about",
      "About Chris Faulkes – Web Designer in Mansfield",
      "Chris Faulkes is a Mansfield, Nottinghamshire web designer who built and runs WholeLottaVinyl and built SafePlate. Custom small business websites, £500.",
    ),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Hi, I’m Chris — a web designer in Mansfield." lead="I design and build websites from scratch for UK small businesses. No templates, no agency — just me, from free mock-up to launch." />
      <Section>
        <AboutChris full />
      </Section>
      <StepsBand />
    </>
  );
}
