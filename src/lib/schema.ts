import { SITE_URL, stages } from "@/lib/site-data";

export function jsonLd(data: unknown) {
  return { type: "application/ld+json" as const, children: JSON.stringify(data) };
}

export function absoluteUrl(path: string) {
  if (path === "/") return `${SITE_URL}/`;
  const clean = path.replace(/\/$/, "");
  return `${SITE_URL}${clean}/`;
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd(opts: { title: string; description: string; path: string; date: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    dateModified: opts.date,
    inLanguage: "en-GB",
    mainEntityOfPage: absoluteUrl(opts.path),
    image: `${SITE_URL}/og-image.jpg`,
    author: { "@type": "Person", "@id": `${SITE_URL}/#chris`, name: "Chris Faulkes", url: `${SITE_URL}/about/` },
    publisher: { "@id": `${SITE_URL}/#business` },
  };
}

export function howToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How a WholeLottaSites website is made",
    description: "Sample sites first. A design for your business starts after the deposit, then the build, then help going live.",
    inLanguage: "en-GB",
    step: stages.map((stage, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: stage.title,
      text: stage.body,
      url: `${SITE_URL}/how-it-works/#${stage.title.toLowerCase()}`,
    })),
  };
}
