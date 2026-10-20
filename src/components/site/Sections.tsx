import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Smartphone, Link2Off, ShieldAlert, SearchX, Check, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STRIPE_PAYMENT_LINK, FORM_ENDPOINT, CONTACT } from "@/config";
import { problems, why, included, steps, faqs, type Project } from "@/lib/site-data";

export function Section({ children, muted, className = "" }: { children: ReactNode; muted?: boolean; className?: string }) {
  return (
    <section className={muted ? "bg-muted" : ""}>
      <div className={`mx-auto max-w-7xl px-5 py-20 md:py-28 ${className}`}>{children}</div>
    </section>
  );
}

export function Heading({ eyebrow, title, lead, onNavy }: { eyebrow: string; title: ReactNode; lead?: ReactNode; onNavy?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className={`eyebrow ${onNavy ? "text-copper" : ""}`}>{eyebrow}</p>
      <h2 className="mt-3 text-3xl md:text-5xl">{title}</h2>
      {lead && <p className={`mt-5 text-lg ${onNavy ? "text-navy-foreground/80" : "text-muted-foreground"}`}>{lead}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead?: ReactNode }) {
  return (
    <section className="pitch-bottom hero-navy pb-28 text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 pt-16 md:pt-24">
        <p className="eyebrow text-copper">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] md:text-6xl">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lg text-navy-foreground/85">{lead}</p>}
      </div>
    </section>
  );
}

const problemIcons = [Smartphone, Link2Off, ShieldAlert, SearchX];

export function ProblemsGrid() {
  return (
    <div className="mt-12 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {problems.map(([t, d], i) => {
        const Icon = problemIcons[i] ?? Smartphone;
        return (
          <div key={t} className="group bg-card p-8 transition-colors hover:bg-accent">
            <Icon className="size-9 text-primary transition-transform duration-300 group-hover:-translate-y-1" aria-hidden />
            <h3 className="mt-5 text-xl font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        );
      })}
    </div>
  );
}

export function WhyGrid() {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2">
      {why.map(([t, d]) => (
        <div key={t} className="rounded-lg border-t-4 border-primary bg-card p-7 shadow-sm">
          <h3 className="text-xl font-semibold">{t}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{d}</p>
        </div>
      ))}
    </div>
  );
}

export function IncludedList() {
  return (
    <ul className="mt-10 flex flex-wrap gap-3">
      {included.map((t) => (
        <li key={t} className="inline-flex items-center gap-2 rounded-full border border-input bg-card px-4 py-2 text-sm font-medium">
          <Check className="size-4 text-primary" aria-hidden /> {t}
        </li>
      ))}
    </ul>
  );
}

