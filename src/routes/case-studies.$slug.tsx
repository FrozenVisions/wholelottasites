import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero, Section } from "@/components/site/Sections";
import { builtSiteForStudy, caseStudies, caseStudyBySlug } from "@/lib/case-studies";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";
import { seo } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = caseStudyBySlug(params.slug);
    if (!study) throw notFound();
    const site = builtSiteForStudy(study);
    if (!site?.url || !site.linkLabel) throw notFound();
    return { study, site };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { study } = loaderData;
    const path = `/case-studies/${study.slug}`;
    return {
      ...seo(path, `${study.name} | Case study | WholeLottaSites`, study.description),
      scripts: [
        jsonLd(breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Case studies", path: "/case-studies" },
          { name: study.name, path },
        ])),
        jsonLd({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: study.name,
          description: study.description,
          url: `https://wholelottasites.co.uk${path}/`,
          isPartOf: { "@id": "https://wholelottasites.co.uk/#website" },
          about: study.business,
        }),
      ],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study, site } = Route.useLoaderData();
  const others = caseStudies.filter((item) => item.slug !== study.slug);
  return (
    <>
      <PageHero
        eyebrow="Case study"
        title={study.name}
        lead={study.business}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Case studies", href: "/case-studies" },
          { name: study.name },
        ]}
      />
      <Section className="!pt-4">
        <figure className="overflow-hidden rounded-lg border bg-card">
          <img
            src={site.img}
            srcSet={`${site.imgSmall} 600w, ${site.imgMid} 800w, ${site.img} 1200w`}
            sizes="(min-width: 1024px) 72rem, 92vw"
            width={site.width}
            height={site.height}
            alt={site.alt}
            decoding="async"
            className="block h-auto w-full"
          />
        </figure>
        <h2 className="mt-12 text-3xl">What was built</h2>
        <ul className="mt-6 grid max-w-3xl gap-3 text-muted-foreground">
          {study.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
              {feature}
            </li>
          ))}
        </ul>
        {study.searchConsole ? (
          <p className="mt-8 max-w-3xl text-foreground">{study.searchConsole}</p>
        ) : (
          <p className="mt-8 max-w-3xl text-muted-foreground">There is no Search Console figure for this site on the portfolio, so none is added here.</p>
        )}
        <p className="mt-4 max-w-3xl text-sm text-muted-foreground">That line, where it appears, is impressions and clicks only. It is not a ranking, and it is not a promise for the next site.</p>
        {site.url && site.linkLabel ? (
          <a href={site.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 font-semibold text-primary hover:underline">
            {site.linkLabel} <ArrowUpRight className="size-4" aria-hidden />
          </a>
        ) : null}
        {study.slug === "pink-moon-records" ? (
          <p className="mt-6">
            <Link to="/reviews" className="font-semibold text-primary hover:underline">Steven’s review of the build</Link>
          </p>
        ) : null}
        <h2 className="mt-16 text-3xl">Other case studies</h2>
        <ul className="mt-4 space-y-2">
          {others.map((item) => (
            <li key={item.slug}>
              <Link to="/case-studies/$slug" params={{ slug: item.slug }} className="font-semibold text-primary hover:underline">{item.name}</Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
