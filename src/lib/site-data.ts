import mcDecorating from "@/assets/portfolio/mcdecorating-desktop.webp";
import mcDecoratingMid from "@/assets/portfolio/mcdecorating-desktop-800.webp";
import mcDecoratingSmall from "@/assets/portfolio/mcdecorating-desktop-600.webp";
import stickyService from "@/assets/portfolio/sticky-service-desktop.webp";
import stickyServiceMid from "@/assets/portfolio/sticky-service-desktop-800.webp";
import stickyServiceSmall from "@/assets/portfolio/sticky-service-desktop-600.webp";
import safeDesktop from "@/assets/portfolio/safeplate-desktop.webp";
import safeDesktopMid from "@/assets/portfolio/safeplate-desktop-800.webp";
import safeDesktopSmall from "@/assets/portfolio/safeplate-desktop-600.webp";
import vinylDesktop from "@/assets/portfolio/wholelottavinyl-desktop.webp";
import vinylDesktopMid from "@/assets/portfolio/wholelottavinyl-desktop-800.webp";
import vinylDesktopSmall from "@/assets/portfolio/wholelottavinyl-desktop-600.webp";
import buybackDesktop from "@/assets/portfolio/vinylbuyback-desktop.webp";
import buybackDesktopMid from "@/assets/portfolio/vinylbuyback-desktop-800.webp";
import buybackDesktopSmall from "@/assets/portfolio/vinylbuyback-desktop-600.webp";
import outletDesktop from "@/assets/portfolio/wlv-outlet-desktop.webp";
import outletDesktopMid from "@/assets/portfolio/wlv-outlet-desktop-800.webp";
import outletDesktopSmall from "@/assets/portfolio/wlv-outlet-desktop-600.webp";
import dibsThumb from "@/assets/portfolio/dibs-thumb.webp";
import dibsMid from "@/assets/portfolio/dibs-thumb-800.webp";
import dibsSmall from "@/assets/portfolio/dibs-thumb-600.webp";
import dibsFull from "@/assets/portfolio/dibs-full.webp";
import winnieThumb from "@/assets/portfolio/whimsical-winnie-thumb.webp";
import winnieMid from "@/assets/portfolio/whimsical-winnie-thumb-800.webp";
import winnieSmall from "@/assets/portfolio/whimsical-winnie-thumb-600.webp";
import winnieFull from "@/assets/portfolio/whimsical-winnie-full.webp";
import fathomThumb from "@/assets/portfolio/fathom-thumb.webp";
import fathomMid from "@/assets/portfolio/fathom-thumb-800.webp";
import fathomSmall from "@/assets/portfolio/fathom-thumb-600.webp";
import fathomFull from "@/assets/portfolio/fathom-full.webp";
import ptThumb from "@/assets/portfolio/pt-simons-thumb.webp";
import ptMid from "@/assets/portfolio/pt-simons-thumb-800.webp";
import ptSmall from "@/assets/portfolio/pt-simons-thumb-600.webp";
import ptFull from "@/assets/portfolio/pt-simons-full.webp";

export const SITE_URL = "https://wholelottasites.co.uk";

/** Designed 1200×630 share card (title and description on the image), not the logo. */
export const SHARE_IMAGE = `${SITE_URL}/og-image.jpg`;
export const SHARE_IMAGE_ALT = "WholeLottaSites: websites built from scratch for UK small businesses. No templates. Founding client offer: £200 + VAT (£240 inc VAT).";

