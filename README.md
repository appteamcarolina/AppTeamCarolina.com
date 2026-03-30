# App Team Carolina Website

Official website for App Team Carolina — UNC's premier student-run app development organization.

Built with React, TypeScript, Vite, and Tailwind CSS v4.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 with custom design system
- **Routing:** React Router v7
- **Animations:** Framer Motion
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React + Simple Icons

## Project Structure

```
src/
├── components/
│   ├── ui/              — Reusable UI components (buttons, cards, animations)
│   ├── site/            — Site-specific components (hero, CTA, carousels)
│   ├── Navbar.tsx       — Main navigation
│   ├── Footer.tsx       — Site footer
│   └── Layout.tsx       — Page layout wrapper
├── pages/
│   ├── home/            — Homepage sections
│   ├── about/           — About page
│   ├── apply/           — Application page
│   ├── apps/            — Apps showcase
│   ├── learning/        — Learning track page
│   ├── production/      — Production track page
│   └── bubbly/          — Bubbly app pages (privacy, terms)
├── data/
│   └── content.ts       — Centralized content and data
├── lib/
│   └── utils.ts         — Utility functions
├── App.tsx              — Main app component with routing
├── main.tsx             — App entry point
└── index.css            — Global styles + Tailwind imports

assets/
├── brand/               — Logo and branding assets
├── icons/               — UI icons and graphics
├── apps/                — App screenshots and assets
├── photos/              — Team photos and images
└── social/              — Social media icons
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server (usually runs on http://localhost:5173)
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Deployment

The site is deployed via GitHub Pages. Pushing to the `main` branch will trigger deployment.

Custom domain is configured via the `CNAME` file.

## Key Features

- **Responsive Design:** Mobile-first approach with breakpoints for tablet and desktop
- **Smooth Animations:** Framer Motion for page transitions and scroll reveals
- **Dynamic Content:** Centralized content management in `src/data/content.ts`
- **Modern UI:** Glass morphism effects, gradient overlays, and custom animations
- **Performance:** Optimized with Vite's build pipeline and code splitting

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test locally with `npm run dev`
4. Build and verify with `npm run build && npm run preview`
5. Submit a pull request

## License

© 2024 App Team Carolina. All rights reserved.
