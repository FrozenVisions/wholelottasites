export type WebsiteCheck =
  | {
      ok: true;
      typed: string;
      address: string;
      host: string;
      pagespeedUrl: string;
      /** What the typed address itself says. We do not connect to the site. */
      https: "yes" | "no" | "not-typed";
      facebook: boolean;
    }
  | { ok: false; message: string };

const PAGE_SPEED = "https://pagespeed.web.dev/analysis?url=";

/** Reads the address the visitor typed. It does not open the site. */
export function checkWebsiteAddress(raw: string): WebsiteCheck {
  const typed = raw.trim();
  if (!typed) return { ok: false, message: "Enter a website address." };
  if (typed.length > 500) return { ok: false, message: "That address is too long to check here." };
  if (/\s/.test(typed)) return { ok: false, message: "A website address should not contain spaces." };

  const hasScheme = /^https?:\/\//i.test(typed);
  let url: URL;
  try {
    url = new URL(hasScheme ? typed : `https://${typed}`);
  } catch {
    return { ok: false, message: "That doesn’t look like a website address. Try something like example.co.uk." };
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return { ok: false, message: "Use a normal web address, starting with http:// or https://." };
  }
  const host = url.hostname.toLowerCase();
  if (!host.includes(".") || host.startsWith(".") || host.endsWith(".") || host.includes("..")) {
    return { ok: false, message: "That address needs a proper site name, such as yourbusiness.co.uk." };
  }

  const address = url.toString();
  const facebook = host === "facebook.com" || host.endsWith(".facebook.com") || host === "fb.com" || host.endsWith(".fb.com") || host === "m.facebook.com";
  return {
    ok: true,
    typed,
    address,
    host,
    pagespeedUrl: `${PAGE_SPEED}${encodeURIComponent(address)}`,
    https: hasScheme ? (url.protocol === "https:" ? "yes" : "no") : "not-typed",
    facebook,
  };
}
