import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";
import { Section, Heading, LandingCta, PriceBlock, LandingFaqs, faqJsonLd } from "@/components/site/Landing";
import { seo } from "@/lib/site-data";
import { trades, PRICE_FAQ, type Faq } from "@/lib/landing-data";

const hubFaqs: Faq[] = [
  ["My trade isn’t listed. Can you still help?", "Yes. These pages cover common trades, but every site is built from scratch around the business, whatever you do. Ask for a free mock-up and tell me about your work."],
  PRICE_FAQ,
];

export const Route = createFileRoute("/websites-for/")({
  head: () => ({
    ...seo("/websites-for", "Websites for Trades & Small Businesses | WholeLottaSites", "Custom websites for plumbers, electricians, builders, decorators, salons, cafés, cleaners and gardeners. Built from scratch for £500, with payment plans."),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(hubFaqs)) }],
  }),
  component: Hub,
});

function Hub() {
  return (
    <>
      <PageHero eyebrow="Websites by trade" title="Websites for trades and small businesses." lead="Every trade needs something different from its website. Here’s what I build for each one, all from scratch, with no templates." />
      <Section className="!pt-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trades.map((t) => (
            <Link key={t.slug} to="/websites-for/$slug" params={{ slug: t.slug }} className="group rounded-lg border-t-4 border-primary bg-card p-7 shadow-sm transition hover:shadow-md">
              <h2 className="font-display text-2xl font-semibold group-hover:text-primary">Websites for {t.name.toLowerCase()}</h2>
              <p className="mt-3 text-muted-foreground">{t.lead}</p>
              <p className="mt-4 text-sm font-semibold text-primary">Key features: {t.features.slice(0, 3).map((f) => f.title.toLowerCase()).join(", ")}</p>
            </Link>
          ))}
          <Link to="/web-design-mansfield" className="group rounded-lg bg-navy p-7 text-navy-foreground shadow-sm">
            <h2 className="font-display text-2xl font-semibold group-hover:text-copper">Web design in Mansfield</h2>
            <p className="mt-3 text-navy-foreground/80">Based in Mansfield? We can meet in person to talk through your site.</p>
          </Link>
        </div>
        <LandingCta label="" />
      </Section>
      <Section muted><PriceBlock /></Section>
      <Section>
        <Heading eyebrow="FAQ" title="Common questions." />
        <LandingFaqs faqs={hubFaqs} />
      </Section>
    </>
  );
}
