import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import fraunces700 from "@fontsource/fraunces/files/fraunces-latin-700-normal.woff2?url";
import inter400 from "@fontsource/inter/files/inter-latin-400-normal.woff2?url";
import { Header, Footer, CtaBand, StickyMobileCta } from "@/components/site/Layout";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://wholelottasites.co.uk/#website",
  name: "WholeLottaSites",
  url: "https://wholelottasites.co.uk/",
  inLanguage: "en-GB",
  publisher: { "@id": "https://wholelottasites.co.uk/#business" },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://wholelottasites.co.uk/#business",
  name: "WholeLottaSites",
  description: "Websites, fixes, Google Business Profile and monthly care for UK small businesses. A new site is £500. An East Midlands mini-fix is £100: one concrete fix on a live site.",
  url: "https://wholelottasites.co.uk/",
  logo: "https://wholelottasites.co.uk/icon-512.png",
  image: "https://wholelottasites.co.uk/og-image.jpg",
  email: "chris@wholelottasites.co.uk",
  telephone: "+447517214483",
  priceRange: "£29–£1,200",
  currenciesAccepted: "GBP",
  founder: {
    "@type": "Person",
    "@id": "https://wholelottasites.co.uk/#chris",
    name: "Chris Faulkes",
    url: "https://wholelottasites.co.uk/about/",
    image: "https://wholelottasites.co.uk/images/chris-faulkes-640.webp",
    jobTitle: "Web Designer",
    homeLocation: { "@type": "Place", name: "Mansfield, Nottinghamshire" },
  },
  address: { "@type": "PostalAddress", addressLocality: "Mansfield", addressRegion: "Nottinghamshire", addressCountry: "GB" },
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "AdministrativeArea", name: "Nottinghamshire" },
    { "@type": "AdministrativeArea", name: "Derbyshire" },
    { "@type": "AdministrativeArea", name: "Leicestershire" },
    { "@type": "AdministrativeArea", name: "Lincolnshire" },
    { "@type": "AdministrativeArea", name: "Northamptonshire" },
    { "@type": "City", name: "Mansfield" },
  ],
  serviceType: ["Web design", "Small business websites", "Website fixes", "Website mini-fix", "Google Business Profile setup", "Website maintenance"],
  contactPoint: { "@type": "ContactPoint", contactType: "sales", email: "chris@wholelottasites.co.uk", telephone: "+447517214483", areaServed: "GB", availableLanguage: "en-GB" },
  knowsAbout: ["Web design", "Small business websites", "Website fixes", "Google Business Profile", "Website maintenance"],
  makesOffer: [
    {
      "@type": "Offer",
      name: "East Midlands £100 website mini-fix",
      price: "100",
      priceCurrency: "GBP",
      description: "A short audit and one concrete fix on a website that’s already live. Not a redesign and not a full rebuild. No ranking promise.",
      url: "https://wholelottasites.co.uk/website-mini-fix/",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Nottinghamshire" },
        { "@type": "AdministrativeArea", name: "Derbyshire" },
        { "@type": "AdministrativeArea", name: "Leicestershire" },
        { "@type": "AdministrativeArea", name: "Lincolnshire" },
        { "@type": "AdministrativeArea", name: "Northamptonshire" },
      ],
    },
    {
      "@type": "Offer",
      name: "New small business website",
      price: "500",
      priceCurrency: "GBP",
      description: "A full custom website or small shop built from scratch for £500. Payment plans total the same £500. First year of hosting included. The first year of a standard domain is included and registered in the client’s name. Premium domains cost extra. The client pays the renewal from year two. A personalised design starts after the deposit.",
      url: "https://wholelottasites.co.uk/pricing/#new-website",
    },
    {
      "@type": "Offer",
      name: "Website fix",
      priceCurrency: "GBP",
      priceSpecification: { "@type": "PriceSpecification", minPrice: "150", maxPrice: "400", priceCurrency: "GBP" },
      description: "A typical fix after a free audit that lists 3 to 5 issues. A rebuild is quoted separately when patching is a false economy.",
      url: "https://wholelottasites.co.uk/pricing/#website-fix",
    },
    {
      "@type": "Offer",
      name: "Google Business Profile setup",
      price: "149",
      priceCurrency: "GBP",
      description: "One-off setup or fix. The client stays the Google owner. No ranking promise. Optional monthly management is £99–£150.",
      url: "https://wholelottasites.co.uk/google-business-profile/",
    },
    {
      "@type": "Offer",
      name: "Monthly website care",
      priceCurrency: "GBP",
      priceSpecification: { "@type": "PriceSpecification", minPrice: "29", maxPrice: "50", priceCurrency: "GBP", unitText: "MONTH" },
      description: "Optional monthly care: uptime and SSL checks, small edits, form checks and domain renewal nudges.",
      url: "https://wholelottasites.co.uk/pricing/#monthly-care",
    },
  ],
};

export function NotFoundComponent() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl md:text-6xl">Page not found.</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">The page you’re looking for doesn’t exist or has been moved. Here are some places to start:</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className="inline-flex rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">Back to home</Link>
        <Link to="/portfolio" className="inline-flex rounded-md border border-input px-6 py-3 font-semibold hover:bg-accent">See my work</Link>
        <Link to="/pricing" className="inline-flex rounded-md border border-input px-6 py-3 font-semibold hover:bg-accent">Pricing</Link>
        <Link to="/contact" hash="mockup-form" className="inline-flex rounded-md border border-input px-6 py-3 font-semibold hover:bg-accent">New website</Link>
        <Link to="/blog" className="inline-flex rounded-md border border-input px-6 py-3 font-semibold hover:bg-accent">Blog</Link>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href={import.meta.env.BASE_URL}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#14213a" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: `${import.meta.env.BASE_URL}favicon.ico`, sizes: "any" },
      { rel: "icon", href: `${import.meta.env.BASE_URL}icon-192.png`, type: "image/png", sizes: "192x192" },
      { rel: "icon", href: `${import.meta.env.BASE_URL}icon-512.png`, type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: `${import.meta.env.BASE_URL}apple-touch-icon.png` },
      { rel: "preload", href: fraunces700, as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "preload", href: inter400, as: "font", type: "font/woff2", crossOrigin: "anonymous" },
    ],
    scripts: [
      { children: "document.documentElement.classList.add('js')" },
      { type: "application/ld+json", children: JSON.stringify(businessJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(websiteJsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <Header />
      <main id="content" tabIndex={-1}>
        <Outlet />
      </main>
      <CtaBand />
      <Footer />
      <StickyMobileCta />
    </>
  );
}
