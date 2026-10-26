import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Heading, OfferCards, BundleStrip, DomainNote, PaymentPlans, WhatsIncluded } from "@/components/site/Sections";
import { Comparison } from "@/components/site/Showcase";
import { seo } from "@/lib/site-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    ...seo(
      "/pricing",
      "Pricing | Sites, Fixes, Google & Care | WholeLottaSites",
      "New website £500. Fixes typically £150–£400 after a free audit. Google Business Profile setup £149. Monthly care £29–£50. No ranking promises.",
    ),
    scripts: [jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]))],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Websites, fixes, Google and care." lead="A new small-business website is £500. Fixes, Google Business Profile and monthly care are priced on their own. Bundles are those pieces, quoted together." crumbs={[{ name: "Home", href: "/" }, { name: "Pricing" }]} />
      <Section id="offers" className="!pt-4">
        <Heading eyebrow="Four offers" title="The price before you start." lead="Ranges are typical. A fix is quoted after a free audit. Nothing here is a promise of a Google ranking." />
        <OfferCards />
        <BundleStrip />
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

