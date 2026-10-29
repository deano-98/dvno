"use client";

import { CircleHelp } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type Faq = { id: string; question: string; answer: string };

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <details
          key={faq.id}
          className="faq-item"
          onToggle={(event) =>
            trackEvent("faq_toggle", {
              item: faq.id,
              action: event.currentTarget.open ? "open" : "close",
            })
          }
        >
          <summary>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {faq.question}
            <CircleHelp size={17} />
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}