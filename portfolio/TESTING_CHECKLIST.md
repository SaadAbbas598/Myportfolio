# Portfolio Testing Checklist ✅

## Pre-Deployment Checklist

### 🔍 SEO Verification
- [ ] Check meta tags in browser dev tools
- [ ] Verify Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Test Twitter Cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Validate structured data with [Schema Markup Validator](https://validator.schema.org/)
- [ ] Check robots.txt accessibility
- [ ] Verify sitemap.xml loads correctly
- [ ] Test canonical URLs
- [ ] Run Lighthouse SEO audit (target: 95+)

### 📱 Responsive Testing
- [ ] Test on iPhone SE (320px)
- [ ] Test on iPhone 12/13 (390px)
- [ ] Test on iPhone 14 Pro Max (430px)
- [ ] Test on Samsung Galaxy (360px-412px)
- [ ] Test on iPad (768px)
- [ ] Test on iPad Pro (1024px)
- [ ] Test on MacBook Air (1440px)
- [ ] Test on MacBook Pro 16" (1728px)
- [ ] Test on 1080p display (1920px)
- [ ] Test on 4K display (3840px)
- [ ] Verify no horizontal scroll on any device
- [ ] Test landscape and portrait modes
- [ ] Check touch interactions on mobile

### ⚡ Performance Testing
- [ ] Run Lighthouse Performance audit (target: 90+)
- [ ] Check bundle size: `npm run build` (target: <500KB)
- [ ] Test First Contentful Paint (target: <1.5s)
- [ ] Test Largest Contentful Paint (target: <2.5s)
- [ ] Test Time to Interactive (target: <3.5s)
- [ ] Verify lazy loading works
- [ ] Check service worker registration
- [ ] Test PWA installability
- [ ] Verify offline functionality
- [ ] Check Core Web Vitals

### 🎨 UI/UX Testing
- [ ] Test dark/light theme toggle
- [ ] Verify no theme flash on load
- [ ] Check smooth scrolling between sections
- [ ] Test all animations (60fps)
- [ ] Verify all hover effects work
- [ ] Test mobile menu open/close
- [ ] Check social media links
- [ ] Test "Download CV" button
- [ ] Test "Hire Me" scroll functionality
- [ ] Verify all images load
- [ ] Check custom scrollbar
- [ ] Test keyboard navigation
- [ ] Verify focus indicators

### ♿ Accessibility Testing
- [ ] Run Lighthouse Accessibility audit (target: 95+)
- [ ] Test with screen reader
- [ ] Verify all images have alt text
- [ ] Check color contrast ratios
- [ ] Test keyboard-only navigation
- [ ] Verify ARIA labels present
- [ ] Test with "Reduce Motion" enabled
- [ ] Check heading hierarchy
- [ ] Verify form accessibility

### 🌐 Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Chrome Mobile
- [ ] Safari iOS
- [ ] Samsung Internet

### 🔗 Link Testing
- [ ] Test all internal links
- [ ] Verify external links open in new tab
- [ ] Check social media links work
- [ ] Test email link (if any)
- [ ] Verify all project links
- [ ] Check navigation menu links
- [ ] Test footer links

### 📊 Analytics Testing
- [ ] Verify Google Analytics tracking
- [ ] Test custom analytics script
- [ ] Check page view tracking
- [ ] Verify event tracking
- [ ] Test device identification

### 🔒 Security Checks
- [ ] Check for console errors
- [ ] Verify no sensitive data exposed
- [ ] Test CSP headers (if configured)
- [ ] Check HTTPS redirect
- [ ] Verify secure external links (rel="noopener noreferrer")

### 📝 Content Review
- [ ] Proofread all text content
- [ ] Verify contact information
- [ ] Check project descriptions
- [ ] Review skills list
- [ ] Verify experience timeline
- [ ] Check certificates section
- [ ] Review testimonials

### 🚀 Build & Deploy
- [ ] Run `npm run build` successfully
- [ ] Check build output size
- [ ] Test preview build: `npm run preview`
- [ ] Verify no build warnings
- [ ] Test production build locally
- [ ] Deploy to hosting platform
- [ ] Verify live site loads
- [ ] Test DNS configuration
- [ ] Check SSL certificate
- [ ] Verify CDN configuration (if used)

### 📈 Post-Deployment
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Google Analytics tracking live
- [ ] Check site in incognito mode
- [ ] Test from different geographic locations
- [ ] Monitor error logs
- [ ] Check loading speed with real users
- [ ] Gather initial feedback

## Quick Test Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check bundle size
npm run build && ls -lh dist

# Lighthouse audit (Chrome DevTools)
# 1. Open Chrome DevTools
# 2. Go to Lighthouse tab
# 3. Run audit for all categories
```

## Common Issues & Solutions

### Issue: Port already in use
**Solution**: Change port in vite.config.js or kill existing process

### Issue: Theme flash on load
**Solution**: Check localStorage initialization in colorTheme.jsx

### Issue: Images not loading
**Solution**: Verify image paths and add to public folder

### Issue: Animation performance
**Solution**: Check if hardware acceleration is enabled

### Issue: Service worker not registering
**Solution**: Verify sw.js path and HTTPS connection

## Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Performance | 90+ | Check ✅ |
| Lighthouse SEO | 95+ | Check ✅ |
| Lighthouse Accessibility | 95+ | Check ✅ |
| Lighthouse Best Practices | 95+ | Check ✅ |
| Bundle Size (gzipped) | <500KB | Check ✅ |
| First Contentful Paint | <1.5s | Check ✅ |
| Largest Contentful Paint | <2.5s | Check ✅ |
| Time to Interactive | <3.5s | Check ✅ |
| Total Blocking Time | <200ms | Check ✅ |
| Cumulative Layout Shift | <0.1 | Check ✅ |

## Notes
- Test on real devices when possible
- Use Chrome DevTools device emulation
- Check website in different network conditions (3G, 4G, WiFi)
- Get feedback from others before final deployment
- Monitor performance after deployment

---

**Last Updated**: November 23, 2025
**Status**: Ready for Testing ✅
