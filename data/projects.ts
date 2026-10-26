export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  url?: string;
  status:
    | "In development"
    | "Private"
    | "Architecture work"
    | "Implementation experience"
    | "Live"
  tags: string[];
  stack: string[];
  accent: "navy" | "copper" | "blue" | "sage";
  problem: string;
  solution: string;
  howItWorks: string;
  success: string[];
  note?: string;
  outline: string;
  github?: string; // Optional GitHub repository URL for the project
};

export const projects: Project[] = [
  {
    slug: "gaucho-ordering",
    number: "01",
    title: "Gaucho",
    category: "Restaurant ordering experience",
    github: "https://github.com/deano-98/Gaucho-web-app",
    summary:
      "A mobile-first restaurant website concept connecting menu discovery with a lightweight order workflow.",
    status: "Live",
    url: "https://gauchos-web-app.vercel.app/",
    tags: ["Web App", "Database", "WhatsApp", "API", "Responsive Design", "Lead Generation", "SEO", "E-commerce"],
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Zod",
      "Resend",
    ],
    accent: "copper",
    problem:
      "Restaurant customers need to find menu items quickly and understand how to place an order. A phone-first process can leave staff repeating details and makes it harder to keep a consistent record of requests.",
    solution:
      "A responsive restaurant experience with a browsable menu, basket interaction, order form, WhatsApp handoff, and a planned database record for submitted orders. The interface is designed around the customer journey rather than a static menu alone.",
    howItWorks:
      "The Next.js App Router renders the site, React state manages the basket, Zod and React Hook Form validate customer input, and Prisma connects the order workflow to PostgreSQL. WhatsApp supports direct customer communication, while an email integration is available for notifications when configured. Idempotency and server-side validation help make order submission more reliable.",
    success: [
      "Completed order enquiries",
      "Basket-to-enquiry conversion",
      "Form validation and submission error rate",
      "Time staff spend clarifying order details",
    ],
    note: "This project is in development.",
    outline: "Restaurant ordering experience with a browsable menu, basket interaction, order form, WhatsApp handoff, and a planned database record for submitted orders. The interface is designed around the customer journey rather than a static menu alone.",
  },
  {
    slug: "reeldon-timber",
    number: "02",
    title: "Reeldon",
    category: "Timber supplier website",
    github: "https://github.com/deano-98/Reeldon_web_app",
    summary:
      "A responsive product discovery and quotation experience for an established timber manufacturer and regional supplier.",
    status: "Live",
    url: "https://reeldon-demo.vercel.app/",
    tags: ["Web App", "Product Catalogue", "Lead Generation", "Responsive Design"],
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Lucide React",
    ],
    accent: "copper",
    problem:
      "Timber customers need to understand what a supplier offers, from structural timber to mouldings, doors, decking, and flooring. Without a clear online presentation, discovering relevant products and knowing how to request a quotation can require additional effort.",
    solution:
      "A responsive business website that presents Reeldon's products, company background, quality standards, and supply capabilities in a structured, customer-focused experience. Clear contact and quotation calls to action help prospective customers move from product discovery to a direct enquiry.",
    howItWorks:
      "Built with Next.js 16, TypeScript, and Tailwind CSS, the website uses reusable components and responsive layouts to organise product information, communicate the company's capabilities, and guide visitors towards quotation enquiries through direct contact channels.",
    success: [
      "Product and category engagement",
      "Quotation enquiries generated",
      "Enquiry conversion rate",
      "Customer understanding of available products",
    ],
    note:
      "The website is still in production. Quotation submission is not yet connected to a confirmed backend or CRM workflow, and no business performance results are claimed.",
    outline: "Responsive business website presenting Reeldon's products, company background, quality standards, and supply capabilities in a structured, customer-focused experience. Clear contact and quotation calls to action help prospective customers move from product discovery to a direct enquiry.",
  },
  {
    slug: "ul-transport-services",
    number: "03",
    title: "UL Transport Services",
    category: "School transport website",
    github: "https://github.com/deano-98/Uncle-Lenny-web-app",
    summary:
      "A service-focused website helping parents and schools understand transport offerings and enquire directly.",
    status: "Live",
    url: "https://uncle-lenny-demo.vercel.app/",
    tags: ["Web App", "Lead Generation", "WhatsApp", "Analytics", "SEO"],
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Lucide React",
    ],
    accent: "copper",
    problem:
      "Parents and schools need clear information about school transport services, vehicle fleets, and safety practices before making an enquiry. When this information is difficult to find, potential customers may hesitate or need to contact the business simply to understand its offering.",
    solution:
      "A responsive website organised around services, school partnerships, fleet information, safety, and frequently asked questions. Strategically placed WhatsApp calls to action give visitors a direct way to discuss transport requirements with the business.",
    howItWorks:
      "Built with Next.js, React, and Tailwind CSS, the website structures service information into dedicated sections and provides WhatsApp enquiry links at key decision points. WhatsApp click events are tracked through the project's analytics utilities, supporting measurement of visitor engagement with enquiry calls to action.",
    success: [
      "WhatsApp enquiries generated",
      "Clicks on individual enquiry points",
      "Visitor engagement with service information",
      "Enquiry conversion rate",
    ],
    note:
      "The website includes WhatsApp enquiry pathways and click-event tracking. No verified enquiry volumes, conversion improvements, or business results are claimed.",
    outline: "Responsive website organised around services, school partnerships, fleet information, safety, and frequently asked questions. Strategically placed WhatsApp calls to action give visitors a direct way to discuss transport requirements with the business.",
  },
  {
    slug: "serverless-contact-form",
    number: "04",
    title: "Serverless contact pipeline",
    category: "Cloud infrastructure",
    // github: "https://github.com/deano-98/Uncle-Lenny-web-app",
    summary:
      "A low-maintenance contact-form architecture designed to accept enquiries and deliver email notifications securely.",
    status: "Architecture work",
    tags: ["Cloud", "API", "Automation", "Security"],
    stack: [
      "AWS API Gateway",
      "AWS Lambda",
      "Amazon SES",
      "Terraform",
      "GitHub Actions",
    ],
    accent: "blue",
    problem:
      "A business contact form needs to be dependable without exposing credentials in browser code or requiring a continuously running server.",
    solution:
      "A serverless design using an HTTP API, Lambda processing, and SES for email delivery, with infrastructure managed as code and CI/CD checks planned into the workflow.",
    howItWorks:
      "A browser submits validated form data to API Gateway. Lambda performs server-side checks and passes an approved notification to SES. Terraform defines infrastructure, while GitHub Actions can run repeatable quality checks and deployment steps. Environment-specific secrets stay outside the public client bundle.",
    success: [
      "Successful delivery rate",
      "Time from submission to notification",
      "Spam and invalid-submission rate",
      "Monthly infrastructure cost",
    ],
    note: "Presented as architecture and implementation work; deployment and delivery metrics must be verified in the target AWS account.",
    outline: "Serverless contact-form architecture using an HTTP API, Lambda processing, and SES for email delivery, with infrastructure managed as code and CI/CD checks planned into the workflow.",
  },
  {
    slug: "shopify-operations-automation",
    number: "05",
    title: "Commerce operations automation",
    category: "Business process automation",
    // github: "https://github.com/deano-98/Uncle-Lenny-web-app",
    summary:
      "Python and spreadsheet-based tooling to reduce repetitive Shopify catalogue and operations work.",
    status: "Implementation experience",
    tags: ["Automation", "API", "Data"],
    stack: ["Python", "Shopify APIs", "Excel", "REST APIs"],
    accent: "sage",
    problem:
      "Product and inventory updates can become repetitive and error-prone when information is spread across spreadsheets and a commerce platform.",
    solution:
      "A workflow-oriented approach using Python and spreadsheet data to support product, inventory, and API-driven updates while making the data transformation steps more repeatable.",
    howItWorks:
      "Structured spreadsheet data is checked and transformed before being sent to platform APIs. A production version should include dry-run mode, row-level validation, API error handling, retry rules, and a clear audit log so operators can review changes before and after execution.",
    success: [
      "Time required per catalogue update",
      "Validation error rate",
      "Number of manual steps removed",
      "Failed API updates requiring intervention",
    ],
    note: "Describes relevant contract development experience; specific savings and throughput figures are not available.",
    outline: "Python and spreadsheet-based tooling to reduce repetitive Shopify catalogue and operations work.",
  },
  {
    slug: "ronix",
    number: "06",
    title: "Ronix",
    category: "Tools supplier ",
    github: "https://github.com/deano-98/Tool-Supplier-web-app",
    summary:
      "A responsive product catalogue for a tools supplier, featuring a headless CMS for product management and a quotation workflow that captures customer enquiries without requiring online payments.",
    status: "In development",
    tags: ["Web App", "E-commerce", "Content Management", "CMS", "WhatsApp", "SEO"],
    stack: [
       "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Lucide React",
      "Sanity CMS",
    ],
    accent: "copper",
    problem:
      "Customers need an easy way to browse a tools supplier's products and request a quote. Staff also need a way to keep product information up to date, without requiring a full online checkout and payment system.",
    solution:
      "A responsive product catalogue and quotation workflow where customers can browse tools and submit quote requests without a payment gateway. A headless CMS lets staff maintain product information, with a database record for enquiries planned as part of the workflow.",
    howItWorks:
      "The Next.js frontend presents product information managed by staff in Sanity CMS. Customers can browse the catalogue and start a quotation enquiry, with WhatsApp supporting contact and a database record for submitted enquiries planned. The workflow is focused on product discovery and quotes rather than online payment.",
    success: [
      "Product catalogue engagement",
      "Quotation requests submitted",
      "Product-to-enquiry conversion rate",
      "Time staff spend maintaining product information",
    ],
    note:
      "The project is currently in development. The enquiry database record is planned, and no payment gateway or verified business results are claimed.",
    outline:
      "A responsive tools catalogue with a quote-request workflow, a Sanity CMS for staff-managed product information, and a planned database record for submitted enquiries. Customers can request quotes without completing an online payment.",
  },
];

export const projectFilters = [
  "All",
  "Web App",
  "Database",
  "Cloud",
  "WhatsApp",
  "API",
  "Automation",
];
