import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";
import { Section, Heading, CheckList, LandingCta, PriceBlock, LandingFaqs, OtherTrades, StepsBand, faqJsonLd } from "@/components/site/Landing";
import { CONTACT } from "@/config";
import { careTierPrices, careTiers, newWebsiteOffer, newWebsitePricing, proofSites, seo } from "@/lib/site-data";
import { clientReviews } from "@/lib/reviews";
import { mansfieldFaqs, PRICE_FAQ } from "@/lib/landing-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";
import { SiteLinks } from "@/components/site/SiteLinks";

/** Live addresses already used as proof on the site. Omit any name that is not in that list. */
const liveWorkNames = ["wholelottavinyl.com", "safeplate.org.uk", "mcdecoratingni.co.uk", "pinkmoonrecords.co.uk"] as const;

const liveWork = liveWorkNames.flatMap((name) => {
  const site = proofSites.find((item) => item.name === name);
  return site ? [site] : [];
});

const linkClass = "font-semibold text-primary hover:underline";
const reviewCount: number = clientReviews.length;

const faqs = [...mansfieldFaqs, PRICE_FAQ];

export const Route = createFileRoute("/web-design-mansfield")({
  head: () => ({
    ...seo("/web-design-mansfield", "Web Designer Mansfield | £200 + VAT (£240 inc VAT) Websites | WholeLottaSites", "Web designer in Mansfield, Notts. Chris Faulkes builds custom small business websites for £200 + VAT (£240 inc VAT) and can meet in person."),
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
          <p>Plenty of small businesses would rather talk to a real person than fill in forms with a faraway agency. Because I’m based in Mansfield, I can meet you in person, in Mansfield or elsewhere in Nottinghamshire, to look at what you have now and talk about what you want. Before a deposit, you look at sample sites. You still pay the deposit to start, and that deposit is refundable until you approve the homepage design. The checks are below.</p>
          <p>You deal with me from start to finish. I design and build the site, help you connect a domain you own, and explain how to set up your free Google Business Profile so the name, address and phone match the site. That gives Google accurate information. It isn’t a promise of a search position.</p>
          <p>If the site is already live and you only need one thing fixed — a form, the mobile layout, speed, SSL or redirects, or the website link on your Google Business Profile — that’s the <a href="/website-mini-fix/" className="font-semibold text-primary hover:underline">£50 + VAT East Midlands mini-fix</a>. It covers Nottinghamshire, including Mansfield, plus Derbyshire, Leicestershire, Lincolnshire and Northamptonshire. It is not a new website. A new small-business site is still £200 + VAT (£240 inc VAT).</p>
          <p>People in and around Mansfield who want a website often search “web designer Mansfield”. That’s this page. Their customers search for the business itself — “plumber near me”, “café near me” and so on. Those are covered on the <a href="/websites-for/" className="font-semibold text-primary hover:underline">websites by type of business</a> pages, which explain the difference.</p>
        </div>
        <LandingCta label="" />
      </Section>
      <Section muted>
        <Heading eyebrow="Before you hire" title="How to check any web designer." lead="The same checks apply to me. A free drawing of your homepage, before you’ve agreed the job, is a sales picture." />
        <CheckList items={[
          "Open live sites, not a mock-up made for you before you’ve paid.",
          "You pay the deposit to start. There are no free mock-ups for unpaid leads.",
          "If the homepage design still isn’t right after reasonable revisions, the deposit comes back in full, before any further work.",
          "That refund ends once you approve the homepage design.",
          "Ask whose name the domain is in, and what you pay in year two.",
          "A clear site is not a promise of a Google position or a number of leads.",
        ]} />
      </Section>
      <Section>
        <Heading eyebrow="Why go local" title="What working with a Mansfield web designer looks like." />
        <CheckList items={[
          "Meet in person in Mansfield or around Nottinghamshire, or by phone or video if you prefer.",
          "One person to deal with, from the first conversation to launch and beyond.",
          "Your site written for the towns you actually serve, in plain text.",
          "Help with your Google Business Profile and keeping your details consistent online.",
          "A custom site built from scratch, not a template, for £200 + VAT (£240 inc VAT).",
          "A £50 + VAT mini-fix when a live local site only needs one concrete fix — not a redesign.",
        ]} />
      </Section>
      <Section>
        <Heading eyebrow="Before you pay" title="How to check any web designer (including me)." />
        <ol className="mt-10 max-w-3xl list-decimal space-y-8 pl-5 text-lg marker:font-display marker:font-bold marker:text-primary">
          <li className="pl-2">
            <h3 className="font-display text-xl font-semibold">Can you see live sites they built, and visit them?</h3>
            <p className="mt-2 text-muted-foreground">
              Open the sites. You can visit{" "}
              {liveWork.map((site, index) => (
                <span key={site.href}>
                  {index > 0 && (index === liveWork.length - 1 ? " and " : ", ")}
                  <a href={site.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {site.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </span>
              ))}
              . They are on the <a href="/portfolio/" className={linkClass}>portfolio</a> as well. No ranking or visit count is attached to them.
            </p>
          </li>
          <li className="pl-2">
            <h3 className="font-display text-xl font-semibold">Can you click through to real reviews?</h3>
            <p className="mt-2 text-muted-foreground">
              {reviewCount === 0 ? (
                <>
                  A review should be one you can open and read. This site shows no reviews yet. The <a href="/reviews/" className={linkClass}>reviews page</a> is where a review is published after the client has written it and agreed it can be shown.
                </>
              ) : (
                <>
                  A review should be one you can open and read. This site shows {reviewCount} {reviewCount === 1 ? "review" : "reviews"} so far, from{" "}
                  {clientReviews.map((review, index) => (
                    <span key={review.id}>
                      {index > 0 && (index === reviewCount - 1 ? " and " : ", ")}
                      {review.name} of{" "}
                      <a href={review.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {review.business}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </span>
                  ))}
                  . Read {reviewCount === 1 ? "it" : "them"} on the <a href="/reviews/" className={linkClass}>reviews page</a>.
                </>
              )}
            </p>
          </li>
          <li className="pl-2">
            <h3 className="font-display text-xl font-semibold">Is there a real name, a phone number and an address?</h3>
            <p className="mt-2 text-muted-foreground">
              {CONTACT.name}, {CONTACT.location}. Phone <a href={CONTACT.phoneHref} className={linkClass}>{CONTACT.phoneDisplay}</a>. That is the name, phone number and address published on this site.
            </p>
          </li>
          <li className="pl-2">
            <h3 className="font-display text-xl font-semibold">Who owns the domain and the site afterwards?</h3>
            <p className="mt-2 text-muted-foreground">
              You do. The domain is registered in your name, and I help you point it at the site. You can take a full handover of a site I built and look after it yourself.
            </p>
          </li>
          <li className="pl-2">
            <h3 className="font-display text-xl font-semibold">What do the monthly costs cover, and how do you leave?</h3>
            <p className="mt-2 text-muted-foreground">
              Pay monthly is {newWebsitePricing.monthlyPlain}. {newWebsitePricing.notCredit} Paying once is {newWebsitePricing.upfront}. {newWebsitePricing.domain} A founding-client website includes {newWebsiteOffer.freeCareMonths} months free care, then optional care from {careTiers[0].priceLabel}/month ({careTierPrices}). Essential keeps hosting and the domain paid and running, with updates, backups, small changes and fixes. Growth and Pro add blog posts. You can take a full handover instead of care. Care is not a condition of paying for the build.
            </p>
          </li>
        </ol>
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
