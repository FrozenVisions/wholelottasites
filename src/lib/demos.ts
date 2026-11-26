export type DemoSite = {
  slug: string;
  trade: string;
  h1: string;
  description: string;
  lead: string;
  services: readonly { title: string; text: string }[];
  notes: readonly string[];
};

export const demos: readonly DemoSite[] = [
  {
    slug: "electrician",
    trade: "Electrician",
    h1: "Example electrician",
    description: "An example one-page design for an electrician. Not a real business, and not a client.",
    lead: "A one-page layout for an electrician: the jobs, the towns, and a way to call. The name and the jobs below are made up.",
    services: [
      { title: "Consumer units", text: "A replacement or a repair, written in the words a customer uses." },
      { title: "Sockets and lighting", text: "Extra sockets, a faulty light, or a room that has been rewired." },
      { title: "Fault finding", text: "When something has tripped and the householder wants a person, not a riddle." },
    ],
    notes: [
      "The phone number would be real text, large enough to tap.",
      "The towns would be the ones this electrician actually covers.",
      "Certificates and insurance would be named only if this person held them.",
    ],
  },
  {
    slug: "roofer",
    trade: "Roofer",
    h1: "Example roofer",
    description: "An example one-page design for a roofer. Not a real business, and not a client.",
    lead: "A one-page layout for a roofer: the work, the area, and how to ask for a quote. Nothing here is a real firm.",
    services: [
      { title: "Leaks and slipped tiles", text: "The urgent job, with the area and a number someone can tap." },
      { title: "Flat roofs", text: "A separate heading, because it is not the same job as a tiled roof." },
      { title: "Gutters and fascias", text: "Listed only if this roofer does them. An example can. A real page would not pretend." },
    ],
    notes: [
      "Photos would be this roofer’s own jobs, with permission.",
      "A quote form would ask for the address, the problem, and a phone number.",
      "No star rating is invented for this example.",
    ],
  },
  {
    slug: "cafe",
    trade: "Cafe",
    h1: "Example cafe",
    description: "An example one-page design for a cafe. Not a real business, and not a client.",
    lead: "A one-page layout for a cafe: where it is, when it is open, and a menu someone can read. The cafe is not real.",
    services: [
      { title: "Breakfast and lunch", text: "The food, in words, not only inside a photograph of a chalkboard." },
      { title: "Opening hours", text: "The days and the times, written out, including when it is shut." },
      { title: "Where to find it", text: "The street, the town, and whether there is seating outside." },
    ],
    notes: [
      "Allergens would be the cafe’s own list, not a stock sentence.",
      "A booking link would appear only if the cafe actually takes bookings.",
      "This example does not invent a menu or a number of covers.",
    ],
  },
  {
    slug: "record-shop",
    trade: "Record shop",
    h1: "Example record shop",
    description: "An example one-page design for a record shop. Not a real business. Whole Lotta Vinyl is the real shop, on its own site.",
    lead: "A one-page layout for a record shop: what it sells, how to visit or order, and how someone sells a collection. This shop is not real.",
    services: [
      { title: "Used and new", text: "Say which you sell. An example can say both. A real shop should not claim stock it does not have." },
      { title: "Visit or post", text: "Opening hours if there is a counter, or postage rules if it is online only." },
      { title: "Sell us your records", text: "A short page and a form, if the shop buys collections. The town is named." },
    ],
    notes: [
      "No invented sales, rankings or review scores.",
      "A real record shop site we built is wholelottavinyl.com. This page is only the shape of one.",
      "Prices on a real shop would be the shop’s own prices.",
    ],
  },
];

export function demoBySlug(slug: string) {
  return demos.find((demo) => demo.slug === slug);
}
