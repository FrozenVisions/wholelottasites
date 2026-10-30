import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Heading, JourneyBand, WhatsIncluded, OfferCards, FoundingBanner, FoundingOfferPromo, BuyButtons } from "@/components/site/Sections";
import { DeviceMockup, TrustStrip, BeforeAfter, Comparison, AboutChris } from "@/components/site/Showcase";
import { SitesBuiltStrip } from "@/components/site/SitesBuilt";
import { Reveal } from "@/components/site/Reveal";
import { posts, formatPostDate } from "@/lib/blog";
import { GeoBlurb } from "@/components/site/Geo";
import { MiniFixOffer } from "@/components/site/MiniFix";
import { newWebsitePricing, seo } from "@/lib/site-data";

const situations = [
  { to: "/website-built-from-scratch" as const, title: "Built from scratch", text: "A first website, or a replacement for a template." },
  { to: "/website-redesign" as const, title: "Fix or redesign", text: "A free audit first. A rebuild if patching won’t hold." },
  { to: "/website-mini-fix" as const, title: "£50 + VAT mini-fix", text: "One concrete fix on a live East Midlands site. Not a rebuild." },
  { to: "/mobile-friendly-website" as const, title: "Make it work on a phone", text: "If customers have to pinch and zoom." },
  { to: "/cheap-website-for-small-business" as const, title: "£200 + VAT, explained", text: "A cheap website for a small business, and what that excludes." },
  { to: "/pay-monthly-website" as const, title: "Pay monthly", text: "£50 a month inc VAT for 12 months (£600), or £200 + VAT (£240 inc VAT) one-off." },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    ...seo(
      "/",
      "Websites, Fixes & Google | £200 + VAT or £50 + VAT Fix",
      "Founding client offer: £200 + VAT (£240 inc VAT), or £50 a month inc VAT for 12 months. East Midlands £50 + VAT mini-fix. No ranking promises.",
    ),
  }),
  component: Home,
});

