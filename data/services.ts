export type Service = {
  id: string;
  name: string;
  eyebrow: string;
  standard: string;
  offer: string;
  description: string;
  idealFor: string;
  features: string[];
  delivery: string;
  cta: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "starter",
    name: "Starter",
    eyebrow: "Digital storefront",
    standard: "$275",
    offer: "$250",
    description:
      "A polished, professional online presence that makes it easy for customers to find and contact you.",
    idealFor: "Barbershops, salons and small businesses getting online.",
    features: [
      "Up to 4 pages or equivalent landing-page sections",
      "Custom, mobile-friendly design",
      "WhatsApp, contact details and Google Maps",
      "Basic technical and on-page SEO",
      "Sitemap and Search Console setup",
      "Image optimisation and mobile performance testing",
      "Core Web Vitals optimisation and SSL deployment",
      "Two revision rounds",
    ],
    delivery: "5–8 working days",
    cta: "Start My Website",
  },
  {
    id: "growth",
    name: "Growth",
    eyebrow: "Lead generation",
    standard: "$525",
    offer: "$475",
    description:
      "A conversion-focused website built to turn visits into organised enquiries, bookings or order requests.",
    idealFor:
      "Restaurants, service businesses and suppliers ready to grow enquiries.",
    features: [
      "Up to 7 pages with conversion-focused design",
      "WhatsApp ordering, booking or quotation enquiries",
      "Forms and suitable external service integrations",
      "Enhanced SEO and local SEO setup",
      "Structured data where appropriate",
      "GA4, conversion-event tracking and Search Console",
      "Core Web Vitals testing and optimisation",
      "Deployment, form validation and two revision rounds",
    ],
    delivery: "8–14 working days",
    cta: "Grow My Business",
    featured: true,
  },
  {
    id: "operations",
    name: "Operations",
    eyebrow: "Custom business systems",
    standard: "From $950",
    offer: "From $875",
    description:
      "A tailored website or application that connects customer-facing experiences with your internal workflow.",
    idealFor:
      "Growing businesses with custom data, process or admin requirements.",
    features: [
      "Custom website and workflow development",
      "Database-backed orders, quotes or enquiry records",
      "Server-side validation and error handling",
      "Appropriate access controls and security measures",
      "WhatsApp integration",
      "Optional administrative dashboard",
      "SEO and analytics for public pages",
      "Testing, performance optimisation, deployment and documentation",
    ],
    delivery: "Approximately 3–6 weeks",
    cta: "Discuss a Custom System",
  },
];

export const maintenance = [
  {
    name: "Essential Care",
    price: "$15",
    period: "/month",
    items: [
      "Basic website checks",
      "Contact form and enquiry-path testing",
      "Up to 30 minutes of small changes each month",
    ],
  },
  {
    name: "Growth Care",
    price: "$35",
    period: "/month",
    items: [
      "Analytics review",
      "Performance checks",
      "Up to 90 minutes of routine changes each month",
    ],
  },
  {
    name: "Operations Care",
    price: "$75",
    period: "/month",
    items: [
      "Application health checks",
      "Database backup and restore checks",
      "Security maintenance",
      "Up to 2 hours of routine maintenance each month",
    ],
  },
];
