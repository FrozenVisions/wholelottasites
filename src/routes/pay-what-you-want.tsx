import { createFileRoute } from "@tanstack/react-router";
import { MockupForm, PageHero, Section } from "@/components/site/Sections";
import { TextLink } from "@/components/site/RichText";
import { breadcrumbJsonLd, jsonLd } from "@/lib/schema";
import { seo } from "@/lib/site-data";

const title = "Pay what you want for a website | WholeLottaSites";
const description = "See your finished website first, then pay what you want from £1 + VAT. A one-month social experiment by WholeLottaSites, 15 Nov to 15 Dec 2026.";

const payWhatYouWantForm = {
  subject: "Pay what you want",
  eyebrow: "Get in touch",
  title: "Get in touch",
  lead: (
    <>
      Tell me a bit about what you need, or email <TextLink href="mailto:chris@wholelottasites.co.uk">chris@wholelottasites.co.uk</TextLink> or call <TextLink href="tel:+447517214483">07517 214483</TextLink>.
    </>
  ),
  button: "Get in touch",
  placeholder: "What you need the site to do",
  points: [
    "Your name",
    "Business or project name",
    "What you need the site to do",
    "A link to your current website or social page, if you have one",
  ],
} as const;

const questions = [
  ["How long does this run?", "This offer runs from 15 November to 15 December 2026. After that, the usual WholeLottaSites prices apply. Your website is not taken down when the month ends."],
  ["What if I pay £1?", "That’s allowed. The minimum is £1, after you’ve seen the finished site. You choose the amount. This is an experiment to see what people think the work is worth, so please pay an amount that feels honest to you, even if that’s £1."],
  ["Who owns the website?", "You do. If I help with the domain, it should be registered in your name. You can take a full handover and look after the site yourself, or leave it hosted with me."],
  ["What about hosting and care?", "I host the site. Optional monthly care, from £25, keeps hosting and the domain paid, and covers updates, backups, small changes and fixes. Growth and Pro add blog posts. Care is not required. If you don’t want it, we can arrange a handover."],
  ["When do I pay?", "After you’ve seen the finished site, not before. There is no deposit for this trial. VAT at 10% is added on top of the amount you choose (so £1 becomes £1.10). Care prices are plus VAT too."],
  ["What if I’m not happy with the site?", "Tell me before we wrap up, and I’ll fix what’s wrong with the work we agreed. I don’t ask you to pay for a site you haven’t seen."],
  ["Will this get me to the top of Google, or bring in more customers?", "I don’t promise a Google position or a number of leads. I build a clear, useful site and help with your Google Business Profile. That’s the work. The rest is up to search engines and your customers."],
  ["Can I use my own domain?", "Yes. You provide or pay for your own domain, and I can help you connect it. A free domain is not included."],
  ["Is this only for businesses near Mansfield?", "No. It’s open to businesses and individuals, anywhere."],
] as const;

export const Route = createFileRoute("/pay-what-you-want")({
  head: () => ({
    ...seo("/pay-what-you-want", title, description),
    scripts: [
      jsonLd(breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Pay what you want", path: "/pay-what-you-want" },
      ])),
    ],
  }),
  component: PayWhatYouWantPage,
});

