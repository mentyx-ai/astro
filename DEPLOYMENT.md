# 🚀 MENTYX.AI DEPLOYMENT GUIDE

## 📦 Complete Package Contents

✅ **Homepage:** Full-featured with working contact form
✅ **Contact Form:** Formspree integration (emails to contact@mentyx.ai)
✅ **Additional Pages:** Contact, Resources, Terms, Privacy Policy
✅ **SEO Files:** robots.txt, sitemap.xml
✅ **Styling:** Custom CSS with gradients, glass morphism, animations
✅ **Mobile:** Fully responsive design

---

## ⚡ QUICK DEPLOY OPTIONS

### Option 1: Vercel (Recommended - 2 Minutes)

```bash
cd mentyx-astro

# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: mentyx-astro
# - Directory: ./
# - Deploy? Yes
```

**Custom Domain Setup:**
1. Go to Vercel dashboard
2. Settings → Domains
3. Add: `mentyx.ai`
4. Update DNS records as shown

### Option 2: Netlify (3 Minutes)

```bash
cd mentyx-astro

# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Follow prompts:
# - Create new site
# - Deploy to: dist (after build)
```

**Build Command:** `npm run build`
**Publish Directory:** `dist`

### Option 3: GitHub Pages

```bash
cd mentyx-astro

# Add to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main

# Enable GitHub Pages
# Repository → Settings → Pages
# Source: GitHub Actions
```

Add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 📧 EMAIL SETUP (CRITICAL)

### Current Setup: Formspree

Form endpoint: `https://formspree.io/f/xjkkqyyy`

**To Change Email Recipient:**

1. Visit [formspree.io](https://formspree.io)
2. Sign up (free)
3. Create new form
4. Enter: `contact@mentyx.ai`
5. Copy form endpoint
6. Edit `src/layouts/Layout.astro` line 382:

```html
<form id="contactForm" action="YOUR_NEW_ENDPOINT" method="POST">
```

### Test Form

1. Deploy site
2. Fill form
3. Check email (including spam folder)
4. Confirm emails arrive at contact@mentyx.ai

---

## 🔧 ENVIRONMENT SETUP

### For Local Development

```bash
cd mentyx-astro

# Install dependencies
npm install

# Start dev server
npm run dev

# Visit: http://localhost:4321
```

### For Production Build

```bash
cd mentyx-astro

# Build
npm run build

# Preview production build
npm run preview
```

---

## 🎯 DNS CONFIGURATION

### For mentyx.ai Domain

**Vercel DNS:**
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

**Netlify DNS:**
```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     YOUR-SITE.netlify.app
```

**Cloudflare DNS (Recommended):**
```
Type    Name    Value               Proxy
A       @       YOUR_IP             ✅
CNAME   www     YOUR_DOMAIN.com     ✅
```

---

## 📱 TESTING CHECKLIST

Before going live, test:

- [ ] Homepage loads correctly
- [ ] All sections display properly
- [ ] Contact form opens in modal
- [ ] Form submission works
- [ ] Email arrives at contact@mentyx.ai
- [ ] Success message shows after submit
- [ ] Modal closes after submission
- [ ] Mobile responsive (test on phone)
- [ ] All animations work
- [ ] Navigation links work
- [ ] Footer links work
- [ ] Contact page accessible
- [ ] Terms/Privacy pages load

---

## 🐛 TROUBLESHOOTING

### Form Not Sending Emails

1. Check Formspree endpoint is correct
2. Verify form method is POST
3. Check browser console for errors
4. Test with simple email first
5. Check spam folder

### Styling Issues

1. Clear browser cache
2. Check CSS in Layout.astro loaded
3. Verify Google Fonts loading
4. Test in incognito mode

### Build Errors

1. Delete node_modules
2. Run `npm install` again
3. Check astro version: `npx astro --version`
4. Update if needed: `npm update`

---

## 📊 ANALYTICS SETUP (Optional)

### Google Analytics

Add to `src/layouts/Layout.astro` in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔒 SECURITY CHECKLIST

- [x] Form has validation
- [x] Formspree prevents spam
- [x] HTTPS enforced (via host)
- [x] No sensitive data in repo
- [x] robots.txt configured
- [x] sitemap.xml included

---

## 📞 SUPPORT

Having issues? Contact:
- Email: contact@mentyx.ai
- Check: README.md in project
- Formspree Support: support@formspree.io

---

## ✅ FINAL STEPS

1. ✅ Deploy to hosting platform
2. ✅ Configure custom domain
3. ✅ Test contact form
4. ✅ Verify emails arrive
5. ✅ Test on mobile
6. ✅ Add analytics (optional)
7. ✅ Set up monitoring
8. ✅ Announce launch! 🎉

---

**Created:** November 2025
**Version:** 1.0
**Status:** Production Ready ✅
