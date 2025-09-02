# 🏗️ CaSScade'25 - Fundamental Next.js Structure

This document outlines the clean, organized structure of the CaSScade'25 codebase, following Next.js Pages Router best practices.

## 📁 Directory Structure

```
src/
├── pages/                # Next.js pages (routing)
│   ├── _app.tsx         # App wrapper
│   ├── _document.tsx    # Document wrapper
│   └── index.js         # Home page route
├── sections/             # Page section components
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── EventRulesSection.tsx
│   ├── CSISection.tsx
│   ├── SocialMediaSection.tsx
│   ├── Footer.tsx
│   ├── Timeline.tsx
│   ├── JudgingCriteria.tsx
│   ├── GlitchFund.tsx
│   ├── CaSScade.tsx
│   └── index.ts         # Page section exports
├── components/           # React components
│   ├── CustomCursor.tsx
│   ├── FuzzyText.tsx
│   ├── GridBackground.tsx
│   ├── SystemBroadcast.tsx
│   └── index.ts         # Component exports
├── helpers/              # Essential utilities and data
│   ├── constants/        # Application constants
│   │   └── index.ts
│   ├── types/           # TypeScript types
│   │   └── index.ts
│   └── index.ts         # Helpers exports
└── styles/              # Global styles
    └── index.css
```
