import { CONTACT, FORM_AJAX_ENDPOINT } from "../config.ts";

/** FormSubmit often answers in about 18s and sometimes never finishes. Give up so the page can offer email. */
export const REVIEW_SUBMIT_TIMEOUT_MS = 20_000;

export function buildReviewMailto(
  fields: { name: string; business: string; rating: string; review: string },
  email = CONTACT.email,
): string {
  const name = fields.name.trim();
  const business = fields.business.trim();
  const review = fields.review.trim();
  const score = ratingAsScore(fields.rating);
  const subject = `Review for WholeLottaSites from ${name}`;
  const body = [
    `Name: ${name}`,
    `Business: ${business}`,
    `Rating: ${score}`,
    `Review: ${review}`,
  ].join("\n");
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function ratingAsScore(rating: string): string {
  const match = /^(\d+)/.exec(rating.trim());
  const stars = match?.[1];
  return stars ? `${stars}/5` : rating.trim();
}

/**
 * POST the review to FormSubmit without navigating. Resolves false on timeout,
 * network failure, or any response that is not a FormSubmit success.
 */
export async function submitReview(
  payload: Record<string, string>,
  options: {
    endpoint?: string;
    timeoutMs?: number;
    fetchImpl?: typeof fetch;
  } = {},
): Promise<boolean> {
  const endpoint = options.endpoint ?? FORM_AJAX_ENDPOINT;
  const timeoutMs = options.timeoutMs ?? REVIEW_SUBMIT_TIMEOUT_MS;
  const fetchImpl = options.fetchImpl ?? fetch;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!response.ok) return false;
    let data: unknown;
    try {
      data = await response.json();
    } catch {
      return false;
    }
    return isFormSubmitSuccess(data);
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

function isFormSubmitSuccess(data: unknown): boolean {
  if (!data || typeof data !== "object") return false;
  const success = (data as Record<string, unknown>)["success"];
  return success === true || success === "true";
}
