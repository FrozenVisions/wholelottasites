import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, Heading, StepsBand } from "@/components/site/Sections";
import { CheckList } from "@/components/site/Landing";
import { Button } from "@/components/ui/button";
import { stages, seo } from "@/lib/site-data";
import { breadcrumbJsonLd, howToJsonLd, jsonLd } from "@/lib/schema";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    ...seo(
      "/how-it-works",
      "How a Website Is Built | Deposit, Then the Design",
      "Look at sample sites first. A design for your business starts after the deposit, then the site is built from scratch and I help you launch.",
    ),
    scripts: [
      jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "How it works", path: "/how-it-works" }])),
      jsonLd(howToJsonLd()),
    ],
  }),
  component: HowItWorks,
});

function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Sample sites, then a deposit."
        lead="Before a deposit, you look at sites I’ve already built. A design for your business starts after the deposit. Then I build the site and help you launch."
        crumbs={[{ name: "Home", href: "/" }, { name: "How it works" }]}
      />
      <Section>
        <div className="grid gap-16">
          {stages.map((stage) => (
            <article key={stage.title} id={stage.title.toLowerCase()} className="scroll-mt-28 max-w-3xl">
              <p className="eyebrow">{stage.title}</p>
              <h2 className="mt-3 text-3xl md:text-4xl">{stage.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{stage.body}</p>
              <CheckList items={[...stage.points]} />
            </article>
          ))}
        </div>
        <div className="mt-16 max-w-3xl">
          <Heading eyebrow="To get started" title="What to send." lead="You don’t need a finished brief. The form asks for your name, the business name, an email and a short note about what you do. A phone number and a current website are optional. A personalised design starts after the deposit." />
          <p className="mt-6 text-muted-foreground">If you have any of these, they help, but they can wait:</p>
          <CheckList items={["A logo, if you already use one", "Photos of your work, premises or van", "The towns you cover, or your address and hours", "A domain, if you already own one"]} />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg"><Link to="/contact" hash="mockup-form">Ask about a new site</Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/pricing">See the £500 and the plans</Link></Button>
          </div>
        </div>
      </Section>
      <StepsBand />
    </>
  );
}
