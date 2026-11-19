/**
 * Pricing-page illustration. Reads the website prices already printed on the page.
 * No price figures live in this file.
 */
export function yearlyPence(jobPounds, extraJobs) {
  if (!Number.isFinite(jobPounds) || !Number.isFinite(extraJobs)) return null;
  if (jobPounds < 0 || extraJobs < 0) return null;
  const jobPence = Math.round(jobPounds * 100);
  const total = Math.round(jobPence * extraJobs);
  if (!Number.isSafeInteger(total)) return null;
  return total;
}

export function formatPence(pence) {
  const hasPence = pence % 100 !== 0;
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: hasPence ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(pence / 100);
}

export function readLivePrices(doc) {
  const cards = doc.querySelectorAll("[data-live-price-card]");
  const lines = [];
  cards.forEach((card) => {
    const name = (card.getAttribute("data-live-name") || "").trim();
    const text = (selector) => {
      const node = card.querySelector(selector);
      return node ? node.textContent.replace(/\s+/g, " ").trim() : "";
    };
    const price = text("[data-live-price]");
    const detail = text("[data-live-detail]");
    const total = text("[data-live-total]");
    const headline = [price, detail].filter(Boolean).join(", ");
    if (!name && !headline && !total) return;
    const lead = name && headline ? `${name}: ${headline}` : name || headline;
    lines.push(total ? `${lead}. ${total}.` : `${lead}.`);
  });
  return lines;
}

function parseField(input) {
  if (!input || input.value.trim() === "") return null;
  return Number(input.value);
}

function element(doc, id) {
  const node = doc.getElementById(id);
  return node instanceof doc.defaultView.HTMLElement ? node : null;
}

export function initJobWorth(doc) {
  const root = element(doc, "job-worth");
  const jobInput = element(doc, "job-value");
  const jobsInput = element(doc, "extra-jobs");
  const yearly = element(doc, "yearly-value");
  const prices = element(doc, "live-prices");
  if (!root || !jobInput || !jobsInput || !yearly || !prices) return;

  const paintPrices = () => {
    const list = element(doc, "live-prices");
    if (!list) return;
    list.replaceChildren();
    const lines = readLivePrices(doc);
    const message = lines.length === 0 ? ["The website prices could not be read from this page."] : lines;
    message.forEach((line) => {
      const item = doc.createElement("li");
      item.textContent = line;
      list.appendChild(item);
    });
  };

  const paintYearly = () => {
    const output = element(doc, "yearly-value");
    const valueField = element(doc, "job-value");
    const jobsField = element(doc, "extra-jobs");
    if (!output || !valueField || !jobsField) return;
    const jobPounds = parseField(valueField);
    const extraJobs = parseField(jobsField);
    if (jobPounds === null) {
      output.textContent = "Enter an average job value.";
      return;
    }
    if (extraJobs === null) {
      output.textContent = "Enter how many extra jobs.";
      return;
    }
    const pence = yearlyPence(jobPounds, extraJobs);
    output.textContent = pence === null ? "Enter a job value and a number of extra jobs." : `${formatPence(pence)} a year`;
  };

  if (root.dataset.ready !== "true") {
    doc.addEventListener("input", (event) => {
      const target = event.target;
      if (!(target instanceof doc.defaultView.Element) || !target.closest("#job-worth")) return;
      paintYearly();
    });
    doc.addEventListener("submit", (event) => {
      const target = event.target;
      if (!(target instanceof doc.defaultView.HTMLFormElement) || !target.closest("#job-worth")) return;
      event.preventDefault();
      paintYearly();
    });
    root.dataset.ready = "true";
  }

  paintPrices();
  paintYearly();
  doc.documentElement.classList.add("js");
  root.classList.add("is-ready");
}

export function bootJobWorth(doc) {
  let painting = false;
  const boot = () => {
    if (painting) return;
    painting = true;
    initJobWorth(doc);
    painting = false;
  };
  boot();
  const root = doc.getElementById("job-worth");
  if (!root || root.dataset.watching === "true") return;
  root.dataset.watching = "true";
  new MutationObserver(() => {
    if (painting) return;
    const list = doc.getElementById("live-prices");
    const ready = root.classList.contains("is-ready") && list !== null && list.childElementCount > 0;
    if (!ready) boot();
  }).observe(root, { attributes: true, childList: true, subtree: true, attributeFilter: ["class", "hidden"] });
}
