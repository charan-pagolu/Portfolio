# 🚀 Portfolio Deployment Guide

## Quick Deploy with Vercel (Recommended)

### Prerequisites
- GitHub account
- Portfolio code pushed to GitHub repository

### Steps:

1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your portfolio repository**
5. **Configure project:**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **Click "Deploy"**
7. **Done!** Your portfolio will be live at `yourname.vercel.app`

### Custom Domain (Optional)
- Add your custom domain in Vercel settings
- Update DNS records as instructed

## Alternative: Netlify

1. **Go to [Netlify.com](https://netlify.com)**
2. **Sign up with GitHub**
3. **"New site from Git"**
4. **Choose your repository**
5. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **Deploy site**

## Alternative: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   "deploy": "gh-pages -d dist",
   "predeploy": "npm run build"
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages** in repository settings

## Your Portfolio Features
- ✅ Responsive design
- ✅ Light/Dark mode
- ✅ Professional project showcase
- ✅ Contact form
- ✅ SEO optimized

## Live Examples
- **Personal Domain**: `yourname.com`
- **Vercel**: `yourname.vercel.app`
- **Netlify**: `yourname.netlify.app`
- **GitHub Pages**: `yourname.github.io/portfolio`

---
**Need help?** Contact: pagolucharan21@gmail.com 