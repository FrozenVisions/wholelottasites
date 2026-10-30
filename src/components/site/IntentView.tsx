import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { LandingFaqs, faqJsonLd } from "@/components/site/Landing";
import { PageHero, Section, Heading, PaymentPlans, WhatsIncluded, FoundingBanner } from "@/components/site/Sections";
import { RichText } from "@/components/site/RichText";
import { SiteLinks } from "@/components/site/SiteLinks";
import { intentBySlug } from "@/lib/intent-pages";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";
import { seo } from "@/lib/site-data";

export function intentHead(slug: string) {
  const page = intentBySlug(slug);
  if (!page) return {};
  return {
    ...seo(page.path, page.title, page.description),
    scripts: [
      jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: page.h1.replace(/\.$/, ""), path: page.path }])),
      jsonLd(faqJsonLd(page.faqs)),
    ],
  };
}

export function IntentView({ slug }: { slug: string }) {
  const page = intentBySlug(slug);
  if (!page) return null;
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        lead={page.lead}
        crumbs={[{ name: "Home", href: "/" }, { name: page.h1.replace(/\.$/, "") }]}
      />
      <Section className="!pt-4">
        {(page.showPlans || page.showIncluded) && (
          <div className="mb-12">
            <FoundingBanner />
          </div>
        )}
        {page.sections.map((section) => (
          <div key={section.id} id={section.id} className="scroll-mt-28 mt-12 max-w-3xl first:mt-0">
            <h2 className="font-display text-3xl font-bold md:text-4xl">{section.heading}</h2>
            <div className="mt-4 space-y-4 text-lg text-muted-foreground">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}><RichText text={paragraph} /></p>
              ))}
            </div>
            {section.list && (
              <ul className="mt-4 grid max-w-3xl gap-2 text-muted-foreground">
                {section.list.map((item) => (
                  <li key={item} className="flex gap-2"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg"><Link to="/contact" hash={page.cta?.hash ?? "mockup-form"}>{page.cta?.label ?? "Ask about a new site"}</Link></Button>
          {page.secondaryCta && (
            <Button asChild size="lg" variant="outline"><Link to="/contact" hash={page.secondaryCta.hash}>{page.secondaryCta.label}</Link></Button>
          )}
        </div>
      </Section>
      {page.showIncluded && (
        <Section muted>
          <WhatsIncluded />
        </Section>
      )}
      {page.showPlans && (
        <Section muted={page.showIncluded ? false : true}>
          <PaymentPlans />
          <p className="mt-6 max-w-3xl text-muted-foreground">
            These are the same plans as on the <Link to="/pricing" hash="payment-plans" className="font-semibold text-primary underline-offset-4 hover:underline">pricing page</Link>.
          </p>
        </Section>
      )}
      <Section>
        <Heading eyebrow="FAQ" title="Common questions." />
        <LandingFaqs faqs={page.faqs} />
        <div className="mt-16">
          <Heading eyebrow="Elsewhere on the site" title="Related pages." />
          <SiteLinks current={page.path} />
        </div>
      </Section>
    </>
  );
}