export function seo(path: string, title: string, description: string, options?: { type?: string }) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: options?.type ?? "website" },
      { property: "og:url", content: `${SITE_URL}${path === "/" ? "/" : path + "/"}` },
      { property: "og:locale", content: "en_GB" },
      { property: "og:site_name", content: "WholeLottaSites" },
      { property: "og:image", content: SHARE_IMAGE },
      { property: "og:image:secure_url", content: SHARE_IMAGE },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: SHARE_IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SHARE_IMAGE },
      { name: "twitter:image:alt", content: SHARE_IMAGE_ALT },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${path === "/" ? "/" : path + "/"}` }],
  };
}

export const problems = [
  ["Not mobile-friendly", "Most visitors are on their phone. If your site pinches, zooms or breaks, they leave."],
  ["Broken links", "Dead pages and buttons that go nowhere make a business look closed."],
  ["‘Not secure’ warnings", "Browsers flag sites without HTTPS — and customers notice."],
  ["Poor Google titles", "Vague or missing page titles mean you get skipped in search results."],
] as const;

export const why = [
  ["Unique to your brand", "Designed around you — not a theme a thousand other businesses are using."],
  ["Faster", "Hand-built pages load quickly, which keeps visitors and helps with Google."],
  ["No bloat", "No unused plugins, page builders or mystery code slowing things down."],
  ["Made around your customers", "Layout and content shaped by what your customers actually need to find."],
] as const;

function pounds(amount: number) {
  return Number.isInteger(amount) ? `£${amount}` : `£${amount.toFixed(2)}`;
}

/**
 * Founding-client new-website price. Change these numbers to retune the offer.
 * Pages, FAQ and JSON-LD should read the strings below, not hard-code figures.
 * foundingClients is the offer limit. Do not render a live “spots left” counter from it.
 */
export const newWebsiteOffer = {
  exVatPounds: 200,
  incVatPounds: 240,
  monthlyIncVatPounds: 50,
  monthlyExVatPounds: 41.67,
  monthlyMonths: 12,
  monthlyTotalIncVatPounds: 600,
  foundingClients: 20,
  promoteDiscountPounds: 50,
  referralDiscountPounds: 50,
  freeCareMonths: 3,
  vinylUrl: "https://www.wholelottavinyl.com",
  vinylFollowerPercent: 10,
  vinylSpendPounds: 20,
  vinylSpendCreditPounds: 10,
  vinylCollectionCreditPounds: 50,
  careFromPounds: 29,
  gbpSetupPounds: 149,
  launchDays: 7,
  promoteFollowerMinimum: 1000,
} as const;

const oneOffExVat = `${pounds(newWebsiteOffer.exVatPounds)} + VAT`;
const oneOffIncVat = `${pounds(newWebsiteOffer.incVatPounds)} inc VAT`;
const monthlyIncVat = pounds(newWebsiteOffer.monthlyIncVatPounds);
const monthlyExVat = pounds(newWebsiteOffer.monthlyExVatPounds);
const monthlyTotalIncVat = pounds(newWebsiteOffer.monthlyTotalIncVatPounds);

export const newWebsitePricing = {
  name: "Founding client offer",
  price: oneOffExVat,
  priceNote: `${oneOffIncVat}, one-off`,
  upfront: `${oneOffExVat} one-off (${oneOffIncVat})`,
  monthly: `Or ${monthlyIncVat}/month inc VAT for ${newWebsiteOffer.monthlyMonths} months (${monthlyTotalIncVat} total, ${monthlyExVat} + VAT a month)`,
  monthlyPlain: `${monthlyIncVat}/month inc VAT for ${newWebsiteOffer.monthlyMonths} months (${monthlyTotalIncVat} total, ${monthlyExVat} + VAT a month)`,
  founding: `Founding client offer, for the first ${newWebsiteOffer.foundingClients} clients. I’m building up reviews, so those first ${newWebsiteOffer.foundingClients} get this price. In return, an honest Google review and permission to show the site in the portfolio once it’s live.`,
  foundations:
    "Cheap, and built to last: proper local SEO keywords, fast pages, a mobile-first layout, and solid foundations. That is the build, not a promise of a Google position or of leads.",
  domain:
    "The first year of hosting is included, and so is the first year of a standard low-cost domain, registered in your name. Premium domains cost extra. From year two you pay the domain renewal and hosting, or monthly care.",
  notCredit: "The monthly price is not finance or credit, and it is not the care plan.",
  growth: "Want help growing it? Blog posts and SEO are an optional monthly extra on top - ask for a quote.",
} as const;

export const foundingBonuses = [
  {
    title: "Google Business Profile setup",
    text: `Free Google Business Profile setup (normally ${pounds(newWebsiteOffer.gbpSetupPounds)}). You stay the owner. No ranking promises.`,
  },
  {
    title: "Website care",
    text: `${newWebsiteOffer.freeCareMonths} months free website care, then optional care from ${pounds(newWebsiteOffer.careFromPounds)}/month.`,
  },
  {
    title: "Review starter pack",
    text: "A review starter pack: a QR code, plus review-request text and email scripts. Digital only.",
  },
  {
    title: "Business email forwarding",
    text: "Free business email forwarding on your domain, for example info@yourbusiness.co.uk forwarding to your existing inbox. Not a separate hosted mailbox.",
  },
  {
    title: "Referral reward",
    text: `${pounds(newWebsiteOffer.referralDiscountPounds)} off your website, or off care once the site is paid off, for every new WholeLottaSites customer who buys through your referral.`,
  },
  {
    title: "Launch timing",
    text: `Launch within ${newWebsiteOffer.launchDays} days of receiving your content.`,
  },
  {
    title: "Tweaks before launch",
    text: "We tweak until you’re happy before launch.",
  },
  {
    title: "Promote us, save £50",
    text: `Promote us, save ${pounds(newWebsiteOffer.promoteDiscountPounds)}. Businesses with 1,000 or more real followers on Facebook, Instagram or TikTok get ${pounds(newWebsiteOffer.promoteDiscountPounds)} off their website if they post about their new site, tagging WholeLottaSites, once it’s live, and keep a “Website by WholeLottaSites” footer link. The post must be labelled as an ad or paid partnership (UK ASA rules).`,
  },
  {
    title: "WholeLottaVinyl partner bonus",
    text: `WholeLottaVinyl partner bonus. You get a personal discount code for wholelottavinyl.com (${newWebsiteOffer.vinylUrl}) giving your followers ${newWebsiteOffer.vinylFollowerPercent}% off records. For every ${pounds(newWebsiteOffer.vinylSpendPounds)} your followers spend with that code, you get ${pounds(newWebsiteOffer.vinylSpendCreditPounds)} off your website, and ${pounds(newWebsiteOffer.vinylCollectionCreditPounds)} off for every record collection sold to WholeLottaVinyl through you. Credit can’t take the price below £0. Anything above that comes off care.`,
    href: newWebsiteOffer.vinylUrl,
  },
] as const;

export const foundingBonusesText = foundingBonuses.map((bonus) => bonus.text).join(" ");

/** Same wording for landing FAQs, so the price does not drift. */
export const newWebsitePriceAnswer =
  `${newWebsitePricing.founding} A full new website is ${newWebsitePricing.upfront}. ${newWebsitePricing.monthlyPlain}. ${newWebsitePricing.notCredit} ${newWebsitePricing.foundations} ${newWebsitePricing.domain} Monthly payments are taken automatically by card through Stripe. ${foundingBonusesText}`;

export const websitePaymentOptions = [
  {
    name: "One-off",
    headline: oneOffExVat,
    detail: oneOffIncVat,
    total: oneOffIncVat,
  },
  {
    name: "Pay monthly",
    headline: `${monthlyIncVat}/month`,
    detail: `inc VAT for ${newWebsiteOffer.monthlyMonths} months (${monthlyExVat} + VAT a month)`,
    total: `${monthlyTotalIncVat} inc VAT`,
  },
] as const;

export const included = [
  ["Custom design, built from scratch", "Designed and coded around your business, not a theme shared with other companies."],
  ["Fully mobile responsive", "Laid out for a phone first, so people can read it and tap to call without zooming."],
  ["Secure HTTPS", "The padlock browsers expect, with no “not secure” warning."],
  ["SEO titles & descriptions", "Every page gets a proper title and description, so the page says what it is about."],
  ["Local SEO keywords", "Proper local keywords for what you do and where you work, written into the pages. Fast, mobile-first, and built to last. Not a promise of a Google position or of leads."],
  ["Contact form and links", "A form that reaches you, plus your phone number, email and any links you want shown."],
  ["Stripe payment links connected, if you want them", "If you take payments, you set up your own Stripe account and I’ll connect the payment links."],
  ["Help going live", "I help you point your domain at the new site and check it before you send people there."],
  ["First year of hosting included", "The first year of hosting is included with a new website. From year two you pay hosting, or monthly care."],
  ["First year of a standard low-cost domain included", "We cover the first year of a standard low-cost domain. Premium domains cost extra. From year two you pay the domain renewal and hosting, or monthly care. The domain is registered in your name."],
] as const;

export const steps = [
  ["Samples", "Look at live sites and example designs. That’s what you see before a deposit."],
  ["Deposit", "A design for your business starts once the deposit is in. We agree the pages."],
  ["Built to launch", `I build the full site from scratch. A founding client launches within ${newWebsiteOffer.launchDays} days of receiving the content.`],
  ["Go live", "We tweak until you’re happy before launch. Then I help you connect your domain."],
] as const;

/** Short homepage version, and the longer copy used on the how-it-works page and in HowTo structured data. */
export const stages = [
  {
    title: "Sample",
    summary: "Before a deposit, you look at sample sites. Not a design made for your business.",
    body: `The portfolio is the sample: live sites and example designs. A personalised design starts after the deposit, not before. Tell me what the business does when you get in touch, and I’ll say whether the founding-price site (${newWebsitePricing.upfront}) is the right job.`,
    points: [
      "Sample sites you can open today",
      "No custom homepage before the deposit",
      "A fix audit is separate, and that one is free",
    ],
  },
  {
    title: "Build",
    summary: `After the deposit, I design and build the full site from scratch. Launch is within ${newWebsiteOffer.launchDays} days of receiving your content.`,
    body: `Once the deposit is in, I design and build the full site from scratch. Launch is within ${newWebsiteOffer.launchDays} days of receiving your content, and we tweak until you’re happy before launch. For a small business that is typically a home page, your services, an about page and contact — the pages we agreed. It’s laid out for phones first, kept fast, and served over HTTPS, with proper local SEO keywords, a title and description on every page, and a form that reaches you. If you want to take card payments, you set up your own Stripe account and I connect the payment links. That is solid foundations, not a promise of a Google position or of leads.`,
    points: [
      "The pages we agreed, built from scratch",
      "Mobile layout, HTTPS, page titles and a contact form",
      "Stripe payment links if you want them",
    ],
  },
  {
    title: "Launch",
    summary: "We tweak until you’re happy, then I help you connect your domain and go live.",
    body: `I help you point your domain at the site and check it on a phone before you share the address. ${newWebsitePricing.domain} ${newWebsitePricing.founding} ${newWebsitePricing.upfront}. ${newWebsitePricing.monthlyPlain}. ${newWebsitePricing.notCredit} ${foundingBonusesText}`,
    points: [
      "Help connecting the domain you own",
      "Tweaks until you’re happy, before launch",
      `${newWebsiteOffer.freeCareMonths} months free website care, then optional care from ${pounds(newWebsiteOffer.careFromPounds)}/month`,
    ],
  },
] as const;

/** Contact-form anchors. The hash sets which enquiry the form opens on. */
export type EnquiryHash = "mockup-form" | "fix-audit" | "gbp" | "care" | "bundle" | "mini-fix";

/** Sites that may be named as work. No results, rankings or testimonials are attached. */
export const proofSites = [
  { name: "wholelottavinyl.com", href: "https://www.wholelottavinyl.com" },
  { name: "safeplate.org.uk", href: "https://safeplate.org.uk" },
  { name: "mcdecoratingni.co.uk", href: "https://mcdecoratingni.co.uk" },
  { name: "vinylbuyback.co.uk", href: "https://vinylbuyback.co.uk" },
] as const;

export const offers = [
  {
    id: "new-website",
    title: "New website or store",
    price: newWebsitePricing.price,
    priceNote: `${newWebsitePricing.priceNote}. ${newWebsitePricing.monthlyPlain}.`,
    summary:
      `${newWebsitePricing.founding} The same site either way: a brochure site or a small shop, built from scratch. Cheap, and built to last. Before a deposit, you look at sample sites. A design for your business starts after that. ${newWebsitePricing.domain}`,
    points: [
      newWebsitePricing.notCredit,
      newWebsitePricing.foundations,
      "Bigger businesses are quoted from around £1,200.",
      "Stripe payment links if you want them. You set up your own Stripe account.",
      newWebsitePricing.domain,
      newWebsitePricing.growth,
    ],
    cta: "Ask about a new site",
    hash: "mockup-form",
  },
  {
    id: "website-fix",
    title: "Website fix or rescue",
    price: "£150–£400",
    priceNote: "A typical fix, after a free audit.",
    summary:
      "For a site that’s broken, slow, useless on a phone, has a form that doesn’t arrive, or is an outdated Wix, WordPress or Shopify build. I audit first and send screenshots plus 3–5 issues. If patching is a false economy, I’ll quote a rebuild.",
    points: [
      "WordPress, Wix, Squarespace, Shopify, custom HTML, or a rebuild from scratch.",
      "The audit is free. The price comes after it, not before.",
      `A small-business rebuild is ${newWebsitePricing.upfront}, the same founding price as a new site.`,
    ],
    cta: "Get a free fix audit",
    hash: "fix-audit",
  },
  {
    id: "google-business-profile",
    title: "Google Business Profile",
    price: "£149",
    priceNote: "Setup or fix, one-off. Monthly management £99–£150.",
    summary:
      "Categories, services, hours, photos, a description, the website link and a basic post. Optional monthly management covers posts, review replies, a photo refresh and a short note on Insights. You stay the Google owner. I am the manager. No ranking promises.",
    points: [
      "I won’t ask you to hand over the Google account.",
      "I don’t promise a position on Google or Maps, and I won’t say you’re “#1”.",
      "The listing should use the same name, address and phone number as the website.",
    ],
    cta: "Ask about your listing",
    hash: "gbp",
  },
  {
    id: "monthly-care",
    title: "Monthly website care",
    price: "£29–£50",
    priceNote: "A month. Optional.",
    summary:
      `Uptime and SSL checks, small copy or photo edits, a check that the form still reaches you, and a nudge before the domain renews. A founding-client website includes ${newWebsiteOffer.freeCareMonths} months free, then optional care from ${pounds(newWebsiteOffer.careFromPounds)}/month. A fix does not include care.`,
    points: [
      "Say when you want to stop, and I’ll confirm how we end it.",
      "You can also take a full handover of a site I built, and skip care.",
      `The ${monthlyIncVat} a month for ${newWebsiteOffer.monthlyMonths} months pays for the website. It is not the care plan.`,
    ],
    cta: "Ask about care",
    hash: "care",
  },
] as const satisfies readonly {
  id: string;
  title: string;
  price: string;
  priceNote: string;
  summary: string;
  points: readonly string[];
  cta: string;
  hash: EnquiryHash;
}[];

export const bundles = [
  {
    name: "Fix + care",
    text: "A website fix, then monthly care so small edits and form checks continue.",
  },
  {
    name: "Site + Google Business Profile",
    text: `The founding-price website (${newWebsitePricing.upfront}) already includes Google Business Profile setup. Bought on its own, setup is still £149, so the site and the listing match.`,
  },
  {
    name: "Fix + Google Business Profile",
    text: "A website fix, plus Google Business Profile setup or a correction at £149.",
  },
  {
    name: "Full",
    text: "A new site or a fix, monthly Google Business Profile management (£99–£150), and website care (£29–£50).",
  },
] as const;

export const faqs = [
  ["What is the £50 + VAT website mini-fix?", `For a live site in Nottinghamshire, Derbyshire, Leicestershire, Lincolnshire or Northamptonshire, £50 + VAT (£60 inc VAT) is a short audit and one concrete fix. Examples are a broken form, a mobile layout problem, speed, an SSL or redirect mess, or a missing website link on a Google Business Profile. It is not a redesign and not a full rebuild. Bigger work is quoted separately: a rescue is usually around £150–£400, or a rebuild at ${newWebsitePricing.upfront}. It is not a promise of a Google position.`],
  ["Who owns the domain?", "You do. The domain is registered in your name. We cover the first year of a standard low-cost domain. Premium domains cost extra. From year two you pay the domain renewal and hosting, or monthly care. I’ll help you point it at the site. I don’t need to own it."],
  ["Is the domain included?", "Yes, we cover the first year of a standard low-cost domain. Premium domains cost extra. From year two you pay the domain renewal and hosting, or monthly care. The domain is registered in your name."],
  ["Can I pay monthly?", `${newWebsitePricing.monthlyPlain}. Or ${newWebsitePricing.upfront}. ${newWebsitePricing.notCredit} ${newWebsitePricing.founding}`],
  ["Can I pay monthly for a new website?", `Yes. ${newWebsitePricing.monthlyPlain}. Or ${newWebsitePricing.upfront}. Monthly payments are taken automatically by card through Stripe. Those payments are paying for the website. They are not the care plan. ${newWebsitePricing.notCredit}`],
  ["What does the founding website price include?", `A custom site built from scratch, with solid foundations: proper local SEO keywords, fast pages, a mobile-first layout, secure HTTPS, a title and description on every page, a contact form and your contact details, Stripe payment links if you want them, and help going live. ${newWebsitePricing.domain} ${newWebsitePricing.founding} ${foundingBonusesText}`],
  ["What are the founding client bonuses?", foundingBonusesText],
  ["Is hosting included?", `Yes, the first year of hosting is included with a new website. From year two you pay hosting, or monthly care (from ${pounds(newWebsiteOffer.careFromPounds)}/month).`],
  ["How do you price a website fix?", `I audit first, free of charge, and send screenshots plus 3–5 issues. A typical fix is £150–£400. One concrete fix on a live East Midlands site can be the £50 + VAT mini-fix. If patching is a false economy, I’ll quote a rebuild instead — ${newWebsitePricing.upfront} for a small business — before you agree to anything.`],
  ["Who owns the Google Business Profile?", `You do. You stay the Google owner. WholeLottaSites is added as a manager only. Setup or a fix on its own is £149. It is included free with a founding-client website. Optional monthly management is £99–£150. No ranking promises.`],
  ["Do you promise a Google ranking?", "No. I don’t promise a position on Google or Maps, and I won’t say you’re “#1”. A clear website and a looked-after Business Profile make you easier to find. They don’t guarantee where you appear."],
  ["Is monthly care required?", `A founding-client website includes ${newWebsiteOffer.freeCareMonths} months free. After that, care is optional, from ${pounds(newWebsiteOffer.careFromPounds)}/month (the usual range is £29–£50). A fix does not include it. Care covers uptime and SSL checks, small edits, a check that the form still reaches you, and a nudge before the domain renews. Say when you want to stop and I’ll confirm how we end it.`],
  ["Can I take payments?", "Yes, via your own Stripe payment links. You set up the Stripe account and I’ll connect it to your site."],
  ["How long does a new site take?", `A founding client launches within ${newWebsiteOffer.launchDays} days of receiving the content. We tweak until you’re happy before launch.`],
  ["Can I make edits later?", "Yes. Small copy or photo edits can sit on optional monthly care, typically £29–£50, or as a one-off if we’ve agreed it."],
  ["Do I get a free design before I pay?", "No. Before a deposit you can look at sample sites — live sites and example designs. A design for your business starts after the deposit. A fix audit is different: if you already have a site, I’ll send screenshots and 3–5 issues at no charge, then a price."],
  ["What is GEO on a WholeLottaSites website?", "Clear facts about your business on the site: name, services, area, and contact details, written so search engines and AI assistants can cite you. It is ordinary plain English and structured pages, not tricks."],
  ["Will this get me recommended by ChatGPT or Google?", "I do not promise that. No assistant and no search engine guarantees a mention. I make the site accurate and easy to quote. Whether a tool recommends you is up to that tool."],
  ["Is GEO the same as SEO?", "Related, not the same. SEO is mostly about search results. GEO is about being clear enough that AI assistants can describe your business correctly when someone asks. Both need honest titles, real contact details, and pages that say what you do."],
  ["Do you invent reviews or traffic numbers?", "No. I name sites I’ve built, and I don’t attach testimonials, rankings or visit counts. The portfolio is screenshots. Live addresses I link: wholelottavinyl.com, safeplate.org.uk, mcdecoratingni.co.uk and vinylbuyback.co.uk."],
  ["Is GEO included in the founding-price site?", "Yes. Clear entity copy, service pages and contact paths are part of a normal build. A rescue or rebuild can add the same clarity if the old site was vague. The East Midlands £50 + VAT mini-fix is one agreed fix only; GEO rewrite of a whole site is quoted separately."],
] as const;

export type Project = {
  name: string;
  desc: string;
  long: string;
  img: string;
  imgMid: string;
  imgSmall: string;
  full: string;
  fullWidth: number;
  fullHeight: number;
  alt: string;
  /** Only set where a live link is allowed. */
  url?: string;
};

export const projects: Project[] = [
  {
    name: "dibs",
    desc: "Buy it now or bid marketplace",
    long: "A marketplace where shoppers can either buy an item outright or place a bid on it.",
    img: dibsThumb,
    imgMid: dibsMid,
    imgSmall: dibsSmall,
    full: dibsFull,
    fullWidth: 1280,
    fullHeight: 3488,
    alt: "dibs marketplace example website design with buy it now and bidding",
  },
  {
    name: "whimsicalWinnie",
    desc: "Handmade jewellery & witchy gifts",
    long: "A shop front for handmade jewellery and witchy gifts, with a look as distinctive as the products.",
    img: winnieThumb,
    imgMid: winnieMid,
    imgSmall: winnieSmall,
    full: winnieFull,
    fullWidth: 1280,
    fullHeight: 3501,
    alt: "whimsicalWinnie handmade jewellery shop example website design",
  },
  {
    name: "Fathom",
    desc: "Field instruments",
    long: "A product site presenting a range of field instruments in a clean, technical style.",
    img: fathomThumb,
    imgMid: fathomMid,
    imgSmall: fathomSmall,
    full: fathomFull,
    fullWidth: 1280,
    fullHeight: 3334,
    alt: "Fathom field instruments example product website design",
  },
  {
    name: "PT Simons",
    desc: "Personal trainer",
    long: "A site for a personal trainer to introduce their services and let new clients get in touch.",
    img: ptThumb,
    imgMid: ptMid,
    imgSmall: ptSmall,
    full: ptFull,
    fullWidth: 1280,
    fullHeight: 5860,
    alt: "PT Simons personal trainer example small business website design",
  },
];

export type BuiltSite = {
  id: string;
  name: string;
  summary: string;
  alt: string;
  img: string;
  imgMid: string;
  imgSmall: string;
  width: number;
  height: number;
  /** Live address. Omitted when there is no public URL to offer. */
  url?: string;
  linkLabel?: string;
  /** Shown as a badge. The shop is not described as finished. */
  inProgress?: boolean;
};

/**
 * Sites shown on the portfolio. Summaries are the agreed wording.
 * No testimonials, traffic, rankings or results are attached.
 */
export const builtSites: BuiltSite[] = [
  {
    id: "mc-decorating",
    name: "MC Decorating (Omagh)",
    summary: "A clean, simple site for a painters and decorators firm, so customers see the work, the area covered and how to get a quote.",
    alt: "Screenshot of the top of the MC Decorating website, a painters and decorators site for Omagh, with the headline, quote buttons and the start of the services.",
    img: mcDecorating,
    imgMid: mcDecoratingMid,
    imgSmall: mcDecoratingSmall,
    width: 1200,
    height: 750,
    url: "https://mcdecoratingni.co.uk",
    linkLabel: "mcdecoratingni.co.uk",
  },
  {
    id: "the-sticky-service",
    name: "The Sticky Service",
    summary: "A blue and white sales page for a £19 a month promo service for UK eBay, Vinted and Discogs sellers. It gives one clear offer and one clear next step.",
    alt: "Screenshot of the top of The Sticky Service sales page, a blue and white offer for a £19 a month promo service for UK eBay, Vinted and Discogs sellers.",
    img: stickyService,
    imgMid: stickyServiceMid,
    imgSmall: stickyServiceSmall,
    width: 1200,
    height: 750,
  },
  {
    id: "safeplate",
    name: "SafePlate",
    summary: "A UK restaurant finder for people with allergies, built so diners can check allergy info before they book.",
    alt: "Screenshot of the top of the SafePlate website, a UK restaurant finder where diners can check allergy information before they book.",
    img: safeDesktop,
    imgMid: safeDesktopMid,
    imgSmall: safeDesktopSmall,
    width: 1200,
    height: 750,
    url: "https://safeplate.org.uk",
    linkLabel: "safeplate.org.uk",
  },
  {
    id: "whole-lotta-vinyl",
    name: "Whole Lotta Vinyl",
    summary: "An online shop for a used-record dealer, with the stock, the contact details and the policies in one place.",
    alt: "Screenshot of the top of the Whole Lotta Vinyl online shop, showing the shop navigation, the Mansfield headline and used records for sale.",
    img: vinylDesktop,
    imgMid: vinylDesktopMid,
    imgSmall: vinylDesktopSmall,
    width: 1200,
    height: 750,
    url: "https://wholelottavinyl.com",
    linkLabel: "wholelottavinyl.com",
  },
  {
    id: "vinyl-buyback",
    name: "Vinyl Buyback",
    summary: "A site for selling your records, built around one job: get people to ask for an offer.",
    alt: "Screenshot of the top of the Vinyl Buyback website, with the offer headline and a button for people to ask for an offer on their records.",
    img: buybackDesktop,
    imgMid: buybackDesktopMid,
    imgSmall: buybackDesktopSmall,
    width: 1200,
    height: 1208,
    url: "https://vinylbuyback.co.uk",
    linkLabel: "vinylbuyback.co.uk",
  },
  {
    id: "wlv-outlet",
    name: "WLV Outlet",
    summary: "A shop for new and sealed vinyl and CDs, set up as a sister store to Whole Lotta Vinyl.",
    alt: "Screenshot of the top of the WLV Outlet shop for new and sealed vinyl and CDs, set up as a sister store to Whole Lotta Vinyl. The shop is in progress.",
    img: outletDesktop,
    imgMid: outletDesktopMid,
    imgSmall: outletDesktopSmall,
    width: 1200,
    height: 750,
    inProgress: true,
  },
];
