# Design System & Consistency Guide

## Color Scheme

### Brand Colors (Blue-based)
- **Primary**: `brand-600` (#0284c7) - Main brand color, buttons, links (Sky Blue)
- **Dark**: `brand-700` (#0369a1), `brand-800` (#075985) - Headings, text, footer
- **Light**: `brand-50` (#f0f9ff), `brand-100` (#e0f2fe) - Backgrounds, cards
- **Medium**: `brand-200` (#bae6fd), `brand-300` (#7dd3fc), `brand-400` (#38bdf8) - Borders, accents
- **Borders**: `brand-200`, `brand-300`, `brand-400` - Card borders, input borders

### Usage Rules
- **Main page backgrounds**: `bg-brand-50` (light blue, consistent across all pages)
- **Section backgrounds**: Alternate between `bg-white` and `bg-brand-50` for visual rhythm
- **Hero overlays**: `bg-gradient-to-r from-brand-900/70 via-brand-800/60 to-brand-900/70` (blue-tinted overlay)
- **Buttons**: `bg-brand-600` (#0284c7 - Sky Blue) with `hover:bg-brand-700`
- **Text colors**: 
  - Headings: `text-brand-800` (dark blue)
  - Body text: `text-brand-600` or `text-brand-700` (medium blue)
  - White text: `text-white` (on dark backgrounds)
  - Light text on dark: `text-brand-100` or `text-brand-200`

## Typography

### Fonts
- **Headings**: Playfair Display (serif) - `font-serif`
- **Body**: Source Sans Pro (sans-serif) - `font-sans`

### Usage
- All `h1`, `h2`, `h3`, etc. should use `font-serif`
- Body text uses default `font-sans`
- Font weights: 300, 400, 600, 700

## Layout Consistency

### Page Structure
1. **Main container**: `min-h-screen bg-brand-50`
2. **Content wrapper**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
3. **Section padding**: `py-16` (consistent across all sections)

### Section Background Pattern (Homepage)
- Hero: Image with overlay (unique)
- Services: `bg-white`
- Featured Packages: `bg-brand-50`
- Map: `bg-brand-50`
- Footer: `bg-brand-800` (dark)

### Other Pages
- Header section: `bg-gradient-to-r from-brand-600 to-brand-700`
- Content sections: `bg-brand-50` main background
- Cards: `bg-white` with `border border-brand-200`

## Component Consistency

### Buttons
- Primary: `bg-brand-600 text-white hover:bg-brand-700`
- Secondary: `bg-transparent border-2 border-brand-600 text-brand-600 hover:bg-brand-50`

### Cards
- Background: `bg-white`
- Border: `border border-brand-200`
- Shadow: `shadow-md` or `shadow-lg`
- Padding: `p-6` or `p-8`

### Forms
- Input borders: `border-brand-300`
- Focus: `focus:ring-2 focus:ring-brand-500 focus:border-brand-500`
- Labels: `text-brand-700`

## Spacing

### Consistent Spacing
- Section padding: `py-16`
- Card padding: `p-6` or `p-8`
- Gap between elements: `gap-4`, `gap-8`
- Margin bottom for headings: `mb-4` or `mb-6`

## Best Practices

1. **Always use brand colors** - Never use generic gray colors (gray-500, etc.)
2. **Consistent section backgrounds** - Alternate white and brand-50 for visual interest
3. **Typography hierarchy** - Use serif for headings, sans-serif for body
4. **Spacing consistency** - Use `py-16` for all major sections
5. **Border consistency** - Use `border-brand-200` for all card borders

