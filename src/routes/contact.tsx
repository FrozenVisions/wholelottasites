import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, MockupForm } from "@/components/site/Sections";
import { seo } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo(
      "/contact",
      "Web Designer Mansfield, Nottinghamshire | Free Mock-up",
      "Contact Chris Faulkes, a web designer in Mansfield, Nottinghamshire, for a free mock-up homepage for your small business. No strings attached.",
    ),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s get your free mock-up started." />
      <Section className="!pt-4">
        <MockupForm />
      </Section>
    </>
  );
}

