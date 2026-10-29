export type AnalyticsEventParameters = {
  whatsapp_click: {
    location: string;
    service?: string;
    project?: string;
  };
  navigation_click: {
    item: string;
    location: string;
    destination: string;
  };
  project_click: {
    project: string;
    project_name?: string;
    location: string;
    action: "card" | "details" | "live_demo" | "source_code";
  };
  service_click: {
    service: string;
    service_name?: string;
    location: string;
    action: "view_details" | "select" | "enquire";
  };
  contact_click: {
    location: string;
    service?: string;
    project?: string;
  };
  email_click: { location: string };
  phone_click: { location: string };
  form_start: { form_name: string };
  form_submit: { form_name: string };
  generate_lead: { form_name: string; service?: string };
  outbound_click: {
    destination_type: "other";
    location: string;
  };
  social_click: {
    item: string;
    location: string;
  };
  project_filter: { filter: string };
  faq_toggle: { item: string; action: "open" | "close" };
};

export type AnalyticsEventName = keyof AnalyticsEventParameters;

type Gtag = (
  command: "event",
  eventName: AnalyticsEventName,
  parameters: Record<string, string>,
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export function trackEvent<T extends AnalyticsEventName>(
  eventName: T,
  parameters: AnalyticsEventParameters[T],
) {
  if (typeof window === "undefined") return;

  try {
    window.gtag?.("event", eventName, {
      ...parameters,
      page_path: window.location.pathname,
    });
  } catch {
    // Analytics failures must not interrupt the interaction.
  }
}