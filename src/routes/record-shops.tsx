import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/Sections";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";
import {
  collectionBoostPounds,
  helpingHandLightPounds,
  helpingHandWiderPounds,
  recordShopBlogsPounds,
  recordShopExamples,
} from "@/lib/record-shops";
import { newWebsitePricing, seo, SITE_URL } from "@/lib/site-data";

const title = "Websites for record shops: we built our own and it works";
const description = "Chris Faulkes built wholelottavinyl.com, his own used-record shop in Mansfield. The same kind of site, with Google SEO and plain GEO copy, for other record shops. No ranking promises.";

const faqs = [
  [
    "How much is a new record shop website?",
    `A new small record shop site is the founding price: ${newWebsitePricing.upfront}. Or ${newWebsitePricing.monthlyPlain}. ${newWebsitePricing.notCredit} Google SEO and GEO copy are part of that build. GEO means the pages state the shop’s name, what it sells, and how to get in touch, in words an assistant can quote. It is not a promise that Google or an AI tool will mention the shop.`,
  ],
  [
    "What is Helping Hand?",
    `For a record shop that already has a site. £${helpingHandLightPounds} when the gaps are light, or £${helpingHandWiderPounds} when there are more gaps. I look first and say which it is before you pay. It is not the East Midlands £50 + VAT mini-fix, and it is not a full rebuild.`,
  ],
  [
    "What is Collection Boost?",
    `£${collectionBoostPounds} to set up a “sell your records to us” page, a quote form, and a local page for searches such as “sell record collection” plus the town. The page is written for Google and so an assistant can read the offer. Blog posts after that are from £${recordShopBlogsPounds} a month. Nothing here promises a position or a number of sellers.`,
  ],
] as const;

export const Route = createFileRoute("/record-shops")({
  head: () => ({
    ...seo("/record-shops", `${title} | WholeLottaSites`, description),
    scripts: [
      jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Record shops", path: "/record-shops" }])),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Websites for record shops",
        serviceType: "Record shop website design",
        url: `${SITE_URL}/record-shops/`,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "Country", name: "United Kingdom" },
        description,
        offers: [
          {
            "@type": "Offer",
            name: "New record shop website, pay monthly",
            price: "600",
            priceCurrency: "GBP",
            description: `${newWebsitePricing.monthlyPlain}. Includes Google SEO and GEO copy. No ranking promise and no promise of a mention in an AI answer.`,
            url: `${SITE_URL}/record-shops/`,
          },
          {
            "@type": "Offer",
            name: "New record shop website, pay up front",
            price: "240",
            priceCurrency: "GBP",
            description: `${newWebsitePricing.upfront}. Includes Google SEO and GEO copy. No ranking promise.`,
            url: `${SITE_URL}/record-shops/`,
          },
          {
            "@type": "Offer",
            name: "Record shop blog posts",
            price: String(recordShopBlogsPounds),
            priceCurrency: "GBP",
            description: `Blog posts for a record shop, from £${recordShopBlogsPounds} a month. Not a promise of rankings, traffic or leads.`,
            url: `${SITE_URL}/record-shops/`,
          },
          {
            "@type": "Offer",
            name: "Helping Hand for an existing record shop site",
            priceCurrency: "GBP",
            description: `£${helpingHandLightPounds} when the gaps are light, or £${helpingHandWiderPounds} when there are more gaps. I say which before you pay.`,
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: String(helpingHandLightPounds),
              maxPrice: String(helpingHandWiderPounds),
              priceCurrency: "GBP",
            },
            url: `${SITE_URL}/record-shops/`,
          },
          {
            "@type": "Offer",
            name: "Collection Boost",
            price: String(collectionBoostPounds),
            priceCurrency: "GBP",
            description: `£${collectionBoostPounds} setup: a sell-your-records page, a quote form, and a local “sell record collection” page. Blogs from £${recordShopBlogsPounds} a month if you want them.`,
            url: `${SITE_URL}/record-shops/`,
          },
        ],
      }),
    ],
  }),
  component: RecordShopsPage,
});

function RecordShopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Record shops"
        title="Websites for record shops: we built our own and it works."
        lead="I’m Chris Faulkes. I run Whole Lotta Vinyl, a used-record shop in Mansfield, and I built the website myself. You can open it, browse the stock, and buy a record. I can build that kind of site for another record shop."
        crumbs={[{ name: "Home", href: "/" }, { name: "Record shops" }]}
      />
      <Section className="!pt-4">
        <div className="max-w-3xl space-y-5 text-lg text-muted-foreground">
          <p>
            <a href="https://www.wholelottavinyl.com" className="font-semibold text-primary hover:underline">wholelottavinyl.com</a> is the shop. It sells used vinyl online from Mansfield. The site says there is no walk-in counter. Records are graded by hand, cleaned, and posted in the UK and worldwide. Free UK postage is on orders of £40 or more. Returns are 60 days. A 7-inch offer is on the homepage: £2 singles are £1.50 each when you buy 10 or more.
          </p>
          <p>
            You can browse new arrivals, the full list, or by budget. Collection is by appointment. Local delivery is within 30 miles of Mansfield on orders of £50 or more. If a record is not in stock, there is a note so we can email you when one turns up. Buyer comments are published on the shop site. I am not turning those comments into a score, a sales total, or a ranking on this page.
          </p>
          <p>
            “It works” means a customer can see the records, the postage, and how to pay. It does not mean a place on Google, a number of orders, or a mention in an AI answer. I have not put a traffic figure on this page.
          </p>
        </div>

        <h2 className="mt-14 text-3xl">Other record sites you can open</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">These are real. The longer notes are the case studies. I am not attaching a sales figure to any of them.</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {recordShopExamples.map((example) => (
            <li key={example.slug} className="rounded-lg border bg-card p-5">
              <a href={example.href} className="font-semibold text-primary hover:underline">{example.name}</a>
              <p className="mt-3">
                <Link to="/case-studies/$slug" params={{ slug: example.slug }} className="text-sm font-semibold text-primary hover:underline">Case study</Link>
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Vinyl Buyback shows an offer for a record on the page, from a barcode or a catalogue number, and a way to ask about a collection. Pink Moon Records is Steven Gee. He buys collections and comes to the seller’s home. His review of the build is on the <Link to="/reviews" className="font-semibold text-primary hover:underline">reviews</Link> page.
        </p>

        <h2 className="mt-16 text-3xl">What I can do for your shop</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border-t-4 border-primary bg-card p-6 shadow-sm">
            <h3 className="font-display text-2xl font-semibold">A new record shop website</h3>
            <p className="mt-3 font-semibold">{newWebsitePricing.upfront}</p>
            <p className="mt-1 text-muted-foreground">{newWebsitePricing.monthlyPlain}. {newWebsitePricing.notCredit}</p>
            <p className="mt-4 text-muted-foreground">The same founding-price site as any other small business, written for a record shop. Google SEO means proper titles, the records and the town in real text, and pages that load quickly on a phone. GEO is the same facts written so an assistant can quote the shop: the name, what you sell, and how to get in touch. I don’t promise a position, and I don’t promise a mention. The full price is on <Link to="/pricing" className="font-semibold text-primary hover:underline">pricing</Link> and the <Link to="/founding-offer" className="font-semibold text-primary hover:underline">founding offer</Link>.</p>
          </article>
          <article className="rounded-lg border-t-4 border-primary bg-card p-6 shadow-sm">
            <h3 className="font-display text-2xl font-semibold">Blog posts</h3>
            <p className="mt-3 font-semibold">From £{recordShopBlogsPounds} a month</p>
            <p className="mt-4 text-muted-foreground">Posts for the shop, from £{recordShopBlogsPounds} a month. Useful ones answer a real question, such as how a pressing is graded or what you pay for a collection. They are not a promise of visits. This price is for record-shop writing. It is separate from Growth care, which is a wider plan.</p>
          </article>
          <article id="helping-hand" className="scroll-mt-28 rounded-lg border-t-4 border-primary bg-card p-6 shadow-sm">
            <h3 className="font-display text-2xl font-semibold">Helping Hand</h3>
            <p className="mt-3 font-semibold">£{helpingHandLightPounds} or £{helpingHandWiderPounds}</p>
            <p className="mt-4 text-muted-foreground">You already have a site. £{helpingHandLightPounds} when the gaps are light. £{helpingHandWiderPounds} when there are more gaps. I look, then I say which, before you pay. It is not the £50 + VAT East Midlands mini-fix, and it is not a new shop site.</p>
          </article>
          <article id="collection-boost" className="scroll-mt-28 rounded-lg border-t-4 border-primary bg-card p-6 shadow-sm">
            <h3 className="font-display text-2xl font-semibold">Collection Boost</h3>
            <p className="mt-3 font-semibold">£{collectionBoostPounds} to set up</p>
            <ul className="mt-4 grid gap-2 text-muted-foreground">
              <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> A “sell your records to us” page.</li>
              <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> A quote form.</li>
              <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> A local page for “sell record collection” and the town, written for Google and so an assistant can read the offer.</li>
              <li className="flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> Blog posts from £{recordShopBlogsPounds} a month if you want them after the page is up.</li>
            </ul>
          </article>
        </div>

        <h2 className="mt-16 text-3xl">Google, and AI search</h2>
        <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground">
          <p>SEO on these pages is ordinary writing: the shop, the stock, and the town, in sentences a person can read. GEO is that same writing kept clear enough for an assistant. A longer note is <Link to="/blog/will-chatgpt-recommend-my-business" className="font-semibold text-primary hover:underline">will ChatGPT recommend my business?</Link></p>
          <p>I only talk about an AI answer when we have checked that tool and can give the date. There is no dated AI-search result on this page. I will not say a shop is recommended, and I will not say it will be.</p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild size="lg"><a href="/start/?offer=record-shop">Start your site</a></Button>
          <Button asChild size="lg" variant="outline"><Link to="/portfolio">See the portfolio</Link></Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">The form asks which offer. Record shop, Helping Hand, Collection Boost and blogs are on that list. If you’d rather I send the payment link after I’ve read the brief, say so. You can also go straight to <Link to="/google-business-profile" className="font-semibold text-primary hover:underline">Google Business Profile</Link> setup, which is included with a founding website and £149 on its own.</p>

        <h2 className="mt-16 text-3xl">Questions</h2>
        <div className="mt-6 max-w-3xl divide-y border-y">
          {faqs.map(([question, answer]) => (
            <div key={question} className="py-5">
              <h3 className="font-display text-xl font-semibold">{question}</h3>
              <p className="mt-3 text-muted-foreground">{answer}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
