# Crown & Roots Dental Clinic

A modern, responsive dental clinic web application built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- **Painless Dental Treatments**: Interactive treatment carousel and procedural breakdowns.
- **MDS Specialist Profiles**: Portfolio of dental surgeons and specialists with verification badges.
- **Real-Time Appointment Booking**: Booking modal with doctor selection, date/time slots, and SMS/WhatsApp confirmation workflows.
- **AI Dental Concierge**: Interactive Gemini-powered dental assistant for patient FAQs and pre-visit queries.
- **Sterilization Protocols**: Interactive hospital-grade sterilization and clinic suite tour.
- **Location & Navigation**: Multi-branch South Delhi and Gurgaon clinic addresses with Google Maps integration.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment to Netlify

This project is pre-configured for one-click deployment to Netlify via `netlify.toml` and `public/_redirects`.

### Option 1: Deploy via GitHub (Recommended)
1. Push this repository to GitHub: `https://github.com/badu10m-code/Crown-rootsdentalclnic`
2. Log into [Netlify](https://app.netlify.com/) and click **"Add new site"** > **"Import an existing project"**.
3. Select **GitHub** and choose `Crown-rootsdentalclnic`.
4. Netlify will auto-detect settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**.

### Option 2: Deploy via Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Motion
- **Icons**: FontAwesome 6, Lucide React
- **Build Tool**: Vite
