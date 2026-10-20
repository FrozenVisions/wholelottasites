import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header, Footer, CtaBand } from "@/components/site/Layout";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://wholelottasites.co.uk/#business",
  name: "WholeLottaSites",
  description: "Affordable custom websites for UK small businesses, built from scratch with no templates. A full small-business website for £500.",
  url: "https://wholelottasites.co.uk/",
  logo: "https://wholelottasites.co.uk/apple-touch-icon.png",
  image: "https://wholelottasites.co.uk/og-image.jpg",
  email: "chris@wholelottasites.co.uk",
  telephone: "+447517214483",
  priceRange: "£500–£1,200",
  founder: { "@type": "Person", name: "Chris Faulkes", jobTitle: "Web Designer" },
  address: { "@type": "PostalAddress", addressLocality: "Mansfield", addressRegion: "Nottinghamshire", addressCountry: "GB" },
  areaServed: [{ "@type": "Country", name: "United Kingdom" }, { "@type": "AdministrativeArea", name: "Nottinghamshire" }],
  knowsAbout: ["Web design", "Small business websites", "Custom website development", "SEO"],
  makesOffer: {
    "@type": "Offer",
    name: "Small business website",
    price: "500",
    priceCurrency: "GBP",
    description: "A full custom website built from scratch, mobile responsive, secure HTTPS and SEO-ready.",
  },
};

function NotFoundComponent() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl md:text-6xl">Page not found.</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">The page you’re looking for doesn’t exist or has been moved.</p>
      <Link to="/" className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">Back to home</Link>
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

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#14213a" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "WholeLottaSites" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "icon", href: `${import.meta.env.BASE_URL}favicon.ico`, sizes: "any" },
      { rel: "icon", href: `${import.meta.env.BASE_URL}icon-512.png`, type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: `${import.meta.env.BASE_URL}apple-touch-icon.png` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(businessJsonLd) }],
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
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Outlet />
      </main>
      <CtaBand />
      <Footer />
    </QueryClientProvider>
  );
}
