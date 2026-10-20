import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import type { Service } from '@/data/services';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={`service-card ${service.featured ? 'service-card-featured' : ''}`}>
      <div className="service-card-top"><span className="eyebrow"><span className="eyebrow-dot" />{service.eyebrow}</span>{service.featured ? <span className="popular-label">Most requested</span> : null}</div>
      <h3>{service.name}</h3><p className="service-description">{service.description}</p>
      <div className="price-row"><div><span className="price-label">Founding-client offer</span><strong>{service.offer}</strong></div><div className="standard-price"><span>Standard</span><s>{service.standard}</s></div></div>
      <p className="ideal-for">{service.idealFor}</p>
      <ul className="feature-list">{service.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
      <div className="service-card-footer"><span><span className="delivery-dot" />{service.delivery}</span><Link href={`/contact?service=${service.id}`} className="button button-primary">{service.cta}<ArrowUpRight size={16} /></Link></div>
    </article>
  );
}
