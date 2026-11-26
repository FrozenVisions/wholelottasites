import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Sections";
import { demoBySlug } from "@/lib/demos";
import { seo } from "@/lib/site-data";

export const Route = createFileRoute("/demos/$slug")({
  loader: ({ params }) => {
    const demo = demoBySlug(params.slug);
    if (!demo) throw notFound();
    return demo;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const head = seo(`/demos/${loaderData.slug}`, `${loaderData.h1} | Example design | WholeLottaSites`, loaderData.description);
    return {
      meta: [...head.meta, { name: "robots", content: "noindex, follow" }],
      links: head.links,
    };
  },
  component: DemoPage,
});

function DemoPage() {
  const demo = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow="Example design — not a real business"
        title={demo.h1}
        lead={demo.lead}
        note="Example only. Not a client, not a real phone number, and not a result."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Example designs", href: "/demos" },
          { name: demo.trade },
        ]}
      />
      <Section className="!pt-4">
        <p className="max-w-3xl rounded-lg border border-copper bg-card p-4 text-sm font-semibold">
          Example design — not a real business. The words below show the shape of a one-page site. They are not a company you can hire.
        </p>
        <h2 className="mt-12 text-3xl">What the page would say</h2>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {demo.services.map((service) => (
            <li key={service.title} className="rounded-lg border-t-4 border-primary bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">{service.text}</p>
            </li>
          ))}
        </ul>
        <h2 className="mt-12 text-3xl">How someone would get in touch</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">Your phone number goes here, as real text. Your email goes here. Your town goes here. This example leaves them blank on purpose.</p>
        <ul className="mt-6 grid max-w-3xl gap-3 text-muted-foreground">
          {demo.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <p className="mt-10">
          <Link to="/demos" activeOptions={{ exact: true }} className="font-semibold text-primary hover:underline">All example designs</Link>
          {" · "}
          <Link to="/start" className="font-semibold text-primary hover:underline">Start your site</Link>
          {demo.slug === "record-shop" ? (
            <>
              {" · "}
              <Link to="/record-shops" className="font-semibold text-primary hover:underline">Websites for record shops</Link>
            </>
          ) : null}
        </p>
      </Section>
    </>
  );
}
