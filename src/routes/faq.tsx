import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FaqList } from "@/components/site/Sections";
import { seo } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () =>
    seo(
      "/faq",
      "FAQ | WholeLottaSites",
      "Answers about domains, taking payments with Stripe, how long a website takes, edits after launch and the free mock-up homepage.",
    ),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Good questions." />
      <section className="mx-auto max-w-3xl px-5 pb-20 md:pb-28">
        <FaqList />
      </section>
    </>
  );
}

