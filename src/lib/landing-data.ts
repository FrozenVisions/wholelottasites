// Copy for the trade and location landing pages. Every page is prerendered to static HTML.
// Rules: no invented clients, testimonials, reviews or stats. Prices must match the pricing page.
import slugs from "@/data/landing-slugs.json";
import { moreAudiences } from "@/lib/more-audiences";

export type Faq = readonly [string, string];

export interface TradePage {
  slug: string;
  name: string; // e.g. "Plumbers"
  title: string; // <title>
  description: string; // meta description
  h1: string;
  lead: string;
  intro: string[];
  features: { title: string; text: string }[];
  pages: string[];
  tips: string[];
  faqs: Faq[];
}

/** Same wording as the pricing page and the main FAQ, so the price is always consistent. */
export const PRICE_FAQ: Faq = [
  "How much does it cost, and can I pay monthly?",
  "A full website is £500, or you can spread the cost: £150 up front then £50 a month for 7 months, £100 up front then £100 a month for 4 months, or three payments of £166.67, £166.67 and £166.66. Every plan totals exactly £500, and monthly payments are taken automatically by card through Stripe. You buy your own domain separately, at around £5–£10 a year.",
];

const tradePages: TradePage[] = [
  {
    slug: "plumbers",
    name: "Plumbers",
    title: "Website for Plumbers | Custom Sites £500 | WholeLottaSites",
    description: "A website for plumbers and heating engineers: tap-to-call, emergency call-outs and the towns you cover. Built from scratch for £500, for the trade.",
    h1: "A website for plumbers.",
    lead: "When a pipe bursts, people search on their phone and ring the first plumber who looks trustworthy. Your site should make that call one tap away.",
    intro: [
      "Most plumbing work starts with a search like “plumber near me” or “boiler repair” followed by a phone call. A plumbing website has one main job: show you cover their area, show you can be trusted in their home, and make it easy to ring you.",
      "I build plumbing sites around that. Your number stays visible on every screen of a phone, the areas you cover are written out so Google can match them to local searches, and there’s a simple form for non-urgent jobs such as bathroom fits, so those enquiries don’t get lost in your voicemail.",
    ],
    features: [
      { title: "Tap-to-call on every page", text: "A sticky call button on phones, so someone standing in a flooded kitchen can ring you without hunting for a number." },
      { title: "Emergency vs planned work", text: "Clear sections for emergency call-outs and for planned jobs like boiler swaps and bathrooms, with your opening hours and out-of-hours policy." },
      { title: "Areas covered", text: "A plain list of the towns and villages you cover, written out so a local search has something accurate to read. It isn’t a promise of where you appear." },
      { title: "Accreditations up front", text: "Space for your Gas Safe registration number and any trade memberships you hold, so customers can check you before they call." },
      { title: "Job enquiry form", text: "Customers can describe the job and attach a photo of the leak or the old boiler, so you can price it before you visit." },
    ],
    pages: ["Home with tap-to-call", "Services (repairs, boilers, bathrooms)", "Areas covered", "About you and your accreditations", "Contact and enquiry form"],
    tips: [
      "Put your registration numbers on the site. People can look them up, and it reassures them.",
      "Name your services the way customers search: “boiler repair”, “blocked drain”, “leaking tap”.",
      "Use photos of your own van and your own work rather than stock images.",
    ],
    faqs: [
      ["Can the site show my Gas Safe number?", "Yes. I’ll add your registration number and any trade memberships you hold, and link to the official checking page where one exists, so customers can verify you themselves."],
      ["Can customers send me photos of the problem?", "Yes. The enquiry form can take photo uploads, so you can see the leak, the boiler or the old suite before you quote."],
      ["I mostly work in a few towns. Can the site reflect that?", "Yes. I’ll write out the areas you actually cover. It’s honest for customers, and it helps Google match you to local searches."],
    ],
  },
  {
    slug: "electricians",
    name: "Electricians",
    title: "Electrician Website Design | £500 | WholeLottaSites",
    description: "Electrician website design for UK sole traders and small firms: services, registration details and a quote form. Built from scratch for £500.",
    h1: "Electrician website design.",
    lead: "Electrical work is about trust and safety. Your website should prove you’re qualified and explain what you do in plain English.",
    intro: [
      "People hiring an electrician want to know you’re registered and insured, and they often don’t know the jargon. They search for “fuse board upgrade”, “EICR for landlords” or “EV charger installer”, not the technical terms.",
      "An electrician’s site works best when each type of job has its own clear section with plain-English explanations, your registration details are easy to find, and landlords and homeowners can each see what applies to them.",
    ],
    features: [
      { title: "A section for each service", text: "Rewires, consumer units, EICRs, EV chargers, lighting and fault-finding, each explained simply so customers know they’ve found the right person." },
      { title: "Registration and insurance", text: "Space for your scheme membership (such as NICEIC or NAPIT, if you’re registered) with a link so customers can check it." },
      { title: "Landlord information", text: "A page explaining electrical safety checks for landlords, a steady source of repeat work, with a way to book them." },
      { title: "Quote request form", text: "Customers can describe the job, the property type and add photos of the fuse board, so you can give a rough price before visiting." },
      { title: "Mobile-first layout", text: "Most of your visitors will be on a phone, so your number and the quote form are always one tap away." },
    ],
    pages: ["Home", "Services (with a short section for each)", "Landlords and EICRs", "About, registration and insurance", "Contact and quote form"],
    tips: [
      "Explain certificates in plain English. Customers often don’t know what an EICR or a Part P certificate is.",
      "Show any scheme membership and link to the public register so people can check it.",
      "If you install EV chargers, give it its own page. People search for it specifically.",
    ],
    faqs: [
      ["Can you add a page just for landlords?", "Yes. A landlords page explaining safety checks and how to book them gives a clear route for that work, separate from homeowner jobs."],
      ["Will it show I’m registered?", "Yes. I’ll show the schemes you actually belong to, and link to their public register where one exists. I won’t add badges for schemes you’re not part of."],
      ["Can customers upload photos of their fuse board?", "Yes. The quote form can accept photos, which helps you price jobs more accurately before you visit."],
    ],
  },
  {
    slug: "builders",
    name: "Builders",
    title: "Website for Builders | Project Galleries £500 | WholeLottaSites",
    description: "A website for builders: project galleries, the work you take on and a quote form. Custom-built for £500, with payment plans that total the same £500.",
    h1: "A website for builders.",
    lead: "Extensions, loft conversions and renovations are big decisions. Customers want to see your finished work before they invite you round to quote.",
    intro: [
      "Building work is expensive, so people research before they call. They look at photos of past projects, check what kinds of jobs you take on, and want a sense of how you work: who they’ll deal with, how quotes work and what happens on site.",
      "A builder’s website should be built around your projects. Each job can have its own short write-up with before, during and after photos, so the site keeps getting stronger and more searchable as you finish work.",
    ],
    features: [
      { title: "Project gallery", text: "A gallery split by job type (extensions, kitchens, loft conversions, groundwork) with before-and-after photos you can keep adding to." },
      { title: "Project write-ups", text: "Short pages for individual jobs, named the way customers describe the work, such as “single-storey extension”. That makes the page about the job. It doesn’t guarantee a search position." },
      { title: "Detailed quote form", text: "Asks for the type of work, rough size, postcode, timescale and plans or photos, so you only visit for serious enquiries." },
      { title: "How you work", text: "A plain explanation of your process, from first visit and quote to schedule, building control and sign-off, which answers questions before they’re asked." },
      { title: "Areas covered", text: "The towns you actually work in, written out for customers and for local search." },
    ],
    pages: ["Home", "Services by job type", "Projects gallery", "How we work", "About", "Quote request"],
    tips: [
      "Take photos at every stage of a job, not just at the end. Progress shots build trust.",
      "Ask customers’ permission before showing their home online.",
      "A quote form with the right questions saves you wasted visits.",
    ],
    faqs: [
      ["Can I add new projects myself?", "If you’d like, yes. Otherwise send me the photos and a few lines about the job, and I’ll add them for you on the optional monthly care plan (typically £29–£50)."],
      ["Can the quote form take drawings or plans?", "Yes. Customers can attach drawings, plans or photos so you can see the scope before you visit."],
      ["I’m a bigger firm with several teams. Is £500 enough?", "£500 covers a full small-business site. Firms that need lots of pages or extra features are quoted individually, from around £1,200."],
    ],
  },
  {
    slug: "decorators",
    name: "Decorators",
    title: "Painter and Decorator Website | £500 | WholeLottaSites",
    description: "A painter and decorator website with a gallery of your own work, a photo quote form and the areas you cover. Built from scratch for £500.",
    h1: "A painter and decorator website.",
    lead: "Decorating sells on the finish. A good gallery of your own work and an easy quote form do most of the selling for you.",
    intro: [
      "Customers choosing a decorator want to see neat lines, clean finishes and tidy work. Good photos of rooms, staircases, kitchens and exteriors you’ve done are the most persuasive thing you can show them.",
      "A decorating site works best with a clean, fast gallery grouped by type of work, and a quote form that lets customers send photos and rough room sizes. That means you can often give a ballpark figure without a visit.",
    ],
    features: [
      { title: "Work gallery", text: "Interior, exterior, wallpapering, kitchen cabinet painting and commercial work, each in its own gallery with fast-loading photos." },
      { title: "Before-and-after", text: "Side-by-side shots that show the difference you make, which is especially strong for exteriors and cabinet resprays." },
      { title: "Photo quote form", text: "Customers list the rooms, upload photos and say when they’d like the work done, so you can quote faster." },
      { title: "Services explained", text: "What’s included, such as prep, filling, protection of floors and furniture and clean-up, so customers can compare like with like." },
      { title: "Areas covered", text: "A list of the towns you work in to help with local searches like “decorator near me”." },
    ],
    pages: ["Home", "Services", "Gallery", "About", "Quote form"],
    tips: [
      "Take photos in daylight, from the same spot before and after.",
      "Mention the paints and finishes you like to use. Customers who care about quality notice.",
      "Keep the gallery current. Recent work shows you’re busy and active.",
    ],
    faqs: [
      ["Can customers send me photos of the rooms?", "Yes. The quote form takes photo uploads and room details, which often lets you give a ballpark price before visiting."],
      ["Can the gallery be split into interior and exterior?", "Yes. I’ll group it however suits your work, for example interior, exterior, wallpapering and cabinets."],
      ["Do I need professional photos?", "No. Phone photos taken in good light work well. I’ll crop, compress and arrange them so they look sharp and load quickly."],
    ],
  },
  {
    slug: "hairdressers",
    name: "Hairdressers & salons",
    title: "Hairdresser Website Design | Salons & Barbers | WholeLottaSites",
    description: "Hairdresser website design for salons and barbers: booking links, a price list, stylist profiles and opening hours. Custom sites built for £500.",
    h1: "Hairdresser website design.",
    lead: "Clients want to see your work, check your prices and book a slot, often late at night on their phone. Your site should let them do all three in a minute.",
    intro: [
      "Many salons rely on Instagram or Facebook alone, which makes it hard for new clients to find prices, opening hours or a way to book. A simple, fast salon website brings those together and shows up when people search for a hairdresser or barber nearby.",
      "If you already use an online booking system, I’ll link it or build it into the site so “Book now” is always one tap away. If you don’t, the site can take booking requests through a simple form until you’re ready.",
      "This page is about hair. Nails, brows, skin and spa treatments are a different set of pages — see [beauty salon websites](/websites-for/salons/).",
    ],
    features: [
      { title: "Book now, everywhere", text: "A booking button on every page that links to the system you already use (such as Fresha, Treatwell, Booksy or Timely), or a booking request form if you don’t have one." },
      { title: "Clear price list", text: "Cuts, colours, treatments and add-ons laid out simply, with “from” prices where it varies by hair length." },
      { title: "Stylist profiles", text: "A short intro for each stylist or barber and what they specialise in, so clients can choose who they book with." },
      { title: "Work gallery", text: "A gallery of your own cuts and colours, with a link to your Instagram for the latest work." },
      { title: "Hours, map and parking", text: "Opening hours, a map and parking notes, the things people check before they visit." },
    ],
    pages: ["Home with Book now", "Price list", "Team", "Gallery", "Contact, hours and map"],
    tips: [
      "Keep your price list on the site up to date. It’s one of the most-viewed pages.",
      "Use the same name, address and phone number as on your Google Business Profile.",
      "Show photos of the salon itself as well as the hair, so new clients know what to expect.",
    ],
    faqs: [
      ["Can it link to my booking system?", "Yes. I’ll link or embed the booking system you already use, so clients can book straight from the site. If you don’t use one, I can add a booking request form."],
      ["Can my Instagram photos be used?", "Yes, if they’re your own work. I’ll add the best ones to a gallery and link to your Instagram so clients can see the latest."],
      ["How do I change my prices later?", "Send me the new prices and I’ll update them on the optional monthly care plan (typically £29–£50), or I can show you how to do it yourself."],
    ],
  },
  {
    slug: "cafes",
    name: "Cafés",
    title: "Café Website Design | Menus, Hours & Maps | WholeLottaSites",
    description: "Café website design with a real-text menu, opening hours, allergen notes and a map. Built from scratch for £500. Full restaurants have a separate page.",
    h1: "Café website design.",
    lead: "People want three things from a café website: what’s on the menu, when you’re open and where you are. Get those right on a phone and they’ll come through the door.",
    intro: [
      "Café customers usually decide quickly, often while walking past or planning a day out. A clear menu that reads well on a phone, accurate opening hours and directions make the difference between a visit and a scroll past.",
      "I’ll build the menu as real text, not a blurry photo of the board. That means it reads well on a phone, a search engine can read the words, and it’s easy to update when the specials change.",
      "If you serve full meals and take evening bookings, the [restaurant website](/websites-for/restaurants/) page is the closer fit.",
    ],
    features: [
      { title: "Menu as real text", text: "Breakfast, lunch, cakes and drinks laid out clearly with prices. Search engines can read it, unlike a photo of a menu." },
      { title: "Allergen and dietary info", text: "Clear labels for vegan, vegetarian and gluten-free options, plus a note on how to ask about allergens." },
      { title: "Hours and seasonal changes", text: "Opening hours that are easy to update for bank holidays, seasonal hours and special events." },
      { title: "Table bookings or pre-orders", text: "A link to your booking or ordering system, or a simple form for table and party bookings." },
      { title: "Find us", text: "A map, parking and accessibility notes, and whether you’re dog-friendly. These are the questions people actually ask." },
    ],
    pages: ["Home", "Menu", "About the café", "Events or private hire", "Find us and contact"],
    tips: [
      "Keep your hours identical on your site, Google Business Profile and Facebook.",
      "Use your own photos of your food and your space. They work far better than stock photos.",
      "If you host events or private hire, give them their own page.",
    ],
    faqs: [
      ["How do I update the menu when it changes?", "Send me the changes and I’ll update them on the optional monthly care plan (typically £29–£50), or I can set it up so you can edit the menu yourself."],
      ["Can people book tables or pre-order online?", "Yes. I can link to the booking or ordering system you use, or add a simple booking request form."],
      ["Can you show allergen information?", "Yes. I can label dishes as vegan, vegetarian or gluten-free and add a clear note on how customers can ask about allergens."],
    ],
  },
  {
    slug: "cleaners",
    name: "Cleaners",
    title: "Cleaning Business Website | £500 | WholeLottaSites",
    description: "A cleaning business website with clear services, a quote form and the areas you cover. Domestic and commercial cleans, built from scratch for £500.",
    h1: "A cleaning business website.",
    lead: "People are letting you into their home or workplace. Your site needs to feel trustworthy and make it simple to ask for a quote.",
    intro: [
      "Cleaning customers usually want to know three things: what’s included, whether you cover their area, and roughly what it will cost. A cleaning website that answers those clearly gets more enquiries and fewer time-wasting calls.",
      "I’ll set out your regular, one-off, end-of-tenancy and commercial cleans as separate services, each with what’s included, and add a quote form that asks the questions you need answered, like the number of bedrooms, how often, and any pets.",
    ],
    features: [
      { title: "Services with checklists", text: "Regular, deep, end-of-tenancy, after-builders and office cleans, each with a clear list of what’s included." },
      { title: "Smart quote form", text: "Asks for property type, bedrooms and bathrooms, how often and preferred days, so you can price it straight away." },
      { title: "Trust details", text: "Space for your insurance, whether you bring your own products, and how keys and access are handled." },
      { title: "Areas covered", text: "The postcodes and towns you serve, so customers know straight away and Google can match local searches." },
      { title: "Card payments", text: "Optionally, take deposits or payments through your own Stripe account." },
    ],
    pages: ["Home", "Services", "Domestic", "Commercial", "Areas covered", "Get a quote"],
    tips: [
      "Say whether you bring your own products and equipment. Customers often ask.",
      "Explain how keys and access work for regular cleans.",
      "List your insurance if you have it. It reassures both homes and businesses.",
    ],
    faqs: [
      ["Can the quote form ask about property size?", "Yes. It can ask for bedrooms, bathrooms, frequency and any extras such as ovens or windows, so you can price jobs quickly."],
      ["Can I take deposits online?", "Yes. You set up your own Stripe account and I’ll connect it so customers can pay deposits or invoices by card."],
      ["I do both homes and offices. Can the site cover both?", "Yes. I’ll give domestic and commercial cleaning their own sections so each type of customer finds what applies to them."],
    ],
  },
  {
    slug: "gardeners",
    name: "Gardeners",
    title: "Gardener Website Design | Lawns & Landscaping | WholeLottaSites",
    description: "Gardener website design for maintenance rounds and landscaping: galleries, seasonal work and a quote form. Built from scratch for £500.",
    h1: "Gardener website design.",
    lead: "Gardening is visual and seasonal. Your site should show off your work and bring in the right jobs at the right time of year.",
    intro: [
      "Customers looking for a gardener are often after one of two things: regular upkeep (mowing, hedges, borders) or a one-off project such as a patio, fencing or a full redesign. Your website should make both routes obvious.",
      "Seasonal work matters too. Hedge cutting, autumn tidy-ups and spring planting can each have their own section that you can highlight when the season comes round, which keeps your diary fuller all year.",
    ],
    features: [
      { title: "Maintenance vs projects", text: "Separate sections for regular garden maintenance and for landscaping projects, so each customer gets the right information." },
      { title: "Project gallery", text: "Before-and-after photos of patios, lawns, borders and fencing that show the difference you make." },
      { title: "Seasonal services", text: "Sections for hedge cutting, autumn clear-ups, spring planting and winter jobs that you can bring forward each season." },
      { title: "Quote form with photos", text: "Customers send photos of the garden and say what they want, so you can price the job or plan your visit." },
      { title: "Areas covered", text: "The villages and towns you work in, which helps with local searches like “gardener near me”." },
    ],
    pages: ["Home", "Garden maintenance", "Landscaping", "Gallery", "Areas covered", "Quote form"],
    tips: [
      "Photograph gardens from the same angle before and after. The change is your best advert.",
      "Say whether you take green waste away. It’s a common question.",
      "Mention regular rounds if you have space for new customers.",
    ],
    faqs: [
      ["Can I promote different services each season?", "Yes. I’ll build seasonal sections, and on the care plan I can move the right one to the top of the home page as the seasons change."],
      ["Can customers send photos of their garden?", "Yes. The quote form takes photo uploads so you can see the job before you price it."],
      ["Do I need a big gallery to start?", "No. A handful of good before-and-after photos is plenty to launch with, and we can add more as you finish jobs."],
    ],
  },
];

export const trades: TradePage[] = [...tradePages, ...moreAudiences];

export const mansfieldFaqs: Faq[] = [
  ["Can we meet in person?", "Yes. I’m based in Mansfield, so I’m happy to meet in person in Mansfield or elsewhere in Nottinghamshire to talk through your site. If it’s easier, we can do it by phone or video call instead."],
  ["Do you only work with Mansfield businesses?", "No. I build sites for small businesses all over the UK. Local businesses just get the option of meeting face to face."],
  ["Will this guarantee a place in local searches?", "No. I can’t promise a position. What I will do is write clear page titles and descriptions, and the towns you serve, in real text. I’ll also explain how to set up your free Google Business Profile, using the same name, address and phone number as the site. That gives Google accurate information. It is not a ranking guarantee."],
];

export const tradeBySlug = (slug: string) => trades.find((t) => t.slug === slug);
export const landingSlugs = slugs;
