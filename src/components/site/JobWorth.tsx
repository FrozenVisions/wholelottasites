import { useEffect } from "react";

const field =
  "mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

/** Hidden until job-worth.js reads the prices already printed on this page. */
export function JobWorth() {
  useEffect(() => {
    const src = `${import.meta.env.BASE_URL}job-worth.js`;
    let cancelled = false;
    import(/* @vite-ignore */ src).then((mod) => {
      if (!cancelled) mod.bootJobWorth(document);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="job-worth" className="job-worth mt-16 scroll-mt-24" aria-labelledby="job-worth-title">
      <h2 id="job-worth-title" className="font-display text-2xl font-bold md:text-3xl">What is one extra job worth?</h2>
      <p id="job-worth-note" className="mt-3 max-w-3xl text-muted-foreground">
        This is an illustration. It multiplies a job value you type by a number of extra jobs. It is not a promise of leads, extra jobs, or a position on Google.
      </p>
      <form className="mt-6 max-w-3xl rounded-lg border-t-4 border-primary bg-card p-6 shadow-sm" aria-describedby="job-worth-note">
        <div className="grid gap-4 sm:grid-cols-2">
          <label htmlFor="job-value" className="block text-sm font-medium">
            Average job value (£)
            <input id="job-value" name="job-value" type="number" inputMode="decimal" min={0} step="0.01" autoComplete="off" className={field} />
          </label>
          <label htmlFor="extra-jobs" className="block text-sm font-medium">
            Extra jobs per year
            <input id="extra-jobs" name="extra-jobs" type="number" inputMode="numeric" min={0} step={1} defaultValue={1} autoComplete="off" className={field} />
          </label>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:items-start">
          <div>
            <p className="text-sm font-semibold">Yearly value</p>
            <output id="yearly-value" htmlFor="job-value extra-jobs" className="mt-1 block font-display text-3xl font-bold leading-tight break-words" aria-live="polite">
              Enter an average job value.
            </output>
          </div>
          <div>
            <p id="live-prices-label" className="text-sm font-semibold">Website prices on this page</p>
            <ul id="live-prices" aria-labelledby="live-prices-label" className="mt-2 grid gap-2 text-sm text-muted-foreground" />
          </div>
        </div>
        <button type="submit" className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-7 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 sm:w-auto">
          Work it out
        </button>
      </form>
    </section>
  );
}
