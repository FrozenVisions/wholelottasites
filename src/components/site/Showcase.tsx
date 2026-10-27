import { Link } from "@tanstack/react-router";
import { Hammer, MapPin, LayoutTemplate, Gauge, Smartphone, ShieldCheck, Check, X, ArrowRight } from "lucide-react";
import vinylHero from "@/assets/portfolio/wholelottavinyl-hero.webp";
import vinylHero640 from "@/assets/portfolio/wholelottavinyl-hero-640.webp";
import vinylHero480 from "@/assets/portfolio/wholelottavinyl-hero-480.webp";
export { vinylHero, vinylHero640, vinylHero480 };
import safeMobile from "@/assets/portfolio/safeplate-mobile.webp";
import safeMobileMid from "@/assets/portfolio/safeplate-mobile-280.webp";
import safeMobileSmall from "@/assets/portfolio/safeplate-mobile-200.webp";
import { Reveal } from "@/components/site/Reveal";
import { Heading } from "@/components/site/Sections";

/** Laptop + phone frames showing real, live work (WholeLottaVinyl and SafePlate). */
export function DeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none" role="img">
      <div className="relative rounded-t-xl border border-navy-foreground/15 bg-[#0e1824] p-2 pb-3 shadow-2xl shadow-black/40">
        <div className="mb-2 flex gap-1.5 px-1" aria-hidden>
          <span className="size-2 rounded-full bg-navy-foreground/25" /><span className="size-2 rounded-full bg-navy-foreground/25" /><span className="size-2 rounded-full bg-navy-foreground/25" />
        </div>
        <img src={vinylHero} srcSet={`${vinylHero480} 480w, ${vinylHero640} 640w, ${vinylHero} 800w`} sizes="(min-width: 1024px) 36rem, calc(100vw - 3.5rem)" alt="" width={800} height={481} fetchPriority="high" decoding="async" className="block aspect-[800/481] w-full rounded-sm object-cover object-top" />
      </div>
      <div className="mx-auto h-3 w-[108%] -translate-x-[3.7%] rounded-b-xl bg-gradient-to-b from-[#2a3a4d] to-[#141f2b]" aria-hidden />
      <div className="float-slow absolute -bottom-6 -right-2 w-[30%] min-w-24 rounded-[1.4rem] border border-navy-foreground/20 bg-[#0e1824] p-1.5 shadow-2xl shadow-black/50 sm:-right-6">
        <img src={safeMobile} srcSet={`${safeMobileSmall} 200w, ${safeMobileMid} 280w, ${safeMobile} 390w`} sizes="(min-width: 1024px) 180px, 100px" alt="" width={390} height={844} decoding="async" fetchPriority="low" className="block aspect-[390/844] w-full rounded-[1.1rem] object-cover object-top" />
      </div>
      <p className="sr-only">Laptop showing the WholeLottaVinyl record shop website and a phone showing the SafePlate website, both designed and built by Chris Faulkes.</p>
    </div>
  );
}

const trust = [
  [Hammer, "Built from scratch"],
  [LayoutTemplate, "No templates"],
  [Smartphone, "Mobile-first"],
  [Gauge, "Fast-loading"],
  [ShieldCheck, "Secure HTTPS"],
  [MapPin, "UK-based, Mansfield"],
] as const;

export function TrustStrip() {
  return (
    <section aria-label="Why WholeLottaSites" className="border-b bg-card">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-4 px-5 py-6 sm:grid-cols-3 lg:grid-cols-6">
        {trust.map(([Icon, label]) => (
          <li key={label} className="flex items-center gap-2 text-sm font-semibold">
            <Icon className="size-5 shrink-0 text-primary" aria-hidden /> {label}
          </li>
        ))}
      </ul>
    </section>
  );
}

const fixes = [
  ["Pinches and zooms on a phone", "Designed for phones first, then scaled up to desktop."],
  ["Buttons and links that go nowhere", "Every link and button checked before launch."],
  ["‘Not secure’ warning in the browser", "Secure HTTPS from day one."],
  ["Vague Google title like ‘Home’", "A proper title and description on every page."],
  ["No clear way to get in touch", "Contact form, phone and email on every page."],
  ["Slow, bloated page builder", "Hand-built pages with no unused plugins."],
] as const;

