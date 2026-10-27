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
      "Chris Faulkes in Mansfield builds small-business websites for £500, and also offers fixes, Google Business Profile and monthly care.",
    ),
    scripts: [jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]))],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Hi, I’m Chris — a web designer in Mansfield." lead="I design and build websites from scratch for UK small businesses. A new small site is £500. I also fix sites that aren’t working, set up Google Business Profile, and offer optional monthly care. No templates, no agency — just me." crumbs={[{ name: "Home", href: "/" }, { name: "About" }]} />
      <Section>
        <AboutChris full />
      </Section>
      <StepsBand />
    </>
  );
}
