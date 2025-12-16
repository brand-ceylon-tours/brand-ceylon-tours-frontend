# Brand Ceylon Tours - MVP

A tourism website showcasing Sri Lanka's tourism packages and services.

## Overview

This is the MVP (Minimum Viable Product) implementation featuring:

- **Home Page**: Description of tourism services, featured packages preview, and interactive Sri Lanka map
- **Packages Page**: Complete listing of all tourism packages
- **Contact Page**: Contact form and information
- **Login Page**: Basic login interface (UI ready for future backend integration)

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (headings), Source Sans Pro (body)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
Brand Ceylon Tours/
├── frontend/                 # Next.js front-end application
│   ├── app/                 # Next.js app directory
│   │   ├── page.tsx        # Home page
│   │   ├── packages/       # Packages pages
│   │   ├── contact/        # Contact page
│   │   └── login/          # Login page
│   ├── components/         # React components
│   │   ├── Navigation.tsx
│   │   ├── PackageCard.tsx
│   │   ├── InteractiveMap.tsx
│   │   └── ContactSection.tsx
│   ├── lib/
│   │   └── data/
│   │       └── packages.ts # Static package data
│   └── public/
│       └── images/         # Static images
└── README.md
```

## Features

### Home Page
- Hero section with tourism description
- Services overview
- Featured packages preview
- Interactive Sri Lanka map highlighting key tourism areas
- Contact footer

### Packages Page
- Grid layout of all tourism packages
- Package detail pages
- Package cards with highlights and pricing

### Contact Page
- Contact form
- Contact information display
- Business hours

### Login Page
- Basic login form UI
- Ready for future backend integration

## Color Scheme

The site uses a blue-based color palette:
- Primary: `brand-600` (#0284c7 - Sky Blue)
- Backgrounds: `brand-50` (#f0f9ff)
- Text: `brand-800` (#075985)

## Development

### Build for Production

```bash
cd frontend
npm run build
npm start
```

## Future Enhancements

The following features are planned for future releases:
- Backend authentication service integration
- Booking functionality
- Transportation services
- Reporting and analytics

For now, the MVP focuses on showcasing tourism packages and providing contact information.
