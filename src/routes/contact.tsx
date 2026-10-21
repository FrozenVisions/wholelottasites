import { createFileRoute } from "@tanstack/react-router";
import { Section, MockupForm } from "@/components/site/Sections";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { seo } from "@/lib/site-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...seo(
      "/contact",
      "Request a Website Mock-up | WholeLottaSites",
      "Request a free homepage mock-up from Chris Faulkes, a web designer in Mansfield. A short form, no strings attached, for UK small businesses.",
    ),
    scripts: [jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]))],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Section className="!pt-8 md:!pt-12">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
      <div className="mt-6">
        <MockupForm heading="h1" />
      </div>
    </Section>
  );
}
