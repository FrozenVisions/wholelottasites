import { Heading } from "@/components/site/Sections";

const proofLinkClass = "font-semibold text-primary underline-offset-4 hover:underline";

function ProofLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className={proofLinkClass} target="_blank" rel="noopener noreferrer">
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

/** Live sites named in sales copy. Do not add others. */
export function VinylProofLink() {
  return <ProofLink href="https://www.wholelottavinyl.com" label="wholelottavinyl.com" />;
}

export function SafePlateProofLink() {
  return <ProofLink href="https://safeplate.org.uk" label="safeplate.org.uk" />;
}

export function DecoratingProofLink() {
  return <ProofLink href="https://mcdecoratingni.co.uk" label="mcdecoratingni.co.uk" />;
}

export function GeoBlurb() {
  return (
    <div>
      <Heading
        eyebrow="Generative engine optimisation"
        title="Built so AI assistants can recommend you."
        lead="People now ask ChatGPT, Gemini and similar tools who to hire nearby. Those systems need a clear business name, what you do, where you work, and how to contact you. Vague pages get skipped."
      />
      <div className="mt-6 max-w-3xl space-y-5 text-lg text-muted-foreground">
        <p>
          Every WholeLottaSites site is written and structured so that is obvious: who you are, the services you offer, the area you cover, and a working phone, email or form. That is generative engine optimisation (GEO). It is not a ranking promise, and I do not claim a place in Google or in any AI answer list.
        </p>
        <p>
          Proof you can open today: <VinylProofLink />, <SafePlateProofLink />, <DecoratingProofLink />.
        </p>
      </div>
    </div>
  );
}
