export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  keyword: string;
  body: string;
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
  const seoTitle = data["seoTitle"] || `${title} | WholeLottaSites`;
  return { slug, title, seoTitle, description, date, keyword, body };
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