export function StepsBand() {
  return (
    <section className="pitch-top bg-navy pb-20 pt-32 text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5">
        <Heading onNavy eyebrow="How it works" title="Four simple steps." />
        <ol className="mt-14 grid gap-10 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="border-t border-navy-foreground/15 pt-6">
              <span className="font-display text-5xl font-bold text-copper">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-navy-foreground/80">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ProjectGrid({ items, detailed }: { items: Project[]; detailed?: boolean }) {
  return (
    <div className="mt-12 grid auto-rows-[minmax(16rem,auto)] gap-6 md:grid-cols-3">
      {items.map((p, i) => (
        <article key={p.name} className={`group flex flex-col overflow-hidden rounded-lg border bg-card ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
          <div className="relative flex-1 overflow-hidden bg-muted">
            {p.img ? (
              <img src={p.img} alt={`${p.name} website screenshot`} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            ) : (
              <div className="absolute inset-0 grid place-items-center bg-navy">
                <span className="font-display text-4xl font-bold text-navy-foreground">{p.name}</span>
              </div>
            )}
          </div>
          <div className="flex items-end justify-between gap-4 p-5">
            <div>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{detailed ? p.long : p.desc}</p>
            </div>
            {p.url && (
              <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.name} (opens in new tab)`} className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline">
                Visit site <ArrowUpRight className="size-4" aria-hidden />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export function PricingCards() {
  const hasStripe = STRIPE_PAYMENT_LINK.length > 0;
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border-t-4 border-primary bg-card p-8 shadow-sm">
        <p className="eyebrow">Small business</p>
        <p className="mt-4 font-display text-6xl font-bold">£500</p>
        <p className="mt-2 text-muted-foreground">A full custom website, built from scratch.</p>
        {hasStripe ? (
          <Button asChild size="lg" className="mt-8">
            <a href={STRIPE_PAYMENT_LINK} target="_blank" rel="noopener noreferrer">Pay deposit / buy</a>
          </Button>
        ) : (
          <>
            <Button asChild size="lg" className="mt-8">
              <Link to="/contact">Pay deposit / buy</Link>
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">Online payment coming soon — request your free mock-up to get started.</p>
          </>
        )}
      </div>
      <div className="rounded-lg bg-navy p-8 text-navy-foreground shadow-sm">
        <p className="eyebrow text-copper">Bigger business</p>
        <p className="mt-4 font-display text-4xl font-bold">from around £1,200</p>
        <p className="mt-2 text-navy-foreground/80">More pages, more features. Tell me what you need and I’ll give you a quote.</p>
        <Button asChild variant="navyOutline" size="lg" className="mt-8">
          <Link to="/contact">Get a quote</Link>
        </Button>
      </div>
    </div>
  );
}

export function DomainNote() {
  return (
    <p className="mt-8 max-w-3xl text-muted-foreground">
      Note: you buy your own domain (around £5–£10) — it’s yours to keep. Want to take payments? You set up your own Stripe account and I’ll connect it.
    </p>
  );
}

export function FaqList() {
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

export function MockupForm() {
  const [next, setNext] = useState("");
  const [thanks, setThanks] = useState(false);
  useEffect(() => {
    setNext(`${window.location.origin}/contact#thanks`);
    const check = () => setThanks(window.location.hash === "#thanks");
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  const field = "mt-2 w-full rounded-md border border-input bg-card px-4 py-3 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";
  return (
    <div id="thanks" className="grid gap-12 md:grid-cols-2">
      <div>
        <Heading
          eyebrow="No strings attached"
          title="Get your free mock-up homepage."
          lead="Tell me a little about your business and I’ll design a homepage mock-up for you — free. Like it? We build the rest. Don’t? No problem."
        />
        <div className="mt-8 space-y-2">
          <p>Prefer email? <a className="font-semibold text-primary hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
          <p>Or call: <a className="font-semibold text-primary hover:underline" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></p>
          <p className="text-muted-foreground">{CONTACT.name}, {CONTACT.role} · {CONTACT.location}</p>
        </div>
      </div>
      {thanks ? (
        <div role="status" className="rounded-lg border-t-4 border-primary bg-card p-10 shadow-sm">
          <h3 className="text-3xl">Thanks — got it!</h3>
          <p className="mt-4 text-muted-foreground">Your mock-up request is on its way to Chris. I’ll be in touch soon.</p>
        </div>
      ) : (
        <form action={FORM_ENDPOINT} method="POST" className="space-y-5 rounded-lg border-t-4 border-primary bg-card p-6 shadow-sm md:p-8">
          <input type="hidden" name="_subject" value="New free mock-up request – WholeLottaSites" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={next} />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          <label className="block text-sm font-medium">Your name
            <input required name="name" autoComplete="name" className={field} />
          </label>
          <label className="block text-sm font-medium">Business name
            <input required name="business" autoComplete="organization" className={field} />
          </label>
          <label className="block text-sm font-medium">Email
            <input required type="email" name="email" autoComplete="email" className={field} />
          </label>
          <label className="block text-sm font-medium">Current website <span className="text-muted-foreground">(optional)</span>
            <input type="url" name="current_website" placeholder="https://" className={field} />
          </label>
          <label className="block text-sm font-medium">Message
            <textarea required name="message" rows={4} placeholder="What does your business do? What do you want from your site?" className={field} />
          </label>
          <Button type="submit" size="lg" className="w-full">Get your free mock-up</Button>
        </form>
      )}
    </div>
  );
}

