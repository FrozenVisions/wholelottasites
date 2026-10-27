import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DecoratingProofLink, SafePlateProofLink, VinylProofLink } from "@/components/site/Geo";
import { Heading } from "@/components/site/Sections";
import { CONTACT } from "@/config";
import { miniFixExamples } from "@/lib/mini-fix";

export function MiniFixOffer({ showHeading = true }: { showHeading?: boolean }) {
  const detailTitle = showHeading ? "h3" : "h2";
  const DetailTitle = detailTitle;
  return (
    <div id="east-midlands-mini-fix" className="scroll-mt-28">
      {showHeading && (
        <Heading
          eyebrow="Already live"
          title="East Midlands £100 website mini-fix."
          lead="A short audit and one concrete fix on a site that’s already live. Not a redesign, and not a full rebuild."
        />
      )}
      <div className={`${showHeading ? "mt-10" : ""} grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start`}>
        <div className="max-w-3xl space-y-5 text-lg text-muted-foreground">
          <div>
            <DetailTitle className="font-display text-2xl font-bold text-foreground md:text-3xl">What the £100 pays for.</DetailTitle>
            <p className="mt-4">
              £100 is a short audit, then one concrete fix, on a website that is already live. We agree the fix before I start. It is one job, not a new design and not a rebuild.
            </p>
          </div>
          <ul className="grid gap-2">
            {miniFixExamples.map((item) => (
              <li key={item} className="flex gap-2">
                <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <p>
            It’s for local trades and larger firms — builders, plumbers, electricians, roofers, HVAC and similar — in Nottinghamshire, Derbyshire, Leicestershire, Lincolnshire and Northamptonshire. That includes Mansfield, Nottingham, Derby, Leicester, Lincoln and Chesterfield.
          </p>
          <p>
            If the work is bigger than one fix, I quote it separately. A normal rescue is usually around £150–£400. A rebuild is the £500 small-business website, with the same payment plans as everywhere else on this site. I won’t call a rescue or a rebuild a mini-fix.
          </p>
          <p>
            After the fix, if you want to carry on, the usual next steps are optional monthly care (typically £29–£50), help with your Google Business Profile, or a full site. None of that is inside the £100. Help with the profile means the listing and the site can match. It is not a promise of a place in Google’s results.
          </p>
          <p>
            A mini-fix will not rewrite your whole site for AI assistants. If the agreed fix is a form, mobile layout, SSL, redirects or a missing Google Business Profile website link, that is the job. If your pages still don’t say clearly who you are, what you do and how to get in touch, ask about a rescue (usually around £150–£400) or a full rebuild at £500. Those can include the clearer GEO copy above. Sites I’ve built that you can open today: <VinylProofLink />, <SafePlateProofLink /> and <DecoratingProofLink />.
          </p>
          <p>
            Sites I’ve built that you can open today include{" "}
            <a href="https://www.wholelottavinyl.com" className="font-semibold text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">wholelottavinyl.com<span className="sr-only"> (opens in a new tab)</span></a>
            {" "}and{" "}
            <a href="https://safeplate.org.uk" className="font-semibold text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">safeplate.org.uk<span className="sr-only"> (opens in a new tab)</span></a>
            {" "}and{" "}
            <a href="https://mcdecoratingni.co.uk" className="font-semibold text-primary underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">mcdecoratingni.co.uk<span className="sr-only"> (opens in a new tab)</span></a>
            . WholeLottaVinyl and SafePlate are on the <Link to="/portfolio" className="font-semibold text-primary underline-offset-4 hover:underline">portfolio</Link>.
          </p>
        </div>
        <MiniFixCard />
      </div>
    </div>
  );
}

export function MiniFixCard() {
  return (
    <aside className="rounded-lg border-t-4 border-primary bg-card p-8 shadow-sm">
      <p className="eyebrow">East Midlands mini-fix</p>
      <p className="mt-4 font-display text-6xl font-bold text-foreground">£100</p>
      <p className="mt-2 text-muted-foreground">Short audit and one concrete fix. Not a redesign. Not a full rebuild.</p>
      <Button asChild size="lg" className="mt-8 w-full">
        <Link to="/contact" hash="mini-fix">Send the site address</Link>
      </Button>
      <div className="mt-6 space-y-2 text-sm">
        <p>
          Email{" "}
          <a className="font-semibold text-primary hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
        <p>
          Call{" "}
          <a className="font-semibold text-primary hover:underline" href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
        </p>
        <p>
          <a className="font-semibold text-primary hover:underline" href="https://wholelottasites.co.uk">wholelottasites.co.uk</a>
        </p>
      </div>
    </aside>
  );
}
