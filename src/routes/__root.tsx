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
  description: "Affordable custom websites for UK small businesses, built from scratch with no templates. A full small-business website for £500.",
  url: "https://wholelottasites.co.uk/",
  logo: "https://wholelottasites.co.uk/icon-512.png",
  image: "https://wholelottasites.co.uk/og-logo.jpg",
  email: "chris@wholelottasites.co.uk",
  telephone: "+447517214483",
  priceRange: "£500+",
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
    { "@type": "City", name: "Mansfield" },
  ],
  serviceType: ["Web design", "Small business website design", "Website redesign"],
  contactPoint: { "@type": "ContactPoint", contactType: "sales", email: "chris@wholelottasites.co.uk", telephone: "+447517214483", areaServed: "GB", availableLanguage: "en-GB" },
  knowsAbout: ["Web design", "Small business websites", "Custom website development", "SEO"],
  makesOffer: {
    "@type": "Offer",
    name: "Small business website",
    price: "500",
    priceCurrency: "GBP",
    description: "A full custom website built from scratch for £500. Payment plans are available and total the same £500.",
    url: "https://wholelottasites.co.uk/pricing/",
    areaServed: { "@type": "Country", name: "United Kingdom" },
  },
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
        <Link to="/contact" hash="mockup-form" className="inline-flex rounded-md border border-input px-6 py-3 font-semibold hover:bg-accent">Free mock-up</Link>
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
