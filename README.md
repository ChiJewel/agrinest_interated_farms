# 🌱 AgriNest Integrated Farms

> **Healthy Crops. Thriving Animals. A Sustainable Tomorrow.**  
> *Premier Nigerian Agro-Industrial Complex along the Lagos-Ibadan Expressway Corridor (Plot 1-6 Freedom Way).*

---

## 🚀 Overview

**AgriNest Integrated Farms** is a modern, responsive web application built for an integrated circular agricultural enterprise in Southwestern Nigeria. The platform showcases:

* 🏛️ **Modern Agricultural Showroom**: An interactive visual exhibition pavilion featuring curated halls for fresh produce, certified seed banks, biosecure hatchery pens, and private advisory suites.
* 📦 **Farm Produce & Inputs Catalog**: Transparent farmgate commodity pricing (in ₦) across fresh greenhouse crops, commercial Grade-A table eggs, broilers, and pasture livestock.
* 🐣 **Hatchery Offerings**: Booking for vigorous Day-Old Chicks (DOC) and 2-Weeks Pre-Brooded Chicks with verified vaccination schedules.
* 🌾 **Certified Improved Seeds**: High-yield SAMMAZ hybrid maize seeds, disease-resistant cassava stem bundles (TME 419), and F1 greenhouse vegetable seeds.
* 🚜 **Agribusiness Consultation & Audits**: Turnkey farm setup masterplanning, CAD blueprints, and veterinary biosecurity diagnostic audits.
* 🧮 **Interactive Fees & Quotation Calculator**: Real-time requisition ledger with tiered bulk volume discounts (up to 7.5%), Lagos-Ibadan cold-chain logistics routing, and instant WhatsApp invoice dispatch.
* 💬 **Dynamic Floating WhatsApp Chat Widget**: Direct 1-click consultation bridge to **+234 817 422 2244** with quick enquiry prompts and online business verification.

---

## 🛠️ Technology Stack

* **Core Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Bundler & Dev Server:** [Vite 5](https://vitejs.dev/)
* **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment Target:** [Vercel](https://vercel.com/) (configured via `vercel.json`)

---

## ⚙️ Local Development

### 1. Prerequisites
* Node.js `18.x` or `20.x`
* npm / yarn / pnpm

### 2. Installation
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The application will launch locally at `http://localhost:5173/`.

### 4. Code Quality & Audit
```bash
# Run ESLint check
npm run lint

# Run TypeScript typecheck and production build
npm run build
```

---

## ☁️ Vercel Deployment Guide

This project is fully audited and pre-configured for **zero-friction Vercel deployment** via `vercel.json`.

### Option A: Deploy via GitHub & Vercel Dashboard (Recommended)

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete AgriNest Integrated Farms web application"
   git branch -M main
   git remote add origin https://github.com/<your-username>/agrinest-integrated-farms.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com/) and click **"Add New..."** → **"Project"**.
3. Select your GitHub repository.
4. Vercel will automatically detect the configuration from `vercel.json`:
   * **Framework Preset:** `Vite`
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
   * **Install Command:** `npm install`
5. Click **"Deploy"**. Your live site will be ready in under 60 seconds with an SSL certificate and global CDN edge caching!

---

### Option B: Deploy via Vercel CLI

1. Install or run Vercel CLI:
   ```bash
   npx vercel
   ```
2. Follow the interactive prompts to link your account.
3. For production deployment, run:
   ```bash
   npx vercel --prod
   ```

---

## 📂 Project Architecture

```
agrinest-integrated-farms/
├── public/
│   ├── images/               # High-definition visual assets (showroom, seeds, chicks, produce)
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx    # Corporate mission, metrics & biotech closed-loop
│   │   ├── ClosedLoopTech.tsx  # Interactive nutrient recycling diagram
│   │   ├── ContactInquiry.tsx  # RFQ form, highway directions & contact info
│   │   ├── FarmingDivisions.tsx# Four operational farm pillars
│   │   ├── FeesCalculator.tsx  # Interactive multi-item fees & quotation calculator
│   │   ├── Footer.tsx          # Corporate sitemap & off-take bulletin signup
│   │   ├── Hero.tsx            # Hero section with aerial masterplan & quick shortcuts
│   │   ├── LocationCorridor.tsx# Lagos-Ibadan expressway transit matrix
│   │   ├── MobileActionBar.tsx # Bottom bar optimized for mobile procurement officers
│   │   ├── ModernShowroom.tsx  # Virtual exhibition pavilion & produce inspection modal
│   │   ├── Navbar.tsx          # Sticky corporate navigation with corridor status bar
│   │   ├── OrderModal.tsx      # Formal B2B requisition modal
│   │   ├── ProduceCatalog.tsx  # Filterable product catalog with price tags
│   │   └── WhatsAppWidget.tsx  # Floating WhatsApp chat desk (+2348174222244)
│   ├── data/
│   │   ├── farmConfig.ts       # Contact phone numbers, addresses, and WhatsApp helpers
│   │   └── farmData.ts         # Catalog items, showroom exhibits, pricing, and specs
│   ├── App.tsx                 # Root application container & calculator state manager
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Design system tokens and custom utilities
├── index.html                  # HTML5 template with enhanced SEO metadata
├── package.json                # Project dependencies and npm scripts
├── vercel.json                 # Vercel SPA routing rewrites & asset caching headers
└── vite.config.ts              # Vite configuration
```

---

## 📞 Farm Corporate Contact

* **Address:** Plot 1-6 Freedom Way, Lagos-Ibadan Expressway Corridor, Ogun/Lagos Agro-Industrial Zone, Nigeria.
* **Direct Line / WhatsApp:** `+234 817 422 2244`
* **Email:** `enquiries@agrinestfarms.com`
* **Operating Hours:** Monday – Saturday: 7:00 AM – 6:00 PM (WAT)
