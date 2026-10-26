import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Heading, ProjectGrid, JourneyBand, WhatsIncluded, OfferCards } from "@/components/site/Sections";
import { DeviceMockup, TrustStrip, BeforeAfter, Comparison, AboutChris } from "@/components/site/Showcase";
import { Reveal } from "@/components/site/Reveal";
import { posts, formatPostDate } from "@/lib/blog";
import { projects, seo } from "@/lib/site-data";

const situations = [
  { to: "/website-built-from-scratch" as const, title: "Built from scratch", text: "A first website, or a replacement for a template." },
  { to: "/website-redesign" as const, title: "Fix or redesign", text: "A free audit first. A rebuild if patching won’t hold." },
  { to: "/mobile-friendly-website" as const, title: "Make it work on a phone", text: "If customers have to pinch and zoom." },
  { to: "/cheap-website-for-small-business" as const, title: "£500, explained", text: "A cheap website for a small business, and what that excludes." },
  { to: "/pay-monthly-website" as const, title: "Pay monthly", text: "Three plans. Every one totals £500." },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    ...seo(
      "/",
      "Websites, Fixes & Google | £500 New Site | WholeLottaSites",
      "Websites, fixes, Google Business Profile and care for UK small businesses. A new site is £500, with a free mock-up. Chris Faulkes, Mansfield.",
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
              A new small-business website, built from scratch, is £500 — with a free mock-up first. I also rescue sites that aren’t working, set up Google Business Profile, and offer optional monthly care.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild variant="copper" size="lg"><Link to="/contact" hash="mockup-form">Get your free mock-up</Link></Button>
              <Button asChild variant="navyOutline" size="lg"><Link to="/contact" hash="fix-audit">Free fix audit</Link></Button>
            </div>
            <p className="mt-4 text-sm text-navy-foreground/80">
              Free mock-up homepage. No strings attached.{" "}
              <Link to="/pricing" hash="offers" className="font-semibold text-copper underline-offset-4 hover:underline">See pricing</Link>
              {" · "}
              <Link to="/portfolio" className="font-semibold text-copper underline-offset-4 hover:underline">See my work</Link>
            </p>
          </div>
          <DeviceMockup />
        </div>
      </section>

      <TrustStrip />

      <Section id="offers">
        <Heading
          eyebrow="What I do"
          title="Four ways to get help."
          lead="A new website is £500. Fixes, Google Business Profile and monthly care are priced on their own. No ranking promises."
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
            <p className="mt-3 font-display text-5xl font-bold">£500</p>
            <p className="mt-2 text-muted-foreground">
              A full custom website. <Link to="/pay-monthly-website" className="font-semibold text-primary hover:underline">Payment plans</Link> are available if you’d rather spread the cost. Fixes, Google Business Profile and care are <Link to="/pricing" className="font-semibold text-primary hover:underline">priced separately</Link>. Bigger businesses from around £1,200.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild><Link to="/pricing">See pricing</Link></Button>
              <Button asChild variant="outline"><a href="#included">What’s included</a></Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section muted>
        <WhatsIncluded />
      </Section>

      <Section>
        <Reveal><BeforeAfter /></Reveal>
        <Link to="/services" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
          How I fix these <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Section>

      <Section muted>
        <Reveal><Heading eyebrow="Portfolio" title="Recent small business websites." /></Reveal>
        <ProjectGrid items={projects.slice(0, 3)} />
        <Link to="/portfolio" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
          See all projects <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Section>

      <Section>
        <Reveal><Comparison /></Reveal>
      </Section>

      <Section muted>
        <Heading eyebrow="By business" title="Websites shaped around the work you do." lead="Trades, restaurants, salons, gyms, shops, consultants, freelancers, startups and individuals. The pages aren’t the same. The £500 price for a small site is." />
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
        <Section>
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

      <Section muted>
        <AboutChris />
      </Section>
    </>
  );
}
