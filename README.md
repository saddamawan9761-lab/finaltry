# 3M OURCAR — Next.js Website

> Official 3M Authorized Dealer — Premium Automotive Tinting & Protection  
> Built with Next.js 15, Tailwind CSS, Framer Motion, Prisma ORM

---

## Project Structure

```
3m-ourcar/
├── prisma/
│   └── schema.prisma           # Database schema (Leads, Bookings, Quotes)
├── public/
│   └── images/                 # Replace placeholder images here
│       └── videos/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout — Navbar, Footer, FloatingButtons
│   │   ├── page.tsx            # Homepage
│   │   ├── not-found.tsx       # Custom 404 page
│   │   ├── sitemap.ts          # Auto-generated sitemap
│   │   ├── robots.ts           # Robots.txt
│   │   ├── automotive/
│   │   │   ├── page.tsx        # Automotive services index
│   │   │   └── [slug]/page.tsx # Dynamic: window-tinting, ppf, ceramic-coating…
│   │   ├── residential/
│   │   │   ├── page.tsx        # Residential & Commercial index
│   │   │   └── [slug]/page.tsx # Dynamic: sun-control, safety-security, decorative
│   │   ├── marine/
│   │   │   ├── page.tsx        # Marine tinting index
│   │   │   └── [slug]/page.tsx # Dynamic: sun-control, safety-security
│   │   ├── simulator/
│   │   │   └── page.tsx        # Tint simulator embed page
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact / Book / Quote page
│   │   └── api/
│   │       ├── contact/route.ts  # POST — General enquiry → DB + email
│   │       ├── quote/route.ts    # POST — Quote request → DB + email
│   │       └── booking/route.ts  # POST — Booking request → DB + email
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky nav with mobile menu
│   │   │   ├── Footer.tsx        # Full footer with links & social
│   │   │   └── FloatingButtons.tsx # Sticky WhatsApp + Call buttons
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TrustBar.tsx
│   │   │   ├── ShopTintSection.tsx
│   │   │   ├── FiftyFiveMinSection.tsx
│   │   │   ├── CertificationsSection.tsx  # With lightbox modal
│   │   │   ├── AutoServicesPreview.tsx
│   │   │   ├── ResidentialPreview.tsx
│   │   │   ├── MarinePreview.tsx
│   │   │   ├── LocationsSection.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── CtaBanner.tsx
│   │   │   └── ServiceHero.tsx
│   │   ├── forms/
│   │   │   └── ContactForm.tsx   # React Hook Form + Zod — 3-in-1 tabbed form
│   │   └── ui/
│   │       └── index.tsx         # Button, SectionHeader, ServiceCard,
│   │                             # LocationCard, BenefitCard, TestimonialCard,
│   │                             # ContentPlaceholder, ImagePlaceholder
│   ├── lib/
│   │   ├── constants.ts          # Services, locations, testimonials, certs data
│   │   ├── prisma.ts             # Prisma client singleton
│   │   ├── email.ts              # Nodemailer — lead/booking email templates
│   │   └── utils.ts              # cn(), whatsapp helpers
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces
│   └── styles/
│       └── globals.css           # Tailwind + Google Fonts + CSS vars
├── .env.example                  # Copy to .env.local and fill in
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## Quick Start (Local Development)

### 1. Clone and install

```bash
git clone <your-repo>
cd 3m-ourcar
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# PostgreSQL (Supabase free tier recommended)
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/3mourcar"

# Email notifications
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your@gmail.com"
SMTP_PASS="your-app-password"   # Use Gmail App Password, not account password
NOTIFY_EMAIL="info@3mourcar.com"

# Site URL
NEXT_PUBLIC_SITE_URL="http://localhost:3000"

# Contact details
NEXT_PUBLIC_WHATSAPP="971XXXXXXXXX"
NEXT_PUBLIC_PHONE="+971-XX-XXX-XXXX"
```

### 3. Set up the database

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database (development — no migration files)
npm run db:push

# OR use migrations (recommended for production)
npm run db:migrate
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Database (Prisma)

### Tables

| Table | Purpose |
|-------|---------|
| `leads` | General contact enquiries from the website form |
| `bookings` | Booking requests — service, location, preferred date/time |
| `quotes` | Quote requests with vehicle and service details |

### View your data

```bash
npm run db:studio
# Opens Prisma Studio at http://localhost:5555
```

### Supported databases

- **PostgreSQL** (recommended — use Supabase free tier)
- **MongoDB** — change `provider = "postgresql"` to `provider = "mongodb"` in `prisma/schema.prisma`

---

## Adding Your Content

### Images & Videos

Replace placeholder content in `/public/images/`:

```
public/
└── images/
    ├── og-image.jpg           # Social share image (1200×630)
    ├── logo.svg               # Your logo file
    └── services/
        ├── window-tinting-hero.jpg
        ├── ppf-hero.jpg
        ├── ceramic-hero.jpg
        ├── polishing-hero.jpg
        └── detailing-hero.jpg
