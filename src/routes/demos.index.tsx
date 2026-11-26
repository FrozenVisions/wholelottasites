import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Sections";
import { demos } from "@/lib/demos";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";
import { seo } from "@/lib/site-data";

export const Route = createFileRoute("/demos/")({
  head: () => ({
    ...seo(
      "/demos",
      "Example designs | WholeLottaSites",
      "Example one-page designs for an electrician, a roofer, a cafe and a record shop. Each one is labelled as an example. They are not real businesses.",
    ),
    scripts: [jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Example designs", path: "/demos" }]))],
  }),
  component: DemosIndex,
});

function DemosIndex() {
  return (
    <>
      <PageHero
        eyebrow="Example designs"
        title="One-page examples, not real businesses."
        lead="Four generic layouts: an electrician, a roofer, a cafe and a record shop. The names, jobs and phone numbers are not real. A live site I have built is on the portfolio and in the case studies."
        crumbs={[{ name: "Home", href: "/" }, { name: "Example designs" }]}
      />
      <Section className="!pt-4">
        <ul className="grid gap-6 md:grid-cols-2">
          {demos.map((demo) => (
            <li key={demo.slug}>
              <Link to="/demos/$slug" params={{ slug: demo.slug }} className="block h-full rounded-lg border-t-4 border-primary bg-card p-6 shadow-sm hover:shadow-md">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Example design — not a real business</p>
                <h2 className="mt-3 font-display text-2xl font-semibold">{demo.trade}</h2>
                <p className="mt-2 text-muted-foreground">{demo.lead}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-muted-foreground">
          Ready to talk about your own business? <Link to="/start" className="font-semibold text-primary hover:underline">Start your site</Link>.
        </p>
      </Section>
    </>
  );
}
