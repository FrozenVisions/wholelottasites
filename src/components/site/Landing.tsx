import { Link } from "@tanstack/react-router";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Heading, PaymentPlans, DomainNote, StepsBand, FoundingBanner } from "@/components/site/Sections";
import { trades, type Faq } from "@/lib/landing-data";
import { customerSearches } from "@/lib/customer-searches";
import { RichText } from "@/components/site/RichText";

export function faqJsonLd(faqs: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}

export function LandingFaqs({ faqs }: { faqs: readonly Faq[] }) {
  return (
    <div className="mt-10 divide-y border-y">
      {faqs.map(([q, a]) => (
        <details key={q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold">
            {q}
            <ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden />
          </summary>
          <p className="mt-3 text-muted-foreground">{a}</p>
        </details>
      ))}
    </div>
  );
}

export function FeatureGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((f) => (
        <div key={f.title} className="rounded-lg border-t-4 border-primary bg-card p-7 shadow-sm">
          <h3 className="font-display text-xl font-semibold">{f.title}</h3>
          <p className="mt-3 text-muted-foreground">{f.text}</p>
        </div>
      ))}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 grid max-w-3xl gap-3 text-muted-foreground">
      {items.map((t) => (
        <li key={t} className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> {t}</li>
      ))}
    </ul>
  );
}

export function LandingCta({ label }: { label: string }) {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      <Button asChild size="lg"><Link to="/contact" hash="mockup-form">Ask about a new site{label ? ` for your ${label}` : ""}</Link></Button>
      <Button asChild size="lg" variant="outline"><Link to="/contact">Contact Chris</Link></Button>
    </div>
  );
}

export function PriceBlock() {
  return (
    <>
      <FoundingBanner />
      <PaymentPlans />
      <DomainNote />
      <p className="mt-4 text-muted-foreground">See the <Link to="/pricing" className="font-semibold text-primary underline-offset-4 hover:underline">full pricing page</Link> for what’s included.</p>
      <p className="mt-4 text-muted-foreground">Already got a live site in the East Midlands and only one thing is broken? The <Link to="/website-mini-fix" className="font-semibold text-primary underline-offset-4 hover:underline">£100 website mini-fix</Link> is a short audit and one fix. It is not this founding-price rebuild.</p>
    </>
  );
}

export function CustomerSearches({ slug, name }: { slug: string; name: string }) {
  const info = customerSearches[slug];
  if (!info) return null;
  return (
    <div className="mt-4">
      <Heading eyebrow="Searches your customers type" title={`What people type when they need ${info.who}.`} />
      <div className="mt-6 max-w-3xl space-y-4 text-lg text-muted-foreground">
        <p>This page is for {name.toLowerCase()} who want a website. The search it answers is “{info.tradeSearch}”. It is not a listing, and it does not pretend to be {info.who}.</p>
        <p>Your own customers search for something else:</p>
      </div>
      <ul className="mt-4 grid max-w-3xl gap-2 text-muted-foreground">
        {info.queries.map((query) => (
          <li key={query} className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> “{query}”</li>
        ))}
      </ul>
      <div className="mt-4 max-w-3xl space-y-4 text-lg text-muted-foreground">
        <p>{info.angle}</p>
        <p>A useful site names your services and the places you cover, in real text, with a proper title on each page and a phone number that works on a mobile. Your free <a href="https://business.google.com/" className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary" target="_blank" rel="noopener noreferrer">Google Business Profile</a><span className="sr-only"> (opens in a new tab)</span> is the other half: the listing that can show your hours, phone number and area on Google and Maps. Use the same name, address and phone number as the website. I don’t write reviews, and none of this is a promise of a position in the results.</p>
      </div>
    </div>
  );
}

export function OtherTrades({ current }: { current?: string }) {
  return (
    <nav aria-label="Websites by trade" className="mt-8">
      <ul className="flex flex-wrap gap-3">
        {trades.filter((t) => t.slug !== current).map((t) => (
          <li key={t.slug}>
            <Link to="/websites-for/$slug" params={{ slug: t.slug }} className="inline-flex rounded-md border border-input bg-card px-4 py-2 text-sm font-semibold hover:bg-accent">Websites for {t.name.toLowerCase()}</Link>
          </li>
        ))}
        <li><Link to="/web-design-mansfield" className="inline-flex rounded-md border border-input bg-card px-4 py-2 text-sm font-semibold hover:bg-accent">Web design in Mansfield</Link></li>
        <li><Link to="/websites-for" className="inline-flex rounded-md border border-input bg-card px-4 py-2 text-sm font-semibold hover:bg-accent">All trades</Link></li>
      </ul>
    </nav>
  );
}

export { Section, Heading, StepsBand };