```

In components, replace `<ImagePlaceholder>` with Next.js `<Image>`:

```tsx
import Image from 'next/image'
// Replace:
<ImagePlaceholder label="Before / After" aspectRatio="aspect-video" />
// With:
<Image src="/images/services/before-after.jpg" alt="Before and After Tinting" width={800} height={450} />
```

### Text Content

All service descriptions are in `src/lib/constants.ts`. Edit the `description`, `benefits`, and `features` fields for each service.

For detailed per-page content, find the `<ContentPlaceholder>` components in each page file and replace them with your actual copy.

### Company Details (phone, WhatsApp, email, socials)

Edit the `COMPANY` object at the top of `src/lib/constants.ts`:

```ts
export const COMPANY = {
  phone: '+971-XX-XXX-XXXX',      // ← Your real phone
  whatsapp: '971XXXXXXXXX',        // ← Without + prefix
  email: 'info@3mourcar.com',
  instagram: 'https://instagram.com/3mourcar',
  // ...
}
```

### Simulator Embed

In `src/app/simulator/page.tsx`, find the comment block and replace with your embed code:

```tsx
// Replace the placeholder div with:
<iframe
  src="https://your-simulator-provider.com/embed?brand=3mourcar"
  width="100%"
  height="100%"
  className="absolute inset-0 w-full h-full border-0"
  allow="fullscreen"
/>
```

### Google Maps Embed

In `src/app/contact/page.tsx`, find the map placeholder and replace:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="100%"
  className="w-full h-full border-0"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

---

## Deployment on Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/3m-ourcar.git
git push -u origin main
```

### 2. Import on Vercel

1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repository
3. Framework: **Next.js** (auto-detected)

### 3. Set Environment Variables

In Vercel → Project → Settings → Environment Variables, add:

| Key | Value |
|-----|-------|
| `DATABASE_URL` | Your PostgreSQL connection string |
| `SMTP_HOST` | smtp.gmail.com |
| `SMTP_PORT` | 587 |
| `SMTP_USER` | your@gmail.com |
| `SMTP_PASS` | your-app-password |
| `NOTIFY_EMAIL` | info@3mourcar.com |
| `NEXT_PUBLIC_SITE_URL` | https://www.3mourcar.com |
| `NEXT_PUBLIC_WHATSAPP` | 971XXXXXXXXX |
| `NEXT_PUBLIC_PHONE` | +971-XX-XXX-XXXX |

### 4. Deploy

Click **Deploy**. Vercel automatically runs `npx prisma generate && next build`.

### Recommended Database: Supabase (Free)

1. Go to [supabase.com](https://supabase.com) → New Project
2. Copy the **Connection String** (PostgreSQL)
3. Paste as `DATABASE_URL` in Vercel environment variables

---

## Custom Domain

In Vercel → Project → Settings → Domains:
- Add `3mourcar.com` and `www.3mourcar.com`
- Update your DNS records as shown by Vercel

---

## Gmail App Password (for email notifications)

1. Go to your Google Account → Security
2. Enable 2-Step Verification
3. Go to App Passwords → Create → Mail → Windows Computer
4. Copy the 16-character password → use as `SMTP_PASS`

---

## Future CMS Integration

The project is structured for easy CMS integration (Sanity, Contentful, Strapi):

1. Service data lives in `src/lib/constants.ts` — move to CMS collections
2. Each page uses `ContentPlaceholder` components — replace with CMS rich text
3. Gallery images use `ImagePlaceholder` — replace with CMS asset URLs
4. The API routes and database are already production-ready

---

## Tech Stack

| Tech | Purpose |
|------|---------|
| Next.js 15 (App Router) | Framework |
| React 18 | UI |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Prisma | ORM / Database |
| PostgreSQL | Database |
| Nodemailer | Email notifications |
| React Hook Form | Form handling |
| Zod | Schema validation |
| Vercel | Hosting |
