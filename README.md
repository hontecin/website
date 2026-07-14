# Hontec Corporate Website

The official marketing and product site for [Hontec](https://www.hontec.in) — a software studio that builds its own product line and custom engineering teams for growing companies.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | [Next.js](https://nextjs.org) | 16.2.9 |
| Language | [TypeScript](https://www.typescriptlang.org) | ^5 |
| UI Library | [React](https://react.dev) | 19.2.4 |
| Styling | [Tailwind CSS](https://tailwindcss.com) | ^4 |
| Bundler | Next.js Turbopack | built-in |
| Linting | [ESLint](https://eslint.org) | ^9 |

---

## Third-Party Integrations

### 1. Web3Forms
- **Website:** https://web3forms.com
- **Use case:** Contact form submissions. When a visitor fills out the contact form (for any enquiry other than careers), the form data is posted to the Web3Forms API, which delivers a formatted email to `business.hontec@gmail.com`. No backend or server-side code required.
- **Free tier:** Unlimited submissions
- **Where it's used:** `components/ContactForm.tsx`
- **Config:** Access key is embedded directly in the form component (`33fa44a1-82c4-4458-b531-4af992f7fe9f`). If you need to change the recipient email, update it at [web3forms.com](https://web3forms.com).

---

## Project Structure

```
website/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (fonts, header, footer)
│   ├── page.tsx                # Homepage
│   ├── icon.png                # Site favicon (auto-served by Next.js App Router)
│   ├── opengraph-image.tsx     # Auto-generated OG image
│   ├── robots.ts               # robots.txt generation
│   ├── sitemap.ts              # sitemap.xml generation
│   ├── about/                  # About page
│   ├── careers/                # Careers page
│   ├── contact/                # Contact page
│   ├── cookies/                # Cookie policy
│   ├── industries/             # Industries overview
│   ├── insights/               # Blog/insights listing + [slug] detail
│   ├── privacy/                # Privacy policy
│   ├── products/               # Products listing + [slug] detail
│   ├── services/               # Services listing + [slug] detail
│   ├── terms/                  # Terms of service
│   └── work/                   # Case studies listing + [slug] detail
│
├── components/                 # Shared UI components
│   ├── Header.tsx              # Sticky nav with desktop dropdown + mobile menu
│   ├── Footer.tsx              # Site footer with links and contact info
│   ├── Logo.tsx                # Logo component (dark/white variants, size prop)
│   ├── ContactForm.tsx         # Contact form wired to Web3Forms
│   ├── Legal.tsx               # Shared layout for legal pages
│   └── ui.tsx                  # Primitive UI components (Button, Section, etc.)
│
├── lib/
│   └── site.ts                 # Single source of truth — site metadata, nav,
│                               # products, services, industries, case studies, stats
│
├── public/
│   └── logos/
│       ├── logo-dark.png       # Dark logo (used in navbar, light backgrounds)
│       └── logo-white.png      # White logo (used in footer, dark backgrounds)
│
├── next.config.ts              # Next.js config — Turbopack, subdomain rewrites
├── tsconfig.json               # TypeScript config (@/* path alias)
├── postcss.config.mjs          # PostCSS config for Tailwind CSS v4
└── eslint.config.mjs           # ESLint config
```

---

## Key Conventions

### Site Data (`lib/site.ts`)
All content — company info, navigation, products, services, industries, case studies — lives in `lib/site.ts`. This is the **single source of truth**. Update this file to change anything that appears across multiple pages. Do not hardcode content inside page files.

### Logo Usage
The `Logo` component (`components/Logo.tsx`) accepts two props you'll commonly use:
- `variant="ink"` — dark logo for light backgrounds (default, used in header)
- `variant="paper"` — white logo for dark backgrounds (used in footer)
- `size="lg"` — larger size (used in footer); default is `"md"`

Logo files are served from `/public/logos/` and accessible at:
- `https://www.hontec.in/logos/logo-dark.png`
- `https://www.hontec.in/logos/logo-white.png`

### Subdomain Routing
The `pharmacare.hontec.in` subdomain is handled via a rewrite rule in `next.config.ts`. Requests to that subdomain are internally rewritten to `/pharmacare/*` routes within this same Next.js app.

### Contact Form — Careers Exception
If a visitor selects **"Careers / send me your CV"** in the contact form, the form fields are hidden and they are directed to email `business.hontec@gmail.com` directly. All other intents submit via Web3Forms.

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Deployment

This site is designed to deploy on [Vercel](https://vercel.com). Push to `main` and Vercel handles the rest. No environment variables are required for basic deployment.

If you change the Web3Forms access key, update it in `components/ContactForm.tsx`.

---

## Pages Reference

| Route | Description |
|---|---|
| `/` | Homepage |
| `/about` | Company overview |
| `/careers` | Open roles |
| `/contact` | Contact form + other ways in |
| `/work` | Case studies listing |
| `/work/[slug]` | Individual case study |
| `/products` | Products overview |
| `/products/[slug]` | Individual product detail |
| `/services` | Services overview |
| `/services/[slug]` | Individual service detail |
| `/industries` | Industries served |
| `/insights` | Blog / insights listing |
| `/insights/[slug]` | Individual insight article |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/cookies` | Cookie policy |
