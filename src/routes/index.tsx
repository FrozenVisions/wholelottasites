import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Heading, ProjectGrid, StepsBand } from "@/components/site/Sections";
import { vinylHero, vinylHero480, DeviceMockup, TrustStrip, BeforeAfter, Comparison, AboutChris } from "@/components/site/Showcase";
import { Reveal } from "@/components/site/Reveal";
import { projects, seo } from "@/lib/site-data";

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
              <Button asChild variant="copper" size="lg"><Link to="/contact">Get your free mock-up</Link></Button>
              <Button asChild variant="navyOutline" size="lg"><Link to="/portfolio">See my work</Link></Button>
            </div>
            <p className="mt-4 text-sm text-navy-foreground/80">Free mock-up homepage. No strings attached.</p>
          </div>
          <DeviceMockup />
        </div>
      </section>

      <TrustStrip />

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
            <p className="mt-2 text-muted-foreground">A full custom website. Payment plans available if you’d rather spread the cost. Bigger businesses from around £1,200.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild><Link to="/pricing">See pricing</Link></Button>
              <Button asChild variant="outline"><Link to="/services">What’s included</Link></Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section muted>
        <Reveal><BeforeAfter /></Reveal>
        <Link to="/services" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
          How I fix these <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Section>

      <Section>
        <Reveal><Heading eyebrow="Portfolio" title="Recent small business websites." /></Reveal>
        <ProjectGrid items={projects.slice(0, 3)} />
        <Link to="/portfolio" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
          See all projects <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Section>

      <StepsBand />

      <Section>
        <Reveal><Comparison /></Reveal>
      </Section>

      <Section muted>
        <AboutChris />
      </Section>
    </>
  );
}
