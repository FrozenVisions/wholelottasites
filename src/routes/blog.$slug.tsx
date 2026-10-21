import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Sections";
import { Markdown } from "@/components/site/Markdown";
import { Button } from "@/components/ui/button";
import { postBySlug, posts, formatPostDate } from "@/lib/blog";
import { articleJsonLd, breadcrumbJsonLd, jsonLd } from "@/lib/schema";
import { seo } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = postBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const post = loaderData;
    const head = seo(`/blog/${post.slug}`, post.seoTitle, post.description, { type: "article" });
    return {
      meta: [...head.meta, { property: "article:published_time", content: post.date }],
      links: head.links,
      scripts: [
        jsonLd(breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])),
        jsonLd(articleJsonLd({ title: post.title, description: post.description, path: `/blog/${post.slug}`, date: post.date })),
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();
  const others = posts.filter((item) => item.slug !== post.slug);
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={post.title}
        lead={post.description}
        crumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title }]}
      />
      <Section className="!pt-4">
        <p className="text-sm text-muted-foreground">
          By <Link to="/about" className="font-semibold text-primary hover:underline">Chris Faulkes</Link>
          {" · "}
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        </p>
        <div className="mt-8">
          <Markdown source={post.body} />
        </div>
        <div className="mt-12 max-w-3xl rounded-lg border bg-card p-6">
          <p className="font-display text-xl font-semibold">Chris Faulkes</p>
          <p className="mt-2 text-muted-foreground">Web designer in Mansfield, Nottinghamshire. I built and run WholeLottaVinyl, SafePlate and Vinyl Buyback.</p>
          <Link to="/about" className="mt-3 inline-flex font-semibold text-primary hover:underline">About Chris</Link>
        </div>
        {others.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-3xl font-bold">More from the blog</h2>
            <ul className="mt-4 space-y-2">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link to="/blog/$slug" params={{ slug: item.slug }} className="font-semibold text-primary hover:underline">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-10">
          <Button asChild size="lg"><Link to="/contact" hash="mockup-form">Get your free mock-up</Link></Button>
        </div>
      </Section>
    </>
  );
}
