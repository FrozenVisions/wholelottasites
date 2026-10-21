import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/config";
import { posts } from "@/lib/blog";

export const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <picture className="shrink-0">
        <source type="image/webp" srcSet={`${import.meta.env.BASE_URL}images/logo-badge-64.webp 1x, ${import.meta.env.BASE_URL}images/logo-badge-128.webp 2x, ${import.meta.env.BASE_URL}images/logo-badge-192.webp 3x`} />
        <img src={`${import.meta.env.BASE_URL}images/logo-badge-64.png`} srcSet={`${import.meta.env.BASE_URL}images/logo-badge-64.png 1x, ${import.meta.env.BASE_URL}images/logo-badge-128.png 2x, ${import.meta.env.BASE_URL}images/logo-badge-192.png 3x`} alt="" width={64} height={64} className="size-14 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] md:size-16" decoding="async" />
      </picture>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold">WholeLottaSites</span>
        <span className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-navy-foreground/70">Web Design · Mansfield</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-navy/95 text-navy-foreground backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-4 xl:gap-5 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-navy-foreground/85 transition-colors hover:text-copper" activeProps={{ className: "text-copper" }}>
              {l.label}
            </Link>
          ))}
          <Button asChild variant="copper">
            <Link to="/contact" hash="mockup-form">Get a free mock-up</Link>
          </Button>
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-navy-foreground/15 px-5 pb-6 lg:hidden">
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} onClick={() => setOpen(false)} className="block py-3 font-display text-lg hover:text-copper">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild variant="copper" size="lg" className="mt-4 w-full">
            <Link to="/contact" hash="mockup-form" onClick={() => setOpen(false)}>Get a free mock-up</Link>
          </Button>
        </nav>
      )}
    </header>
  );
}

export function CtaBand() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname.replace(/\/$/, "") === "/contact") return null;
  return (
    <section className="bg-muted">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <p className="eyebrow">No strings attached</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Get your free mock-up homepage.</h2>
          <p className="mt-3 text-muted-foreground">See what your new website could look like before you spend a penny.</p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <Button asChild size="lg">
            <Link to="/contact" hash="mockup-form">Get a free mock-up</Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            Or call <a href={CONTACT.phoneHref} className="font-semibold text-foreground hover:text-primary">{CONTACT.phoneDisplay}</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold">WholeLottaSites</p>
          <p className="mt-2 text-sm text-navy-foreground/85">{CONTACT.name} – {CONTACT.role}</p>
          <p className="text-sm text-navy-foreground/85">{CONTACT.location}</p>
          <p className="mt-4 max-w-xs text-sm text-navy-foreground/85">Custom websites for UK small businesses, built from scratch. No templates.</p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow text-copper">Pages</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <li><Link to="/" className="text-navy-foreground/85 hover:text-copper">Home</Link></li>
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="text-navy-foreground/85 hover:text-copper">{l.label}</Link></li>
            ))}
            <li><Link to="/websites-for" className="text-navy-foreground/85 hover:text-copper">Websites by type</Link></li>
            <li><Link to="/web-design-mansfield" className="text-navy-foreground/85 hover:text-copper">Web design Mansfield</Link></li>
          </ul>
        </nav>
        <nav aria-label="Advice">
          <p className="eyebrow text-copper">Advice</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/blog" className="text-navy-foreground/85 hover:text-copper">Blog</Link></li>
            {posts.map((post) => (
              <li key={post.slug}><Link to="/blog/$slug" params={{ slug: post.slug }} className="text-navy-foreground/85 hover:text-copper">{post.title}</Link></li>
            ))}
            <li><Link to="/cheap-website-for-small-business" className="text-navy-foreground/85 hover:text-copper">Cheap website, £500</Link></li>
            <li><Link to="/pay-monthly-website" className="text-navy-foreground/85 hover:text-copper">Pay monthly website</Link></li>
            <li><Link to="/website-redesign" className="text-navy-foreground/85 hover:text-copper">Website redesign</Link></li>
            <li><Link to="/mobile-friendly-website" className="text-navy-foreground/85 hover:text-copper">Mobile-friendly website</Link></li>
            <li><Link to="/website-built-from-scratch" className="text-navy-foreground/85 hover:text-copper">Built from scratch</Link></li>
          </ul>
        </nav>
        <div className="text-sm">
          <p className="eyebrow text-copper">Get in touch</p>
          <p className="mt-4"><a href={`mailto:${CONTACT.email}`} className="hover:text-copper">{CONTACT.email}</a></p>
          <p className="mt-1"><a href={CONTACT.phoneHref} className="hover:text-copper">{CONTACT.phoneDisplay}</a></p>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <p className="mx-auto max-w-7xl px-5 py-5 pb-24 text-xs text-navy-foreground/85 lg:pb-5">© 2026 WholeLottaSites · Web design in Mansfield, Nottinghamshire</p>
      </div>
    </footer>
  );
}


/** Sticky call-to-action bar on phones and tablets (hidden on the contact page). */
export function StickyMobileCta() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname.replace(/\/$/, "") === "/contact") return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-foreground/15 bg-navy/95 px-4 py-3 backdrop-blur lg:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <div className="mx-auto flex max-w-xl items-center gap-3">
        <Button asChild variant="copper" className="flex-1">
          <Link to="/contact" hash="mockup-form">Get a free mock-up</Link>
        </Button>
        <Button asChild variant="navyOutline" className="shrink-0">
          <a href={CONTACT.phoneHref} aria-label={`Call ${CONTACT.phoneDisplay}`}>Call</a>
        </Button>
      </div>
    </div>
  );
}
