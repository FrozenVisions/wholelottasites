import assert from "node:assert/strict";
import test from "node:test";
import { checkWebsiteAddress } from "../src/lib/website-checker.ts";

test("https is yes only when the typed address says so", () => {
  const result = checkWebsiteAddress("https://example.co.uk/contact");
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.https, "yes");
  assert.equal(result.host, "example.co.uk");
  assert.equal(result.pagespeedUrl, "https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fexample.co.uk%2Fcontact");
});

test("http is reported as not https", () => {
  const result = checkWebsiteAddress("http://example.co.uk");
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.https, "no");
});

test("a bare host is not treated as proof of https", () => {
  const result = checkWebsiteAddress("example.co.uk");
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.https, "not-typed");
  assert.match(result.pagespeedUrl, /^https:\/\/pagespeed\.web\.dev\/analysis\?url=/);
});

test("a facebook host is flagged from the address alone", () => {
  const result = checkWebsiteAddress("https://www.facebook.com/some-page");
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.facebook, true);
});

test("rejects an empty address and a non-web scheme", () => {
  assert.equal(checkWebsiteAddress("  ").ok, false);
  assert.equal(checkWebsiteAddress("javascript:alert(1)").ok, false);
});
