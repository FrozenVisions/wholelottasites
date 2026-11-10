import { Heading } from "@/components/site/Sections";
import { clientReviews } from "@/lib/reviews";

function ClientReviewCard({ review }: { review: (typeof clientReviews)[number] }) {
  return (
    <article className="rounded-lg border-t-4 border-primary bg-card p-8 shadow-sm md:p-10">
      <p className="text-sm font-semibold text-primary">{review.rating}</p>
      <blockquote className="mt-5 space-y-4 text-lg">
        {review.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </blockquote>
      <p className="mt-6 font-semibold">
        {review.name},{" "}
        <a href={review.href} rel="noopener" className="text-primary underline-offset-4 hover:underline">
          {review.business}
        </a>
      </p>
    </article>
  );
}

export function ClientReviews() {
  return (
    <>
      <Heading eyebrow="Reviews" title="What clients say." />
      <div className="mt-10 grid max-w-3xl gap-6">
        {clientReviews.map((review) => (
          <ClientReviewCard key={review.id} review={review} />
        ))}
      </div>
    </>
  );
}
