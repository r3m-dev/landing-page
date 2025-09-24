# R3M.dev Landing Page

A modern, professional landing page built with Astro and customized to showcase R3M development services. This site features a clean design, dark theme, and responsive layout optimized for showcasing technical expertise and project portfolio.

## 🌟 About

This landing page serves as the main web presence for R3M.dev, highlighting:

- **Professional Services**: Software development, consulting, and technical expertise
- **Portfolio Showcase**: Featured projects and technical achievements
- **Skills & Experience**: Comprehensive overview of technical capabilities
- **Contact Information**: Easy ways to get in touch for collaboration

## 🛠️ Built With

This site is built using the **Astro + Starwind UI Blog Template** with extensive customizations:

- **[Astro](https://astro.build)**: Modern static site generator with excellent performance
- **[Tailwind CSS v4](https://tailwindcss.com)**: Utility-first CSS framework with design system
- **[Starwind UI](https://starwind.dev)**: Professional UI patterns and theming system
- **TypeScript**: Type-safe development with enhanced developer experience

### Template Features Used

- ✅ Static site generation with Astro for optimal performance
- ✅ Dark theme with CSS variables and professional styling
- ✅ Responsive design optimized for all devices
- ✅ Component-based architecture with reusable UI elements
- ✅ SEO optimization with meta tags, OpenGraph, and structured data
- ✅ Modern development workflow with TypeScript and ESLint

## 🚀 Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev
# Opens http://localhost:4321

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── sections/       # Page sections (Header, Hero, Skills, etc.)
│   └── ui/            # Base UI components (Button, Card, etc.)
├── data/              # Content data (skills, projects, experience)
├── pages/             # Site pages and routing
├── styles/            # Global styles and theme configuration
└── assets/            # Images, icons, and static assets
```

## 🎨 Customization

The site uses a centralized data approach for easy content management:

- **Skills**: Edit `src/data/skills.ts` to update technical capabilities
- **Work Experience**: Modify `src/data/work.ts` for career history
- **Projects**: Update `src/data/projects.ts` to showcase portfolio items
- **Styling**: Customize themes in `src/styles/` directory

## 📄 Template Documentation

For detailed information about the underlying template features, development patterns, and customization options, see [`ASTRO_TEMPLATE.md`](./ASTRO_TEMPLATE.md).

## 🌐 Deployment

This site is optimized for deployment on:

- **Netlify** (recommended)
- **Vercel**
- **GitHub Pages**
- **Cloudflare Pages**

## 📞 Contact

For inquiries about R3M development services, please visit the contact section on the live site.

---

Built with ❤️ using Astro and modern web technologies.
