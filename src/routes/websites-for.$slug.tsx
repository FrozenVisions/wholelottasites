import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";
import { Section, Heading, FeatureGrid, CheckList, LandingCta, PriceBlock, LandingFaqs, OtherTrades, faqJsonLd } from "@/components/site/Landing";
import { seo } from "@/lib/site-data";
import { tradeBySlug, PRICE_FAQ } from "@/lib/landing-data";

export const Route = createFileRoute("/websites-for/$slug")({
  loader: ({ params }) => {
    const trade = tradeBySlug(params.slug);
    if (!trade) throw notFound();
    return trade;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const t = loaderData;
    return {
      ...seo(`/websites-for/${t.slug}`, t.title, t.description),
      scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd([...t.faqs, PRICE_FAQ])) }],
    };
  },
  component: TradeLanding,
});

function TradeLanding() {
  const t = Route.useLoaderData();

  return (
    <>
      <PageHero eyebrow={`Websites for ${t.name.toLowerCase()}`} title={t.h1} lead={t.lead} />
      <Section className="!pt-4">
        <div className="max-w-3xl space-y-5 text-lg text-muted-foreground">
          {t.intro.map((p) => <p key={p}>{p}</p>)}
        </div>
        <LandingCta label="" />
      </Section>
      <Section muted>
        <Heading eyebrow="Built for your trade" title={`What a website for ${t.name.toLowerCase()} needs.`} />
        <FeatureGrid items={t.features} />
      </Section>
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Heading eyebrow="Suggested pages" title="A sensible starting layout." />
            <CheckList items={t.pages} />
          </div>
          <div>
            <Heading eyebrow="Tips" title="Getting the most from it." />
            <CheckList items={t.tips} />
          </div>
        </div>
      </Section>
      <Section muted>
        <PriceBlock />
        <LandingCta label="business" />
      </Section>
      <Section>
        <Heading eyebrow="FAQ" title="Common questions." />
        <LandingFaqs faqs={[...t.faqs, PRICE_FAQ]} />
        <Heading eyebrow="Other trades" title="Websites for other small businesses." />
        <OtherTrades current={t.slug} />
      </Section>
    </>
  );
}
