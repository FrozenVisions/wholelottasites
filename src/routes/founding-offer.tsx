import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { BuyButtons, Heading, PageHero, Section, WhatsIncluded } from "@/components/site/Sections";
import { LandingFaqs, faqJsonLd } from "@/components/site/Landing";
import { SiteLinks } from "@/components/site/SiteLinks";
import { CONTACT } from "@/config";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";
import {
  foundingBonuses,
  newWebsiteOffer,
  newWebsitePricing,
  seo,
  steps,
} from "@/lib/site-data";
import type { Faq } from "@/lib/landing-data";

const foundingFaqs = [
  [
    "How much is cheap website design in Mansfield?",
    `On this site the founding price is ${newWebsitePricing.upfront}. Or ${newWebsitePricing.monthlyPlain}. ${newWebsitePricing.notCredit} ${newWebsitePricing.domain} I’m based in Mansfield and work with businesses across the East Midlands and the rest of the UK.`,
  ],
  [
    "Can I pay monthly for a website in Nottingham?",
    `Yes. ${newWebsitePricing.monthlyPlain}. That is a higher total than paying ${newWebsitePricing.upfront}. Monthly payments are taken by card through Stripe. They pay for the website. They are not monthly care, and they are not finance or credit.`,
  ],
  [
    "Is this only for Mansfield?",
    "No. Cheap website design in Mansfield is the local starting point, because that is where I live. The same founding offer is an affordable website for Nottingham, Derby, Leicester and the rest of the East Midlands, and for small businesses elsewhere in the UK. We can meet in Mansfield or Nottinghamshire, or work by phone and email.",
  ],
  [
    "Why is the price this low?",
    newWebsitePricing.founding,
  ],
  [
    "Do you promise a Google ranking or a number of leads?",
    "No. Proper local SEO keywords are written into the pages: what you do, and the towns you cover, in real text. The site is fast and mobile-first. That makes you easier to understand. It does not guarantee a position on Google or a number of enquiries.",
  ],
  [
    "What do I give in return?",
    "An honest Google review, and permission to show the site in the portfolio once it is live. I don’t write the review for you, and I don’t invent one. If you would rather not do that, this founding price is not the right offer.",
  ],
  [
    "How many founding clients are there?",
    `The offer is for the first ${newWebsiteOffer.foundingClients} clients. I don’t publish a live count of places left.`,
  ],
  [
    "What happens after the first year?",
    newWebsitePricing.domain,
  ],
] as const satisfies readonly Faq[];

export const Route = createFileRoute("/founding-offer")({
  head: () => ({
    ...seo(
      "/founding-offer",
      "Cheap Website Design Mansfield | Founding Offer | WholeLottaSites",
      "Cheap website design in Mansfield, and an affordable website for Nottingham and the East Midlands. Founding offer: £200 + VAT, or £50 a month inc VAT for 12 months. No ranking promises.",
    ),
    scripts: [
      jsonLd(breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Founding offer", path: "/founding-offer" },
      ])),
      jsonLd(faqJsonLd(foundingFaqs)),
    ],
  }),
  component: FoundingOfferPage,
});

function FoundingOfferPage() {
  return (
    <>
      <PageHero
        eyebrow="Founding client offer"
        title="Cheap website design in Mansfield."
        lead={`${newWebsitePricing.founding} A full small-business website with local SEO built in: ${newWebsitePricing.upfront}. Or a pay monthly website in Mansfield and beyond: ${newWebsitePricing.monthlyPlain}. The same offer is an affordable website for Nottingham, Derby, Leicester and the rest of the East Midlands.`}
        crumbs={[{ name: "Home", href: "/" }, { name: "Founding offer" }]}
        actions={<BuyButtons onNavy />}
      />
      <Section className="!pt-4">
        <Heading
          eyebrow="The offer"
          title="A small business website for the East Midlands, at a founding price."
          lead="I’m building up reviews, so the first clients get this price. It is a finished small site, not a teaser monthly fee and not a promise of page-one Google."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border-t-4 border-copper bg-card p-8 shadow-sm">
            <p className="eyebrow">Pay monthly</p>
            <p className="mt-3 font-display text-3xl font-bold">{newWebsitePricing.monthlyPlain}</p>
            <p className="mt-3 text-muted-foreground">{newWebsitePricing.notCredit}</p>
          </article>
          <article className="rounded-lg border-t-4 border-primary bg-card p-8 shadow-sm">
            <p className="eyebrow">One-off</p>
            <p className="mt-3 font-display text-3xl font-bold">{newWebsitePricing.upfront}</p>
            <p className="mt-3 text-muted-foreground">A lower total than paying monthly. Same site either way.</p>
          </article>
        </div>
        <ul className="mt-8 grid max-w-3xl gap-3 text-muted-foreground">
          <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> {newWebsitePricing.foundations}</li>
          <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> {newWebsitePricing.domain}</li>
          <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> In return: an honest Google review, and permission to show the site in the portfolio once it’s live.</li>
        </ul>
      </Section>
      <Section muted>
        <WhatsIncluded />
        <h3 className="mt-12 text-xl font-semibold">Founding client bonuses</h3>
        <ul className="mt-4 grid max-w-3xl gap-3 text-muted-foreground">
          {foundingBonuses.map((bonus) => (
            <li key={bonus.title} className="flex gap-2">
              <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
              <span>
                <span className="font-semibold text-foreground">{bonus.title}. </span>
                {bonus.text}
                {"href" in bonus && bonus.href ? (
                  <> <a href={bonus.href} className="font-semibold text-primary underline-offset-4 hover:underline">wholelottavinyl.com</a></>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <Heading eyebrow="How it works" title="Sample, build, launch." lead={`A founding client launches within ${newWebsiteOffer.launchDays} days of receiving the content. We tweak until you’re happy before launch.`} />
        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          {steps.map(([title, text], index) => (
            <li key={title} className="rounded-lg border-t-4 border-primary bg-card p-6 shadow-sm">
              <p className="font-display text-sm font-bold text-primary">{index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section muted>
        <Heading eyebrow="FAQ" title="Questions about the founding offer." />
        <LandingFaqs faqs={foundingFaqs} />
      </Section>
      <Section>
        <Heading
          eyebrow="Ask Chris"
          title="Talk it through before you pay."
          lead="Tell me what the business does and which towns you cover. Before a deposit, the sample is a site I’ve already built. A design for your business starts after the deposit."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <BuyButtons />
        </div>
        <p className="mt-6 text-muted-foreground">
          Email <a className="font-semibold text-primary hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          {" · "}
          Call <a className="font-semibold text-primary hover:underline" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{CONTACT.name}, {CONTACT.role} · {CONTACT.location}</p>
        <div className="mt-16">
          <Heading eyebrow="Elsewhere" title="Related pages." />
          <SiteLinks current="/founding-offer" />
        </div>
      </Section>
    </>
  );
}
