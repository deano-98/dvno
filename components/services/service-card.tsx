import { ArrowUpRight, Check } from "lucide-react";
import type { Service } from "@/data/services";
import { AnalyticsLink } from "@/components/ui/analytics-link";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      className={`service-card ${service.featured ? "service-card-featured" : ""}`}
    >
      {/* Service category and featured-plan indicator. */}
      <div className="service-card-top">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          {service.eyebrow}
        </span>
        {service.featured ? (
          <span className="popular-label">Most requested</span>
        ) : null}
      </div>
      <h3>{service.name}</h3>
      <p className="service-description">{service.description}</p>
      {/* Offer and standard pricing for the service. */}
      <div className="price-row">
        {/* Introductory price. */}
        <div>
          <span className="price-label">from</span>
          <strong>{service.standard}</strong>
        </div>
        {/* Standard price for comparison. */}
        {/* <div className="standard-price">
          <span>Standard</span>
          <s>{service.standard}</s>
        </div> */}
      </div>
      <p className="ideal-for">{service.idealFor}</p>
      <ul className="feature-list">
        {service.features.map((feature) => (
          <li key={feature}>
            <Check size={15} />
            {feature}
          </li>
        ))}
      </ul>
      {/* Delivery estimate and link to enquire about the service. */}
      <div className="service-card-footer">
        <span>
          <span className="delivery-dot" />
          {service.delivery}
        </span>
        <AnalyticsLink
          href={`/contact?service=${service.id}`}
          className="button button-primary"
          eventName="service_click"
          eventParameters={{
            service: service.id,
            service_name: service.name,
            location: "service_card",
            action: "enquire",
          }}
        >
          {service.cta}
          <ArrowUpRight size={16} />
        </AnalyticsLink>
      </div>
    </article>
  );
}
