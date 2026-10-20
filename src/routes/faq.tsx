import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FaqList } from "@/components/site/Sections";
import { seo, faqs } from "@/lib/site-data";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...seo(
      "/faq",
      "Small Business Web Design FAQ | WholeLottaSites",
      "Answers on domains, taking payments with Stripe, how long a website takes, edits after launch and the free mock-up homepage. UK web design.",
    ),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd) }],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Web design questions, answered." />
      <section className="mx-auto max-w-3xl px-5 pb-20 md:pb-28">
        <FaqList />
      </section>
    </>
  );
}

