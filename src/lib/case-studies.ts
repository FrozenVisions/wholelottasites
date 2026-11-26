import { builtSites, type BuiltSite } from "@/lib/site-data";

export type CaseStudy = {
  slug: string;
  builtId: string;
  /** Plain name for titles and breadcrumbs. */
  name: string;
  description: string;
  /** What the business is, from the live site or the agreed portfolio wording. */
  business: string;
  /** What was built, only where it can be seen on the live site. */
  features: readonly string[];
  /** Exact Search Console line already published on the portfolio. Omitted when there isn’t one. */
  searchConsole?: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "whole-lotta-vinyl",
    builtId: "whole-lotta-vinyl",
    name: "Whole Lotta Vinyl",
    description: "What wholelottavinyl.com is, and what the shop site actually does. An online used-record shop in Mansfield, built in-house. No invented sales figures.",
    business:
      "Whole Lotta Vinyl is Chris Faulkes’ own online shop for used vinyl, run from Mansfield, Nottinghamshire. The site says there is no walk-in store. It started as an eBay seller, and the website is now the shop.",
    features: [
      "Used records, graded by hand, cleaned, sleeved, and posted in the UK and worldwide.",
      "Free UK postage on orders of £40 or more, and 60-day returns, as the shop states them.",
      "A 7-inch offer on the homepage: £2 singles are £1.50 each when you buy 10 or more.",
      "Ways to browse: new arrivals, the full list, and by budget.",
      "Collection by appointment, and local delivery within 30 miles of Mansfield on orders of £50 or more.",
      "A wanted-list note, so someone can ask to be emailed when a record comes in.",
      "A recently sold list, and buyer comments published on the shop site.",
    ],
    searchConsole:
      "Showed up in Google searches 64,123 times in the last 3 months, and was clicked 1,302 times (Search Console, 23 August to 22 November 2026).",
  },
  {
    slug: "safeplate",
    builtId: "safeplate",
    name: "SafePlate",
    description: "What safeplate.org.uk is: a UK restaurant finder for people with allergies, and the parts you can see on the live site.",
    business:
      "SafePlate is a UK restaurant finder for people who need a kitchen to avoid certain foods. The site says it was built by Chris Faulkes, who is anaphylactic to peanuts and severely allergic to mustard.",
    features: [
      "Search for restaurants, cafes and pubs, with an Allergy Confidence Score.",
      "The UK 14 allergens, including peanut, mustard, gluten, milk, sesame and soya, plus other foods and conditions.",
      "A preview of the chef card. The site says your own card, in 38 languages, is part of SafePlate Plus, and that some languages are marked beta.",
      "Search and the map are free. The site says scores stay unknown until a menu, a visitor note, or a chain’s published allergen guide is on file.",
      "Guides for UK cities and for allergens. The site says they explain what to ask, do not name restaurants as safe, and are not medical advice.",
    ],
    searchConsole:
      "Showed up in Google searches 2,660 times in the last 3 months (Search Console, 23 August to 22 November 2026).",
  },
  {
    slug: "mc-decorating",
    builtId: "mc-decorating",
    name: "MC Decorating",
    description: "What mcdecoratingni.co.uk is: a painters and decorators site for Martin Kelly in Omagh, and the pages you can open.",
    business:
      "MC Decorating is Martin Kelly, a painter and decorator based in Omagh. The site says he paints and wallpapers houses and small businesses across County Tyrone and County Fermanagh, and takes work across the border when the job suits.",
    features: [
      "Separate notes for interior painting, exterior painting, wallpapering, ceiling and wall repairs, and commercial decorating.",
      "Before-and-after photographs of jobs, with a fuller set on the work page.",
      "Town pages for places in County Tyrone and County Fermanagh.",
      "A quote form, plus a phone number, WhatsApp and an email address in text.",
    ],
    searchConsole:
      "Showed up in Google searches 921 times in the last 3 months (Search Console, 23 August to 22 November 2026).",
  },
  {
    slug: "vinyl-buyback",
    builtId: "vinyl-buyback",
    name: "Vinyl Buyback",
    description: "What vinylbuyback.co.uk is: a site for selling records, with an offer shown on the page. No invented totals.",
    business:
      "Vinyl Buyback is a way to sell vinyl records to Chris Faulkes in Mansfield. The homepage is built around one job: show an offer for a record.",
    features: [
      "An offer on the page from a barcode, or from a catalogue number when there isn’t a barcode.",
      "A short sequence: add the records, send them, a condition check on arrival, then payment by PayPal or bank transfer.",
      "A separate route for a larger collection: send a rough list or photos, with local collection around Mansfield mentioned on the site.",
      "The site explains consignment as well as an outright offer. It says the seller gets 50% of the net sale price after selling fees, paid weekly.",
      "A reviews page for people who have sold records. Those reviews stay on Vinyl Buyback. They are not repeated here.",
    ],
    searchConsole:
      "Showed up in Google searches 975 times in the last 3 months (Search Console, 23 August to 22 November 2026).",
  },
  {
    slug: "pink-moon-records",
    builtId: "pink-moon-records",
    name: "Pink Moon Records",
    description: "What pinkmoonrecords.co.uk is: Steven Gee’s site for buying vinyl collections at the seller’s home.",
    business:
      "Pink Moon Records is Steven Gee. He buys vinyl record collections and comes to the seller’s home to view them. The site says he is based in Bottesford, Leicestershire, and that 1960s and 1970s rock is what he has loved longest. Other records are welcome too.",
    features: [
      "Three steps on the page: email, a rough idea or a few photos, then a home visit. No full list is required.",
      "The area is written out: about 30 miles of Bottesford, nearby for a few records, and further for a good collection, with a page for each place.",
      "Email and phone number in text, not only inside a picture.",
      "A short FAQ in Steven’s own words, answering who he is and what he will look at.",
    ],
  },
];

export function caseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function caseStudyByBuiltId(id: string) {
  return caseStudies.find((study) => study.builtId === id);
}

export function builtSiteForStudy(study: CaseStudy): BuiltSite | undefined {
  return builtSites.find((site) => site.id === study.builtId);
}
