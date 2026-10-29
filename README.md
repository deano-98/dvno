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
npm install
npm run dev
```

Open http://localhost:3000.
Create `.env.local` only if you need to override one of the optional settings below; it is not required to run the site locally.

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

Vercel Analytics and Speed Insights are mounted globally in the root layout. They do not need project IDs or environment variables. To collect data on a Vercel deployment:

1. Open the project in Vercel and enable **Analytics** and **Speed Insights** from their respective project dashboard tabs.
2. Deploy or redeploy the site. Visit the production site to generate real page views and performance measurements.
3. Return to each dashboard to review data after Vercel has received and processed visits. Local development traffic is not a substitute for production measurements.

GA4 uses the existing `NEXT_PUBLIC_GA_ID` and is initialized once by `AnalyticsTools`; no second tag or analytics package is used. There is no consent-management platform or Consent Mode implementation in this project. The GA tag loads whenever the ID is configured, so confirm local privacy requirements and add a consent gate before enabling it in jurisdictions where consent is required. Event parameters never include contact details, form contents, WhatsApp message text, or query strings.

Custom interaction events are sent through `lib/analytics.ts`. Every custom event includes `page_path` (pathname only):

| Event | Parameters | Meaning |
| --- | --- | --- |
| `whatsapp_click` | `location`, optional `service`, `project` | WhatsApp CTA or a successfully prepared form handoff; not proof a message was sent |
| `navigation_click` | `item`, `location`, `destination` | An activated internal navigation link |
| `project_click` | `project`, optional `project_name`, `location`, `action` | Project card, case study, live demo, or repository interaction |
| `service_click` | `service`, optional `service_name`, `location`, `action` | Service enquiry link or an explicit service selection |
| `contact_click` | `location`, optional `service`, `project` | General contact CTA |
| `email_click` | `location` | `mailto:` link activation |
| `form_start` | `form_name` | First focus within the enquiry form during that mount |
| `form_submit` | `form_name` | A browser-valid submission attempt; may still fail server validation/network handling |
| `social_click` | `item`, `location` | GitHub or LinkedIn profile link |
| `project_filter` | `filter` | Project filter selection |
| `faq_toggle` | `item`, `action` | FAQ opened or closed |
| `outbound_click` | `destination_type`, `location` | Generic external CTA where one is used; project and social destinations use their specific events instead |

`service` values come from the service IDs in `data/services.ts`; `project` values come from project slugs in `data/projects.ts`. The contact API only validates an enquiry and prepares a WhatsApp URL. It does not deliver or store the lead, and the site cannot observe whether the visitor sends the WhatsApp message. Therefore `generate_lead` is intentionally not emitted, and `form_submit`/`whatsapp_click` must not be interpreted as a confirmed lead. There are currently no phone links, CV downloads, theme control, search, or floating/footer WhatsApp button to track.

### Page views

The existing `gtag('config', ...)` sends the initial page view. App Router transitions are left to GA4 Enhanced Measurement's browser-history page-change tracking; the app does not send a second custom route event. In **Admin → Data streams → Web → Enhanced measurement → Page views**, confirm **Page changes based on browser history events** is enabled. This is a GA property setting and cannot be verified or changed from this repository. The app's own `page_path` excludes query strings; the only current page query value is the non-sensitive service ID used to preselect a package.

### GA4 reporting setup

In **Admin → Events / Key events**, mark `whatsapp_click` and `email_click` as key events if contact intent is a useful outcome. They represent intent, not completed leads. Do not mark navigation, service, project, or form-attempt events as conversions. When a future workflow can verify successful delivery or an explicitly confirmed WhatsApp lead, emit `generate_lead` at that verified boundary and mark it as the primary key event.

Register event-scoped custom dimensions only for parameters you plan to report, such as `location`, `service`, `service_name`, `project`, `project_name`, `action`, `item`, `destination`, `filter`, `form_name`, and `destination_type`. Custom event parameters do not automatically become report dimensions, and GA4 will not backfill dimension values from before registration.

Use **Explore → Free form** to compare `service_click` by `service` and `project_click` by `project`/`action`; compare `whatsapp_click` by `location`; and build a funnel from `form_start` to `form_submit` (add `generate_lead` only when real confirmation is available). Add session source/medium to review acquisition, and device category to compare mobile and desktop. Realtime and DebugView can confirm events only after the configured property receives them.

### Verification

Set the existing `NEXT_PUBLIC_GA_ID` to the property's `G-...` measurement ID in the deployment environment and redeploy; no new variable or package is required. The checked-in `.env.local` currently leaves it blank, so local event delivery is disabled unless you configure it. For a live check, open GA4 Realtime/DebugView, activate a project/service/navigation link, use the enquiry form without entering real personal data, and inspect browser DevTools Network for GA collection requests and the `en` event name. `window.dataLayer` can also show queued `gtag` commands while debugging. Ad blockers, consent settings, or an unset measurement ID can prevent receipt; code-level checks do not prove the live property received an event.

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
3. Set the production environment variables listed above. Vercel Analytics and Speed Insights do not require environment variables.
4. Enable Analytics and Speed Insights in the project dashboard.
5. Deploy and verify `/`, `/services`, `/projects`, each project detail, `/contact`, `/sitemap.xml`, and `/robots.txt`.
6. Submit the sitemap in Google Search Console and confirm GA4/Vercel data after real visits arrive.

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
