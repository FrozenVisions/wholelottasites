/**
 * Reviews the client wrote and agreed can be shown.
 * Do not add placeholder or invented reviews.
 * Rendered as plain HTML only — no Review or aggregateRating schema.
 */
export const clientReviews = [
  {
    id: "steven-pink-moon-records",
    rating: "Rating: 5 stars",
    paragraphs: [
      "Chris created a website for my new business from scratch. He quickly understood my requirements and produced words and images which were spot on for my needs.",
      "He was very patient with my lack of skills in this area, simplified all his explanations and came up with good ideas which reflected what I was hoping to achieve.",
      "The website looks good and clearly communicates my business service.",
      "I can recommend Chris without hesitation.",
    ],
    name: "Steven",
    business: "Pink Moon Records",
    href: "https://pinkmoonrecords.co.uk",
  },
] as const;

export const pinkMoonPullQuote = clientReviews[0].paragraphs[2];
