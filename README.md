# suvorin.dev

A cutting-edge portfolio website showcasing AI automation solutions with a premium, futuristic design.

## 🚀 Features

- **Modern Design**: Dark mode with cyber-lime accents and glassmorphism effects
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Mobile-First**: Responsive design optimized for all devices
- **Performance**: Optimized for speed with Next.js 14 and App Router
- **Accessibility**: WCAG compliant with keyboard navigation support
- **SEO Optimized**: Meta tags, structured data, and dynamic OG images

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router, RSC, TypeScript)
- **Styling**: TailwindCSS 3.4 + custom design system
- **Animations**: Framer Motion 11
- **UI Components**: shadcn/ui + custom components
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel (optimized)

## 🎨 Design System

### Colors
- **Charcoal**: `#0F1014` (base background)
- **Onyx**: `#1A1C22` (elevated sections)
- **Cyber-lime**: `#CBFF4D` (primary accent/CTA)
- **Electric**: `#6AE3FF` (secondary accent)
- **Steel**: `#8C8F9A` (body text)

### Typography
- **Headings**: Switzer (futuristic, wide)
- **Body**: Inter (clean, readable)

### Effects
- Glassmorphism cards with backdrop blur
- Neon glow effects on hover
- Smooth spring animations
- Cursor follower with neon dot
- Animated noise texture

## 📦 Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Environment Setup

Create a `.env.local` file:

```env
# Notion Integration (optional)
NOTION_KEY=your_notion_integration_key
NOTION_LEADS_DB=your_notion_database_id

# App Configuration
NEXT_PUBLIC_SITE_URL=https://suvorin.dev
```

### 3. Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Run tests
pnpm test
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── api/               # API routes
│       └── lead/          # Lead form endpoint
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services showcase
│   ├── FeaturedCases.tsx # Case studies
│   ├── Process.tsx       # Workflow timeline
│   ├── Testimonials.tsx  # Client testimonials
│   ├── CTA.tsx           # Contact form
│   ├── Navbar.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   ├── CursorFollower.tsx # Custom cursor
│   └── ThemeProvider.tsx # Theme context
├── lib/                   # Utilities
│   ├── utils.ts          # Common utilities
│   ├── notion.ts         # Notion API helper
│   └── case-meta.ts      # Case study metadata
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript types
└── styles/                # Additional styles
```

## 🎯 Key Components

### Hero Section
- Full-viewport design with animated background mesh
- Staggered text animations
- Dual CTA buttons (WhatsApp + Contact form)
- Parallax scroll effects

### Services Grid
- 4 service cards with 3D tilt effects
- Icon ripple animations
- Glassmorphism design
- Hover glow effects

### Case Studies
- Masonry layout with filter pills
- Case thumbnails with hover effects
- Links to detailed MDX pages
- Results showcase

### Process Timeline
- 4-step workflow visualization
- Scroll-linked progress line
- Animated step reveals
- Icon-based design

### Testimonials
- Autoplay carousel with manual controls
- Gradient masks for smooth transitions
- Swipe gestures support
- Rating indicators

## 🔧 Configuration

### TailwindCSS
Custom configuration with:
- Design system colors and fonts
- Custom animations and keyframes
- Glassmorphism utilities
- Responsive breakpoints

### Framer Motion
Spring animations with:
- `mass: 1, stiffness: 110, damping: 18`
- Staggered children animations
- Scroll-triggered reveals
- Hover micro-interactions

### ESLint & Prettier
- Airbnb TypeScript configuration
- Accessibility rules (jsx-a11y)
- Prettier with TailwindCSS plugin
- Git hooks for code quality

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Environment Variables
```env
NOTION_KEY=your_notion_integration_key
NOTION_LEADS_DB=your_notion_database_id
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: <150KB initial JS
- **Image Optimization**: Next.js Image component
- **Font Loading**: Optimized with `display: swap`

## 🔒 Security

- Input validation on all forms
- CSRF protection
- Environment variable validation
- Secure API endpoints
- Content Security Policy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🆘 Support

- **Email**: hello@suvorin.dev
- **WhatsApp**: [Contact via WhatsApp](https://wa.me/971585172288?text=Hi%20Suvorin%2C%20need%20AI%20automation)
- **Issues**: [GitHub Issues](https://github.com/suvorin/portfolio/issues)

---

Built with ❤️ by [suvorin](https://suvorin.dev) 