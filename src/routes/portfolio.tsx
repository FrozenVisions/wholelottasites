import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, ProjectGrid } from "@/components/site/Sections";
import { SitesBuiltList } from "@/components/site/SitesBuilt";
import { builtSites, projects, seo, SITE_URL } from "@/lib/site-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";

const title = "Sites we’ve built | WholeLottaSites, Mansfield";
const description = "Screenshots of sites built by Chris Faulkes: MC Decorating, The Sticky Service, SafePlate, Whole Lotta Vinyl, Vinyl Buyback and WLV Outlet.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    ...seo("/portfolio", title, description),
    scripts: [
      jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }])),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Sites we’ve built",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: builtSites.length,
        itemListElement: builtSites.map((site, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: site.name,
          description: site.summary,
          url: `${SITE_URL}/portfolio/#${site.id}`,
        })),
      }),
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Sites we’ve built."
        lead="Six sites, shown as screenshots. The picture is what you can judge here. A text link is included where there is a live address. Example designs, which are not live sites, are further down."
        crumbs={[{ name: "Home", href: "/" }, { name: "Portfolio" }]}
      />
      <Section className="!pt-4">
        <SitesBuiltList />
        <h2 className="mt-20 text-3xl md:text-4xl">Example designs.</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Screenshots of designs. These are not live sites, so there is no link to visit.</p>
        <ProjectGrid items={projects} detailed />
      </Section>
    </>
  );
}
