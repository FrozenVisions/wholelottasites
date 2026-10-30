import { createFileRoute } from "@tanstack/react-router";
import { MiniFixOffer } from "@/components/site/MiniFix";
import { PageHero, Section, Heading, OfferCards, BundleStrip, DomainNote, PaymentPlans, WhatsIncluded, FoundingBanner, FoundingOfferPromo } from "@/components/site/Sections";
import { Comparison } from "@/components/site/Showcase";
import { newWebsitePricing, seo } from "@/lib/site-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    ...seo(
      "/pricing",
      "Pricing | £50/month or £200 + VAT | WholeLottaSites",
      "Founding client offer: £50/month inc VAT for 12 months (£600), or £200 + VAT (£240 inc VAT). East Midlands mini-fix £50 + VAT. Fixes typically £150–£400. Google setup £149. Care from £29.",
    ),
    scripts: [jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]))],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Websites, fixes, Google and care." lead={`${newWebsitePricing.founding} ${newWebsitePricing.monthlyPlain}. Or ${newWebsitePricing.upfront}. If the site is already live in the East Midlands and only needs one fix, that’s £50 + VAT. Wider fixes, Google Business Profile and monthly care are priced on their own. Bundles are those pieces, quoted together.`} crumbs={[{ name: "Home", href: "/" }, { name: "Pricing" }]} />
      <Section id="offers" className="!pt-4">
        <FoundingOfferPromo />
        <div className="mt-8">
          <FoundingBanner />
        </div>
        <Heading eyebrow="Four offers" title="The price before you start." lead="Ranges are typical. A fix is quoted after a free audit. Nothing here is a promise of a Google ranking." />
        <OfferCards />
        <BundleStrip />
        <div className="mt-16">
          <MiniFixOffer />
        </div>
        <DomainNote />
        <PaymentPlans showPayMonthlyFirst />
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

