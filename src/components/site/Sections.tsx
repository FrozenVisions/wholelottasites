import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Smartphone, Link2Off, ShieldAlert, SearchX, Check, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FORM_ENDPOINT, CONTACT } from "@/config";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { problems, why, included, steps, stages, paymentPlans, faqs, type Project } from "@/lib/site-data";

export function Section({ children, muted, className = "" }: { children: ReactNode; muted?: boolean; className?: string }) {
  return (
    <section className={muted ? "bg-muted" : ""}>
      <div className={`mx-auto max-w-7xl px-5 py-20 md:py-28 ${className}`}>{children}</div>
    </section>
  );
}

export function Heading({ eyebrow, title, lead, onNavy, as = "h2" }: { eyebrow: string; title: ReactNode; lead?: ReactNode; onNavy?: boolean; as?: "h1" | "h2" }) {
  const Title = as;
  return (
    <div className="max-w-2xl">
      <p className={`eyebrow ${onNavy ? "text-copper" : ""}`}>{eyebrow}</p>
      <Title className={`mt-3 ${as === "h1" ? "text-4xl leading-[1.05] md:text-6xl" : "text-3xl md:text-5xl"}`}>{title}</Title>
      {lead && <p className={`mt-5 text-lg ${onNavy ? "text-navy-foreground/80" : "text-muted-foreground"}`}>{lead}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, lead, crumbs }: { eyebrow: string; title: ReactNode; lead?: ReactNode; crumbs?: { name: string; href?: string }[] }) {
  return (
    <section className="pitch-bottom hero-navy pb-28 text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 pt-12 md:pt-20">
        {crumbs && crumbs.length > 0 && <div className="mb-6"><Breadcrumbs items={crumbs} onNavy /></div>}
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

export function WhatsIncluded() {
  return (
    <div id="included" className="scroll-mt-28">
      <Heading
        eyebrow="The £500 package"
        title="What the £500 includes."
        lead="A full small-business website, built from scratch. The list is the same wherever you read it."
      />
      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {included.map(([title, text]) => (
          <li key={title} className="rounded-lg border-t-4 border-primary bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-muted-foreground">{text}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8 max-w-3xl rounded-lg border bg-card p-6">
        <h3 className="text-xl font-semibold">Separate from the £500</h3>
        <ul className="mt-4 grid gap-3 text-muted-foreground">
          <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> Your domain, around £5–£10 a year. You buy it, so you own it.</li>
          <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> Once the site is paid for: a £10-a-month hosting and care plan, or a full handover. Your choice.</li>
        </ul>
        <p className="mt-4 text-muted-foreground">
          The <Link to="/pay-monthly-website" className="font-semibold text-primary underline-offset-4 hover:underline">pay monthly plans</Link> all total £500. A plain-English note on{" "}
          <Link to="/cheap-website-for-small-business" className="font-semibold text-primary underline-offset-4 hover:underline">what the cheap website includes</Link> is here if you want the longer version.
        </p>
      </div>
    </div>
  );
}

export function JourneyBand() {
  return (
    <section className="pitch-top bg-navy pb-20 pt-32 text-navy-foreground" aria-labelledby="journey-heading">
      <div className="mx-auto max-w-7xl px-5">
        <Heading onNavy eyebrow="How it works" title={<span id="journey-heading">Mock-up, build, launch.</span>} lead="You see a homepage before you pay anything." />
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="copper"><Link to="/contact" hash="mockup-form">Start with a free mock-up</Link></Button>
          <Button asChild variant="navyOutline"><Link to="/how-it-works">The full process</Link></Button>
        </div>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-3">
          <span aria-hidden className="absolute left-0 right-0 top-[1.4rem] hidden h-px bg-gradient-to-r from-copper via-copper/50 to-transparent md:block" />
          {stages.map((stage, index) => (
            <li key={stage.title} className="relative border-l border-navy-foreground/15 pl-6 md:border-l-0 md:pl-0">
              <span aria-hidden className="relative inline-grid size-11 place-items-center rounded-full border-2 border-copper bg-navy font-display text-lg font-bold text-copper">{index + 1}</span>
              <h3 className="mt-3 text-xl font-semibold">{stage.title}</h3>
              <p className="mt-2 text-sm text-navy-foreground/85">{stage.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function StepsBand() {
  return (
    <section className="pitch-top bg-navy pb-20 pt-32 text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5">
        <Heading onNavy eyebrow="How it works" title="From free mock-up to live website in four steps." />
        <div className="mt-6"><Button asChild variant="copper"><Link to="/contact">Start with a free mock-up</Link></Button></div>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4">
          <span aria-hidden className="absolute left-0 right-0 top-[1.4rem] hidden h-px bg-gradient-to-r from-copper via-copper/50 to-transparent md:block" />
          {steps.map(([t, d], i) => (
            <li key={t} className="relative border-l border-navy-foreground/15 pl-6 md:border-l-0 md:pl-0">
              <span aria-hidden className="relative inline-grid size-11 place-items-center rounded-full border-2 border-copper bg-navy font-display text-lg font-bold text-copper">{i + 1}</span>
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
  const [open, setOpen] = useState<Project | null>(null);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key !== "Tab") return;
      const root = document.getElementById("project-dialog");
      if (!root) return;
      const focusable = [...root.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      previouslyFocused?.focus();
    };
  }, [open]);

  return (
    <>
      <div className="mt-12 grid auto-rows-[minmax(16rem,auto)] gap-6 md:grid-cols-3">
        {items.map((p, i) => (
          <article key={p.name} className={`group flex flex-col overflow-hidden rounded-lg border bg-card ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
            <button
              type="button"
              onClick={() => setOpen(p)}
              aria-label={`View larger screenshot of ${p.name}`}
              className="relative block min-h-56 flex-1 cursor-zoom-in overflow-hidden bg-muted text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <img src={p.img} srcSet={`${p.imgSmall} 600w, ${p.img} 1200w`} sizes={i === 0 ? "(min-width: 768px) 66vw, 92vw" : "(min-width: 768px) 33vw, 92vw"} alt={p.alt} loading={i === 0 && detailed ? "eager" : "lazy"} fetchPriority={i === 0 && detailed ? "high" : "auto"} decoding="async" width={1200} height={750} className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
              <span className="absolute bottom-3 left-3 rounded-full bg-navy/85 px-3 py-1 text-xs font-semibold text-navy-foreground opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100">
                View larger
              </span>
            </button>
            <div className="flex items-end justify-between gap-4 p-5">
              <div>
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{detailed ? p.long : p.desc}</p>
              </div>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit site: ${p.name} (opens in new tab)`} className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline">
                  Visit site <ArrowUpRight className="size-4" aria-hidden />
                </a>
              ) : (
                <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Example design</span>
              )}
            </div>
          </article>
        ))}
      </div>

      {open && (
        <div
          id="project-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          className="fixed inset-0 z-[100] flex flex-col bg-navy/95 p-3 md:p-8"
          onClick={() => setOpen(null)}
        >
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 pb-3 text-navy-foreground">
            <p className="text-sm">
              <span id="project-dialog-title" className="font-display text-lg font-semibold">{open.name}</span>
              <span className="ml-3 text-navy-foreground/75">{open.url ? "Live client site" : "Example design"}</span>
            </p>
            <button
              type="button"
              autoFocus
              onClick={() => setOpen(null)}
              className="rounded-md border border-navy-foreground/40 px-3 py-1.5 text-sm font-semibold hover:bg-navy-foreground/10"
            >
              Close <span aria-hidden>✕</span>
            </button>
          </div>
          <div className="mx-auto w-full max-w-5xl flex-1 overflow-y-auto rounded-md bg-card" onClick={(e) => e.stopPropagation()}>
            <img src={open.full} alt={open.alt} className="block w-full" />
          </div>
          {open.url && (
            <div className="mx-auto pt-3" onClick={(e) => e.stopPropagation()}>
              <a href={open.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-copper hover:underline">
                Visit {open.name} <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export function PricingCards() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border-t-4 border-primary bg-card p-8 shadow-sm">
        <p className="eyebrow">Small business</p>
        <p className="mt-4 font-display text-6xl font-bold">£500</p>
        <p className="mt-2 text-muted-foreground">A full custom website, built from scratch.</p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/contact" hash="mockup-form">Get started</Link>
        </Button>
      </div>
      <div className="rounded-lg bg-navy p-8 text-navy-foreground shadow-sm">
        <p className="eyebrow text-copper">Bigger business</p>
        <p className="mt-4 font-display text-4xl font-bold">from around £1,200</p>
        <p className="mt-2 text-navy-foreground/80">More pages, more features. Tell me what you need and I’ll give you a quote.</p>
        <Button asChild variant="navyOutline" size="lg" className="mt-8">
          <Link to="/contact" hash="mockup-form">Get a quote</Link>
        </Button>
      </div>
    </div>
  );
}

export function DomainNote() {
  return (
    <p className="mt-8 max-w-3xl text-muted-foreground">
      Note: you buy your own domain (around £5–£10 a year) — it’s yours to keep. Want to take payments? You set up your own Stripe account and I’ll connect it. The longer notes are a <Link to="/cheap-website-for-small-business" className="font-semibold text-primary underline-offset-4 hover:underline">cheap website for a small business</Link> and a <Link to="/pay-monthly-website" className="font-semibold text-primary underline-offset-4 hover:underline">pay monthly website</Link>.
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

export function MockupForm({ heading = "h2" }: { heading?: "h1" | "h2" }) {
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
    <div id="thanks" className="grid gap-10 md:grid-cols-2 md:items-start">
      <Heading
        as={heading}
        eyebrow="No strings attached"
        title="Get your free mock-up homepage."
        lead="A couple of minutes. I’ll design a homepage for your business, free. Like it? We build the rest."
      />
      <div id="mockup-form" className="scroll-mt-28 md:col-start-2 md:row-span-2 md:row-start-1">
        {thanks ? (
          <div role="status" className="rounded-lg border-t-4 border-primary bg-card p-10 shadow-sm">
            <h2 className="text-3xl">Thanks — got it!</h2>
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
            <label className="block text-sm font-medium">Phone <span className="text-muted-foreground">(optional, if you’d rather I call)</span>
              <input type="tel" name="phone" autoComplete="tel" inputMode="tel" className={field} />
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
      <div className="space-y-8">
        <ol className="space-y-4">
          {stages.map((stage, index) => (
            <li key={stage.title} className="flex gap-3">
              <span aria-hidden className="inline-grid size-8 shrink-0 place-items-center rounded-full border-2 border-primary font-display font-bold text-primary">{index + 1}</span>
              <span><span className="font-semibold">{stage.title}. </span><span className="text-muted-foreground">{stage.summary}</span></span>
            </li>
          ))}
        </ol>
        <div className="space-y-2">
          <p>Prefer email? <a className="font-semibold text-primary hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
          <p>Or call: <a className="font-semibold text-primary hover:underline" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></p>
          <p className="text-muted-foreground">{CONTACT.name}, {CONTACT.role} · {CONTACT.location}</p>
        </div>
      </div>
    </div>
  );
}

export function PaymentPlans() {
  return (
    <div id="payment-plans" className="mt-16 scroll-mt-24">
      <Heading
        eyebrow="Payment plans"
        title="Rather spread the cost?"
        lead="A full website is £500. If you’d rather not pay it all at once, pick one of these plans. Every plan adds up to exactly £500, with nothing extra on top."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {paymentPlans.map((p) => (
          <div key={p.name} className="rounded-lg border-t-4 border-primary bg-card p-7 shadow-sm">
            <p className="eyebrow">{p.name}</p>
            <p className="mt-3 font-display text-3xl font-bold">{p.headline}</p>
            <p className="mt-2 text-muted-foreground">{p.detail}</p>
            <p className="mt-4 text-sm font-semibold text-primary">Total: £500</p>
          </div>
        ))}
      </div>
      <ul className="mt-8 grid max-w-3xl gap-3 text-muted-foreground">
        <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> Monthly payments are taken automatically by card, through Stripe — nothing to remember.</li>
        <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> Once it’s paid off, you choose: a £10-a-month hosting and care plan, or a full handover of your site.</li>
        <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> Your own domain is extra, at around £5–£10 a year.</li>
      </ul>
    </div>
  );
}
