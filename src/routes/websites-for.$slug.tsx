import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";
import { Section, Heading, FeatureGrid, CheckList, LandingCta, PriceBlock, LandingFaqs, OtherTrades, CustomerSearches, faqJsonLd } from "@/components/site/Landing";
import { RichText } from "@/components/site/RichText";
import { SiteLinks } from "@/components/site/SiteLinks";
import { seo } from "@/lib/site-data";
import { tradeBySlug } from "@/lib/landing-data";
import { pageFaqs } from "@/lib/customer-searches";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";

export const Route = createFileRoute("/websites-for/$slug")({
  loader: ({ params }) => {
    const trade = tradeBySlug(params.slug);
    if (!trade) throw notFound();
    return trade;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const trade = loaderData;
    const path = `/websites-for/${trade.slug}`;
    return {
      ...seo(path, trade.title, trade.description),
      scripts: [
        jsonLd(breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Websites", path: "/websites-for" },
          { name: trade.h1.replace(/\.$/, ""), path },
        ])),
        jsonLd(faqJsonLd(pageFaqs(trade))),
      ],
    };
  },
  component: TradeLanding,
});

function TradeLanding() {
  const trade = Route.useLoaderData();
  const faqs = pageFaqs(trade);

  return (
    <>
      <PageHero
        eyebrow={`Websites for ${trade.name.toLowerCase()}`}
        title={trade.h1}
        lead={trade.lead}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Websites", href: "/websites-for" },
          { name: trade.h1.replace(/\.$/, "") },
        ]}
      />
      <Section className="!pt-4">
        <div className="max-w-3xl space-y-5 text-lg text-muted-foreground">
          {trade.intro.map((paragraph) => <p key={paragraph}><RichText text={paragraph} /></p>)}
        </div>
        <LandingCta label="" />
      </Section>
      <Section muted>
        <Heading eyebrow="Built for this work" title={`What a website for ${trade.name.toLowerCase()} needs.`} />
        <FeatureGrid items={trade.features} />
      </Section>
      <Section>
        <CustomerSearches slug={trade.slug} name={trade.name} />
      </Section>
      <Section muted>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Heading eyebrow="Suggested pages" title="A sensible starting layout." />
            <CheckList items={trade.pages} />
          </div>
          <div>
            <Heading eyebrow="Tips" title="Getting the most from it." />
            <CheckList items={trade.tips} />
          </div>
        </div>
      </Section>
      <Section>
        <PriceBlock />
        <LandingCta label="business" />
      </Section>
      <Section muted>
        <Heading eyebrow="FAQ" title="Common questions." />
        <LandingFaqs faqs={faqs} />
        <div className="mt-16">
          <Heading eyebrow="Other businesses" title="Websites for other small businesses." />
          <OtherTrades current={trade.slug} />
        </div>
        <div className="mt-16">
          <Heading eyebrow="Also useful" title="Price, rebuilds and advice." />
          <SiteLinks current={`/websites-for/${trade.slug}`} />
        </div>
      </Section>
    </>
  );
}
