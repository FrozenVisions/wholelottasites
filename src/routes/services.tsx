import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Heading, WhyGrid, IncludedList, ProblemsGrid } from "@/components/site/Sections";
import { seo } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () =>
    seo(
      "/services",
      "Small Business Web Design, No Templates | WholeLottaSites",
      "Custom small business websites built from scratch: mobile-friendly, secure HTTPS, SEO-ready, contact forms and Stripe payments. All for £500.",
    ),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Small business websites, built from scratch around you." lead="Every site is built from scratch to suit each client — no templates." />
      <Section>
        <Heading eyebrow="Built from scratch" title="Why no templates matters." lead="Templates are built for everyone, so they fit no one perfectly. Every WholeLottaSites website starts from a blank page." />
        <WhyGrid />
      </Section>
      <Section muted>
        <Heading eyebrow="The £500 package" title="What you get for £500." />
        <IncludedList />
      </Section>
      <Section>
        <Heading eyebrow="Quick check" title="Is your website costing you customers?" />
        <ProblemsGrid />
      </Section>
    </>
  );
}

