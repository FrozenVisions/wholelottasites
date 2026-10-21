import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Heading, PricingCards, DomainNote, PaymentPlans, IncludedList } from "@/components/site/Sections";
import { Comparison } from "@/components/site/Showcase";
import { seo } from "@/lib/site-data";

export const Route = createFileRoute("/pricing")({
  head: () =>
    seo(
      "/pricing",
      "£500 Small Business Website – Prices & Payment Plans",
      "A full custom small business website for £500, built from scratch. Bigger businesses from around £1,200. Payment plans available. Your own domain costs around £5–£10.",
    ),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Clear, honest website prices." lead="A full small-business website for £500, with payment plans if you’d rather spread the cost. Bigger projects are quoted individually." />
      <Section className="!pt-4">
        <PricingCards />
        <DomainNote />
        <PaymentPlans />
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

