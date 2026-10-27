import type { Faq } from "@/lib/landing-data";

export interface IntentSection {
  id: string;
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface IntentPage {
  slug: string;
  path: string;
  keyword: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  sections: IntentSection[];
  faqs: Faq[];
  showIncluded: boolean;
  showPlans: boolean;
}

const priceParagraph =
  "The website is £500. You can pay it in one go, or use a payment plan: £150 up front then £50 a month for 7 months, £100 up front then £100 a month for 4 months, or three payments of £166.67, £166.67 and £166.66. Every plan totals exactly £500. Monthly payments are taken by card through Stripe. Your domain is extra, around £5–£10 a year, and you buy it so you own it. Once the site is paid for, you choose a £10-a-month hosting and care plan, or a full handover.";

export const intentPages: IntentPage[] = [
  {
    slug: "cheap-website-for-small-business",
    path: "/cheap-website-for-small-business",
    keyword: "cheap website for small business UK",
    title: "Cheap Website for a Small Business UK | £500 | WholeLottaSites",
    description: "A cheap website for a small business in the UK: £500 for a custom site, or the same £500 on a payment plan. What’s included, and what isn’t.",
    eyebrow: "£500, not a teaser",
    h1: "A cheap website for a small business.",
    lead: "If you want a cheap website for a small business in the UK, this is that offer: a custom site for £500. Not a template with a low first month and a higher price later.",
    showIncluded: true,
    showPlans: true,
    sections: [
      {
        id: "what-cheap-means",
        heading: "What “cheap” means here",
        paragraphs: [
          "£500 is the price of the website, for a small business or an individual. It is the same price as on the [pricing page](/pricing/). It is not a deposit against a larger bill, and it is not a monthly fee that quietly becomes the real cost.",
          "Cheap, on this site, means a small scope done properly: pages we agree, built from scratch, working on a phone, with HTTPS, a title on every page, a contact form, and help going live. It does not mean a shared theme, stock photos of someone else’s workshop, or reviews I wrote for you.",
          priceParagraph,
        ],
      },
      {
        id: "who-its-for",
        heading: "Who it’s for",
        paragraphs: [
          "Trades are a large part of the work, and there are pages for [plumbers](/websites-for/plumbers/), [electricians](/websites-for/electricians/) and the other trades. The same £500 site is also for other small businesses and for people who aren’t a trade at all.",
          "That includes [restaurants](/websites-for/restaurants/), [cafés](/websites-for/cafes/), [hairdressers](/websites-for/hairdressers/), [beauty salons](/websites-for/salons/), [gyms](/websites-for/gyms/), [shops](/websites-for/shops/), [consultants](/websites-for/consultants/), [freelancers](/websites-for/freelancers/), [startups](/websites-for/startups/) and [individuals](/websites-for/individuals/). The pages differ. The price for a small site does not.",
          "A bigger build — lots of pages, a web app, a full online shop with stock and shipping — is quoted separately, from around £1,200. I’ll tell you if what you’re describing isn’t the £500 site, before you pay anything. The mock-up is free.",
        ],
      },
      {
        id: "not-included",
        heading: "What is not included",
        paragraphs: [
          "The domain is yours to buy, at around £5–£10 a year. I help you connect it. I don’t need to own the account.",
          "After the £500 is paid, hosting and small edits are a choice: £10 a month for a care plan, or a full handover of the site. Neither is added on top of the £500 while you’re still paying for the build.",
          "The detail of the three plans is on the [pay monthly website](/pay-monthly-website/) page. The cards below are the same three.",
        ],
      },
    ],
    faqs: [
      ["Is £500 the full price?", "Yes, for the small-business website. Payment plans split that same £500. They don’t add interest on top. Your domain, at around £5–£10 a year, is separate."],
      ["Why is a template sometimes advertised for less?", "Introductory prices often leave you to do the writing, the layout and the launch yourself, on a theme other businesses are using. This £500 includes me designing and building the site. It isn’t the cheapest number on the internet. It is a finished small site at a fixed price."],
      ["Can any kind of business use this?", "Any small business or individual who needs a modest site. If the project is really a product, a large shop or a multi-location brand, I’ll quote it rather than force it into £500."],
    ],
  },
  {
    slug: "pay-monthly-website",
    path: "/pay-monthly-website",
    keyword: "pay monthly website UK",
    title: "Pay Monthly Website UK | Plans Totalling £500 | WholeLottaSites",
    description: "A pay monthly website in the UK: £150 then £50×7, £100 then £100×4, or three payments of £166.67, £166.67 and £166.66. Every plan totals £500.",
    eyebrow: "Same £500, spread out",
    h1: "A pay monthly website in the UK.",
    lead: "You can pay monthly for the website. The price is still £500. The plans only change when the money leaves your account, not what you get.",
    showIncluded: false,
    showPlans: true,
    sections: [
      {
        id: "website-payment-plan",
        heading: "Website payment plan",
        paragraphs: [
          "There is one product and three ways to pay for it. A website payment plan here is not a finance agreement with a different total, and it isn’t a subscription for the site itself.",
          "Plan 1 is £150 up front, then £50 a month for 7 months. Plan 2 is £100 up front, then £100 a month for 4 months. Plan 3 is three payments of £166.67, £166.67 and £166.66. Add any of them up and you get £500.",
          "Payments are taken automatically by card through Stripe, so there isn’t a monthly invoice to remember. The [pricing page](/pricing/) shows the same figures. Nothing on this page overrides them.",
        ],
      },
      {
        id: "affordable-monthly",
        heading: "Affordable website monthly payments",
        paragraphs: [
          "Affordable website monthly payments, in this case, means those three schedules. I don’t add a setup fee, and I don’t charge interest on top of the £500.",
          "The site you get is the same one as if you paid £500 at once: built from scratch, mobile, HTTPS, page titles, a contact form, Stripe payment links if you want them, and help going live. There’s a plain list on the [cheap website](/cheap-website-for-small-business/) page.",
          "Your domain is not inside the monthly payments. You buy it yourself, around £5–£10 a year, so the address stays in your name.",
        ],
      },
      {
        id: "after-payoff",
        heading: "What happens after the last payment",
        paragraphs: [
          "Once the £500 is paid, you choose. A £10-a-month hosting and care plan covers hosting and small edits. Or you take a full handover of the site and stop the monthly payment.",
          "The £10 is not one of the build plans, and it doesn’t start instead of them. It is the option after the site is paid for.",
          "You can see the whole sequence — free mock-up, build, launch — on [how it works](/how-it-works/). You don’t choose a plan until you’ve seen the mock-up and decided to go ahead.",
        ],
      },
    ],
    faqs: [
      ["Do the monthly plans cost more than £500 in total?", "No. £150 plus seven payments of £50 is £500. £100 plus four payments of £100 is £500. £166.67 plus £166.67 plus £166.66 is £500."],
      ["When do I pick a plan?", "After the free mock-up, if you want the site built. You can also pay the £500 in one payment. The mock-up itself is free."],
      ["Is the £10 care plan required?", "No. After the site is paid for you can take the £10-a-month hosting and care plan or a full handover. It’s a choice, not a condition of the £500."],
    ],
  },
  {
    slug: "website-redesign",
    path: "/website-redesign",
    keyword: "website redesign",
    title: "Website Redesign for Small Businesses | £500 | WholeLottaSites",
    description: "A website redesign for a small business that has outgrown its old site. When an update is enough, and when a new build for £500 is the honest answer.",
    eyebrow: "Old sites",
    h1: "A website redesign.",
    lead: "A website redesign is worth it when the current site is getting in the way: hard to use on a phone, unclear, or so brittle that a simple change isn’t simple.",
    showIncluded: true,
    showPlans: false,
    sections: [
      {
        id: "when",
        heading: "When a redesign is the right job",
        paragraphs: [
          "I look at the same problems repeatedly. The page has to be pinched and zoomed on a phone. The phone number isn’t tappable. The browser says the site isn’t secure. The Google title still says “Home”. The contact form doesn’t arrive, or there isn’t one. The business has changed and the site describes an older version of it.",
          "If that’s the situation, a redesign here means a new site, built from scratch, not a new coat of paint on a page builder. The price for a small business is £500, with the [payment plans](/pay-monthly-website/) if you want them. You’ll see a homepage mock-up before you commit.",
        ],
      },
      {
        id: "update-my-old-website",
        heading: "Update my old website",
        paragraphs: [
          "“Update my old website” sometimes means a smaller job. A new phone number, a revised price list, a paragraph about a new service. If I built the site, that kind of edit can sit on the £10-a-month care plan after the site is paid for, or as a one-off if we’ve agreed it.",
          "If the site is already live and only one thing is wrong — a broken form, the mobile layout, speed, an SSL or redirect mess, or a missing website link on your Google Business Profile — that can be the [East Midlands £100 website mini-fix](/website-mini-fix/). It is a short audit and one fix. It is not a redesign.",
          "If the job is bigger than one fix, I’ll quote it separately. A normal rescue is usually around £150–£400. A rebuild is the £500 small-business site. Unpicking a theme, a pile of plugins and a layout that breaks when you edit it can still take longer than building the replacement. I’ll say which job it is before you pay, rather than bill you for a rescue that isn’t going to hold.",
          "Send the address of the current site with the [mock-up form](/contact/#mockup-form). I’ll tell you whether you need the mini-fix, a quoted rescue, or a new site. If the old site is basically fine and you only wanted a second opinion, you don’t owe me anything.",
        ],
      },
      {
        id: "what-you-keep",
        heading: "What you can keep",
        paragraphs: [
          "Your domain, if you already own it. We point it at the new site when the new one is ready, so you aren’t left with a gap. Your photos, your logo if you have one, and any words that are still true. Your Google Business Profile — updated so the name, address and phone match the new site.",
          "What you shouldn’t keep is a stack of pages that repeat each other, or a blog that hasn’t been touched in years. A shorter site that answers what you do and how to enquire is the usual result. There’s a longer note on [what a small business website needs](/blog/what-a-small-business-website-needs/).",
        ],
      },
    ],
    faqs: [
      ["Will you redesign my Wix or WordPress site in place?", "A redesign here is a new site, at £500 for a small business. One concrete fix on a live East Midlands site can be the £100 mini-fix. I won’t quietly rebuild a theme and call it a small edit."],
      ["Do I have to change my domain?", "No. If the domain is in your name, we keep it and point it at the new site when you’re ready."],
      ["How much is a redesign?", "For a small business, the new site is £500 — the same as a first website. One fix on a live East Midlands site is the £100 mini-fix. A larger rescue, short of a rebuild, is quoted separately and is usually around £150–£400. Larger projects are quoted from around £1,200."],
    ],
  },
  {
    slug: "mobile-friendly-website",
    path: "/mobile-friendly-website",
    keyword: "make my website mobile friendly",
    title: "Make My Website Mobile Friendly | £500 Rebuild | WholeLottaSites",
    description: "Make my website mobile friendly: what a phone-friendly small business site actually needs, and why the fix here is a new build for £500 rather than a patch.",
    eyebrow: "Phones first",
    h1: "Make my website mobile friendly.",
    lead: "If you have to pinch, zoom or turn the phone sideways to use your site, it isn’t mobile friendly. For a small business, that’s where most enquiries start.",
    showIncluded: false,
    showPlans: false,
    sections: [
      {
        id: "how-to-tell",
        heading: "How to tell",
        paragraphs: [
          "Open the site on your own phone, not a desktop window you’ve dragged narrow. Try to ring the phone number. Try the contact form. Read a paragraph without zooming. Tap the menu. If the text is tiny, the buttons are packed together, or the page scrolls sideways, that’s the problem.",
          "A second check: the address bar. If the browser warns that the connection isn’t secure, fix that at the same time. People do leave.",
        ],
        list: [
          "Text large enough to read without zooming",
          "Buttons and links far enough apart to tap",
          "A phone number that starts a call",
          "No sideways scrolling",
          "The important facts — what you do, how to enquire — without a hunt",
        ],
      },
      {
        id: "what-i-do",
        heading: "What I do about it",
        paragraphs: [
          "I don’t drop a mobile plugin into an old page builder and call it finished. Those layouts often look passable and still fail the real test: a thumb, in a hurry, trying to call you.",
          "The work is a new site, laid out for a phone first and then widened for a desktop. It’s the same £500 small-business website, built from scratch. If your site also needs a proper [redesign](/website-redesign/) — old content, no clear enquiry, a title that says “Home” — we do that together rather than only shrinking the old pages.",
          "You’ll get a homepage mock-up on a phone-sized layout before you pay. If it still feels awkward in your hand, say so. That’s the point of the mock-up.",
        ],
      },
      {
        id: "not-a-tweak",
        heading: "When a tweak is enough",
        paragraphs: [
          "If I built the site and one section has started to overflow, that’s a fix, not a new project. It can be part of the £10-a-month care plan once the site is paid for.",
          "If the site is already live and the phone problem is one concrete layout fix, that can be the [East Midlands £100 website mini-fix](/website-mini-fix/): a short audit and that one fix, for businesses in Nottinghamshire, Derbyshire, Leicestershire, Lincolnshire and Northamptonshire. It is not a new site.",
          "If the whole site has to be replaced so it can be used on a phone, that is this £500 rebuild. Tell me the address on the [mock-up form](/contact/#mockup-form) and I’ll say which it is. Making a website mobile friendly, on this page, means replacing one that can’t be used on a phone — not a £500 invoice for a stylesheet tweak.",
        ],
      },
    ],
    faqs: [
      ["Can you just make my current site mobile friendly?", "If the whole site needs replacing so it works on a phone, that is the £500 rebuild. One concrete layout fix on a live East Midlands site can be the £100 mini-fix instead. I won’t call a full rebuild a tweak."],
      ["Do you design the phone version separately?", "It’s one site. The layout is designed for a phone, then adjusted so a larger screen still reads well. You don’t maintain two websites."],
      ["Will a mobile-friendly site guarantee more calls?", "No. It removes a reason for people to give up when they try to phone you or read the page. It doesn’t promise a number of enquiries."],
    ],
  },
  {
    slug: "website-built-from-scratch",
    path: "/website-built-from-scratch",
    keyword: "website built from scratch",
    title: "Website Built from Scratch | No Templates | WholeLottaSites",
    description: "A website built from scratch for a small business: no theme, designed around you, for £500. Also the right route for a first website.",
    eyebrow: "No theme",
    h1: "A website built from scratch.",
    lead: "Built from scratch means I design and code the site for your business. There isn’t a theme underneath that a thousand other sites are also using.",
    showIncluded: true,
    showPlans: false,
    sections: [
      {
        id: "what-it-means",
        heading: "What that changes",
        paragraphs: [
          "A template starts from someone else’s layout and turns features on and off. It’s a fair way to get something online if you have the time to do it yourself. It also means unused parts, a look customers have seen before, and a builder you have to learn.",
          "A website built from scratch starts from what the business needs to say. The pages, the order, and the way someone gets in touch are decided for you, then I build them. You still approve the design — the [free mock-up](/how-it-works/) is that step — but you don’t assemble it.",
          "The small-business price is £500. That’s the same offer as the rest of this site, including the [pay monthly](/pay-monthly-website/) plans. “From scratch” is how it’s made, not a luxury tier.",
        ],
      },
      {
        id: "first-website",
        heading: "A first website for my business",
        paragraphs: [
          "A first website for a new business can be this. You don’t need a logo, a brand workshop or a year’s worth of blog posts. You need a name, a plain description of what you do, where you work, and how someone should contact you.",
          "If you have photos, send them. If you don’t, we don’t fill the gap with stock pictures of a different company. The mock-up can start from the words.",
          "The audiences differ — a [café](/websites-for/cafes/), a [consultant](/websites-for/consultants/), a [startup](/websites-for/startups/) and a [personal site](/websites-for/individuals/) don’t need the same pages. Say which you are on the form and the mock-up will follow that, not a generic small-business layout.",
          "There’s a short guide to [what a small business website needs](/blog/what-a-small-business-website-needs/) if you want the checklist before you enquire.",
        ],
      },
      {
        id: "what-to-send",
        heading: "What to send",
        paragraphs: [
          "The form asks for your name, the business name, an email and a note about what you do. A phone number and a current website are optional. You don’t need any of the extras below to ask for a mock-up.",
        ],
        list: [
          "A logo, if you already use one",
          "Photos you’re happy to publish",
          "The towns you cover, or your address and hours",
          "A domain, if you already own one",
        ],
      },
    ],
    faqs: [
      ["Is a bespoke site more expensive than £500?", "Not here. The £500 small-business website is built from scratch. Bigger projects, with many more pages or a web app, are quoted from around £1,200."],
      ["I’ve never had a website. Can I still get a mock-up?", "Yes. That’s the normal way to start. The mock-up is free, and you can stop after seeing it."],
      ["Do I need to write everything first?", "No. A few honest sentences are enough to design the homepage. I won’t invent services or claims to fill the page."],
    ],
  },
];

export const intentBySlug = (slug: string) => intentPages.find((page) => page.slug === slug);
