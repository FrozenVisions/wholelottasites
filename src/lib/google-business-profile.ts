/** Google Business Profile page. Prices are taken from the pricing-page offers. */

import type { Faq } from "@/lib/landing-data";
import { absoluteUrl } from "@/lib/schema";
import { SITE_URL, offers } from "@/lib/site-data";

const gbp = offers.find((offer) => offer.id === "google-business-profile");
const care = offers.find((offer) => offer.id === "monthly-care");
const website = offers.find((offer) => offer.id === "new-website");

if (!gbp || !care || !website) {
  throw new Error("Pricing offers missing for the Google Business Profile page");
}

const monthlyMatch = /£\d+–£\d+/.exec(gbp.priceNote);
const monthlyPrice = monthlyMatch?.[0];
if (gbp.price !== "£149" || !monthlyPrice) {
  throw new Error(`Google Business Profile price on /pricing/ is ${gbp.price} (${gbp.priceNote})`);
}

export const GBP_PATH = "/google-business-profile";
export const GBP_SETUP_PRICE = gbp.price;
export const GBP_MONTHLY_PRICE = monthlyPrice;
export const GBP_PRICE_NOTE = gbp.priceNote;
export const CARE_PRICE = care.price;
export const WEBSITE_PRICE = website.price;

export const GBP_TITLE = `Google Business Profile Setup & Management | ${GBP_SETUP_PRICE} | WholeLottaSites`;
export const GBP_DESCRIPTION = `Google Business Profile setup or fix for ${GBP_SETUP_PRICE}, with optional monthly management at ${GBP_MONTHLY_PRICE}. You stay the owner. Mansfield-based, UK-wide. No ranking promises.`;

export const gbpCovers = [
  "The right primary and secondary categories",
  "Your services, opening hours and service area",
  "A plain-English business description",
  "Photos you supply, uploaded and labelled sensibly",
  "The website link, checked so it actually works",
  "One basic post to start the profile off",
  "Name, address and phone number matched to your website, word for word",
] as const;

export const gbpWont = [
  "Ask you to hand over your Google account",
  "Promise a position on Google or Maps, or call you “#1”",
  "Write fake reviews or ask anyone to",
] as const;

export const gbpFaqs = [
  [
    "Do I need a website to have a Google Business Profile?",
    "No, but a profile with a working website link gives people somewhere to check you out before they ring.",
  ],
  [
    "Will this get me to the top of Google Maps?",
    "I can’t promise that and nobody honestly can. I can make the profile complete, accurate and consistent with your site.",
  ],
  [
    "Who owns the profile?",
    "You do. I’m added as a manager and you can remove me any time.",
  ],
  [
    `I already have a profile. Is it still ${GBP_SETUP_PRICE}?`,
    "Yes, fixing an existing one is the same one-off price.",
  ],
  [
    "Do you work outside the East Midlands?",
    "Yes. Profile setup is done remotely, so anywhere in the UK.",
  ],
] as const satisfies readonly Faq[];

function pounds(label: string) {
  const amount = /^£(\d+)$/.exec(label)?.[1];
  if (!amount) throw new Error(`Expected a single price, got ${label}`);
  return amount;
}

function poundRange(label: string) {
  const match = /^£(\d+)–£(\d+)$/.exec(label);
  const min = match?.[1];
  const max = match?.[2];
  if (!min || !max) throw new Error(`Expected a price range, got ${label}`);
  return { min, max };
}

export function gbpServiceJsonLd() {
  const monthly = poundRange(GBP_MONTHLY_PRICE);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Business Profile setup and management",
    serviceType: "Google Business Profile setup and management",
    description: GBP_DESCRIPTION,
    url: absoluteUrl(GBP_PATH),
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "WholeLottaSites",
      url: `${SITE_URL}/`,
    },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    offers: [
      {
        "@type": "Offer",
        name: "Google Business Profile setup or fix",
        price: pounds(GBP_SETUP_PRICE),
        priceCurrency: "GBP",
        url: absoluteUrl(GBP_PATH),
      },
      {
        "@type": "Offer",
        name: "Monthly Google Business Profile management",
        priceCurrency: "GBP",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: monthly.min,
          maxPrice: monthly.max,
          priceCurrency: "GBP",
          unitText: "MONTH",
        },
        url: absoluteUrl(GBP_PATH),
      },
    ],
  };
}