function Home() {
  const latest = posts[0];
  return (
    <>
      <section className="pitch-bottom hero-navy relative overflow-hidden pb-28 text-navy-foreground md:pb-36">
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pt-14 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:pt-24">
          <div>
            <p className="eyebrow text-copper">Chris Faulkes · Mansfield, Nottinghamshire</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">
              Websites, fixes, and your <span className="text-copper">Google listing</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-navy-foreground/85">
              {newWebsitePricing.founding} {newWebsitePricing.upfront}. {newWebsitePricing.monthlyPlain}. Same site either way, cheap and built to last. Look at sample sites first. A design for your business starts after the deposit. I also rescue sites that aren’t working, set up Google Business Profile, and offer optional monthly care.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <BuyButtons onNavy />
              <Button asChild variant="navyOutline" size="lg"><Link to="/contact" hash="fix-audit">Free fix audit</Link></Button>
            </div>
            <p className="mt-4 text-sm text-navy-foreground/80">
              Samples are on the portfolio.{" "}
              <Link to="/pricing" hash="offers" className="font-semibold text-copper underline-offset-4 hover:underline">See pricing</Link>
              {" · "}
              <Link to="/portfolio" className="font-semibold text-copper underline-offset-4 hover:underline">See my work</Link>
            </p>
            <p className="mt-3 max-w-2xl text-sm text-navy-foreground/80">
              Site already live in the East Midlands, and only one thing is broken?{" "}
              <Link to="/website-mini-fix" className="font-semibold text-copper underline-offset-4 hover:underline">£50 + VAT mini-fix — one fix, not a rebuild</Link>.
            </p>
          </div>
          <DeviceMockup />
        </div>
      </section>

      <Section className="!py-12">
        <FoundingOfferPromo />
        <div className="mt-8">
          <FoundingBanner />
        </div>
      </Section>

      <TrustStrip />

      <Section id="offers">
        <Heading
          eyebrow="What I do"
          title="Four ways to get help."
          lead={`${newWebsitePricing.monthly}. ${newWebsitePricing.upfront}. Fixes, Google Business Profile and monthly care are priced on their own. No ranking promises.`}
        />
        <OfferCards />
        <p className="mt-8 max-w-3xl text-muted-foreground">
          Bundles: Fix + care, Site + Google Business Profile, Fix + Google Business Profile, and Full — a site or a fix, Google management, and care.{" "}
          <Link to="/pricing" hash="bundles" className="font-semibold text-primary hover:underline">See the bundles</Link>.
        </p>
      </Section>

      <JourneyBand />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <Heading
              eyebrow="Built from scratch"
              title="Why no templates matters."
              lead="Templates are built for everyone, so they fit no one perfectly. Every WholeLottaSites website starts from a blank page — unique to your brand, faster, with no bloat, and made around your customers."
            />
          </Reveal>
          <Reveal delay={100} className="rounded-lg border-t-4 border-primary bg-card p-8 shadow-sm">
            <p className="eyebrow">Small business website</p>
            <p className="mt-3 font-display text-3xl font-bold leading-snug">{newWebsitePricing.monthlyPlain}</p>
            <p className="mt-3 text-xl font-semibold">{newWebsitePricing.upfront}</p>
            <p className="mt-2 text-muted-foreground">
              {newWebsitePricing.foundations} {newWebsitePricing.domain} Fixes, Google Business Profile on its own and care are <Link to="/pricing" className="font-semibold text-primary hover:underline">priced separately</Link>. Bigger businesses from around £1,200.
            </p>
            <p className="mt-2 text-muted-foreground">{newWebsitePricing.growth}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild><Link to="/pricing">See pricing</Link></Button>
              <Button asChild variant="outline"><a href="#included">What’s included</a></Button>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-16">
          <GeoBlurb />
        </Reveal>
      </Section>

      <Section muted>
        <MiniFixOffer />
      </Section>

      <Section>
        <WhatsIncluded />
      </Section>

      <Section muted>
        <Reveal><BeforeAfter /></Reveal>
        <Link to="/services" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
          How I fix these <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Section>

      <Section>
        <Reveal>
          <Heading
            eyebrow="Portfolio"
            title="Sites we’ve built."
            lead="Screenshots of six sites. The portfolio page has a short note on each one."
          />
        </Reveal>
        <SitesBuiltStrip />
        <Link to="/portfolio" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
          See the portfolio <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Section>

      <Section muted>
        <Reveal><Comparison /></Reveal>
      </Section>

      <Section>
        <Heading eyebrow="By business" title="Websites shaped around the work you do." lead="Trades, restaurants, salons, gyms, shops, consultants, freelancers, startups and individuals. The pages aren’t the same. The founding price for a small site is. A live East Midlands site that only needs one fix is the £50 + VAT mini-fix." />
        <Link to="/websites-for" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
          Browse websites by type of business <ArrowRight className="size-4" aria-hidden />
        </Link>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {situations.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="block h-full rounded-lg border-t-4 border-primary bg-card p-6 shadow-sm hover:shadow-md">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </Link>
            </li>
          ))}
          <li>
            <Link to="/web-design-mansfield" className="block h-full rounded-lg bg-navy p-6 text-navy-foreground shadow-sm">
              <h3 className="font-display text-xl font-semibold">Web designer in Mansfield</h3>
              <p className="mt-2 text-sm text-navy-foreground/80">Meet in person locally, or work together from anywhere in the UK.</p>
            </Link>
          </li>
        </ul>
      </Section>

      {latest && (
        <Section muted>
          <Heading eyebrow="From the blog" title="Plain-English advice." lead="One useful article to start. More are planned; nothing here is padded with fake results." />
          <Link to="/blog/$slug" params={{ slug: latest.slug }} className="mt-8 block max-w-2xl rounded-lg border-t-4 border-primary bg-card p-7 shadow-sm hover:shadow-md">
            <p className="text-sm text-muted-foreground"><time dateTime={latest.date}>{formatPostDate(latest.date)}</time></p>
            <h3 className="mt-2 font-display text-2xl font-semibold">{latest.title}</h3>
            <p className="mt-3 text-muted-foreground">{latest.description}</p>
          </Link>
          <Link to="/blog" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            All articles <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Section>
      )}

      <Section>
        <AboutChris />
      </Section>
    </>
  );
}
