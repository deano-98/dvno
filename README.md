# Dean Chap — Digital Solutions Portfolio

A mobile-first Next.js portfolio and digital-solutions business website. The design uses warm off-white surfaces, navy typography and restrained copper accents. Project content and pricing are data-driven so you can update the site without duplicating page markup.

## Included

- Next.js App Router + TypeScript strict mode + Tailwind CSS v4
- Responsive home, services/pricing, project index, six case studies, and contact pages
- Accessible mobile navigation overlay with Escape-key dismissal and body scroll locking
- Lenis smooth scrolling that respects reduced-motion preferences and cleans up its animation frame
- Project capability filters, service package enquiry links, and WhatsApp-first contact form
- Server-side Zod validation and a honeypot field for the enquiry form
- Metadata, Open Graph defaults, sitemap, robots.txt, and optional Search Console verification
- Vercel Analytics and Speed Insights; optional GA4 when configured
- Transparent package, maintenance, hosting-cost, payment and post-launch terms

## Requirements

- Node.js 20.9 or newer (Node.js 22 LTS recommended)
- npm

## Local setup

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Variable                      | Required                 | Description                                                                           |
| ----------------------------- | ------------------------ | ------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`        | Production               | Canonical site origin, e.g. `https://your-domain.com`; no trailing slash              |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | For direct business chat | Your WhatsApp number in international digits only, without `+`, spaces or punctuation |
| `NEXT_PUBLIC_GA_ID`           | Optional                 | GA4 measurement ID such as `G-XXXXXXXXXX`                                             |
| `GOOGLE_SITE_VERIFICATION`    | Optional                 | Google Search Console HTML verification token                                         |

Never put private credentials in `NEXT_PUBLIC_*` variables. This project currently does not require a secret API key for its WhatsApp handoff.

## Contact workflow

The form posts to `/api/contact`, where Zod validates the payload and a honeypot catches a basic class of bot submissions. A successful response prepares a WhatsApp message URL. The visitor must complete and send the message in WhatsApp; the website does not claim to deliver or store the enquiry. Replace the WhatsApp number before launch. For stronger production spam protection, add a rate limiter or a CAPTCHA/Turnstile integration at the hosting edge.

## Analytics and privacy

Vercel Analytics and Speed Insights are included. GA4 is loaded only when `NEXT_PUBLIC_GA_ID` is set. Confirm the privacy/consent requirements that apply to your audience before enabling analytics. This starter does not include a consent-management platform.

## Content to verify before launch

- Add the real WhatsApp business number in `.env.local` / production environment variables.
- Add a real public email and verified professional-profile URLs in `lib/site.ts` if you want them displayed.
- Set `NEXT_PUBLIC_SITE_URL` to the production domain.
- Add verified project screenshots to `public/images` if available. Current project previews are custom CSS illustrations, not fabricated screenshots.
- Confirm the status and public disclosure level for each project. Some entries describe architecture work or concepts rather than live production systems.
- Review prices, taxes, contract wording and local legal/privacy requirements before publishing as a commercial offer.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

These commands should be run after dependency installation and before deployment. The generated source archive has not been represented as passing a build unless the commands are executed successfully in your environment.

## Deployment to Vercel

1. Push the project to a GitHub repository.
2. Import the repository into Vercel.
3. Set the production environment variables listed above.
4. Deploy and verify `/`, `/services`, `/projects`, each project detail, `/contact`, `/sitemap.xml`, and `/robots.txt`.
5. Submit the sitemap in Google Search Console and confirm GA4/Vercel data after real visits arrive.

## Project structure

```text
app/
  api/contact/route.ts     # server-side validation + WhatsApp handoff URL
  projects/[slug]/page.tsx # generated project case studies
  services/page.tsx
  contact/page.tsx
  sitemap.ts
  robots.ts
components/
  contact/                 # enquiry form
  navigation/              # responsive nav and mobile overlay
  projects/                # project cards, filters, abstract preview
  services/                # pricing card
  sections/                # reserved for future section extraction
  ui/                      # reusable headings and CTAs
data/
  projects.ts               # typed case-study content
  services.ts               # typed pricing and maintenance content
lib/
  site.ts                   # site identity and contact configuration
  utils.ts
```

## Notes

- Case-study KPI lists are proposed measurement ideas, not claimed outcomes.
- The project preview art is deliberately illustrative and can be replaced with verified screenshots.
- Pricing and delivery windows are editable in `data/services.ts`.
