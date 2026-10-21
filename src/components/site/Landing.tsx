import { Link } from "@tanstack/react-router";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Heading, PaymentPlans, DomainNote, StepsBand } from "@/components/site/Sections";
import { trades, type Faq } from "@/lib/landing-data";

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
      <Button asChild size="lg"><Link to="/contact" hash="mockup-form">Get your free mock-up{label ? ` for your ${label}` : ""}</Link></Button>
      <Button asChild size="lg" variant="outline"><Link to="/contact">Contact Chris</Link></Button>
    </div>
  );
}

export function PriceBlock() {
  return (
    <>
      <PaymentPlans />
      <DomainNote />
      <p className="mt-4 text-muted-foreground">See the <Link to="/pricing" className="font-semibold text-primary underline-offset-4 hover:underline">full pricing page</Link> for what’s included.</p>
    </>
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
