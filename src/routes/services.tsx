import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { MiniFixOffer } from "@/components/site/MiniFix";
import { PageHero, Section, Heading, WhyGrid, WhatsIncluded, ProblemsGrid } from "@/components/site/Sections";
import { SiteLinks } from "@/components/site/SiteLinks";
import { seo } from "@/lib/site-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";

export const Route = createFileRoute("/services")({
  head: () => ({
    ...seo(
      "/services",
      "Small Business Web Design | No Templates | WholeLottaSites",
      "Small business web design, built from scratch, for £500. Or an East Midlands £100 mini-fix: a short audit and one concrete fix on a site that’s already live.",
    ),
    scripts: [jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]))],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Small business web design, from scratch." lead="Every site is built from scratch to suit each client — no templates. If the site is already live and only one thing is broken, there’s a £100 East Midlands mini-fix instead." crumbs={[{ name: "Home", href: "/" }, { name: "Services" }]} />
      <Section>
        <Heading eyebrow="Built from scratch" title="Why no templates matters." lead="Templates are built for everyone, so they fit no one perfectly. Every WholeLottaSites website starts from a blank page." />
        <WhyGrid />
      </Section>
      <Section muted>
        <MiniFixOffer />
      </Section>
      <Section>
        <WhatsIncluded />
        <p className="mt-8 max-w-3xl text-muted-foreground">
          Not sure which pages you need? Read <Link to="/blog/$slug" params={{ slug: "what-a-small-business-website-needs" }} className="font-semibold text-primary hover:underline">what a small business website needs</Link>, or browse <Link to="/websites-for" className="font-semibold text-primary hover:underline">websites by type of business</Link>.
        </p>
      </Section>
      <Section muted>
        <Heading eyebrow="Quick check" title="Is your website costing you customers?" />
        <ProblemsGrid />
        <div className="mt-16">
          <Heading eyebrow="Related" title="Fixes, rebuilds and first sites." />
          <SiteLinks current="/services" />
        </div>
      </Section>
    </>
  );
}

