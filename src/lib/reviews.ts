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
  {
    id: "denise-whimsical-winnie",
    rating: "Rating: 5 out of 5",
    date: "19 November 2026",
    paragraphs: [
      "I’m really pleased with my new Whimsical Winnie website. The design is lovely and the layout is clear and easy to find my way around. The logo looks fantastic and really suits the business. Chris made the whole process easy and quick, and communication was great from start to finish. He kept me updated and answered every question straight away. I’d happily recommend WholeLottaSites to anyone who needs a website.",
    ],
    name: "Denise Reynolds",
    business: "Whimsical Winnie",
  },
] as const;

export const pinkMoonPullQuote = clientReviews[0].paragraphs[2];
