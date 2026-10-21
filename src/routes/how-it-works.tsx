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
      "Free Website Mock-up, Then the Build | WholeLottaSites",
      "Start with a free website mock-up. If you like it, the site is built from scratch, usually within days, and I help you launch.",
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
        title="Start with a free website mock-up."
        lead="You see a homepage before you pay anything. If you like it, I build the site and help you launch. If you don’t, that’s the end of it."
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
          <Heading eyebrow="To get started" title="What to send with the mock-up request." lead="You don’t need a finished brief. The form asks for your name, the business name, an email and a short note about what you do. A phone number and a current website are optional." />
          <p className="mt-6 text-muted-foreground">If you have any of these, they help, but they can wait:</p>
          <CheckList items={["A logo, if you already use one", "Photos of your work, premises or van", "The towns you cover, or your address and hours", "A domain, if you already own one"]} />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg"><Link to="/contact" hash="mockup-form">Get your free mock-up</Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/pricing">See the £500 and the plans</Link></Button>
          </div>
        </div>
      </Section>
      <StepsBand />
    </>
  );
}
