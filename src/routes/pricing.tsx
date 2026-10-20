import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Heading, PricingCards, DomainNote, IncludedList } from "@/components/site/Sections";
import { Comparison } from "@/components/site/Showcase";
import { seo } from "@/lib/site-data";

export const Route = createFileRoute("/pricing")({
  head: () =>
    seo(
      "/pricing",
      "Small Business Website £500 – Pricing | WholeLottaSites",
      "A full custom small business website for £500, built from scratch. Bigger businesses from around £1,200. Your own domain costs around £5–£10.",
    ),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Clear, honest website prices." lead="A full small-business website for £500. Bigger projects are quoted individually." />
      <Section className="!pt-4">
        <PricingCards />
        <DomainNote />
      </Section>
      <Section muted>
        <Heading eyebrow="The £500 package" title="What’s included." />
        <IncludedList />
      </Section>
      <Section>
        <Comparison />
      </Section>
    </>
  );
}

