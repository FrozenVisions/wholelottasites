import { createFileRoute, Link } from "@tanstack/react-router";
import { Hammer, Smartphone, ShieldCheck, PoundSterling, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Heading, ProblemsGrid, ProjectGrid } from "@/components/site/Sections";
import { projects, seo } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "/",
      "Affordable Web Design for UK Small Businesses | £500",
      "Affordable web design for UK small businesses. Custom websites built from scratch, no templates, for £500. Web designer in Mansfield. Free mock-up.",
    ),
  component: Home,
});

const features = [
  [Hammer, "Built from scratch"],
  [Smartphone, "Mobile-friendly"],
  [ShieldCheck, "Secure HTTPS"],
  [PoundSterling, "£500 full site"],
] as const;

function Home() {
  return (
    <>
      <section className="pitch-bottom hero-navy relative overflow-hidden pb-32 text-navy-foreground">
        <div className="relative mx-auto max-w-7xl px-5 pt-20 md:pt-28">
          <p className="eyebrow text-copper">Chris Faulkes · Web Designer · Mansfield, Nottinghamshire</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Websites built <span className="text-copper">from scratch</span> for UK small businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-navy-foreground/85">
            No templates. Every site is designed and coded around your business and your customers. A full small-business website for £500.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild variant="copper" size="lg"><Link to="/contact">Get your free mock-up</Link></Button>
            <Button asChild variant="navyOutline" size="lg"><Link to="/portfolio">See my work</Link></Button>
          </div>
          <p className="mt-4 text-sm text-navy-foreground/75">Free mock-up homepage. No strings attached.</p>
          <ul className="mt-14 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
            {features.map(([Icon, label]) => (
              <li key={label} className="flex items-center gap-2 border-l-2 border-copper pl-3 text-sm font-medium">
                <Icon className="size-4 text-copper" aria-hidden /> {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section>
        <Heading
          eyebrow="Built from scratch"
          title="Why no templates matters."
          lead="Templates are built for everyone, so they fit no one perfectly. Every WholeLottaSites website starts from a blank page — unique to your brand, faster, with no bloat, and made around your customers."
        />
        <Link to="/services" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
          See what you get for £500 <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Section>

      <Section muted>
        <Heading eyebrow="Quick check" title="Is your website costing you customers?" />
        <ProblemsGrid />
        <Link to="/services" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
          How I fix these <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Section>

      <Section>
        <Heading eyebrow="Portfolio" title="Recent small business websites." />
        <ProjectGrid items={projects.slice(0, 3)} />
        <Link to="/portfolio" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
          See all projects <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Section>
    </>
  );
}

