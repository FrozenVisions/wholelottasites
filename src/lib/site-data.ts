import vinylThumb from "@/assets/portfolio/wholelottavinyl-thumb.webp";
import vinylMid from "@/assets/portfolio/wholelottavinyl-thumb-800.webp";
import vinylSmall from "@/assets/portfolio/wholelottavinyl-thumb-600.webp";
import vinylFull from "@/assets/portfolio/wholelottavinyl-full.webp";
import safeThumb from "@/assets/portfolio/safeplate-thumb.webp";
import safeMid from "@/assets/portfolio/safeplate-thumb-800.webp";
import safeSmall from "@/assets/portfolio/safeplate-thumb-600.webp";
import safeFull from "@/assets/portfolio/safeplate-full.webp";
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
import buybackThumb from "@/assets/portfolio/vinyl-buyback-thumb.webp";
import buybackMid from "@/assets/portfolio/vinyl-buyback-thumb-800.webp";
import buybackSmall from "@/assets/portfolio/vinyl-buyback-thumb-600.webp";
import buybackFull from "@/assets/portfolio/vinyl-buyback-full.webp";

export const SITE_URL = "https://wholelottasites.co.uk";

/** Designed 1200×630 share card (title and description on the image), not the logo. */
export const SHARE_IMAGE = `${SITE_URL}/og-image.jpg`;
export const SHARE_IMAGE_ALT = "WholeLottaSites: websites built from scratch for UK small businesses. No templates. A full small-business website for £500.";

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

export const included = [
  ["Custom design, built from scratch", "Designed and coded around your business, not a theme shared with other companies."],
  ["Fully mobile responsive", "Laid out for a phone first, so people can read it and tap to call without zooming."],
  ["Secure HTTPS", "The padlock browsers expect, with no “not secure” warning."],
  ["SEO titles & descriptions", "Every page gets a proper title and description, so the page says what it is about."],
  ["Contact form and links", "A form that reaches you, plus your phone number, email and any links you want shown."],
  ["Stripe payment links connected, if you want them", "If you take payments, you set up your own Stripe account and I’ll connect the payment links."],
  ["Help going live", "I help you point your domain at the new site and check it before you send people there."],
] as const;

export const steps = [
  ["Free mock-up", "I design a homepage mock-up for your business. Free, no strings attached."],
  ["You approve", "Tell me what you love and what to change until it feels right."],
  ["Built in days", "I build the full site from scratch, usually within days of approval."],
  ["Go live", "I help you connect your domain and launch."],
] as const;

/** Short homepage version, and the longer copy used on the how-it-works page and in HowTo structured data. */
export const stages = [
  {
    title: "Mock-up",
    summary: "I design a homepage for your business. Free, and you’re not committing to anything.",
    body: "Tell me what the business does and where it works. I’ll design a homepage mock-up so you can see the direction before you decide. You say what to change. There’s nothing to pay to get that far, and you can stop there.",
    points: [
      "A homepage designed around your business, not a template",
      "You ask for changes until it feels right",
      "Nothing to pay, and no contract, to see it",
    ],
  },
  {
    title: "Build",
    summary: "If you like it, I build the full site from scratch, usually within days of you approving it.",
    body: "When you approve the mock-up, I build the full site from scratch, usually within days. For a small business that is typically a home page, your services, an about page and contact — the pages we agreed. It’s laid out for phones, served over HTTPS, with a title and description on every page and a form that reaches you. If you want to take card payments, you set up your own Stripe account and I connect the payment links.",
    points: [
      "The pages we agreed, built from scratch",
      "Mobile layout, HTTPS, page titles and a contact form",
      "Stripe payment links if you want them",
    ],
  },
  {
    title: "Launch",
    summary: "I help you connect your domain and go live.",
    body: "I help you point your domain at the site and check it on a phone before you share the address. You buy the domain yourself, at around £5–£10 a year, so the account stays in your name. The website is £500, in one go or on a payment plan, and every plan totals £500. Once it’s paid for, you choose a £10-a-month hosting and care plan, or a full handover of the site.",
    points: [
      "Help connecting the domain you own",
      "A check on a phone before you announce it",
      "Then a £10-a-month care plan, or a full handover",
    ],
  },
] as const;

