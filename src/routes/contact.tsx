import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
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
      <p className="mt-6 max-w-3xl text-muted-foreground">
        For a new site, use the form. If you already have a live site in the East Midlands and want the £100 mini-fix, say so in the message and include the address.{" "}
        <Link to="/website-mini-fix" className="font-semibold text-primary hover:underline">What the £100 covers</Link>.
      </p>
      <div className="mt-6">
        <MockupForm heading="h1" />
      </div>
    </Section>
  );
}
