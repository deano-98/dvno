import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ArrowUpRight, Github, MessageCircle } from 'lucide-react';
import { ContactForm } from '@/components/contact/contact-form';
import { siteConfig, whatsappUrl } from '@/lib/site';

export const metadata: Metadata = { title: 'Contact', description: 'Discuss a website, customer enquiry workflow or custom business system with Dean Chap.' };

function ContactFormFallback() { return <div className="contact-form form-loading"><p>Loading project enquiry form…</p></div>; }

export default function ContactPage() {
  return <><section className="contact-hero section-wrap"><div className="contact-hero-copy"><span className="eyebrow"><span className="eyebrow-dot" />CONTACT / START A CONVERSATION</span><h1>Every good solution<br />starts with a <em>question.</em></h1><p>Tell me what you&apos;re trying to improve. It might be a new website, a smoother way to manage enquiries, or a custom tool to take friction out of daily work.</p><div className="contact-direct-links"><a href={whatsappUrl('Hi Dean, I would like to discuss a project.')} target="_blank" rel="noreferrer" className="contact-direct-primary"><MessageCircle size={18} /><span><strong>Message me on WhatsApp</strong><small>Usually the quickest way to start</small></span><ArrowUpRight size={17} /></a><a href={siteConfig.github} target="_blank" rel="noreferrer" className="contact-direct-secondary"><Github size={18} /><span><strong>View GitHub</strong><small>Code and development work</small></span><ArrowUpRight size={17} /></a></div><div className="contact-response-note"><span className="availability-dot" />No pressure, no hard sell — just a practical conversation.</div></div><div className="contact-form-wrap"><Suspense fallback={<ContactFormFallback />}><ContactForm /></Suspense></div></section><section className="contact-bottom section-wrap"><div><span className="eyebrow"><span className="eyebrow-dot" />WHAT I CAN HELP WITH</span><h2>Bring the problem.<br /><em>We&apos;ll work out the solution.</em></h2></div><div className="contact-bottom-list"><p><span>01</span> A website that explains your offer and generates enquiries.</p><p><span>02</span> An ordering, booking or quotation flow that suits your customers.</p><p><span>03</span> A database, integration or custom tool that helps your team work better.</p></div></section></>;
}
