export const startOffers = [
  { value: "founding-monthly", label: "New website, £50/month inc VAT for 12 months" },
  { value: "founding-one-off", label: "New website, £200 + VAT (£240) one-off" },
  { value: "fix", label: "Website fix or rescue" },
  { value: "mini-fix", label: "East Midlands £50 + VAT mini-fix" },
  { value: "gbp", label: "Google Business Profile, £149" },
  { value: "care", label: "Website care, monthly or a year in advance" },
  { value: "record-shop", label: "New record shop website" },
  { value: "record-shop-blogs", label: "Record shop blogs, from £20 a month" },
  { value: "helping-hand", label: "Record shop Helping Hand, £50 or £100" },
  { value: "collection-boost", label: "Record shop Collection Boost, £50 setup" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export type StartOfferValue = (typeof startOffers)[number]["value"];

export function startOfferFromQuery(value: string | null): StartOfferValue | undefined {
  if (!value) return undefined;
  return startOffers.find((offer) => offer.value === value)?.value;
}
