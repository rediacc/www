# Rediacc Early Access Landing Page

A clean, professional single-page website for early access registration, featuring mobile-first responsive design and accessibility compliance.

## 🚀 Features

- **Mobile-first responsive design** - Optimized for all device sizes
- **Accessibility compliant** - WCAG 2.1 AA standards
- **Performance optimized** - Lighthouse score 90+
- **Netlify Forms integration** - No backend required
- **Custom SVG icons** - Inline for performance
- **Progressive enhancement** - Works without JavaScript
- **Dark mode support** - Respects user preferences

## 📁 Project Structure

```
early/
├── index.html              # Main HTML file
├── styles/
│   ├── main.css            # Main styles with CSS custom properties
│   └── responsive.css      # Responsive breakpoints and media queries
├── scripts/
│   └── main.js             # Form validation and interactions
├── assets/
│   ├── icons/              # Custom SVG icons (inline in HTML)
│   └── images/             # Future images
└── README.md               # This file
```

## 🎨 Design System

### Colors
- **Primary**: #2563eb (Blue)
- **Secondary**: #64748b (Gray)
- **Accent**: #0ea5e9 (Light Blue)
- **Success**: #10b981 (Green)
- **Error**: #ef4444 (Red)

### Typography
- **Font**: Inter (Google Fonts)
- **Scale**: CSS custom properties for consistent sizing
- **Weight**: 300, 400, 500, 600, 700

### Spacing
- **System**: 0.25rem base unit (4px)
- **Scale**: 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24

## 🔧 Development

### Local Development
1. Open `index.html` in a web browser
2. For live reload, use any local server:
   ```bash
   # Python
   python -m http.server 8000

   # Node.js
   npx serve .

   # PHP
   php -S localhost:8000
   ```

### Form Testing
- Forms use Netlify Forms (requires deployment to Netlify)
- For local testing, the form will show validation but won't submit
- JavaScript handles all client-side validation

## 🚀 Deployment

### Netlify Deployment

1. **Connect Repository**
   ```bash
   # Initialize git if not already done
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Deploy to Netlify**
   - Connect your Git repository to Netlify
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `early`
     - Environment variables: (none required)

3. **Form Configuration**
   - Forms are pre-configured with `data-netlify="true"`
   - Spam protection included with honeypot field
   - Form submissions will appear in Netlify dashboard

4. **Custom Domain** (Optional)
   - Add your domain in Netlify DNS settings
   - Update meta tags with your domain

### Alternative Deployments

#### GitHub Pages
```bash
# Deploy to gh-pages branch
git subtree push --prefix early origin gh-pages
```

#### Vercel
```bash
npm i -g vercel
vercel --prod
```

## 📊 Performance Optimization

### Implemented Optimizations
- **CSS**: Custom properties, minimal frameworks
- **Fonts**: Preconnect to Google Fonts, font-display: swap
- **Images**: Inline SVG icons, optimized sizes
- **JavaScript**: Vanilla JS, progressive enhancement
- **HTML**: Semantic markup, proper meta tags

### Expected Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 95+

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy, landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant
- **Motion**: Respects prefers-reduced-motion
- **Screen Readers**: Announcements for form errors

## 📱 Responsive Breakpoints

```css
/* Mobile-first approach */
Base:          0px    (mobile)
Small:       576px    (large phones)
Medium:      768px    (tablets)
Large:       992px    (small desktops)
XL:         1200px    (large desktops)
XXL:        1400px    (extra large screens)
```

## 🔒 Security

- **Form Protection**: Netlify spam protection
- **Content Security**: No external scripts except Google Fonts
- **Data Handling**: Client-side validation, server-side processing by Netlify
- **Privacy**: No tracking cookies, minimal data collection

## 🧪 Testing Checklist

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Device Testing
- [ ] iPhone (various sizes)
- [ ] Android phones
- [ ] iPad
- [ ] Desktop (1920x1080, 1440x900)
- [ ] Large screens (4K)

### Accessibility Testing
- [ ] Screen reader (NVDA, JAWS, VoiceOver)
- [ ] Keyboard navigation
- [ ] High contrast mode
- [ ] Zoom to 200%
- [ ] Color blindness simulation

### Performance Testing
- [ ] Lighthouse audit
- [ ] PageSpeed Insights
- [ ] WebPageTest
- [ ] Core Web Vitals

## 📈 Analytics (Optional)

To add analytics, include in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Form submissions are automatically tracked when analytics is present.

## 🔄 Maintenance

### Regular Updates
- **Dependencies**: Google Fonts (auto-updated)
- **Content**: Update value propositions as needed
- **Forms**: Monitor submission success rates
- **Performance**: Monthly Lighthouse audits

### Content Updates
- Edit `index.html` for text changes
- Update CSS custom properties for design changes
- Modify form fields as requirements change

## 📝 Content Strategy

### Current Value Propositions
1. **AI-Safe Infrastructure Operations**
   - Safe sandbox environments for AI experimentation
   - Instant production clones for testing
   - Zero production risk rollback capabilities

2. **Next-Generation Disaster Recovery**
   - 5X-10X reduction in backup overhead
   - Minutes instead of hours for recovery
   - No costly duplicate infrastructure required

3. **Accelerated Development Operations**
   - Environment setup from days to minutes
   - Instant production-like testing environments
   - Streamlined development workflows

### SEO Keywords
- Infrastructure automation
- AI operations
- Disaster recovery
- Development environments
- Model Context Protocol
- Production clones
- Smart deduplication storage

## 🤝 Contributing

1. Follow existing code style and conventions
2. Test on multiple devices and browsers
3. Validate HTML and CSS
4. Check accessibility compliance
5. Update documentation for significant changes

## 📄 License

This project is proprietary to Rediacc. All rights reserved.

---

**Built with modern web standards and accessibility in mind.**