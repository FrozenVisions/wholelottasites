import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Sections";
import { ClientReviews } from "@/components/site/ClientReviews";
import { Button } from "@/components/ui/button";
import { seo } from "@/lib/site-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    ...seo(
      "/reviews",
      "Client reviews | WholeLottaSites",
      "A review from Steven of Pink Moon Records, in his own words. Past clients can leave a review for Chris Faulkes.",
    ),
    scripts: [jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]))],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What clients say."
        lead="A review is published here only after the client has written it and agreed it can be shown."
        crumbs={[{ name: "Home", href: "/" }, { name: "Reviews" }]}
      />
      <Section className="!pt-10 md:!pt-14">
        <ClientReviews heading={false} />
        <div className="mt-10">
          <Button asChild size="lg">
            <Link to="/leave-a-review">Leave a review</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
