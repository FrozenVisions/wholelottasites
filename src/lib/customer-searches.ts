import { PRICE_FAQ, type Faq, type TradePage } from "@/lib/landing-data";

export interface CustomerSearch {
  /** Who the customer is looking for, e.g. "a plumber". */
  who: string;
  /** The search this page itself targets — a tradesperson looking for a website. */
  tradeSearch: string;
  /** Searches that person's own customers type. */
  queries: string[];
  angle: string;
}

export const customerSearches: Record<string, CustomerSearch> = {
  plumbers: {
    who: "a plumber",
    tradeSearch: "website for plumbers",
    queries: ["plumber near me", "emergency plumber", "boiler repair"],
    angle: "An emergency call-out line, your hours, and the towns you actually cover are the details those searches need. A web-design page cannot stand in for them.",
  },
  electricians: {
    who: "an electrician",
    tradeSearch: "electrician website design",
    queries: ["electrician near me", "emergency electrician", "EICR for landlords"],
    angle: "People often don’t know the trade jargon. Pages named the way they search — fuse board, landlord certificate, EV charger — are more useful than a single “services” list.",
  },
  builders: {
    who: "a builder",
    tradeSearch: "website for builders",
    queries: ["builder near me", "house extension builder", "loft conversion"],
    angle: "These are research searches. People want to see finished jobs and understand what you take on before they ask you to visit.",
  },
  decorators: {
    who: "a painter or decorator",
    tradeSearch: "painter and decorator website",
    queries: ["painter and decorator near me", "decorator for a kitchen", "exterior painter"],
    angle: "Customers decide from the finish. Your own photos, grouped by the type of work, answer those searches better than a slogan.",
  },
  hairdressers: {
    who: "a hairdresser or barber",
    tradeSearch: "hairdresser website design",
    queries: ["hairdresser near me", "barber open now", "hair salon prices"],
    angle: "People check prices, hours and whether they can book, usually on a phone. Beauty and nail treatments are covered on the beauty salon page, not this one.",
  },
  cafes: {
    who: "a café",
    tradeSearch: "cafe website design",
    queries: ["cafe near me", "coffee shop open now", "dog friendly cafe"],
    angle: "The menu, today’s hours and the address do the work. A photograph of a chalkboard does not, because a phone and a search engine can’t read it.",
  },
  cleaners: {
    who: "a cleaner",
    tradeSearch: "cleaning business website",
    queries: ["cleaner near me", "end of tenancy clean", "office cleaning"],
    angle: "Say which of those you actually do, and where. A quote form that asks for bedrooms, frequency and the type of clean saves a wasted visit.",
  },
  gardeners: {
    who: "a gardener",
    tradeSearch: "gardener website design",
    queries: ["gardener near me", "hedge cutting", "patio landscaper"],
    angle: "Regular mowing and a one-off patio are different jobs. Separate sections stop the wrong enquiry, and before-and-after photos answer the visual search.",
  },
  restaurants: {
    who: "a restaurant",
    tradeSearch: "restaurant website design",
    queries: ["restaurant near me", "sunday lunch near me", "restaurant with a private room"],
    angle: "People want the menu, whether you are open tonight, and how to book. This page is about building that site. It is not a restaurant listing.",
  },
  salons: {
    who: "a beauty salon",
    tradeSearch: "beauty salon website",
    queries: ["beauty salon near me", "nail salon open now", "spa treatments"],
    angle: "Clients look for a treatment, a price and a way to book. Haircuts and barbers have their own page, because the services and the photos are different.",
  },
  gyms: {
    who: "a gym",
    tradeSearch: "gym website design",
    queries: ["gym near me", "gym classes this week", "gym trial"],
    angle: "The useful facts are the address, the timetable and how someone joins or tries a class. A personal trainer working alone usually needs a simpler site than a gym with a timetable.",
  },
  shops: {
    who: "a shop",
    tradeSearch: "shop website design",
    queries: ["shops near me", "your shop’s name", "do you stock"],
    angle: "Many independent shops need hours, what you sell and how to find the door — not a full online shop on day one. If you do take payment, that is your own Stripe account, connected to the site.",
  },
  consultants: {
    who: "a consultant",
    tradeSearch: "consultant website",
    queries: ["consultant for a specific problem", "consultant near me", "your name"],
    angle: "Clients rarely search “consultant website”. They search the problem they have, or your name after a recommendation. The site should say who you help and how to start a conversation.",
  },
  freelancers: {
    who: "a freelancer",
    tradeSearch: "freelancer website",
    queries: ["freelance plus your skill", "your name", "hire a freelancer"],
    angle: "A freelancer’s site is a place to send people: services, a few examples of your own work, and a way to get in touch. It does not need to look like an agency.",
  },
  startups: {
    who: "a startup",
    tradeSearch: "startup website",
    queries: ["your product name", "the problem the product solves"],
    angle: "Early customers search for the problem or the product, not for “startup website”. A £500 site can explain the product and collect enquiries. A web application is a larger build, quoted from around £1,200.",
  },
  individuals: {
    who: "you",
    tradeSearch: "personal website",
    queries: ["your name", "what you do, plus your town"],
    angle: "After a recommendation, people search your name. A personal site gives them one page that says who you are and how to contact you, instead of a social profile they may not have an account for.",
  },
};

export function customerSearchFaq(trade: TradePage): Faq | undefined {
  const info = customerSearches[trade.slug];
  if (!info) return undefined;
  const examples = info.queries.map((q) => `“${q}”`).join(", ");
  return [
    `Will this rank for ${examples}?`,
    `No. Those are searches your customers type when they want ${info.who}, and I can’t promise a position on Google. This page is for ${info.tradeSearch}. On your site I will write your services and the places you cover in plain text, set a proper title on each page, and make it work on a phone. You should also set up your free Google Business Profile with the same name, address and phone number. That gives Google accurate information about the business. It is not a guarantee.`,
  ];
}

export function pageFaqs(trade: TradePage): Faq[] {
  const extra = customerSearchFaq(trade);
  return extra ? [...trade.faqs, extra, PRICE_FAQ] : [...trade.faqs, PRICE_FAQ];
}
