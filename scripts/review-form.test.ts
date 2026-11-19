import assert from "node:assert/strict";
import { createServer, type Server } from "node:http";
import { once } from "node:events";
import test from "node:test";
import {
  REVIEW_SUBMIT_TIMEOUT_MS,
  buildReviewMailto,
  submitReview,
} from "../src/lib/review-form.ts";

const AJAX = "https://formsubmit.co/ajax/chris@wholelottasites.co.uk";

const payload = {
  _subject: "New website review – WholeLottaSites",
  _template: "table",
  _captcha: "false",
  _next: "https://wholelottasites.co.uk/leave-a-review/#thanks",
  form: "Leave a review",
  _honey: "",
  name: "Ada & Co",
  business: "Analytical Engines",
  website: "engines.example",
  rating: "5 out of 5",
  review: "Line one\nLine two",
  consent: "Yes — I’m happy for my review to be shown on WholeLottaSites",
};

async function listen(server: Server): Promise<number> {
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("no port");
  return address.port;
}

test("mailto uses the review subject and URL-encodes name, business, rating and review", () => {
  const href = buildReviewMailto({
    name: "Ada & Co",
    business: "Analytical Engines",
    rating: "4 out of 5",
    review: "Line one\nLine two & more",
  });
  const subject = "Review for WholeLottaSites from Ada & Co";
  const body = [
    "Name: Ada & Co",
    "Business: Analytical Engines",
    "Rating: 4/5",
    "Review: Line one\nLine two & more",
  ].join("\n");
  assert.equal(href, `mailto:chris@wholelottasites.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
});

test("the in-page submit gives up after 20 seconds", () => {
  assert.equal(REVIEW_SUBMIT_TIMEOUT_MS, 20_000);
});

test("posts the existing fields as JSON to FormSubmit's ajax endpoint", async () => {
  let seen: { url: string; method: string; accept: string | null; type: string | null; body: unknown; signal: boolean } | undefined;
  const fetchImpl: typeof fetch = async (input, init) => {
    seen = {
      url: String(input),
      method: init?.method ?? "",
      accept: new Headers(init?.headers).get("accept"),
      type: new Headers(init?.headers).get("content-type"),
      body: JSON.parse(String(init?.body)),
      signal: Boolean(init?.signal),
    };
    return new Response(JSON.stringify({ success: "true", message: "The form was submitted successfully." }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  };

  const ok = await submitReview(payload, { fetchImpl });
  assert.equal(ok, true);
  assert.ok(seen);
  assert.equal(seen.url, AJAX);
  assert.equal(seen.method, "POST");
  assert.equal(seen.accept, "application/json");
  assert.equal(seen.type, "application/json");
  assert.equal(seen.signal, true);
  assert.deepEqual(seen.body, payload);
});

test("a non-success response is a failure", async () => {
  const fetchImpl: typeof fetch = async () => new Response(JSON.stringify({ success: "false" }), { status: 200 });
  assert.equal(await submitReview(payload, { fetchImpl }), false);

  const httpError: typeof fetch = async () => new Response("nope", { status: 500 });
  assert.equal(await submitReview(payload, { fetchImpl: httpError }), false);

  const notJson: typeof fetch = async () => new Response("<html>reset</html>", { status: 200 });
  assert.equal(await submitReview(payload, { fetchImpl: notJson }), false);
});

test("an unreachable endpoint fails without throwing", async () => {
  const server = createServer();
  const port = await listen(server);
  await new Promise<void>((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));

  const started = Date.now();
  const ok = await submitReview(payload, { endpoint: `http://127.0.0.1:${port}/`, timeoutMs: 5_000 });
  assert.equal(ok, false);
  assert.ok(Date.now() - started < 4_000, "connection refused should fail before the timeout");
});

test("a hanging endpoint is aborted at the timeout", async () => {
  const server = createServer(() => {
    /* accept the socket and never respond */
  });
  const port = await listen(server);
  const started = Date.now();
  try {
    const ok = await submitReview(payload, { endpoint: `http://127.0.0.1:${port}/`, timeoutMs: 300 });
    const elapsed = Date.now() - started;
    assert.equal(ok, false);
    assert.ok(elapsed >= 250, `gave up too soon (${elapsed}ms)`);
    assert.ok(elapsed < 2_000, `waited too long (${elapsed}ms)`);
  } finally {
    server.closeAllConnections();
    server.close();
  }
});
