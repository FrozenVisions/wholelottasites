import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, PricingCards, DomainNote, PaymentPlans, WhatsIncluded } from "@/components/site/Sections";
import { Comparison } from "@/components/site/Showcase";
import { seo } from "@/lib/site-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    ...seo(
      "/pricing",
      "Small Business Website Cost | £500 or Pay Monthly",
      "The cost of a small business website: £500, or a pay-monthly plan that totals the same. See what’s included, and what is extra.",
    ),
    scripts: [jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]))],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Small business website cost." lead="A full small-business website for £500, with payment plans if you’d rather spread the cost. Bigger projects are quoted individually." crumbs={[{ name: "Home", href: "/" }, { name: "Pricing" }]} />
      <Section className="!pt-4">
        <PricingCards />
        <DomainNote />
        <PaymentPlans />
      </Section>
      <Section muted>
        <WhatsIncluded />
      </Section>
      <Section>
        <Comparison />
      </Section>
    </>
  );
}

