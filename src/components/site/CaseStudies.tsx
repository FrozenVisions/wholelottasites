import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/site-data";

export function CaseStudies({ items }: { items: CaseStudy[] }) {
  const [open, setOpen] = useState<CaseStudy | null>(null);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key !== "Tab") return;
      const root = document.getElementById("case-study-dialog");
      if (!root) return;
      const focusable = [...root.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")];
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
      <div className="mt-10 grid gap-12">
        {items.map((study) => (
          <article key={study.name} className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
            <figure className="overflow-hidden rounded-lg border bg-card">
              <img
                src={study.img}
                srcSet={`${study.imgSmall} 600w, ${study.imgMid} 800w, ${study.img} 1200w`}
                sizes="(min-width: 768px) 36rem, 92vw"
                width={1200}
                height={750}
                alt={study.alt}
                loading="lazy"
                decoding="async"
                className="block aspect-[1200/750] w-full object-cover object-top"
              />
            </figure>
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">{study.name}</h3>
              <p className="mt-3 text-muted-foreground">{study.summary}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setOpen(study)}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  View larger screenshot
                </button>
                {study.url && study.linkLabel && (
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${study.linkLabel} (opens in a new tab)`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    {study.linkLabel} <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {open && (
        <div
          id="case-study-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-dialog-title"
          className="fixed inset-0 z-[100] flex flex-col bg-navy p-3 md:p-8"
          onClick={() => setOpen(null)}
        >
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 pb-3 text-navy-foreground">
            <p id="case-study-dialog-title" className="font-display text-lg font-semibold">{open.name}</p>
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
            <img
              src={open.full}
              alt={open.alt}
              width={open.fullWidth}
              height={open.fullHeight}
              decoding="async"
              className="block h-auto w-full"
            />
          </div>
          {open.url && open.linkLabel && (
            <div className="mx-auto pt-3" onClick={(e) => e.stopPropagation()}>
              <a
                href={open.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-copper hover:underline"
              >
                {open.linkLabel} <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
}
