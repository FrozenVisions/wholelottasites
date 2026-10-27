import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";
import { Section, Heading, LandingCta, PriceBlock, LandingFaqs, faqJsonLd } from "@/components/site/Landing";
import { SiteLinks } from "@/components/site/SiteLinks";
import { seo } from "@/lib/site-data";
import { PRICE_FAQ, type Faq, tradeBySlug } from "@/lib/landing-data";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";

const hubFaqs: Faq[] = [
  ["My type of business isn’t listed. Can you still help?", "Yes. These pages are examples of how the site changes. Every site is built from scratch around the business, whatever you do. Tell me about the work. A design for your business starts after the deposit."],
  ["Are these pages for customers looking for a plumber or a restaurant?", "No. They’re for people who want a website for that kind of business. Your customers’ searches — “plumber near me”, “restaurant near me” and the rest — are explained on each page, including how a clear site and a Google Business Profile help. This site doesn’t pretend to be the tradesperson or the restaurant."],
  PRICE_FAQ,
];

const groups = [
  { title: "Trades", text: "People who visit a job, or who customers call out.", slugs: ["plumbers", "electricians", "builders", "decorators", "cleaners", "gardeners"] },
  { title: "Food and drink", text: "Menus, hours and how to book a table.", slugs: ["cafes", "restaurants"] },
  { title: "Salons, gyms and shops", text: "Appointments, classes and the shop door.", slugs: ["hairdressers", "salons", "gyms", "shops"] },
  { title: "Consultants, freelancers and startups", text: "Explain the work, and make it easy to get in touch.", slugs: ["consultants", "freelancers", "startups"] },
  { title: "Individuals", text: "A page for a person, not a company.", slugs: ["individuals"] },
];

const situations = [
  { to: "/website-built-from-scratch" as const, title: "Website built from scratch", text: "No theme. Also the route for a first website." },
  { to: "/website-redesign" as const, title: "Website redesign", text: "When the old site is in the way, including a straight update." },
  { to: "/website-mini-fix" as const, title: "£100 mini-fix", text: "One concrete fix on a live East Midlands site. Not a rebuild." },
  { to: "/mobile-friendly-website" as const, title: "Make it mobile friendly", text: "If people have to pinch and zoom to phone you." },
  { to: "/cheap-website-for-small-business" as const, title: "Cheap website, £500", text: "What the fixed price includes, and what it doesn’t." },
  { to: "/pay-monthly-website" as const, title: "Pay monthly", text: "Three plans. Each one totals £500." },
];

export const Route = createFileRoute("/websites-for/")({
  head: () => ({
    ...seo("/websites-for", "Websites for Small Businesses by Trade | WholeLottaSites", "Websites for small businesses: trades, restaurants, salons, gyms, shops, consultants, freelancers, startups and individuals. Built from scratch for £500."),
    scripts: [
      jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Websites", path: "/websites-for" }])),
      jsonLd(faqJsonLd(hubFaqs)),
    ],
  }),
  component: Hub,
});

function Hub() {
  return (
    <>
      <PageHero
        eyebrow="Websites by type of business"
        title="Websites for small businesses."
        lead="A plumber, a restaurant, a consultant and a sole trader don’t need the same pages. Here’s what I build for each, from scratch, for £500. These pages are for the business owner — not for their customers."
        crumbs={[{ name: "Home", href: "/" }, { name: "Websites" }]}
      />
      {groups.map((group) => (
        <Section key={group.title} muted={group.title === "Food and drink" || group.title === "Consultants, freelancers and startups"}>
          <Heading eyebrow="Who it’s for" title={group.title} lead={group.text} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {group.slugs.map((slug) => {
              const trade = tradeBySlug(slug);
              if (!trade) return null;
              return (
                <Link key={slug} to="/websites-for/$slug" params={{ slug }} className="group rounded-lg border-t-4 border-primary bg-card p-7 shadow-sm transition hover:shadow-md">
                  <h3 className="font-display text-2xl font-semibold group-hover:text-primary">{trade.h1.replace(/\.$/, "")}</h3>
                  <p className="mt-3 text-muted-foreground">{trade.lead}</p>
                </Link>
              );
            })}
          </div>
        </Section>
      ))}
      <Section muted>
        <Heading eyebrow="The situation, not the trade" title="A new site, an old site, or a phone that can’t use it." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {situations.map((item) => (
            <Link key={item.to} to={item.to} className="group rounded-lg border-t-4 border-primary bg-card p-7 shadow-sm transition hover:shadow-md">
              <h3 className="font-display text-2xl font-semibold group-hover:text-primary">{item.title}</h3>
              <p className="mt-3 text-muted-foreground">{item.text}</p>
            </Link>
          ))}
          <Link to="/web-design-mansfield" className="group rounded-lg bg-navy p-7 text-navy-foreground shadow-sm">
            <h3 className="font-display text-2xl font-semibold group-hover:text-copper">Web designer in Mansfield</h3>
            <p className="mt-3 text-navy-foreground/80">Based in Mansfield? We can meet in person. I also work with businesses across the UK.</p>
          </Link>
        </div>
        <LandingCta label="" />
      </Section>
      <Section>
        <PriceBlock />
      </Section>
      <Section muted>
        <Heading eyebrow="FAQ" title="Common questions." />
        <LandingFaqs faqs={hubFaqs} />
        <div className="mt-16">
          <Heading eyebrow="Keep reading" title="Prices and advice." />
          <SiteLinks current="/websites-for" />
        </div>
      </Section>
    </>
  );
}
