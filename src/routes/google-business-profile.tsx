import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { LandingFaqs, faqJsonLd } from "@/components/site/Landing";
import { PageHero, Section, Heading } from "@/components/site/Sections";
import { SiteLinks } from "@/components/site/SiteLinks";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/config";
import {
  CARE_PRICE,
  GBP_DESCRIPTION,
  GBP_MONTHLY_PRICE,
  GBP_PATH,
  GBP_PRICE_NOTE,
  GBP_SETUP_PRICE,
  GBP_TITLE,
  WEBSITE_PRICE,
  gbpCovers,
  gbpFaqs,
  gbpServiceJsonLd,
  gbpWont,
} from "@/lib/google-business-profile";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";
import { seo } from "@/lib/site-data";

export const Route = createFileRoute("/google-business-profile")({
  head: () => ({
    ...seo(GBP_PATH, GBP_TITLE, GBP_DESCRIPTION),
    scripts: [
      jsonLd(breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Google Business Profile", path: GBP_PATH },
      ])),
      jsonLd(faqJsonLd(gbpFaqs)),
      jsonLd(gbpServiceJsonLd()),
    ],
  }),
  component: GoogleBusinessProfilePage,
});

function GoogleBusinessProfilePage() {
  return (
    <>
      <PageHero
        eyebrow="Google Business Profile"
        title="Google Business Profile, set up properly."
        lead={`For ${GBP_SETUP_PRICE} I set up your Google Business Profile, or fix the one you’ve got, so it matches your website and tells people what you do, where and when. You stay the owner. I’m added as a manager.`}
        crumbs={[{ name: "Home", href: "/" }, { name: "Google Business Profile" }]}
        actions={(
          <Button asChild variant="copper" size="lg">
            <Link to="/contact" hash="gbp">Ask about your listing</Link>
          </Button>
        )}
      />
      <Section className="!pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="max-w-3xl space-y-12 text-lg text-muted-foreground">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">What the {GBP_SETUP_PRICE} covers</h2>
              <ul className="mt-4 grid gap-2">
                {gbpCovers.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                It’s a one-off job. If your profile is suspended or stuck in verification, I’ll tell you what Google is asking for, but I can’t force Google’s decision.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Monthly management, {GBP_MONTHLY_PRICE}</h2>
              <p className="mt-4">
                Optional. Posts, replies to reviews in your voice, a photo refresh, and a short note each month on what Google’s Insights show. Stop when you want.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Why it matters for AI assistants too</h2>
              <p className="mt-4">
                When someone asks ChatGPT, Gemini or Google’s AI “who’s a good plumber near me”, those tools lean on clear, consistent facts about a business: what it is, where it works, how to contact it. A tidy profile that matches your website is part of that. It makes you easier to describe correctly. It doesn’t guarantee you’ll be mentioned.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">What I won’t do</h2>
              <ul className="mt-4 grid gap-2">
                {gbpWont.map((item) => (
                  <li key={item} className="flex gap-2">
                    <X className="mt-1 size-4 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Pairs well with</h2>
              <ul className="mt-4 grid gap-3">
                <li className="flex gap-2">
                  <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
                  <span>
                    <Link to="/website-mini-fix" className="font-semibold text-primary underline-offset-4 hover:underline">The £100 East Midlands mini-fix</Link>
                    , if the only problem is a missing or broken website link on your profile
                  </span>
                </li>
                <li className="flex gap-2">
                  <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
                  <span>
                    <Link to="/website-built-from-scratch" className="font-semibold text-primary underline-offset-4 hover:underline">A new {WEBSITE_PRICE} website</Link>
                    , so the site and the listing say the same thing
                  </span>
                </li>
                <li className="flex gap-2">
                  <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
                  <span>
                    <Link to="/pricing" className="font-semibold text-primary underline-offset-4 hover:underline">Monthly website care, {CARE_PRICE}</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <GbpCard />
        </div>
      </Section>
      <Section muted>
        <Heading eyebrow="FAQ" title="Common questions." />
        <LandingFaqs faqs={gbpFaqs} />
        <p className="mt-16 max-w-3xl text-lg text-muted-foreground">
          Email{" "}
          <a className="font-semibold text-primary hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          {" "}or call{" "}
          <a className="font-semibold text-primary hover:underline" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          {" "}with your business name and I’ll take a look at your listing.
        </p>
        <div className="mt-16">
          <Heading eyebrow="Elsewhere on the site" title="Related pages." />
          <SiteLinks current={GBP_PATH} />
        </div>
      </Section>
    </>
  );
}

function GbpCard() {
  return (
    <aside className="rounded-lg border-t-4 border-primary bg-card p-8 shadow-sm lg:sticky lg:top-28">
      <p className="eyebrow">Google Business Profile</p>
      <p className="mt-4 font-display text-6xl font-bold text-foreground">{GBP_SETUP_PRICE}</p>
      <p className="mt-2 text-muted-foreground">{GBP_PRICE_NOTE}</p>
      <p className="mt-2 text-sm text-muted-foreground">You stay the owner. I’m added as a manager.</p>
      <Button asChild size="lg" className="mt-8 w-full">
        <Link to="/contact" hash="gbp">Ask about your listing</Link>
      </Button>
      <div className="mt-6 space-y-2 text-sm">
        <p>
          Email{" "}
          <a className="font-semibold text-primary hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
        <p>
          Call{" "}
          <a className="font-semibold text-primary hover:underline" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
        </p>
        <p>
          <a className="font-semibold text-primary hover:underline" href="https://wholelottasites.co.uk">wholelottasites.co.uk</a>
        </p>
      </div>
    </aside>
  );
}
