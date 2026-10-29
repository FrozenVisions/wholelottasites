import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { builtSites, type BuiltSite } from "@/lib/site-data";

function Shot({ site, sizes, className }: { site: BuiltSite; sizes: string; className: string }) {
  return (
    <img
      src={site.img}
      srcSet={`${site.imgSmall} 600w, ${site.imgMid} 800w, ${site.img} 1200w`}
      sizes={sizes}
      width={site.width}
      height={site.height}
      alt={site.alt}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}

export function InProgressBadge() {
  return (
    <span className="inline-flex shrink-0 items-center rounded-full bg-navy px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-navy-foreground">
      In progress
    </span>
  );
}

/** Homepage row. Each card opens that site’s note on the portfolio page. */
export function SitesBuiltStrip() {
  return (
    <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {builtSites.map((site) => (
        <li key={site.id}>
          <Link
            to="/portfolio"
            hash={site.id}
            className="group flex h-full flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <Shot
              site={site}
              sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 92vw"
              className="aspect-[8/5] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
            />
            <span className="flex items-center justify-between gap-3 p-4">
              <span className="font-display text-lg font-semibold">{site.name}</span>
              {site.inProgress ? <InProgressBadge /> : null}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Portfolio page. The screenshot is the proof. A text link is optional. */
export function SitesBuiltList() {
  return (
    <div className="grid gap-16">
      {builtSites.map((site) => (
        <article key={site.id} id={site.id} className="grid scroll-mt-28 items-center gap-6 md:grid-cols-2 md:gap-10">
          <figure className="overflow-hidden rounded-lg border bg-card">
            <Shot
              site={site}
              sizes="(min-width: 768px) 36rem, 92vw"
              className="block h-auto w-full"
            />
          </figure>
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h2 className="text-2xl font-semibold md:text-3xl">{site.name}</h2>
              {site.inProgress ? <InProgressBadge /> : null}
            </div>
            <p className="mt-3 text-muted-foreground">{site.summary}</p>
            {site.url && site.linkLabel ? (
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.linkLabel} (opens in a new tab)`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                {site.linkLabel} <ArrowUpRight className="size-4" aria-hidden />
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
