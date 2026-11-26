import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/Sections";
import { CONTACT, FORM_ENDPOINT, STRIPE_ONE_OFF_URL, STRIPE_PAY_MONTHLY_URL } from "@/config";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";
import { startOfferFromQuery, startOffers, type StartOfferValue } from "@/lib/start-brief";
import { homepageDepositText, newWebsitePricing, seo } from "@/lib/site-data";

export const Route = createFileRoute("/start")({
  head: () => ({
    ...seo(
      "/start",
      "Start your site | WholeLottaSites",
      "Send a short brief for a new website, a fix, care, or a record-shop offer. Chris replies with a deposit or payment link. No free mock-ups.",
    ),
    scripts: [jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Start your site", path: "/start" }]))],
  }),
  component: StartPage,
});

const field = "mt-2 w-full rounded-md border border-input bg-card px-4 py-3 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

function StartPage() {
  const [next, setNext] = useState("");
  const [thanks, setThanks] = useState(false);
  const [offer, setOffer] = useState<StartOfferValue | "">("");

  useEffect(() => {
    const path = window.location.pathname.replace(/\/$/, "") || "/";
    setNext(`${window.location.origin}${path === "/" ? path : `${path}/`}#thanks`);
    const params = new URLSearchParams(window.location.search);
    const preset = startOfferFromQuery(params.get("offer"));
    if (preset) setOffer(preset);
    const check = () => setThanks(window.location.hash === "#thanks");
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Start your site"
        title="Tell me what you need."
        lead="A short brief is enough. I read it, then I send a deposit or payment link. There is no free mock-up before that."
        crumbs={[{ name: "Home", href: "/" }, { name: "Start your site" }]}
      />
      <Section className="!pt-4">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="max-w-xl space-y-4 text-muted-foreground">
            <p>The next step after this form is an email from me, Chris, with the payment link for the job you described. You don’t pay inside this form.</p>
            <p>{homepageDepositText}</p>
            <p>
              The founding website is {newWebsitePricing.upfront}. Or {newWebsitePricing.monthlyPlain}. {newWebsitePricing.notCredit} Prices for a fix, care, Google Business Profile and record shops are on{" "}
              <Link to="/pricing" className="font-semibold text-primary hover:underline">pricing</Link>
              {" "}and{" "}
              <Link to="/record-shops" className="font-semibold text-primary hover:underline">record shops</Link>.
            </p>
            <div className="rounded-lg border bg-card p-6 text-foreground">
              <h2 className="font-display text-2xl font-semibold">Pay deposit / start now</h2>
              <p className="mt-3 text-muted-foreground">
                If the job is the founding website, the checkouts are already here. Pay deposit / start now is the £50 a month inc VAT plan for 12 months. The other link is £200 + VAT (£240). They are the price of the site, not a holding fee on top.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Button asChild variant="copper">
                  <a href={STRIPE_PAY_MONTHLY_URL}>Pay deposit / start now</a>
                </Button>
                <Button asChild variant="outline">
                  <a href={STRIPE_ONE_OFF_URL}>Or pay £200 + VAT</a>
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">For a fix, care, Google Business Profile or a record-shop offer, use the form. I’ll send the right link.</p>
            </div>
          </div>
          <div id="thanks" className="scroll-mt-28">
            {thanks ? (
              <div role="status" className="rounded-lg border-t-4 border-primary bg-card p-10 shadow-sm">
                <h2 className="text-3xl">Thanks — got it.</h2>
                <p className="mt-4 text-muted-foreground">I’ll read this and email you a deposit or payment link. If the job is the founding website, you can also use the pay links on this page.</p>
              </div>
            ) : (
              <form action={FORM_ENDPOINT} method="POST" className="space-y-5 rounded-lg border-t-4 border-primary bg-card p-6 shadow-sm md:p-8">
                <input type="hidden" name="_subject" value="Start your site – WholeLottaSites" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={next} />
                <input type="hidden" name="form" value="Start your site" />
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" aria-label="Leave this field blank" />
                <label htmlFor="start-business" className="block text-sm font-medium">Business name
                  <input id="start-business" required name="business" autoComplete="organization" className={field} />
                </label>
                <label htmlFor="start-trade" className="block text-sm font-medium">Trade
                  <input id="start-trade" required name="trade" placeholder="For example, electrician, cafe, record shop" className={field} />
                </label>
                <label htmlFor="start-town" className="block text-sm font-medium">Town
                  <input id="start-town" required name="town" autoComplete="address-level2" className={field} />
                </label>
                <label htmlFor="start-email" className="block text-sm font-medium">Email
                  <input id="start-email" required type="email" name="email" autoComplete="email" className={field} />
                </label>
                <label htmlFor="start-phone" className="block text-sm font-medium">Phone <span className="font-normal text-muted-foreground">(optional)</span>
                  <input id="start-phone" type="tel" name="phone" autoComplete="tel" inputMode="tel" className={field} />
                </label>
                <label htmlFor="start-site" className="block text-sm font-medium">Current site or Facebook link <span className="font-normal text-muted-foreground">(optional)</span>
                  <input id="start-site" type="text" name="current_site" placeholder="https:// or a Facebook page" className={field} />
                </label>
                <label htmlFor="start-need" className="block text-sm font-medium">What you need
                  <textarea id="start-need" required name="what_you_need" rows={4} placeholder="A new site, a fix, care, or something more specific." className={field} />
                </label>
                <label htmlFor="start-offer" className="block text-sm font-medium">Which offer
                  <select id="start-offer" required name="offer" value={offer} onChange={(event) => setOffer(event.target.value as StartOfferValue)} className={field}>
                    <option value="" disabled>Choose one</option>
                    {startOffers.map((item) => (
                      <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                  </select>
                </label>
                <Button type="submit" size="lg" className="w-full">Send this to Chris</Button>
                <p className="text-sm text-muted-foreground">It goes to {CONTACT.email}. I’ll reply with the next step, which is a payment link.</p>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
