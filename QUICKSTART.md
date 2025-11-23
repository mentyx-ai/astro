# 🎯 QUICK START GUIDE

## ⚡ 60-Second Deploy

```bash
cd mentyx-astro
npm install
npm run build
vercel deploy
```

Done! Your site is live.

---

## 📧 Contact Form (5 Minutes)

### Step 1: Get Formspree Endpoint
1. Go to: https://formspree.io
2. Sign up (free)
3. Click "New Form"
4. Enter email: `contact@mentyx.ai`
5. Copy endpoint: `https://formspree.io/f/YOUR_ID`

### Step 2: Update Code
Edit `src/layouts/Layout.astro` line 382:

```html
<form id="contactForm" action="YOUR_FORMSPREE_ENDPOINT" method="POST">
```

### Step 3: Test
1. Deploy site
2. Fill contact form
3. Check email

---

## 🖥️ Local Development

```bash
npm run dev
# Visit: http://localhost:4321
```

---

## 🚀 Production Build

```bash
npm run build
npm run preview
```

---

## 🎨 Customize Colors

Edit `src/layouts/Layout.astro` lines 21-26:

```css
:root {
  --primary: #1E7FE5;    /* Blue */
  --accent: #00D4E6;     /* Cyan */
  --bg: #0A1628;         /* Dark Navy */
}
```

---

## 📱 Project Structure

```
mentyx-astro/
├── src/
│   ├── layouts/
│   │   └── Layout.astro        # All styling + scripts
│   └── pages/
│       ├── index.astro         # Homepage
│       ├── contact.html        # Contact page
│       ├── resources.html
│       ├── privacy-policy.html
│       └── terms-of-service.html
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── package.json
├── astro.config.mjs
└── README.md
```

---

## ✅ Features Included

- ✨ Hero section with CTA buttons
- 📊 Stats: 60%, 90%, 24/7
- 🔄 "How It Works" (3 steps)
- 🎬 Demo section
- 💼 Features grid (6 cards)
- 📧 **Working contact form**
- 📱 Fully responsive
- ⚡ AOS animations
- 🎨 Glass morphism design
- 🔒 Form validation

---

## 🐛 Quick Fixes

### Form not working?
1. Check Formspree endpoint
2. Verify browser console (F12)
3. Test with different email

### Styles broken?
1. Clear cache (Ctrl+Shift+R)
2. Check browser console
3. Verify Google Fonts loading

### Build error?
```bash
rm -rf node_modules dist
npm install
npm run build
```

---

## 🌐 Deploy to Vercel

```bash
# Install CLI
npm i -g vercel

# Deploy
vercel

# Add custom domain
# Dashboard → Settings → Domains
```

---

## 📞 Need Help?

- 📧 Email: contact@mentyx.ai
- 📖 Full docs: README.md
- 🚀 Deploy guide: DEPLOYMENT.md

---

**Made with ❤️ for Mentyx.ai**
