import { createFileRoute } from "@tanstack/react-router";
import { Section, MockupForm } from "@/components/site/Sections";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { seo } from "@/lib/site-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...seo(
      "/contact",
      "Free Mock-up or Fix Audit | WholeLottaSites",
      "Ask Chris Faulkes in Mansfield for a free homepage mock-up, a free website fix audit, Google Business Profile help, or monthly care.",
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
