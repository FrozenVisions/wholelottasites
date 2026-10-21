import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Sections";
import { posts, formatPostDate } from "@/lib/blog";
import { breadcrumbJsonLd, jsonLd, absoluteUrl } from "@/lib/schema";
import { seo } from "@/lib/site-data";

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: posts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: post.title,
    url: absoluteUrl(`/blog/${post.slug}`),
  })),
};

export const Route = createFileRoute("/blog/")({
  head: () => ({
    ...seo(
      "/blog",
      "Small Business Website Advice | WholeLottaSites",
      "Plain-English notes for UK small businesses on websites, domains, redesigns and what to publish. Written by Chris Faulkes, a web designer in Mansfield.",
    ),
    scripts: [
      jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])),
      jsonLd(itemList),
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Small business website advice."
        lead="Short articles on what to put on a site, what it costs, and when to replace an old one. No invented results."
        crumbs={[{ name: "Home", href: "/" }, { name: "Blog" }]}
      />
      <Section className="!pt-4">
        <ul className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="h-full rounded-lg border-t-4 border-primary bg-card p-7 shadow-sm">
                <p className="text-sm text-muted-foreground"><time dateTime={post.date}>{formatPostDate(post.date)}</time></p>
                <h2 className="mt-3 font-display text-2xl font-semibold">
                  <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-primary">{post.title}</Link>
                </h2>
                <p className="mt-3 text-muted-foreground">{post.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
