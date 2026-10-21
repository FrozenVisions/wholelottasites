import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Heading, ProjectGrid, JourneyBand, WhatsIncluded } from "@/components/site/Sections";
import { vinylHero, vinylHero480, DeviceMockup, TrustStrip, BeforeAfter, Comparison, AboutChris } from "@/components/site/Showcase";
import { Reveal } from "@/components/site/Reveal";
import { posts, formatPostDate } from "@/lib/blog";
import { projects, seo } from "@/lib/site-data";

const situations = [
  { to: "/website-built-from-scratch" as const, title: "Built from scratch", text: "A first website, or a replacement for a template." },
  { to: "/website-redesign" as const, title: "Redesign an old site", text: "When an update isn’t enough." },
  { to: "/mobile-friendly-website" as const, title: "Make it work on a phone", text: "If customers have to pinch and zoom." },
  { to: "/cheap-website-for-small-business" as const, title: "£500, explained", text: "A cheap website for a small business, and what that excludes." },
  { to: "/pay-monthly-website" as const, title: "Pay monthly", text: "Three plans. Every one totals £500." },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    ...seo(
      "/",
      "Affordable Small Business Websites UK – £500 | WholeLottaSites",
      "Affordable small business websites across the UK for £500, built from scratch with no templates by Chris, a web designer in Mansfield. Get a free mock-up.",
    ),
    links: [
      ...seo("/", "", "").links,
      { rel: "preload", as: "image", href: vinylHero, imageSrcSet: `${vinylHero480} 480w, ${vinylHero} 800w`, imageSizes: "(min-width: 1024px) 40vw, 90vw", fetchPriority: "high" },
    ],
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
            <p className="eyebrow text-copper">Chris Faulkes · Web Designer · Mansfield, Nottinghamshire</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">
              Websites built <span className="text-copper">from scratch</span> for UK small businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-navy-foreground/85">
              No templates. Every site is designed and coded around your business and your customers. A full small-business website for £500.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild variant="copper" size="lg"><Link to="/contact" hash="mockup-form">Get your free mock-up</Link></Button>
              <Button asChild variant="navyOutline" size="lg"><Link to="/portfolio">See my work</Link></Button>
            </div>
            <p className="mt-4 text-sm text-navy-foreground/80">
              Free mock-up homepage. No strings attached.{" "}
              <Link to="/how-it-works" className="font-semibold text-copper underline-offset-4 hover:underline">See how it works</Link>
            </p>
          </div>
          <DeviceMockup />
        </div>
      </section>

      <TrustStrip />
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
              A full custom website. <Link to="/pay-monthly-website" className="font-semibold text-primary hover:underline">Payment plans</Link> are available if you’d rather spread the cost. Bigger businesses from around £1,200.
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