function PayWhatYouWantPage() {
  return (
    <>
      <PageHero
        eyebrow="15 November to 15 December 2026"
        title="Pay what you want for a website"
        lead="You see the finished site first. Then you decide what to pay, from £1 up. Open 15 November to 15 December 2026."
        note="This is a social experiment."
        crumbs={[{ name: "Home", href: "/" }, { name: "Pay what you want" }]}
      />
      <Section className="!pt-12">
        <div className="max-w-3xl space-y-12 text-lg leading-relaxed text-muted-foreground">
          <div className="space-y-4">
            <p>I’m Chris Faulkes, a web designer in Mansfield. For one month I’m running a simple experiment. I’ll build a website of up to 5 pages for your business or project, help you set up Google Business Profile, and host it. After you’ve seen the finished site, you pay whatever you think it’s worth, from £1 upwards.</p>
            <p>I’m doing this to see how generous people are, to get better at the work, and to hear honest feedback. It’s open to businesses and individuals, anywhere.</p>
            <p>
              A few sites I’ve already built: <TextLink href="https://www.wholelottavinyl.com">WholeLottaVinyl</TextLink>, <TextLink href="https://safeplate.org.uk">SafePlate</TextLink> and <TextLink href="https://mcdecoratingni.co.uk">MC Decorating</TextLink>.
            </p>
          </div>

          <div>
            <h2 className="text-3xl text-foreground md:text-4xl">How it works</h2>
            <ol className="mt-6 list-decimal space-y-3 pl-5">
              <li>Tell me your name, your business or project, what you need the site to do, and a link to any current website or social page.</li>
              <li>I build a site of up to 5 pages and help with your Google Business Profile. You provide or pay for your own domain. I can help you choose one and connect it.</li>
              <li>You look at the finished site. Then you pay what you want, from £1 up.</li>
              <li>I host the site. Monthly care after that is optional.</li>
              <li><strong className="font-semibold text-foreground">The one condition:</strong> once your site is live, you leave an honest review (good or bad) for the WholeLottaSites website, and answer a few feedback questions.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-3xl text-foreground md:text-4xl">What’s included</h2>
            <ul className="mt-6 list-disc space-y-2 pl-5">
              <li>A website of up to 5 pages, built to work on a phone</li>
              <li>Help setting up your Google Business Profile. You stay the owner. I don’t promise a ranking or a number of leads</li>
              <li>Hosting, once the site is live</li>
              <li>You see the finished site before you pay anything</li>
            </ul>
            <p className="mt-6"><strong className="font-semibold text-foreground">What I ask in return:</strong> an honest review for wholelottasites.co.uk once your site is finished, whatever you think of it, plus a short feedback form.</p>
          </div>

          <div>
            <h2 className="text-3xl text-foreground md:text-4xl">What’s not included</h2>
            <ul className="mt-6 list-disc space-y-2 pl-5">
              <li>A free domain. You provide or pay for your own. I can help</li>
              <li>More than 5 pages, an online shop, or a custom booking or payment system. Those can be quoted separately if you need them</li>
              <li>A promise that you’ll rank on Google or get a set number of enquiries</li>
              <li>Blog posts, unless you later choose Growth or Pro care</li>
              <li>Ongoing changes and updates, unless you take a monthly care plan</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl text-foreground md:text-4xl">Optional monthly care</h2>
            <div className="mt-6 space-y-4">
              <p>Care is optional and monthly. You can skip it and take a full handover of the site.</p>
              <p><strong className="font-semibold text-foreground">Essential, £25 a month.</strong> Hosting and domain renewal kept paid and running. Security and software updates, plus regular backups. Small text, photo and price changes, up to 30 minutes a month. Fixes if something on the site breaks. A monthly check that the site, forms and contact links work. Email support, normally answered within one working day. No blog posts.</p>
              <p><strong className="font-semibold text-foreground">Growth, £50 a month.</strong> Everything in Essential, plus 4 SEO blog posts a month, written around search phrases for the business, up to 1 hour of changes a month, and a monthly Google Business Profile post.</p>
              <p><strong className="font-semibold text-foreground">Pro, £75 a month.</strong> Everything in Growth, but 8 SEO blog posts a month instead of 4.</p>
              <p>Blog posts help the site grow on Google over time. Nothing is guaranteed. Say when you want to stop, and I’ll confirm how we end it.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl text-foreground md:text-4xl">Questions</h2>
            <div className="mt-6 space-y-6">
              {questions.map(([question, answer]) => (
                <div key={question}>
                  <h3 className="text-xl text-foreground">{question}</h3>
                  <p className="mt-2">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section muted className="!pt-12">
        <MockupForm lock={payWhatYouWantForm} />
      </Section>
    </>
  );
}