export function BeforeAfter() {
  return (
    <>
      <Heading eyebrow="Before & after" title="The problems I fix most often." lead="These are the issues I see again and again on small business websites — and what your new site does instead." />
      <div className="mt-12 overflow-hidden rounded-lg border bg-card">
        <div className="hidden grid-cols-2 border-b bg-muted text-sm font-semibold md:grid">
          <p className="px-6 py-3">Typical old website</p>
          <p className="border-l px-6 py-3">Your WholeLottaSites website</p>
        </div>
        <ul className="divide-y">
          {fixes.map(([before, after], i) => (
            <Reveal as="li" key={before} delay={i * 60} className="grid md:grid-cols-2">
              <p className="flex items-start gap-3 px-6 py-4 text-muted-foreground">
                <X className="mt-0.5 size-5 shrink-0 text-destructive" aria-hidden /><span><span className="sr-only">Before: </span>{before}</span>
              </p>
              <p className="flex items-start gap-3 bg-accent/40 px-6 py-4 font-medium md:border-l">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden /><span><span className="sr-only">After: </span>{after}</span>
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </>
  );
}

const rows = [
  ["Design", "Built from scratch for your business", "A theme shared with thousands of other sites"],
  ["Who builds it", "I do — you just approve the design", "You do, in your spare time"],
  ["Mobile layout", "Designed for phones first", "Depends on the theme"],
  ["Google titles & descriptions", "Set up on every page", "Up to you to remember"],
  ["Contact form & payment links", "Set up and tested for you", "You configure them yourself"],
  ["Going live", "I help you connect your domain", "You work it out"],
  ["Before you buy", "Sample sites, then a design after the deposit", "You build it yourself"],
] as const;

export function Comparison() {
  return (
    <>
      <Heading eyebrow="Side by side" title="WholeLottaSites vs doing it yourself." lead="A DIY site builder can work — but here’s what you get when it’s built for you." />
      <p className="mt-4 text-sm text-muted-foreground md:hidden">Swipe sideways to see the whole comparison.</p>
      <div className="mt-12 overflow-x-auto rounded-lg border bg-card">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <caption className="sr-only">Comparison of a WholeLottaSites website with a DIY template site builder</caption>
          <thead>
            <tr className="border-b">
              <th scope="col" className="px-5 py-4 font-semibold text-muted-foreground"><span className="sr-only">Feature</span></th>
              <th scope="col" className="bg-navy px-5 py-4 font-display text-base text-navy-foreground">WholeLottaSites <span className="ml-1 text-copper">£500</span></th>
              <th scope="col" className="px-5 py-4 font-display text-base">DIY template builder</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {rows.map(([f, us, them]) => (
              <tr key={f}>
                <th scope="row" className="px-5 py-4 font-semibold">{f}</th>
                <td className="bg-accent/40 px-5 py-4"><span className="flex items-start gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />{us}</span></td>
                <td className="px-5 py-4 text-muted-foreground">{them}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function AboutChris({ full }: { full?: boolean }) {
  return (
    <div className="grid items-center gap-12 md:grid-cols-[1fr_1.2fr]">
      <Reveal className="relative">
        <div className="hero-navy rounded-lg p-8 text-navy-foreground shadow-xl md:p-10">
          <svg viewBox="0 0 32 22" className="h-10 w-14 text-copper" fill="none" aria-hidden>
            <path d="M1 19 16 3l15 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <img
            src="/images/chris-faulkes-480.webp"
            srcSet="/images/chris-faulkes-320.webp 320w, /images/chris-faulkes-480.webp 480w, /images/chris-faulkes-640.webp 640w"
            sizes="(min-width: 768px) 320px, min(80vw, 320px)"
            width={640}
            height={800}
            loading="lazy"
            decoding="async"
            alt="Chris Faulkes, web designer in Mansfield"
            className="mt-6 aspect-[4/5] w-full max-w-xs rounded-lg object-cover shadow-lg"
          />
          <p className="mt-6 font-display text-3xl font-bold">Chris Faulkes</p>
          <p className="mt-1 text-navy-foreground/80">Web designer · Mansfield, Nottinghamshire</p>
          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex gap-2"><Check className="size-4 shrink-0 text-copper" aria-hidden /> Built and runs WholeLottaVinyl, his vinyl record shop</li>
            <li className="flex gap-2"><Check className="size-4 shrink-0 text-copper" aria-hidden /> Built and runs SafePlate, a free UK site for finding allergy-safe restaurants</li>
            <li className="flex gap-2"><Check className="size-4 shrink-0 text-copper" aria-hidden /> Built and runs Vinyl Buyback, where people sell him their vinyl</li>
            <li className="flex gap-2"><Check className="size-4 shrink-0 text-copper" aria-hidden /> Every site designed and coded from a blank page</li>
          </ul>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <p className="eyebrow">About me</p>
        <h2 className="mt-3 text-3xl md:text-5xl">A web designer who runs a small business too.</h2>
        <p className="mt-5 text-lg text-muted-foreground">
          I’m Chris, a web designer based in Mansfield, Nottinghamshire. I built and run WholeLottaVinyl, my vinyl record shop, SafePlate, a free UK site for finding allergy-safe restaurants, and Vinyl Buyback, where people sell me their vinyl.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          Running my own shop means I know what a small business website actually needs to do: look good, load fast on a phone, be written so a search engine can read it, and make it easy for customers to get in touch or buy.
        </p>
        {full ? (
          <p className="mt-4 text-lg text-muted-foreground">
            You deal with me directly from the first conversation to launch day — no agency, no account managers, no templates.
          </p>
        ) : (
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            More about me <ArrowRight className="size-4" aria-hidden />
          </Link>
        )}
      </Reveal>
    </div>
  );
}
