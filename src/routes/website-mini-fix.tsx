import { createFileRoute } from "@tanstack/react-router";
import { LandingFaqs, faqJsonLd } from "@/components/site/Landing";
import { MiniFixOffer } from "@/components/site/MiniFix";
import { PageHero, Section, Heading } from "@/components/site/Sections";
import { SiteLinks } from "@/components/site/SiteLinks";
import { miniFixFaqs } from "@/lib/mini-fix";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";
import { seo } from "@/lib/site-data";

export const Route = createFileRoute("/website-mini-fix")({
  head: () => ({
    ...seo(
      "/website-mini-fix",
      "East Midlands £50 + VAT Website Mini-Fix | WholeLottaSites",
      "A £50 + VAT website mini-fix for a live East Midlands site: a short audit and one concrete fix. Not a redesign. Rescue and rebuilds are quoted separately.",
    ),
    scripts: [
      jsonLd(breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "East Midlands £50 + VAT website mini-fix", path: "/website-mini-fix" },
      ])),
      jsonLd(faqJsonLd(miniFixFaqs)),
    ],
  }),
  component: WebsiteMiniFix,
});

function WebsiteMiniFix() {
  return (
    <>
      <PageHero
        eyebrow="East Midlands"
        title="£50 + VAT website mini-fix."
        lead="A short audit and one concrete fix on a site that’s already live. Not a redesign, and not a full rebuild."
        crumbs={[{ name: "Home", href: "/" }, { name: "£50 + VAT website mini-fix" }]}
      />
      <Section className="!pt-4">
        <MiniFixOffer showHeading={false} />
      </Section>
      <Section muted>
        <Heading eyebrow="FAQ" title="Common questions." />
        <LandingFaqs faqs={miniFixFaqs} />
        <div className="mt-16">
          <Heading eyebrow="Elsewhere on the site" title="Related pages." />
          <SiteLinks current="/website-mini-fix" />
        </div>
      </Section>
    </>
  );
}
