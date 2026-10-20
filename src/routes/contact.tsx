import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, MockupForm } from "@/components/site/Sections";
import { seo } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo(
      "/contact",
      "Free Mock-up & Contact | WholeLottaSites",
      "Request your free mock-up homepage, no strings attached. Or contact Chris Faulkes, web designer in Mansfield, Nottinghamshire, by email or phone.",
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

