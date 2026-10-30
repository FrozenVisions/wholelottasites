import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";
import { Section, Heading, CheckList, LandingCta, PriceBlock, LandingFaqs, OtherTrades, StepsBand, faqJsonLd } from "@/components/site/Landing";
import { seo } from "@/lib/site-data";
import { mansfieldFaqs, PRICE_FAQ } from "@/lib/landing-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";
import { SiteLinks } from "@/components/site/SiteLinks";

const faqs = [...mansfieldFaqs, PRICE_FAQ];

export const Route = createFileRoute("/web-design-mansfield")({
  head: () => ({
    ...seo("/web-design-mansfield", "Web Designer Mansfield | £200 + VAT (£240 inc VAT) Websites | WholeLottaSites", "Web designer in Mansfield, Notts. Chris Faulkes builds custom small business websites for £200 + VAT (£240 inc VAT), can meet in person, and starts a design after the deposit."),
    scripts: [
      jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Web designer Mansfield", path: "/web-design-mansfield" }])),
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
    ],
  }),
  component: Mansfield,
});

function Mansfield() {
  return (
    <>
      <PageHero eyebrow="Mansfield" title="Web designer in Mansfield." lead="I’m Chris, a web designer based in Mansfield, Nottinghamshire. I build websites from scratch for local small businesses, and we can sit down and plan yours face to face." crumbs={[{ name: "Home", href: "/" }, { name: "Web designer Mansfield" }]} />
      <Section className="!pt-4">
        <div className="max-w-3xl space-y-5 text-lg text-muted-foreground">
          <p>Plenty of small businesses would rather talk to a real person than fill in forms with a faraway agency. Because I’m based in Mansfield, I can meet you in person, in Mansfield or elsewhere in Nottinghamshire, to look at what you have now and talk about what you want. A design for your business starts after the deposit. Before that, you can look at sample sites.</p>
          <p>You deal with me from start to finish. I design and build the site, help you connect a domain you own, and explain how to set up your free Google Business Profile so the name, address and phone match the site. That gives Google accurate information. It isn’t a promise of a search position.</p>
          <p>If the site is already live and you only need one thing fixed — a form, the mobile layout, speed, SSL or redirects, or the website link on your Google Business Profile — that’s the <a href="/website-mini-fix/" className="font-semibold text-primary hover:underline">£100 East Midlands mini-fix</a>. It covers Nottinghamshire, including Mansfield, plus Derbyshire, Leicestershire, Lincolnshire and Northamptonshire. It is not a new website. A new small-business site is still £200 + VAT (£240 inc VAT).</p>
          <p>People in and around Mansfield who want a website often search “web designer Mansfield”. That’s this page. Their customers search for the business itself — “plumber near me”, “café near me” and so on. Those are covered on the <a href="/websites-for/" className="font-semibold text-primary hover:underline">websites by type of business</a> pages, which explain the difference.</p>
        </div>
        <LandingCta label="" />
      </Section>
      <Section muted>
        <Heading eyebrow="Why go local" title="What working with a Mansfield web designer looks like." />
        <CheckList items={[
          "Meet in person in Mansfield or around Nottinghamshire, or by phone or video if you prefer.",
          "One person to deal with, from the first conversation to launch and beyond.",
          "Your site written for the towns you actually serve, in plain text.",
          "Help with your Google Business Profile and keeping your details consistent online.",
          "A custom site built from scratch, not a template, for £200 + VAT (£240 inc VAT).",
          "A £100 mini-fix when a live local site only needs one concrete fix — not a redesign.",
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
        <div className="mt-16">
          <Heading eyebrow="By type of business" title="Websites for local businesses." />
          <OtherTrades />
        </div>
        <div className="mt-16">
          <SiteLinks current="/web-design-mansfield" />
        </div>
      </Section>
    </>
  );
}
