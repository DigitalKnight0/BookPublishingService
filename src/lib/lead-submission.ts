export type LeadFields = {
  name: string;
  email: string;
  phone_number: string;
  service_name: string;
  message: string;
};

const TRACKED_LEAD_ENDPOINT =
  "https://crm.authorssale.com/api/lead/zwxkorMzYhca8d9BxxgCSNpxfZbJBv22";
const LEAD_ENDPOINT =
  "https://crm.authorssale.com/api/lead/ql6IFQEIaoNFAhJkxN0dSDV2cNfJ7r2y";

function getQueryParam(name: string) {
  return new URLSearchParams(window.location.search).get(name);
}

function getCookie(name: string) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = document.cookie.match(
    new RegExp(`(^|;)\\s*${escapedName}\\s*=\\s*([^;]+)`),
  );

  return match ? decodeURIComponent(match[2]) : null;
}

function getTrackingData() {
  return {
    page_url: window.location.href,
    referrer_url: document.referrer || null,
    utm_source: getQueryParam("utm_source"),
    utm_medium: getQueryParam("utm_medium"),
    utm_campaign: getQueryParam("utm_campaign"),
    utm_term: getQueryParam("utm_term"),
    utm_content: getQueryParam("utm_content"),
    fbclid: getQueryParam("fbclid"),
    gclid: getQueryParam("gclid"),
    fbp: getCookie("_fbp"),
    fbc: getCookie("_fbc"),
  };
}

async function postLead(url: string, body: Record<string, unknown>) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Lead endpoint returned ${response.status}`);
  }
}

export async function submitLead(fields: LeadFields) {
  await Promise.all([
    postLead(TRACKED_LEAD_ENDPOINT, {
      ...fields,
      ...getTrackingData(),
    }),
    postLead(LEAD_ENDPOINT, fields),
  ]);
}

export function getLeadFields(
  form: HTMLFormElement,
  serviceName: string,
): LeadFields {
  const formData = new FormData(form);

  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone_number: String(formData.get("phone") ?? "").trim(),
    service_name: serviceName,
    message: String(formData.get("message") ?? "").trim(),
  };
}
