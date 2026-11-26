import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Sections";
import { builtSiteForStudy, caseStudies } from "@/lib/case-studies";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";
import { seo, SITE_URL } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    ...seo(
      "/case-studies",
      "Case studies | WholeLottaSites",
      "Short notes on five live sites: Whole Lotta Vinyl, SafePlate, MC Decorating, Vinyl Buyback and Pink Moon Records. What they are, and what you can see. No invented results.",
    ),
    scripts: [
      jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Case studies", path: "/case-studies" }])),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Case studies",
        itemListElement: caseStudies.map((study, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: study.name,
          url: `${SITE_URL}/case-studies/${study.slug}/`,
        })),
      }),
    ],
  }),
  component: CaseStudyIndex,
});

function CaseStudyIndex() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Five live sites, written up."
        lead="Each note says what the business is and what you can see on the site today. Where a Search Console figure is already on the portfolio, it is repeated exactly. Nothing else is added."
        crumbs={[{ name: "Home", href: "/" }, { name: "Case studies" }]}
      />
      <Section className="!pt-4">
        <ul className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study) => {
            const site = builtSiteForStudy(study);
            return (
              <li key={study.slug}>
                <Link to="/case-studies/$slug" params={{ slug: study.slug }} className="group block h-full overflow-hidden rounded-lg border bg-card shadow-sm hover:shadow-md">
                  {site ? (
                    <img
                      src={site.img}
                      srcSet={`${site.imgSmall} 600w, ${site.imgMid} 800w, ${site.img} 1200w`}
                      sizes="(min-width: 768px) 36rem, 92vw"
                      width={site.width}
                      height={site.height}
                      alt={site.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[8/5] w-full object-cover object-top"
                    />
                  ) : null}
                  <span className="block p-6">
                    <span className="font-display text-2xl font-semibold">{study.name}</span>
                    <span className="mt-2 block text-muted-foreground">{study.business}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-10 text-muted-foreground">
          Screenshots of more work, including example designs, are on the <Link to="/portfolio" className="font-semibold text-primary hover:underline">portfolio</Link>.
        </p>
      </Section>
    </>
  );
}
