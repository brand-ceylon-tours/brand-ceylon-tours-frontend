# Brand Ceylon Tours - Frontend

Next.js/React front-end application for Brand Ceylon Tours MVP.

## Features

- Home page with tourism services description
- Interactive Sri Lanka map highlighting key tourism areas
- Tourism packages listing and detail pages
- Contact page with form
- Basic login interface
- Responsive design with blue color theme

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── packages/          # Packages pages
│   ├── contact/           # Contact page
│   └── login/             # Login page
├── components/            # React components
│   ├── Navigation.tsx
│   ├── PackageCard.tsx
│   ├── InteractiveMap.tsx
│   └── ContactSection.tsx
├── lib/
│   └── data/
│       └── packages.ts    # Static package data
└── public/
    └── images/            # Static images
```

## Design System

See `DESIGN_SYSTEM.md` for color scheme, typography, and styling guidelines.

## Technology

- Next.js 14
- TypeScript
- Tailwind CSS
- React 18
