## Portfolio Project Setup Guide

This is a modern portfolio website built with:
- **Next.js 16** - React framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform (ready to deploy)

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── common/            # Shared components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/          # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
├── data/
│   └── portfolio.ts       # Portfolio content configuration
├── styles/
│   └── globals.css        # Global styles
└── lib/                   # Utility functions (for future use)

public/
└── images/                # Static images folder

```

### Getting Started

1. **Install Dependencies** (already done)
   ```bash
   npm install
   ```

2. **Update Portfolio Data**
   Edit `src/data/portfolio.ts` with your information:
   - Your name and contact details
   - Social media links
   - Skills and experience
   - Projects showcase

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**
   ```bash
   npm run build
   npm run start
   ```

### Features Included

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Hero section with CTA buttons
- ✅ About section with skills
- ✅ Projects showcase
- ✅ Contact form
- ✅ Social media links
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ SEO optimized metadata

### Deployment to Vercel

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Click "Deploy"

Vercel will automatically:
- Detect Next.js project
- Install dependencies
- Build the project
- Deploy your portfolio live

### Customization

**Colors**: Edit Tailwind colors in the components or update `tailwind.config.ts`

**Fonts**: Modify font imports in `src/app/layout.tsx`

**Images**: Add your profile and project images to `public/images/`

**Sections**: Create new section components in `src/components/sections/`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

Happy coding! 🚀
