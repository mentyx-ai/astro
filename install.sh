#!/bin/bash

# 🚀 MENTYX.AI ASTRO - COMPLETE INSTALLATION SCRIPT
# Run this to set up everything automatically

echo "🚀 Starting Mentyx.ai Astro installation..."

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check Node.js
echo -e "\n${BLUE}[1/5]${NC} Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}Node.js not found. Please install Node.js 18+ from nodejs.org${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Node.js found: $(node --version)${NC}"

# Step 2: Install dependencies
echo -e "\n${BLUE}[2/5]${NC} Installing dependencies..."
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}"

# Step 3: Build project
echo -e "\n${BLUE}[3/5]${NC} Building project..."
npm run build
echo -e "${GREEN}✓ Build completed${NC}"

# Step 4: Create env template
echo -e "\n${BLUE}[4/5]${NC} Creating configuration template..."
cat > .env.example << 'EOF'
# Formspree Configuration
# Get your endpoint from https://formspree.io
FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Optional: Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
EOF
echo -e "${GREEN}✓ Configuration template created (.env.example)${NC}"

# Step 5: Display next steps
echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✓ Installation Complete!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

echo -e "\n${BLUE}📋 Next Steps:${NC}"
echo -e "1. Configure contact form:"
echo -e "   - Visit ${YELLOW}https://formspree.io${NC}"
echo -e "   - Create account and new form"
echo -e "   - Update endpoint in ${YELLOW}src/layouts/Layout.astro${NC} (line 382)"
echo -e ""
echo -e "2. Start development server:"
echo -e "   ${YELLOW}npm run dev${NC}"
echo -e ""
echo -e "3. Deploy to production:"
echo -e "   ${YELLOW}npm run build${NC}"
echo -e "   Then deploy ${YELLOW}dist/${NC} folder to your hosting"
echo -e ""
echo -e "4. Quick deploy options:"
echo -e "   • Vercel: ${YELLOW}vercel${NC}"
echo -e "   • Netlify: ${YELLOW}netlify deploy${NC}"
echo -e ""
echo -e "${BLUE}📖 Documentation:${NC}"
echo -e "   • README.md - Project overview"
echo -e "   • DEPLOYMENT.md - Detailed deployment guide"
echo -e ""
echo -e "${GREEN}🎉 Your site is ready to launch!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
