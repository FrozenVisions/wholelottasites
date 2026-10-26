import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageHero, Section, Heading, WhyGrid, WhatsIncluded, ProblemsGrid, OfferCards } from "@/components/site/Sections";
import { Button } from "@/components/ui/button";
import { SiteLinks } from "@/components/site/SiteLinks";
import { seo } from "@/lib/site-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";

export const Route = createFileRoute("/services")({
  head: () => ({
    ...seo(
      "/services",
      "Websites, Fixes, Google & Care | WholeLottaSites",
      "New websites £500. Fixes typically £150–£400. Google Business Profile £149. Optional care £29–£50. Chris Faulkes, Mansfield. No ranking promises.",
    ),
    scripts: [jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]))],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Websites, fixes, Google and care." lead="A new small-business website is still £500, built from scratch, with a free mock-up first. The other three are a fix, your Google Business Profile, and optional monthly care." crumbs={[{ name: "Home", href: "/" }, { name: "Services" }]} />
      <Section className="!pt-4">
        <Heading eyebrow="Four offers" title="The job that matches where you are." lead="You buy and own the domain. You stay the owner of your Google listing. Care is optional. I don’t promise a ranking." />
        <OfferCards />
        <p className="mt-8 max-w-3xl text-muted-foreground">
          Prefer them together? Fix + care, Site + Google Business Profile, Fix + Google Business Profile, or Full (a site or a fix, Google management, and care) are on the{" "}
          <Link to="/pricing" hash="bundles" className="font-semibold text-primary hover:underline">pricing page</Link>.
        </p>
      </Section>
      <Section muted>
        <Heading eyebrow="Built from scratch" title="Why a new site has no template." lead="Templates are built for everyone, so they fit no one perfectly. Every new WholeLottaSites website starts from a blank page." />
        <WhyGrid />
      </Section>
      <Section>
        <WhatsIncluded />
        <p className="mt-8 max-w-3xl text-muted-foreground">
          Not sure which pages you need? Read <Link to="/blog/$slug" params={{ slug: "what-a-small-business-website-needs" }} className="font-semibold text-primary hover:underline">what a small business website needs</Link>, or browse <Link to="/websites-for" className="font-semibold text-primary hover:underline">websites by type of business</Link>.
        </p>
      </Section>
      <Section muted>
        <Heading eyebrow="Quick check" title="Is your website costing you customers?" lead="If the answer is yes, start with a free fix audit. I’ll send screenshots and 3–5 issues before a price." />
        <ProblemsGrid />
        <div className="mt-8">
          <Button asChild size="lg"><Link to="/contact" hash="fix-audit">Get a free fix audit</Link></Button>
        </div>
        <div className="mt-16">
          <Heading eyebrow="Related" title="Rebuilds, phones and first sites." />
          <SiteLinks current="/services" />
        </div>
      </Section>
    </>
  );
}

