import { TextLink } from "@/components/site/RichText";
import { GBP_SETUP_PRICE } from "@/lib/google-business-profile";

const links = [
  { href: "/cheap-website-for-small-business", label: "Cheap website for a small business" },
  { href: "/pay-monthly-website", label: "Pay monthly website" },
  { href: "/website-built-from-scratch", label: "Website built from scratch" },
  { href: "/website-redesign", label: "Website redesign" },
  { href: "/website-mini-fix", label: "£100 East Midlands mini-fix" },
  { href: "/google-business-profile", label: `Google Business Profile, ${GBP_SETUP_PRICE}` },
  { href: "/mobile-friendly-website", label: "Make a website mobile friendly" },
  { href: "/websites-for", label: "Websites by type of business" },
  { href: "/web-design-mansfield", label: "Web designer in Mansfield" },
  { href: "/blog/what-a-small-business-website-needs", label: "What a small business website needs" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
];

export function SiteLinks({ current }: { current?: string }) {
  const items = links.filter((item) => current === undefined || item.href !== current.replace(/\/$/, ""));
  return (
    <nav aria-label="Related pages">
      <ul className="mt-8 flex flex-wrap gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <TextLink href={item.href} className="inline-flex rounded-md border border-input bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent">
              {item.label}
            </TextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
