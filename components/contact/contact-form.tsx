"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

const services = [
  { value: "starter", label: "Starter — Digital storefront" },
  { value: "growth", label: "Growth — Lead generation" },
  { value: "operations", label: "Operations — Custom system" },
  { value: "unsure", label: "Not sure yet / Something else" },
];

export function ContactForm() {
  const params = useSearchParams();
  const requestedService = params.get("service") || "";
  const [status, setStatus] = useState<"idle" | "sending" | "ready" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const formStarted = useRef(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    trackEvent("form_submit", { form_name: "contact_enquiry" });
    setStatus("sending");
    setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "Please check the form and try again.");
      setStatus("ready");
      const selectedService = ["starter", "growth", "operations"].find(
        (service) => service === data.service,
      );
      trackEvent("whatsapp_click", {
        location: "contact_form",
        ...(selectedService ? { service: selectedService } : {}),
      });
      // The visitor explicitly continues in WhatsApp; the site does not claim a message was sent.
      window.location.assign(result.whatsappUrl);
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={onSubmit}
      onFocusCapture={() => {
        if (formStarted.current) return;
        formStarted.current = true;
        trackEvent("form_start", { form_name: "contact_enquiry" });
      }}
    >
      {/* Enquiry form heading and brief expectation-setting copy. */}
      <div className="form-heading">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          PROJECT ENQUIRY
        </span>
        <h2>
          Tell me a little
          <br />
          about the work.
        </h2>
        <p>No pressure or hard sell. Just a useful first conversation.</p>
      </div>
      {/* Grouped fields for the visitor's contact and project details. */}
      <div className="form-grid">
        {/* Name field. */}
        <div className="form-field">
          <label htmlFor="name">
            Your name <span>*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={80}
            placeholder="e.g. Tadiwa Moyo"
          />
        </div>
        {/* Optional business name field. */}
        <div className="form-field">
          <label htmlFor="business">
            Business name <span className="optional">Optional</span>
          </label>
          <input
            id="business"
            name="business"
            autoComplete="organization"
            maxLength={100}
            placeholder="Your business"
          />
        </div>
        {/* Preferred contact method field. */}
        <div className="form-field">
          <label htmlFor="contact">
            Email or preferred contact <span>*</span>
          </label>
          <input
            id="contact"
            name="contact"
            required
            minLength={3}
            maxLength={120}
            placeholder="Email or phone number"
          />
        </div>
        {/* Service selection field. */}
        <div className="form-field">
          <label htmlFor="service">
            What do you need? <span>*</span>
          </label>
          <select
            id="service"
            name="service"
            defaultValue={
              services.some((s) => s.value === requestedService)
                ? requestedService
                : ""
            }
            required
            onChange={(event) => {
              if (event.target.value === "unsure") return;
              trackEvent("service_click", {
                service: event.target.value,
                location: "contact_form",
                action: "select",
              });
            }}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>
        {/* Project description field spanning the form grid. */}
        <div className="form-field form-field-full">
          <label htmlFor="message">
            What would you like to improve? <span>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={1500}
            rows={5}
            placeholder="A few lines about your business, the problem, or the idea..."
          />
        </div>
        {/* Honeypot humans should leave empty; the API rejects filled values. */}
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      {/* Privacy note and submission action. */}
      <div className="form-bottom">
        <p>Your details are used only to respond to this enquiry.</p>
        <button
          className="button button-primary form-submit"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            <>
              Preparing <LoaderCircle className="spin" size={16} />
            </>
          ) : (
            <>
              Continue in WhatsApp <ArrowUpRight size={16} />
            </>
          )}
        </button>
      </div>
      {status === "ready" ? (
        <p className="form-feedback success-feedback" role="status">
          <CheckCircle2 size={17} /> Your enquiry is ready. Complete the message
          in WhatsApp to send it.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="form-feedback error-feedback" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
