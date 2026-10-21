import type { ReactNode } from "react";
import { marked, type Token, type Tokens } from "marked";
import { TextLink } from "@/components/site/RichText";

function headingId(text: string) {
  return text.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function inline(tokens: Token[] | undefined): ReactNode {
  if (!tokens) return null;
  return tokens.map((token, index) => renderInline(token, index));
}

function renderInline(token: Token, key: number): ReactNode {
  switch (token.type) {
    case "text": {
      const text = token as Tokens.Text;
      return text.tokens ? <span key={key}>{inline(text.tokens)}</span> : text.text;
    }
    case "strong":
      return <strong key={key} className="font-semibold text-foreground">{inline((token as Tokens.Strong).tokens)}</strong>;
    case "em":
      return <em key={key}>{inline((token as Tokens.Em).tokens)}</em>;
    case "paragraph":
      return <span key={key}>{inline((token as Tokens.Paragraph).tokens)}</span>;
    case "link": {
      const link = token as Tokens.Link;
      return <TextLink key={key} href={link.href}>{inline(link.tokens)}</TextLink>;
    }
    case "codespan":
      return <code key={key} className="rounded bg-muted px-1 text-base text-foreground">{(token as Tokens.Codespan).text}</code>;
    case "br":
      return <br key={key} />;
    case "escape":
      return (token as Tokens.Escape).text;
    case "del":
      return <span key={key}>{inline((token as Tokens.Del).tokens)}</span>;
    default:
      return "text" in token && typeof token.text === "string" ? token.text : null;
  }
}

function renderBlock(token: Token, key: number): ReactNode {
  switch (token.type) {
    case "space":
      return null;
    case "heading": {
      const heading = token as Tokens.Heading;
      const id = headingId(heading.text);
      if (heading.depth <= 2) {
        return <h2 key={key} id={id} className="scroll-mt-28 pt-6 font-display text-3xl font-bold text-foreground">{inline(heading.tokens)}</h2>;
      }
      return <h3 key={key} id={id} className="scroll-mt-28 pt-2 font-display text-2xl font-bold text-foreground">{inline(heading.tokens)}</h3>;
    }
    case "paragraph":
      return <p key={key}>{inline((token as Tokens.Paragraph).tokens)}</p>;
    case "list": {
      const list = token as Tokens.List;
      const items = list.items.map((item, itemIndex) => <li key={itemIndex}>{inline(item.tokens)}</li>);
      return list.ordered
        ? <ol key={key} className="list-decimal space-y-2 pl-5">{items}</ol>
        : <ul key={key} className="list-disc space-y-2 pl-5">{items}</ul>;
    }
    case "blockquote":
      return <blockquote key={key} className="border-l-4 border-primary pl-4 text-foreground">{inline((token as Tokens.Blockquote).tokens)}</blockquote>;
    case "code":
      return <pre key={key} className="overflow-x-auto rounded-md bg-navy p-4 text-sm text-navy-foreground"><code>{(token as Tokens.Code).text}</code></pre>;
    case "hr":
      return <hr key={key} className="border-border" />;
    default:
      return null;
  }
}

export function Markdown({ source }: { source: string }) {
  const tokens = marked.lexer(source, { gfm: true });
  return (
    <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
      {tokens.map((token, index) => renderBlock(token, index))}
    </div>
  );
}
