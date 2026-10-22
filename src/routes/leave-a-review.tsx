import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useEffect, useState } from "react";
import { PageHero, Section } from "@/components/site/Sections";
import { Button } from "@/components/ui/button";
import { CONTACT, FORM_ENDPOINT } from "@/config";
import { SITE_URL, seo } from "@/lib/site-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";

const THANKS_PATH = "/leave-a-review/#thanks";
const THANKS_URL = `${SITE_URL}${THANKS_PATH}`;

export const Route = createFileRoute("/leave-a-review")({
  head: () => ({
    ...seo(
      "/leave-a-review",
      "Leave a Review | WholeLottaSites",
      "Past clients can send Chris Faulkes a review of WholeLottaSites. It is emailed to him and is not shown on the site until he approves it.",
    ),
    scripts: [jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Leave a review", path: "/leave-a-review" }]))],
  }),
  component: LeaveAReview,
});

function LeaveAReview() {
  return (
    <>
      <PageHero
        eyebrow="For past clients"
        title="Leave a review."
        lead="If I’ve built your website, you can send a short review here. It comes to me by email, and nothing is shown on the site until I’ve read it."
        crumbs={[{ name: "Home", href: "/" }, { name: "Leave a review" }]}
      />
      <Section className="!pt-10 md:!pt-14">
        <ReviewForm />
      </Section>
    </>
  );
}

const field = "mt-2 w-full rounded-md border border-input bg-card px-4 py-3 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

function ReviewForm() {
  const [next, setNext] = useState(THANKS_URL);

  useEffect(() => {
    const base = import.meta.env.BASE_URL || "/";
    const url = new URL("leave-a-review/", `${window.location.origin}${base.startsWith("/") ? base : `/${base}`}`);
    url.hash = "thanks";
    setNext(url.href);
    if (window.location.hash === "#thanks") {
      document.getElementById("thanks-title")?.focus();
    }
  }, []);

  return (
    <div className="review-page mx-auto max-w-xl">
      <form id="review-form" action={FORM_ENDPOINT} method="POST" className="space-y-5 rounded-lg border-t-4 border-primary bg-card p-6 shadow-sm md:p-8">
        <input type="hidden" name="_subject" value="New website review – WholeLottaSites" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={next} />
        <input type="hidden" name="form" value="Leave a review" />
        <div className="absolute left-[-10000px] h-px w-px overflow-hidden" aria-hidden="true">
          <label>
            Leave this field blank
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" defaultValue="" />
          </label>
        </div>

        <label htmlFor="review-name" className="block text-sm font-medium">
          Your name
          <input id="review-name" required name="name" autoComplete="name" className={field} />
        </label>
        <label htmlFor="review-business" className="block text-sm font-medium">
          Business name
          <input id="review-business" required name="business" autoComplete="organization" className={field} />
        </label>
        <label htmlFor="review-website" className="block text-sm font-medium">
          Website <span className="font-normal text-muted-foreground">(optional)</span>
          <input id="review-website" type="url" name="website" autoComplete="url" inputMode="url" placeholder="https://" className={field} />
        </label>

        <fieldset aria-describedby="rating-hint">
          <legend className="text-sm font-medium">Rating</legend>
          <p id="rating-hint" className="mt-1 text-sm text-muted-foreground">1 is the lowest, 5 is the highest.</p>
          <div className="star-rating mt-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <Fragment key={n}>
                <input id={`rating-${n}`} type="radio" name="rating" value={`${n} out of 5`} required />
                <label htmlFor={`rating-${n}`}>
                  <span className="sr-only">{n === 1 ? "1 star" : `${n} stars`}</span>
                  <span aria-hidden="true">★</span>
                </label>
              </Fragment>
            ))}
          </div>
        </fieldset>

        <label htmlFor="review-text" className="block text-sm font-medium">
          Your review
          <textarea id="review-text" required name="review" rows={6} className={field} />
        </label>

        <label htmlFor="review-consent" className="flex min-h-11 items-start gap-3 text-sm font-medium">
          <input id="review-consent" required type="checkbox" name="consent" value="Yes — I’m happy for my review to be shown on WholeLottaSites" className="mt-0.5 size-5 shrink-0 accent-primary" />
          <span>I’m happy for my review to be shown on WholeLottaSites.</span>
        </label>

        <Button type="submit" size="lg" className="w-full">Send review</Button>
        <p className="text-sm text-muted-foreground">
          This sends an email to Chris. It does not put the review on the site. Or email{" "}
          <a className="font-semibold text-primary hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>
      </form>

      <div id="thanks" role="status" className="scroll-mt-28 rounded-lg border-t-4 border-primary bg-card p-8 shadow-sm md:p-10">
        <h2 id="thanks-title" tabIndex={-1} className="text-3xl outline-none">Thanks — got it.</h2>
        <p className="mt-4 text-muted-foreground">Your review is on its way to Chris by email. He’ll read it before anything is shown on the site. It won’t appear automatically.</p>
      </div>
    </div>
  );
}
