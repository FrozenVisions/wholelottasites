import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, FaqList } from "@/components/site/Sections";
import { SiteLinks } from "@/components/site/SiteLinks";
import { seo, faqs } from "@/lib/site-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...seo(
      "/faq",
      "FAQ | Sites, Fixes, Google, Care & £100",
      "£200 + VAT (£240 inc VAT) websites, the £100 East Midlands mini-fix, who owns the domain and Google listing, and why there are no ranking promises. Care is optional.",
    ),
    scripts: [
      jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])),
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions, answered." lead="The £200 + VAT (£240 inc VAT) website, the £100 mini-fix, how a fix is priced, who owns the domain and the Google listing, and what I won’t promise." crumbs={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
      <section className="mx-auto max-w-3xl px-5 pb-20 md:pb-28">
        <FaqList />
        <p className="mt-8 text-muted-foreground">
          The <Link to="/pricing" className="font-semibold text-primary hover:underline">pricing page</Link> and the <Link to="/pay-monthly-website" className="font-semibold text-primary hover:underline">pay monthly</Link> page use the same figures.
        </p>
        <SiteLinks current="/faq" />
      </section>
    </>
  );
}

