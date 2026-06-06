# Janhvi Vishwakarma — Portfolio

A production-ready personal portfolio inspired by Brittany Chiang's design philosophy.

## Tech Stack
- **React** + **Vite** (fast builds, HMR)
- **Tailwind CSS v4** (utility-first styling)
- **Framer Motion** (animations & scroll reveals)
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx        # Sticky left nav (desktop)
│   ├── MobileHeader.jsx   # Hamburger menu (mobile)
│   ├── FadeIn.jsx         # Scroll animation wrapper
│   ├── Hero.jsx           # Hero section
│   ├── About.jsx          # About section
│   ├── Experience.jsx     # Work experience tabs
│   ├── Projects.jsx       # Featured projects
│   ├── Skills.jsx         # Skills by category
│   ├── Blog.jsx           # Writing/blog cards
│   ├── Certifications.jsx # Certifications
│   ├── LeetCode.jsx       # Coding journey
│   └── Contact.jsx        # Contact CTA
├── data/
│   └── portfolio.js       # ← ALL CONTENT HERE
├── hooks/
│   ├── useActiveSection.js
│   └── useSpotlight.js
├── index.css
├── main.jsx
└── App.jsx
```

## Customizing Content

**All content lives in `src/data/portfolio.js`** — edit it to update:
- Personal info, email, social links
- Experience entries
- Projects
- Skills
- Blog posts
- Certifications
- LeetCode stats

## Deploying to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel           # follow prompts
vercel --prod    # deploy to production
```

### Option 2: GitHub Integration
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Framework preset: **Vite**
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click Deploy ✓

## Adding New Blog Posts

In `src/data/portfolio.js`, add to the `blogs` array:
```js
{
  title: "Your Article Title",
  description: "Brief summary...",
  date: "June 2025",
  readTime: "5 min read",
  tags: ["Django", "Backend"],
  url: "https://medium.com/your-article",
  featured: false,
}
```

## Future Enhancements
- Add real GitHub stats via GitHub API
- Connect Medium RSS feed for live blog posts
- Add LeetCode API integration for live stats
- Add a real photo to the About section
- Add dark/light mode toggle
- Add resume PDF download
