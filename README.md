# 🚀 Mentyx.ai - Astro Website

Complete Astro migration of Mentyx.ai website with functional contact form.

## ✅ Features

- ✨ Hero section with gradient text & CTA buttons
- 📊 Stats section (60%, 90%, 24/7)
- 🔄 "How It Works" 3-step process
- 🎬 Demo section
- 📧 **Functional contact form** (Formspree integration)
- 🎨 Original design: dark theme, blue/cyan gradients, glass morphism
- 📱 Fully responsive
- ⚡ AOS scroll animations
- 🔒 Form validation & success/error messages

## 🛠️ Setup

### Option 1: Quick Start (No Build Required)

The site works as static HTML/CSS/JS:

```bash
cd mentyx-astro
npx astro dev
```

Visit: `http://localhost:4321`

### Option 2: Production Build

```bash
cd mentyx-astro
npm install
npm run build
npm run preview
```

## 📧 Contact Form Setup

### Current Configuration: Formspree

Form action: `https://formspree.io/f/xjkkqyyy`

**To use YOUR email:**

1. Go to [formspree.io](https://formspree.io)
2. Create free account
3. Create new form
4. Get your form endpoint
5. Replace in `src/layouts/Layout.astro`:

```html
<form id="contactForm" action="YOUR_FORMSPREE_ENDPOINT" method="POST">
```

### Alternative: Netlify Forms

If deploying to Netlify, change form to:

```html
<form 
  id="contactForm" 
  name="contact" 
  method="POST" 
  data-netlify="true"
  netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <!-- rest of form fields -->
</form>
```

## 📦 Deployment

### Vercel

```bash
vercel deploy
```

### Netlify

```bash
netlify deploy --prod
```

### Manual Static

```bash
npm run build
# Upload dist/ folder to any static host
```

## 📁 Structure

```
mentyx-astro/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Main layout with all styling & scripts
│   ├── pages/
│   │   └── index.astro           # Complete homepage
├── astro.config.mjs
├── package.json
└── README.md
```

## 🎨 Design System

- **Primary Color:** `#1E7FE5` (Blue)
- **Accent Color:** `#00D4E6` (Cyan)
- **Background:** `#0A1628` (Dark Navy)
- **Font:** Inter (Google Fonts)
- **Animations:** AOS (Animate On Scroll)

## 📝 Form Fields

- ✅ Full Name (required)
- ✅ Work Email (required)
- ✅ Company Name (required)
- ⭕ Phone Number (optional)
- ⭕ Message (optional)

## 🔧 Customization

### Change Colors

Edit CSS variables in `src/layouts/Layout.astro`:

```css
:root {
  --primary: #1E7FE5;
  --accent: #00D4E6;
  --bg: #0A1628;
}
```

### Change Form Recipient

Update Formspree endpoint in `src/layouts/Layout.astro`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID">
```

## 📱 Mobile Support

Fully responsive with breakpoints:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## ⚡ Performance

- No frameworks (zero bundle size)
- Custom CSS only
- Lazy-loaded AOS animations
- Optimized gradients and animations

## 📄 License

© 2025 Mentyx.ai. All rights reserved.

## 🆘 Support

Email: contact@mentyx.ai
