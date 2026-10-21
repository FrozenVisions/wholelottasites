import type { ReactNode } from "react";

export function TextLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const classes = className ?? "font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary";
  if (/^(https?:|mailto:|tel:)/i.test(href)) {
    const external = /^https?:/i.test(href);
    return (
      <a href={href} className={classes} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }
  const hashAt = href.indexOf("#");
  const path = (hashAt >= 0 ? href.slice(0, hashAt) : href) || "/";
  const hash = hashAt >= 0 ? href.slice(hashAt + 1) : "";
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  return <a href={hash ? `${withSlash}#${hash}` : withSlash} className={classes}>{children}</a>;
}

/** Inline links written as [label](/path/). */
export function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const label = match[1];
    const href = match[2];
    if (label && href) nodes.push(<TextLink key={key++} href={href}>{label}</TextLink>);
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
