export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  status: 'In development' | 'Concept' | 'Architecture work' | 'Implementation experience';
  tags: string[];
  stack: string[];
  accent: 'navy' | 'copper' | 'blue' | 'sage';
  problem: string;
  solution: string;
  howItWorks: string;
  success: string[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: 'gaucho-ordering', number: '01', title: 'Gaucho', category: 'Restaurant ordering experience',
    summary: 'A mobile-first restaurant website concept connecting menu discovery with a lightweight order workflow.',
    status: 'In development', tags: ['Web App', 'Database', 'WhatsApp', 'API'],
    stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Zod', 'Resend'], accent: 'copper',
    problem: 'Restaurant customers need to find menu items quickly and understand how to place an order. A phone-first process can leave staff repeating details and makes it harder to keep a consistent record of requests.',
    solution: 'A responsive restaurant experience with a browsable menu, basket interaction, order form, WhatsApp handoff, and a planned database record for submitted orders. The interface is designed around the customer journey rather than a static menu alone.',
    howItWorks: 'The Next.js App Router renders the site, React state manages the basket, Zod and React Hook Form validate customer input, and Prisma connects the order workflow to PostgreSQL. WhatsApp supports direct customer communication, while an email integration is available for notifications when configured. Idempotency and server-side validation help make order submission more reliable.',
    success: ['Completed order enquiries', 'Basket-to-enquiry conversion', 'Form validation and submission error rate', 'Time staff spend clarifying order details'],
    note: 'This project is in development. No live business results or production order volume are claimed.'
  },
  {
    slug: 'serverless-contact-form', number: '02', title: 'Serverless contact pipeline', category: 'Cloud infrastructure',
    summary: 'A low-maintenance contact-form architecture designed to accept enquiries and deliver email notifications securely.',
    status: 'Architecture work', tags: ['Cloud', 'API', 'Automation', 'Security'],
    stack: ['AWS API Gateway', 'AWS Lambda', 'Amazon SES', 'Terraform', 'GitHub Actions'], accent: 'blue',
    problem: 'A business contact form needs to be dependable without exposing credentials in browser code or requiring a continuously running server.',
    solution: 'A serverless design using an HTTP API, Lambda processing, and SES for email delivery, with infrastructure managed as code and CI/CD checks planned into the workflow.',
    howItWorks: 'A browser submits validated form data to API Gateway. Lambda performs server-side checks and passes an approved notification to SES. Terraform defines infrastructure, while GitHub Actions can run repeatable quality checks and deployment steps. Environment-specific secrets stay outside the public client bundle.',
    success: ['Successful delivery rate', 'Time from submission to notification', 'Spam and invalid-submission rate', 'Monthly infrastructure cost'],
    note: 'Presented as architecture and implementation work; deployment and delivery metrics must be verified in the target AWS account.'
  },
  {
    slug: 'shopify-operations-automation', number: '03', title: 'Commerce operations automation', category: 'Business process automation',
    summary: 'Python and spreadsheet-based tooling to reduce repetitive Shopify catalogue and operations work.',
    status: 'Implementation experience', tags: ['Automation', 'API', 'Data'],
    stack: ['Python', 'Shopify APIs', 'Excel', 'REST APIs'], accent: 'sage',
    problem: 'Product and inventory updates can become repetitive and error-prone when information is spread across spreadsheets and a commerce platform.',
    solution: 'A workflow-oriented approach using Python and spreadsheet data to support product, inventory, and API-driven updates while making the data transformation steps more repeatable.',
    howItWorks: 'Structured spreadsheet data is checked and transformed before being sent to platform APIs. A production version should include dry-run mode, row-level validation, API error handling, retry rules, and a clear audit log so operators can review changes before and after execution.',
    success: ['Time required per catalogue update', 'Validation error rate', 'Number of manual steps removed', 'Failed API updates requiring intervention'],
    note: 'Describes relevant contract development experience; specific savings and throughput figures are not available.'
  },
  {
    slug: 'cloud-architecture', number: '04', title: 'Cloud architecture & cost planning', category: 'Cloud engineering',
    summary: 'Cloud-native architecture work covering service boundaries, deployment automation, and cost-conscious infrastructure choices.',
    status: 'Architecture work', tags: ['Cloud', 'Automation', 'Security', 'Architecture'],
    stack: ['AWS', 'Terraform', 'CloudFormation', 'CI/CD', 'DDD', 'Event-driven design'], accent: 'navy',
    problem: 'Cloud systems can become expensive or difficult to change when deployment patterns, service boundaries, and cost assumptions are not made explicit.',
    solution: 'Architecture work spanning microservices, infrastructure as code, QA pipelines, integration and security protocols, and cost-benefit planning for options such as Savings Plans and Reserved Instances.',
    howItWorks: 'Infrastructure definitions make environments more repeatable. CI/CD checks support safer changes, while domain-driven boundaries and event-driven patterns help teams reason about ownership and integration. Cost recommendations should be based on workload history, commitments, and documented trade-offs.',
    success: ['Deployment lead time and change-failure rate', 'Infrastructure cost by workload', 'Service reliability and incident frequency', 'Adoption of documented architecture decisions'],
    note: 'A summary of architecture responsibilities; no confidential client architecture or unverified savings are disclosed.'
  },
  {
    slug: 'small-business-supplier', number: '05', title: 'Small-business supplier storefront', category: 'Digital storefront concept',
    summary: 'A product-led catalogue and enquiry flow for suppliers who want customers to browse items and request an order without a payment gateway.',
    status: 'Concept', tags: ['Web App', 'CMS', 'WhatsApp', 'SEO'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity', 'WhatsApp'], accent: 'copper',
    problem: 'Small suppliers often need a simple online catalogue but may not be ready for the cost and operational overhead of full e-commerce checkout.',
    solution: 'A mobile-first catalogue with clear product information, category browsing, and a basket-like enquiry flow that sends a structured request to the business.',
    howItWorks: 'A headless CMS can let staff maintain catalogue content. The front end presents searchable product information and composes a WhatsApp enquiry with selected items. A future phase could add stock status, quote records, or a protected administration workflow if validated by the business.',
    success: ['Product-to-enquiry rate', 'Qualified quotation requests', 'Mobile catalogue engagement', 'Time spent updating product information'],
    note: 'Concept project. The CMS, catalogue and integrations must be configured before it can be described as a live service.'
  },
  {
    slug: 'developer-portfolio', number: '06', title: 'Personal portfolio platform', category: 'Portfolio & content platform',
    summary: 'A modular portfolio built to explain technical work in terms of architecture, business problems, and measurable next steps.',
    status: 'In development', tags: ['Web App', 'SEO', 'Analytics', 'Performance'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel Analytics'], accent: 'blue',
    problem: 'A list of technologies alone does not help a prospective client understand what a developer can improve for their business.',
    solution: 'A case-study-led portfolio with transparent service pricing, project details, conversion-focused calls to action, and clear separation between intended outcomes and verified results.',
    howItWorks: 'Reusable page sections and typed project data keep content maintainable. Server Components handle most presentation, while small Client Components provide navigation, filters, and enquiry interactions. Metadata and analytics support discoverability and measurement once production settings are configured.',
    success: ['Qualified project enquiries', 'Contact CTA conversion', 'Case-study engagement', 'Core Web Vitals field data'],
    note: 'This portfolio source is the implementation of that approach; production domain and analytics credentials remain configurable.'
  }
];

export const projectFilters = ['All', 'Web App', 'Database', 'Cloud', 'WhatsApp', 'API', 'Automation'];
