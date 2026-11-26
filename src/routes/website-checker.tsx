import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/Sections";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";
import { seo } from "@/lib/site-data";
import { checkWebsiteAddress, type WebsiteCheck } from "@/lib/website-checker";

const reminders = [
  "Open the site on your phone. Can you read it without pinching or zooming?",
  "Is the phone number real text, large enough to tap, not only inside a picture?",
  "Do the page title and the first heading say the trade and the town?",
  "Does the contact form arrive in your inbox when you send a test?",
  "Are the name, phone number and address the same on the site and on your Google Business Profile?",
  "Do the buttons go somewhere, or do any of them dead-end?",
] as const;

export const Route = createFileRoute("/website-checker")({
  head: () => ({
    ...seo(
      "/website-checker",
      "Free website checker | WholeLottaSites",
      "Paste a website address. This page reads the address you typed, links to Google’s PageSpeed result, and lists checks you can do yourself. It does not open your site.",
    ),
    scripts: [jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Website checker", path: "/website-checker" }]))],
  }),
  component: WebsiteCheckerPage,
});

function WebsiteCheckerPage() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<WebsiteCheck | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(checkWebsiteAddress(value));
  };

  return (
    <>
      <PageHero
        eyebrow="Free website checker"
        title="A few honest checks."
        lead="Paste an address. This page can tell you whether that address uses HTTPS, and it can open Google’s PageSpeed result for it. It does not load your site, score your design, or count your visitors."
        crumbs={[{ name: "Home", href: "/" }, { name: "Website checker" }]}
      />
      <Section className="!pt-4">
        <form onSubmit={onSubmit} className="max-w-2xl rounded-lg border-t-4 border-primary bg-card p-6 shadow-sm">
          <label htmlFor="site-url" className="block text-sm font-medium">Website address
            <input
              id="site-url"
              name="url"
              required
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="https://yourbusiness.co.uk"
              inputMode="url"
              autoComplete="url"
              className="mt-2 w-full rounded-md border border-input bg-card px-4 py-3 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
          </label>
          <Button type="submit" size="lg" className="mt-4">Check this address</Button>
        </form>

        {result?.ok === false ? <p className="mt-6 max-w-2xl text-destructive" role="status">{result.message}</p> : null}

        {result?.ok === true ? (
          <div className="mt-8 max-w-2xl space-y-4 rounded-lg border bg-card p-6" role="status">
            <h2 className="font-display text-2xl font-semibold">From the address you typed</h2>
            <p className="text-muted-foreground">Host: {result.host}</p>
            {result.https === "yes" ? <p>HTTPS: yes. The address you typed starts with https://.</p> : null}
            {result.https === "no" ? <p>HTTPS: no. The address you typed starts with http://, so a browser can show it as not secure.</p> : null}
            {result.https === "not-typed" ? (
              <p>HTTPS: I can’t tell. You didn’t type http:// or https://. The PageSpeed link below guesses https://. If the site is only on http, change the address and check again.</p>
            ) : null}
            {result.facebook ? <p>This looks like a Facebook address. A Facebook page is not a website on your own domain.</p> : null}
            <p>
              <a href={result.pagespeedUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                Open this address in Google PageSpeed Insights
              </a>
            </p>
            <p className="text-sm text-muted-foreground">That result is Google’s, in a new tab. This page does not fetch a speed score, a mobile score, or a list of broken links.</p>
          </div>
        ) : null}

        <h2 className="mt-14 text-3xl">Checks to do yourself</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">This is a reminder list. Ticking these is up to you. The form above has not looked at the pages.</p>
        <ul className="mt-6 grid max-w-3xl gap-3 text-muted-foreground">
          {reminders.map((item) => (
            <li key={item} className="rounded-lg border bg-card px-4 py-3">{item}</li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          You can also open <a href="https://pagespeed.web.dev/" className="font-semibold text-primary hover:underline">pagespeed.web.dev</a> and paste the address yourself.
        </p>
        <div className="mt-12 max-w-2xl rounded-lg border-t-4 border-primary bg-card p-6">
          <h2 className="font-display text-2xl font-semibold">Want me to look at it?</h2>
          <p className="mt-3 text-muted-foreground">Send a short brief and I’ll reply with a payment link. A fix audit of a live site, with screenshots and 3–5 issues, is still free. A new design starts after a deposit.</p>
          <Button asChild className="mt-5">
            <Link to="/start">Start your site</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
