import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/config";

export const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="WholeLottaSites home">
      <svg viewBox="0 0 32 22" className="h-6 w-8 text-copper" fill="none" aria-hidden>
        <path d="M1 19 16 3l15 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
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
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-navy-foreground/85 transition-colors hover:text-copper" activeProps={{ className: "text-copper" }}>
              {l.label}
            </Link>
          ))}
          <Button asChild variant="copper">
            <Link to="/contact">Get a free mock-up</Link>
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
            <Link to="/contact" onClick={() => setOpen(false)}>Get a free mock-up</Link>
          </Button>
        </nav>
      )}
    </header>
  );
}

export function CtaBand() {
  return (
    <section className="bg-muted">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <p className="eyebrow">No strings attached</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Get your free mock-up homepage.</h2>
          <p className="mt-3 text-muted-foreground">See what your new website could look like before you spend a penny.</p>
        </div>
        <Button asChild size="lg">
          <Link to="/contact">Get a free mock-up</Link>
        </Button>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">WholeLottaSites</p>
          <p className="mt-2 text-sm text-navy-foreground/75">{CONTACT.name} – {CONTACT.role}</p>
          <p className="text-sm text-navy-foreground/75">{CONTACT.location}</p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow text-copper">Pages</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <li><Link to="/" className="text-navy-foreground/85 hover:text-copper">Home</Link></li>
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="text-navy-foreground/85 hover:text-copper">{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="text-sm">
          <p className="eyebrow text-copper">Get in touch</p>
          <p className="mt-4"><a href={`mailto:${CONTACT.email}`} className="hover:text-copper">{CONTACT.email}</a></p>
          <p className="mt-1"><a href={CONTACT.phoneHref} className="hover:text-copper">{CONTACT.phoneDisplay}</a></p>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs text-navy-foreground/70">© 2026 WholeLottaSites</p>
      </div>
    </footer>
  );
}

