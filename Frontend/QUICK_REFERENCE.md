# Ndumo Tours Angular - Development & Deployment Quick Reference

## 🚀 Quick Commands

### Development
```bash
# Install dependencies
npm install

# Start development server (http://localhost:4200)
npm start

# Watch mode (rebuilds on file changes)
npm run watch

# Run tests
npm test
```

### Production
```bash
# Build optimized production bundle
npm run build

# Production build output: dist/ndumo-tours-angular/

# Serve production build locally for testing
npx http-server dist/ndumo-tours-angular -p 8080
```

## 📁 Project Structure

```
ndumo-tours-angular/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/               # Homepage with hero & services
│   │   │   ├── tours/              # Services/tours listing & process
│   │   │   ├── about/              # About page with values & story
│   │   │   └── contact/            # Contact form & info
│   │   ├── services/
│   │   │   └── wordpress.service.ts # WordPress API integration
│   │   ├── app.component.ts        # Root component (nav & footer)
│   │   └── app.routes.ts           # Route configuration
│   ├── environments/
│   │   ├── environment.ts          # Development config
│   │   └── environment.prod.ts     # Production config
│   ├── index.html                  # HTML entry point
│   ├── main.ts                     # Application entry point
│   └── styles.scss                 # Global styles
├── dist/                           # Production build output
├── angular.json                    # Angular CLI config
├── tsconfig.json                   # TypeScript config
├── package.json                    # Dependencies
└── PRODUCTION_DEPLOYMENT.md        # Deployment guide
```

## 🔗 URLs & Endpoints

### Development
- App: http://localhost:4200
- API: http://localhost/wp-json/wp/v2 (local WordPress)

### Production
- App: https://ndumotours.com/
- API: https://ndumotours.com/wp-json/wp/v2

### Contact Information
- Email: info@ndumotours.com
- WhatsApp: https://wa.me/27631344422
- Location: Plumstead, Cape Town, South Africa

## 🔧 Configuration Files

### `angular.json` - Build Configuration
- **outputPath**: `dist/ndumo-tours-angular`
- **Production**: Minified, hashed assets, optimized
- **Development**: Source maps, fast rebuild, debugging

### `environments/environment.ts` - Development
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost/wp-json/wp/v2',
  fallbackApiUrl: 'https://ndumotours.com/wp-json/wp/v2'
};
```

### `environments/environment.prod.ts` - Production
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://ndumotours.com/wp-json/wp/v2',
  fallbackApiUrl: 'https://ndumotours.com/wp-json/wp/v2'
};
```

## 📄 Key Files & Features

### Components

| Component | File | Purpose |
|-----------|------|---------|
| App Root | `app.component.ts` | Navigation, footer, routing |
| Home | `pages/home/home.component.ts` | Hero, services, testimonials |
| About | `pages/about/about.component.ts` | Story, values, how we work |
| Services | `pages/tours/tours.component.ts` | Process steps, why choose us |
| Contact | `pages/contact/contact.component.ts` | Contact form, shuttle info |

### Services

| Service | File | Methods |
|---------|------|---------|
| WordPress | `services/wordpress.service.ts` | getPages(), getPosts(), submitContactForm() |

## 🔄 Form Integration

The contact form is ready but needs backend configuration. Three options:

### 1. Contact Form 7 (Easiest)
Install WordPress plugin, forms work automatically

### 2. Custom WordPress Endpoint
Add REST API endpoint to handle form submissions

### 3. Third-Party Service
- EmailJS
- Sendgrid
- Firebase

## 🎨 Styling

- **Global Styles**: `src/styles.scss`
- **Component Styles**: Inline in each component
- **Color Scheme**:
  - Primary: `#1a5f3d` (forest green)
  - Secondary: `#2e8b57` (lighter green)
  - Accent: `#FFB81C` (gold)
  - Text: `#333` (dark)

## 📊 Build Sizes (Production)

| File | Size | Compressed |
|------|------|-----------|
| main.js | 298.41 kB | 73.51 kB |
| polyfills.js | 34.82 kB | 11.34 kB |
| styles.css | 885 bytes | 365 bytes |
| **Total** | **335.03 kB** | **85.73 kB** |

✅ Within bundle size limits!

## 🧪 Testing & Verification

```bash
# Check for TypeScript errors
npx tsc --noEmit

# Run linting (if ESLint configured)
npm run lint

# Build for production
npm run build

# Test production build locally
npx http-server dist/ndumo-tours-angular
```

## 🚢 Deployment Workflow

1. **Test Locally**
   ```bash
   npm run build
   npx http-server dist/ndumo-tours-angular
   ```

2. **Verify in DevTools**
   - No console errors
   - All images load
   - Navigation works
   - Responsive design OK

3. **Upload to Server**
   - FTP/SFTP to hosting
   - Or use CI/CD pipeline

4. **Configure Web Server**
   - Add .htaccess (Apache) or Nginx config
   - Enable CORS for API

5. **Test Live**
   - Visit https://ndumotours.com
   - Test all pages and forms

## 🐛 Common Issues & Solutions

### Issue: "Cannot find module 'environment'"
**Solution**: Ensure environment files exist in `src/environments/`

### Issue: CORS errors on form submission
**Solution**: Configure CORS on WordPress server

### Issue: Images not loading
**Solution**: Check WordPress CDN is accessible from production domain

### Issue: Form not submitting
**Solution**: Ensure Contact Form 7 or custom endpoint is configured on WordPress

## 📚 Dependencies

```json
{
  "@angular/animations": "^18.0.0",
  "@angular/common": "^18.0.0",
  "@angular/compiler": "^18.0.0",
  "@angular/core": "^18.0.0",
  "@angular/forms": "^18.0.0",
  "@angular/platform-browser": "^18.0.0",
  "@angular/platform-browser-dynamic": "^18.0.0",
  "@angular/router": "^18.0.0",
  "rxjs": "~7.8.0",
  "tslib": "^2.3.0",
  "zone.js": "~0.14.2"
}
```

## 🔗 Useful Links

- [Angular Documentation](https://angular.io/docs)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)
- [Angular Build Optimization](https://angular.io/guide/build)
- [Ndumo Tours Website](https://ndumotours.com/)

---

**Last Updated**: 2026-09-29  
**Status**: ✅ Production Ready
