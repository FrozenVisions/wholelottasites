export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  keyword: string;
  body: string;
  /** Question/answer pairs from a "## Quick answers" section, when the post has one. */
  faqs: [string, string][];
}

const files = import.meta.glob("../../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function frontmatter(raw: string, filename: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match?.[1] || match[2] === undefined) {
    throw new Error(`${filename}: add frontmatter between --- lines`);
  }
  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const sep = trimmed.indexOf(":");
    if (sep === -1) throw new Error(`${filename}: bad frontmatter line "${trimmed}"`);
    const key = trimmed.slice(0, sep).trim();
    let value = trimmed.slice(sep + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, body: match[2].trim() };
}

/** Plain-text Q&As under "## Quick answers", matching the text on the page. */
export function quickAnswers(body: string): [string, string][] {
  const heading = body.match(/^## Quick answers\s*$/m);
  if (!heading || heading.index === undefined) return [];
  const after = body.slice(heading.index + heading[0].length);
  const nextHeading = after.search(/^## /m);
  const section = (nextHeading === -1 ? after : after.slice(0, nextHeading)).trim();
  const faqs: [string, string][] = [];
  for (const match of section.matchAll(/\*\*([^*]+)\*\*\s*\n+([\s\S]*?)(?=\n+\*\*|$)/g)) {
    const question = match[1]?.replace(/\s+/g, " ").trim();
    const answer = match[2]
      ?.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
      .replace(/\s+/g, " ")
      .trim();
    if (question && answer) faqs.push([question, answer]);
  }
  return faqs;
}

function parse(raw: string, filename: string): BlogPost {
  const { data, body } = frontmatter(raw, filename);
  for (const key of ["title", "description", "date", "keyword", "slug"] as const) {
    if (!data[key]) throw new Error(`${filename}: missing ${key}`);
  }
  const slug = data["slug"] ?? "";
  const title = data["title"] ?? "";
  const description = data["description"] ?? "";
  const date = data["date"] ?? "";
  const keyword = data["keyword"] ?? "";
  if (slug !== filename) throw new Error(`${filename}: slug "${slug}" must match the filename`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`${filename}: date must be YYYY-MM-DD`);
  if (!body) throw new Error(`${filename}: write the article under the frontmatter`);
  const faqs = quickAnswers(body);
  if (/^## Quick answers\s*$/m.test(body) && faqs.length === 0) {
    throw new Error(`${filename}: "## Quick answers" did not parse into questions`);
  }
  const seoTitle = data["seoTitle"] || `${title} | WholeLottaSites`;
  return { slug, title, seoTitle, description, date, keyword, body, faqs };
}

export const posts: BlogPost[] = Object.entries(files)
  .map(([path, raw]) => {
    const filename = path.split("/").pop()?.replace(/\.md$/, "") ?? "";
    if (typeof raw !== "string") throw new Error(`Could not read ${path}`);
    return parse(raw, filename);
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export const postBySlug = (slug: string) => posts.find((post) => post.slug === slug);

export function formatPostDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
