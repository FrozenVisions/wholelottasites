import { createFileRoute } from "@tanstack/react-router";
import { MiniFixOffer } from "@/components/site/MiniFix";
import { PageHero, Section, PricingCards, DomainNote, PaymentPlans, WhatsIncluded } from "@/components/site/Sections";
import { Comparison } from "@/components/site/Showcase";
import { seo } from "@/lib/site-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    ...seo(
      "/pricing",
      "Small Business Website Cost | £500 or a £100 Mini-Fix",
      "A full small-business website for £500, or a £100 East Midlands mini-fix: a short audit and one fix on a live site. Rescue work is quoted separately.",
    ),
    scripts: [jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]))],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Small business website cost." lead="A full small-business website for £500, with payment plans if you’d rather spread the cost. If the site is already live in the East Midlands and only needs one fix, that’s £100. Bigger projects are quoted individually." crumbs={[{ name: "Home", href: "/" }, { name: "Pricing" }]} />
      <Section className="!pt-4">
        <PricingCards />
        <div className="mt-16">
          <MiniFixOffer />
        </div>
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