export const paymentPlans = [
  { name: "Plan 1", headline: "£150 up front", detail: "then £50 a month for 7 months" },
  { name: "Plan 2", headline: "£100 up front", detail: "then £100 a month for 4 months" },
  { name: "Plan 3", headline: "3 payments", detail: "of £166.67, £166.67 and £166.66" },
] as const;

export const faqs = [
  ["Do I need my own domain?", "Yes — domains cost around £5–£10. You buy it so it’s yours to keep, and I’ll help you set it up."],
  ["Can I pay monthly?", "Yes. A full website is £500, or you can spread the cost: £150 up front then £50 a month for 7 months, £100 up front then £100 a month for 4 months, or three payments of £166.67, £166.67 and £166.66. Every plan totals exactly £500, and monthly payments are taken automatically by card through Stripe."],
  ["What does the £500 include?", "A custom site built from scratch, a mobile layout, secure HTTPS, a title and description on every page, a contact form and your contact details, Stripe payment links if you want them, and help going live. Your domain is separate, at around £5–£10 a year. Once the site is paid for, you choose a £10-a-month hosting and care plan or a full handover."],
  ["Can I take payments?", "Yes, via your own Stripe payment links. You set up the Stripe account and I’ll connect it to your site."],
  ["How long does it take?", "Usually built within days of you approving the mock-up."],
  ["Can I make edits later?", "Yes, small changes after launch — just get in touch."],
  ["Is the mock-up really free?", "Yes. No strings attached."],
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
    name: "wholelottavinyl.com",
    desc: "Vinyl record shop",
    long: "Chris’s vinyl record shop. The site is for browsing and buying records.",
    img: vinylThumb,
    imgMid: vinylMid,
    imgSmall: vinylSmall,
    full: vinylFull,
    fullWidth: 1280,
    fullHeight: 1908,
    alt: "Screenshot of the WholeLottaVinyl shop, with second-hand records for sale",
    url: "https://www.wholelottavinyl.com",
  },
  {
    name: "SafePlate",
    desc: "Allergy-safe restaurant finder",
    long: "A free UK site for finding allergy-safe restaurants. Chris built it because he has severe food allergies.",
    img: safeThumb,
    imgMid: safeMid,
    imgSmall: safeSmall,
    full: safeFull,
    fullWidth: 1280,
    fullHeight: 800,
    alt: "Screenshot of the SafePlate website, a free UK site for finding allergy-safe restaurants",
    url: "https://safeplate.org.uk",
  },
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

export type CaseStudy = {
  name: string;
  summary: string;
  img: string;
  imgMid: string;
  imgSmall: string;
  full: string;
  fullWidth: number;
  fullHeight: number;
  alt: string;
  /** Live link. Omitted for Vinyl Buyback. */
  url?: string;
  linkLabel?: string;
};

/** Chris’s own sites. Copy is limited to facts he has stated — no stats, testimonials or results. */
export const caseStudies: CaseStudy[] = [
  {
    name: "SafePlate",
    summary: "SafePlate is a free UK site for finding allergy-safe restaurants. Chris built it because he has severe food allergies, and he runs it. It is at safeplate.org.uk.",
    img: safeThumb,
    imgMid: safeMid,
    imgSmall: safeSmall,
    full: safeFull,
    fullWidth: 1280,
    fullHeight: 800,
    alt: "Screenshot of the SafePlate website, a free UK site for finding allergy-safe restaurants",
    url: "https://safeplate.org.uk",
    linkLabel: "Visit safeplate.org.uk",
  },
  {
    name: "WholeLottaVinyl",
    summary: "WholeLottaVinyl is Chris’s vinyl record shop. The site, at wholelottavinyl.com, is for browsing and buying records.",
    img: vinylThumb,
    imgMid: vinylMid,
    imgSmall: vinylSmall,
    full: vinylFull,
    fullWidth: 1280,
    fullHeight: 1908,
    alt: "Screenshot of the WholeLottaVinyl shop, with second-hand records for sale",
    url: "https://www.wholelottavinyl.com",
    linkLabel: "Visit wholelottavinyl.com",
  },
  {
    name: "Vinyl Buyback",
    summary: "Vinyl Buyback is a site where people sell their vinyl to Chris.",
    img: buybackThumb,
    imgMid: buybackMid,
    imgSmall: buybackSmall,
    full: buybackFull,
    fullWidth: 1280,
    fullHeight: 1976,
    alt: "Screenshot of Vinyl Buyback, where people sell their vinyl to Chris",
  },
];
