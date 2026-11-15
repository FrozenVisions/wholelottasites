import { createFileRoute, Link } from "@tanstack/react-router";
import { MockupForm, PageHero, Section, WhatsIncluded } from "@/components/site/Sections";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";
import { newWebsitePricing, seo } from "@/lib/site-data";

const title = "Pay what you want for a website | WholeLottaSites";
const description = `Say what you want to pay for a small business website. Shared on social, not in the menu. The usual founding price is ${newWebsitePricing.price}. No ranking promises.`;

const payWhatYouWantForm = {
  subject: "Pay what you want",
  eyebrow: "Get in touch",
  title: "Get in touch.",
  lead: "Tell me the figure you have in mind, what the business does, and the towns you cover. I’ll reply before any design starts. Email and phone are under the form if you’d rather not use it.",
  button: "Get in touch",
  placeholder: "The figure you want to pay, what the business does, and where you work.",
} as const;

export const Route = createFileRoute("/pay-what-you-want")({
  head: () => ({
    ...seo("/pay-what-you-want", title, description),
    scripts: [
      jsonLd(breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Pay what you want", path: "/pay-what-you-want" },
      ])),
    ],
  }),
  component: PayWhatYouWantPage,
});

function PayWhatYouWantPage() {
  return (
    <>
      <PageHero
        eyebrow="Shared on social"
        title="Pay what you want for a website."
        lead="This page is not in the menu. If you found it from a social post, tell me what you want to pay for a small business website. I’ll reply and say whether I can do it at that figure."
        crumbs={[{ name: "Home", href: "/" }, { name: "Pay what you want" }]}
      />
      <Section>
        <h2 className="max-w-3xl text-3xl md:text-5xl">The published price stays the founding offer until we agree another figure.</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg text-muted-foreground">
          <p>{newWebsitePricing.founding}</p>
          <p>
            The published price is {newWebsitePricing.upfront}. Or {newWebsitePricing.monthlyPlain}. {newWebsitePricing.notCredit} Naming a figure on this page does not change that price until we agree it. A design for your business starts after the deposit. Look at sample sites first.
          </p>
          <p>{newWebsitePricing.foundations}</p>
          <p>{newWebsitePricing.domain}</p>
          <p>
            The same list is on the <Link to="/founding-offer/" className="font-semibold text-primary underline-offset-4 hover:underline">founding offer</Link>, the <Link to="/pricing/" className="font-semibold text-primary underline-offset-4 hover:underline">pricing page</Link>, and the <Link to="/portfolio/" className="font-semibold text-primary underline-offset-4 hover:underline">portfolio</Link>. I don’t promise a Google ranking or a number of enquiries.
          </p>
        </div>
      </Section>
      <Section muted>
        <WhatsIncluded />
      </Section>
      <Section className="!pt-12">
        <MockupForm lock={payWhatYouWantForm} />
      </Section>
    </>
  );
}
