import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";
import { Section, Heading, CheckList, LandingCta, PriceBlock, LandingFaqs, OtherTrades, StepsBand, faqJsonLd } from "@/components/site/Landing";
import { seo } from "@/lib/site-data";
import { mansfieldFaqs, PRICE_FAQ } from "@/lib/landing-data";

const faqs = [...mansfieldFaqs, PRICE_FAQ];

export const Route = createFileRoute("/web-design-mansfield")({
  head: () => ({
    ...seo("/web-design-mansfield", "Web Design Mansfield | Local Web Designer, £500 Websites", "Web design in Mansfield, Nottinghamshire, by local web designer Chris Faulkes. Custom small business websites for £500, a free mock-up and face-to-face meetings."),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: Mansfield,
});

function Mansfield() {
  return (
    <>
      <PageHero eyebrow="Web design in Mansfield" title="Web design in Mansfield, Nottinghamshire." lead="I’m Chris, a web designer based in Mansfield. I build websites from scratch for local small businesses, and we can sit down and plan yours face to face." />
      <Section className="!pt-4">
        <div className="max-w-3xl space-y-5 text-lg text-muted-foreground">
          <p>Plenty of small businesses would rather talk to a real person than fill in forms with a faraway agency. Because I’m based in Mansfield, I can meet you in person, in Mansfield or elsewhere in Nottinghamshire, to look at what you have now, talk about what you want, and go through your free mock-up together.</p>
          <p>You deal with me from start to finish. I design and build the site, help you buy and connect your own domain, and help you get it showing up in local searches, including setting up your free Google Business Profile.</p>
        </div>
        <LandingCta label="" />
      </Section>
      <Section muted>
        <Heading eyebrow="Why go local" title="What working with a Mansfield web designer looks like." />
        <CheckList items={[
          "Meet in person in Mansfield or around Nottinghamshire, or by phone or video if you prefer.",
          "One person to deal with, from the free mock-up to launch and beyond.",
          "Your site written for the towns you actually serve, so local customers can find you.",
          "Help with your Google Business Profile and keeping your details consistent online.",
          "A custom site built from scratch, not a template, for £500.",
        ]} />
      </Section>
      <StepsBand />
      <Section>
        <PriceBlock />
        <LandingCta label="business" />
      </Section>
      <Section muted>
        <Heading eyebrow="FAQ" title="Common questions." />
        <LandingFaqs faqs={faqs} />
        <Heading eyebrow="By trade" title="Websites for local trades." />
        <OtherTrades />
      </Section>
    </>
  );
}
