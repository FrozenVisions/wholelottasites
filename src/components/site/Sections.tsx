import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Smartphone, Link2Off, ShieldAlert, SearchX, Check, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FORM_ENDPOINT, CONTACT } from "@/config";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { problems, why, included, steps, stages, paymentPlans, faqs, offers, bundles, proofSites, type EnquiryHash, type Project } from "@/lib/site-data";

export function Section({ children, muted, className = "", id }: { children: ReactNode; muted?: boolean; className?: string; id?: string }) {
  return (
    <section id={id} className={muted ? "bg-muted" : ""}>
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
          <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> Monthly care is optional, typically £29–£50: uptime and SSL checks, small edits, a form check, and a nudge before the domain renews. Or a full handover.</li>
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
        <Heading onNavy eyebrow="How it works" title={<span id="journey-heading">Sample, build, launch.</span>} lead="Before a deposit, you look at sample sites. A design for your business starts after that." />
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="copper"><Link to="/contact" hash="mockup-form">Ask about a new site</Link></Button>
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
        <Heading onNavy eyebrow="How it works" title="From sample sites to a live website." />
        <div className="mt-6"><Button asChild variant="copper"><Link to="/contact" hash="mockup-form">Ask about a new site</Link></Button></div>
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
              <img src={p.img} srcSet={`${p.imgSmall} 600w, ${p.imgMid} 800w, ${p.img} 1200w`} sizes={i === 0 ? "(min-width: 1280px) 820px, (min-width: 768px) 66vw, 92vw" : "(min-width: 1280px) 400px, (min-width: 768px) 33vw, 92vw"} alt={p.alt} loading="lazy" decoding="async" width={1200} height={750} className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
              <span className="absolute bottom-3 left-3 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-navy-foreground opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100">
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
          className="fixed inset-0 z-[100] flex flex-col bg-navy p-3 md:p-8"
          onClick={() => setOpen(null)}
        >
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 pb-3 text-navy-foreground">
            <p className="text-sm">
              <span id="project-dialog-title" className="font-display text-lg font-semibold">{open.name}</span>
              <span className="ml-3 text-navy-foreground">{open.url ? "Live site" : "Example design"}</span>
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
            <img src={open.full} alt={open.alt} width={open.fullWidth} height={open.fullHeight} decoding="async" className="block h-auto w-full" />
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

export function OfferCards() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {offers.map((offer) => (
        <article key={offer.id} id={offer.id} className="scroll-mt-28 flex flex-col rounded-lg border-t-4 border-primary bg-card p-8 shadow-sm">
          <h3 className="font-display text-2xl font-semibold">{offer.title}</h3>
          <p className="mt-4 font-display text-5xl font-bold leading-none">{offer.price}</p>
          <p className="mt-3 text-sm font-semibold text-primary">{offer.priceNote}</p>
          <p className="mt-4 text-muted-foreground">{offer.summary}</p>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
            {offer.points.map((point) => (
              <li key={point} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
          {offer.id === "new-website" && (
            <p className="mt-4 text-sm text-muted-foreground">
              Live sites:{" "}
              {proofSites.map((site, index) => (
                <span key={site.href}>
                  {index > 0 && (index === proofSites.length - 1 ? " and " : ", ")}
                  <a href={site.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline-offset-4 hover:underline">
                    {site.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </span>
              ))}
              .
            </p>
          )}
          <div className="mt-auto pt-8">
            <Button asChild>
              <Link to="/contact" hash={offer.hash}>{offer.cta}</Link>
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}

export function BundleStrip() {
  return (
    <div id="bundles" className="mt-16 scroll-mt-28">
      <Heading
        eyebrow="Bundles"
        title="When you want more than one."
        lead="A bundle is those pieces, quoted together before you start. The Google part still comes with no ranking promise."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {bundles.map((bundle) => (
          <article key={bundle.name} className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="font-display text-xl font-semibold">{bundle.name}</h3>
            <p className="mt-2 text-muted-foreground">{bundle.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button asChild size="lg">
          <Link to="/contact" hash="bundle">Ask about a bundle</Link>
        </Button>
        <p className="text-sm text-muted-foreground">
          Or email <a className="font-semibold text-primary hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          {" "}or call <a className="font-semibold text-primary hover:underline" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>.
        </p>
      </div>
    </div>
  );
}

export function DomainNote() {
  return (
    <p className="mt-8 max-w-3xl text-muted-foreground">
      You buy your own domain (around £5–£10 a year) and you keep the account. Want to take payments? You set up your own Stripe account and I’ll connect it. Monthly care, typically £29–£50, is optional. The longer notes are a <Link to="/cheap-website-for-small-business" className="font-semibold text-primary underline-offset-4 hover:underline">cheap website for a small business</Link> and a <Link to="/pay-monthly-website" className="font-semibold text-primary underline-offset-4 hover:underline">pay monthly website</Link>.
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

type EnquiryMode = "website" | "fix" | "gbp" | "care" | "bundle" | "mini";

const enquiryCopy: Record<EnquiryMode, { hash: EnquiryHash; label: string; eyebrow: string; title: string; lead: string; subject: string; button: string; placeholder: string }> = {
  website: {
    hash: "mockup-form",
    label: "New website",
    eyebrow: "New website",
    title: "Ask about a new website.",
    lead: "Tell me what the business does. Before a deposit, the sample is a site I’ve already built — not a design made for you. A design for your business starts after the deposit. A new small-business site is £500.",
    subject: "New website enquiry – WholeLottaSites",
    button: "Ask about a new site",
    placeholder: "What does your business do, and what should the site help people do?",
  },
  fix: {
    hash: "fix-audit",
    label: "Website fix — free audit",
    eyebrow: "Free fix audit",
    title: "Get a free fix audit.",
    lead: "Send the address. I’ll look at the live site and reply with screenshots and 3–5 issues before any price. A typical fix is £150–£400.",
    subject: "Free website fix audit – WholeLottaSites",
    button: "Request a free fix audit",
    placeholder: "What’s wrong — broken, slow, bad on a phone, a form that doesn’t arrive, or just out of date?",
  },
  gbp: {
    hash: "gbp",
    label: "Google Business Profile",
    eyebrow: "Google Business Profile",
    title: "Ask about your Google listing.",
    lead: "Setup or a fix is £149. Monthly management is £99–£150 if you want it. You stay the Google owner. I don’t promise a ranking.",
    subject: "Google Business Profile enquiry – WholeLottaSites",
    button: "Ask about my listing",
    placeholder: "Business name, and whether you need the listing set up or tidied.",
  },
  care: {
    hash: "care",
    label: "Monthly care",
    eyebrow: "Monthly care",
    title: "Ask about monthly care.",
    lead: "Typically £29–£50 a month, and optional. Uptime and SSL, small edits, form checks, and a nudge before the domain renews.",
    subject: "Monthly website care enquiry – WholeLottaSites",
    button: "Ask about care",
    placeholder: "Which site should I look after, and what tends to need changing?",
  },
  bundle: {
    hash: "bundle",
    label: "A bundle",
    eyebrow: "Bundles",
    title: "Ask about a bundle.",
    lead: "Fix + care, a site or a fix plus Google Business Profile, or the full set. I’ll quote the pieces before you start.",
    subject: "Bundle enquiry – WholeLottaSites",
    button: "Ask about a bundle",
    placeholder: "Which combination, and the website address if you already have one?",
  },
  mini: {
    hash: "mini-fix",
    label: "£100 East Midlands mini-fix",
    eyebrow: "East Midlands",
    title: "Ask about the £100 mini-fix.",
    lead: "For a live site in the East Midlands. £100 is a short audit and one concrete fix. Not a redesign, and not a ranking promise. Send the address.",
    subject: "£100 website mini-fix enquiry – WholeLottaSites",
    button: "Send the site address",
    placeholder: "What’s the one thing that’s broken, and where is the site?",
  },
};

function modeFromHash(hash: string): EnquiryMode {
  const match = (Object.keys(enquiryCopy) as EnquiryMode[]).find((mode) => `#${enquiryCopy[mode].hash}` === hash);
  return match ?? "website";
}

export function MockupForm({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  const [next, setNext] = useState("");
  const [thanks, setThanks] = useState(false);
  const [mode, setMode] = useState<EnquiryMode>("website");
  useEffect(() => {
    setNext(`${window.location.origin}/contact#thanks`);
    const check = () => {
      setThanks(window.location.hash === "#thanks");
      if (window.location.hash !== "#thanks") setMode(modeFromHash(window.location.hash));
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);
  const copy = enquiryCopy[mode];
  const chooseMode = (nextMode: EnquiryMode) => {
    setMode(nextMode);
    const hash = `#${enquiryCopy[nextMode].hash}`;
    if (window.location.hash !== hash) history.replaceState(null, "", hash);
  };

  const field = "mt-2 w-full rounded-md border border-input bg-card px-4 py-3 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";
  return (
    <div id="thanks" className="grid gap-10 md:grid-cols-2 md:items-start">
      <Heading
        as={heading}
        eyebrow={copy.eyebrow}
        title={copy.title}
        lead={copy.lead}
      />
      <div className="scroll-mt-28 md:col-start-2 md:row-span-2 md:row-start-1">
        <div id="mockup-form" className="scroll-mt-28" />
        <div id="fix-audit" className="scroll-mt-28" />
        <div id="gbp" className="scroll-mt-28" />
        <div id="care" className="scroll-mt-28" />
        <div id="bundle" className="scroll-mt-28" />
        <div id="mini-fix" className="scroll-mt-28" />
        {thanks ? (
          <div role="status" className="rounded-lg border-t-4 border-primary bg-card p-10 shadow-sm">
            <h2 className="text-3xl">Thanks — got it!</h2>
            <p className="mt-4 text-muted-foreground">Your message is on its way to Chris. I’ll be in touch soon.</p>
          </div>
        ) : (
          <form action={FORM_ENDPOINT} method="POST" className="space-y-5 rounded-lg border-t-4 border-primary bg-card p-6 shadow-sm md:p-8">
            <input type="hidden" name="_subject" value={copy.subject} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={next} />
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" aria-label="Leave this field blank" />
            <label htmlFor="mockup-enquiry" className="block text-sm font-medium">What do you need?
              <select id="mockup-enquiry" required name="enquiry" value={mode} onChange={(event) => chooseMode(event.target.value as EnquiryMode)} className={field}>
                {(Object.keys(enquiryCopy) as EnquiryMode[]).map((key) => (
                  <option key={key} value={key}>{enquiryCopy[key].label}</option>
                ))}
              </select>
            </label>
            <label htmlFor="mockup-name" className="block text-sm font-medium">Your name
              <input id="mockup-name" required name="name" autoComplete="name" className={field} />
            </label>
            <label htmlFor="mockup-business" className="block text-sm font-medium">Business name
              <input id="mockup-business" required name="business" autoComplete="organization" className={field} />
            </label>
            <label htmlFor="mockup-email" className="block text-sm font-medium">Email
              <input id="mockup-email" required type="email" name="email" autoComplete="email" className={field} />
            </label>
            <label htmlFor="mockup-phone" className="block text-sm font-medium">Phone <span className="font-normal text-muted-foreground">(optional, if you’d rather I call)</span>
              <input id="mockup-phone" type="tel" name="phone" autoComplete="tel" inputMode="tel" className={field} />
            </label>
            <label htmlFor="mockup-website" className="block text-sm font-medium">Current website {mode === "fix" || mode === "mini" ? <span className="font-normal text-muted-foreground">(the live site)</span> : <span className="font-normal text-muted-foreground">(optional)</span>}
              <input id="mockup-website" required={mode === "fix" || mode === "mini"} type="url" name="current_website" autoComplete="url" placeholder="https://" className={field} />
            </label>
            <label htmlFor="mockup-message" className="block text-sm font-medium">Message
              <textarea id="mockup-message" required name="message" rows={4} placeholder={copy.placeholder} className={field} />
            </label>
            <Button type="submit" size="lg" className="w-full">{copy.button}</Button>
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
        <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> These plans pay off the £500 website. They are not monthly care. Care is optional, typically £29–£50, or you can take a full handover.</li>
        <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> Your own domain is extra, at around £5–£10 a year.</li>
      </ul>
    </div>
  );
}
