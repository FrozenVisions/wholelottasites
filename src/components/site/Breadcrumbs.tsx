import { TextLink } from "@/components/site/RichText";

export function Breadcrumbs({ items, onNavy = false }: { items: { name: string; href?: string }[]; onNavy?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${onNavy ? "text-navy-foreground/85" : "text-muted-foreground"}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden className={onNavy ? "text-navy-foreground/70" : ""}>/</span>}
              {item.href && !last ? (
                <TextLink
                  href={item.href}
                  className={onNavy ? "font-medium text-navy-foreground underline-offset-4 hover:text-copper hover:underline" : "font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"}
                >
                  {item.name}
                </TextLink>
              ) : (
                <span aria-current="page" className={onNavy ? "font-semibold text-navy-foreground" : "font-semibold text-foreground"}>{item.name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
