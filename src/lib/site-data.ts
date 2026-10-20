import vinylThumb from "@/assets/portfolio/wholelottavinyl-thumb.webp";
import vinylSmall from "@/assets/portfolio/wholelottavinyl-thumb-600.webp";
import vinylFull from "@/assets/portfolio/wholelottavinyl-full.webp";
import safeThumb from "@/assets/portfolio/safeplate-thumb.webp";
import safeSmall from "@/assets/portfolio/safeplate-thumb-600.webp";
import safeFull from "@/assets/portfolio/safeplate-full.webp";
import dibsThumb from "@/assets/portfolio/dibs-thumb.webp";
import dibsSmall from "@/assets/portfolio/dibs-thumb-600.webp";
import dibsFull from "@/assets/portfolio/dibs-full.webp";
import winnieThumb from "@/assets/portfolio/whimsical-winnie-thumb.webp";
import winnieSmall from "@/assets/portfolio/whimsical-winnie-thumb-600.webp";
import winnieFull from "@/assets/portfolio/whimsical-winnie-full.webp";
import fathomThumb from "@/assets/portfolio/fathom-thumb.webp";
import fathomSmall from "@/assets/portfolio/fathom-thumb-600.webp";
import fathomFull from "@/assets/portfolio/fathom-full.webp";
import ptThumb from "@/assets/portfolio/pt-simons-thumb.webp";
import ptSmall from "@/assets/portfolio/pt-simons-thumb-600.webp";
import ptFull from "@/assets/portfolio/pt-simons-full.webp";

export const SITE_URL = "https://wholelottasites.co.uk";

export function seo(path: string, title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}${path === "/" ? "/" : path + "/"}` },
      { property: "og:locale", content: "en_GB" },
      { property: "og:site_name", content: "WholeLottaSites" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
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
  "Custom design, built from scratch",
  "Fully mobile responsive",
  "Secure HTTPS",
  "SEO titles & descriptions",
  "Contact form and links",
  "Stripe payment links connected, if you want them",
  "Help going live",
];

export const steps = [
  ["Free mock-up", "I design a homepage mock-up for your business. Free, no strings attached."],
  ["You approve", "Tell me what you love and what to change until it feels right."],
  ["Built in days", "I build the full site from scratch, usually within days of approval."],
  ["Go live", "I help you connect your domain and launch."],
] as const;

export const faqs = [
  ["Do I need my own domain?", "Yes — domains cost around £5–£10. You buy it so it’s yours to keep, and I’ll help you set it up."],
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
  imgSmall: string;
  full: string;
  alt: string;
  /** Only set for real, live client sites. Demo designs are shown as image showcases. */
  url?: string;
};

export const projects: Project[] = [
  {
    name: "wholelottavinyl.com",
    desc: "Vinyl record shop",
    long: "An online record shop for browsing and buying vinyl, with a design built around the records themselves.",
    img: vinylThumb,
    imgSmall: vinylSmall,
    full: vinylFull,
    alt: "WholeLottaVinyl online record shop website homepage, custom designed for a small business in Mansfield",
    url: "https://www.wholelottavinyl.com",
  },
  {
    name: "SafePlate",
    desc: "Allergy-safe restaurant finder",
    long: "A tool that helps people with food allergies find restaurants that can cater for them.",
    img: safeThumb,
    imgSmall: safeSmall,
    full: safeFull,
    alt: "SafePlate allergy-safe restaurant finder website homepage",
    url: "https://safeplate.org.uk",
  },
  {
    name: "dibs",
    desc: "Buy it now or bid marketplace",
    long: "A marketplace where shoppers can either buy an item outright or place a bid on it.",
    img: dibsThumb,
    imgSmall: dibsSmall,
    full: dibsFull,
    alt: "dibs marketplace example website design with buy it now and bidding",
  },
  {
    name: "whimsicalWinnie",
    desc: "Handmade jewellery & witchy gifts",
    long: "A shop front for handmade jewellery and witchy gifts, with a look as distinctive as the products.",
    img: winnieThumb,
    imgSmall: winnieSmall,
    full: winnieFull,
    alt: "whimsicalWinnie handmade jewellery shop example website design",
  },
  {
    name: "Fathom",
    desc: "Field instruments",
    long: "A product site presenting a range of field instruments in a clean, technical style.",
    img: fathomThumb,
    imgSmall: fathomSmall,
    full: fathomFull,
    alt: "Fathom field instruments example product website design",
  },
  {
    name: "PT Simons",
    desc: "Personal trainer",
    long: "A site for a personal trainer to introduce their services and let new clients get in touch.",
    img: ptThumb,
    imgSmall: ptSmall,
    full: ptFull,
    alt: "PT Simons personal trainer example small business website design",
  },
];
