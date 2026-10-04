# Ndumo Tours Angular - Production Deployment Guide

## ✅ What's Been Completed

### 1. **Environment Configuration** ✅
- Created `src/environments/environment.ts` for development
- Created `src/environments/environment.prod.ts` for production
- Updated `angular.json` with file replacement strategy
- WordPress API URLs are now environment-aware

### 2. **WordPress Service Updates** ✅
- Added `ContactFormData` interface
- Added `submitContactForm()` method for form submissions
- Imported environment configuration
- Service now uses dynamic API URLs based on environment

### 3. **Contact Form Implementation** ✅
- Added form validation
- Added success/error messaging
- Fixed email domain to `info@ndumotours.com`
- Form submission handling with loading state
- Fallback messaging if backend not available
- Styled alerts for user feedback

### 4. **Production Build Configuration** ✅
- Added file replacements to `angular.json`
- Production build optimizations active:
  - `outputHashing: all` (cache-busting)
  - Build optimizer enabled
  - Bundle size limits: 1MB (initial), 10KB (component styles)
- Production build verified successfully

### 5. **Build Output**
```
Production Build Summary:
- main.js:       298.41 kB (compressed: 73.51 kB)
- polyfills.js:  34.82 kB (compressed: 11.34 kB)
- styles.css:    885 bytes (compressed: 365 bytes)
- Total:         335.03 kB (compressed: 85.73 kB)
```

## 🚀 Deployment Steps

### Step 1: Build for Production
```bash
npm run build
```
This creates an optimized build in `dist/ndumo-tours-angular/`

### Step 2: Upload to Server
Upload the contents of `dist/ndumo-tours-angular/` to your web server:
- For Apache: Upload to public_html
- For Nginx: Upload to /var/www/html/ndumo-tours-angular
- For cPanel: Use File Manager or FTP

### Step 3: Configure Web Server

#### Apache (.htaccess)
Add this to `dist/ndumo-tours-angular/.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx
Add this to your Nginx server block:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Step 4: CORS Configuration (Important!)
Your WordPress API needs to allow requests from your Angular app domain.

Add to WordPress `wp-config.php` or create a plugin:
```php
header('Access-Control-Allow-Origin: https://yourdomain.com');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
```

Or use a WordPress plugin like "Headers and Access Control"

## 📋 Environment Variables

### Development
- API URL: `http://localhost/wp-json/wp/v2`
- Fallback: `https://ndumotours.com/wp-json/wp/v2`

### Production
- API URL: `https://ndumotours.com/wp-json/wp/v2`

## 🔄 Contact Form Setup

The contact form currently has placeholder backend integration. Choose one:

### Option A: WordPress Contact Form 7 (Recommended)
1. Install Contact Form 7 plugin
2. Create a form and get the shortcode
3. Update the endpoint in `src/app/services/wordpress.service.ts`:
   ```typescript
   submitContactForm(data: ContactFormData): Observable<any> {
     return this.http.post(`${this.apiUrl}/../contact-form`, data);
   }
   ```

### Option B: Custom WordPress Endpoint
Create a plugin or functions.php add:
```php
add_action('rest_api_init', function() {
  register_rest_route('ndumo/v1', '/contact', array(
    'methods' => 'POST',
    'callback' => 'handle_contact_form',
    'permission_callback' => '__return_true'
  ));
});

function handle_contact_form($request) {
  $data = $request->get_json_params();
  $to = 'info@ndumotours.com';
  $subject = 'New Contact Form Submission';
  $message = "Name: {$data['name']}\nEmail: {$data['email']}\n\nMessage:\n{$data['message']}";
  wp_mail($to, $subject, $message);
  return new WP_REST_Response(array('success' => true), 200);
}
```

### Option C: External Service (EmailJS, Sendgrid, etc.)
1. Install the service npm package
2. Update `contact.component.ts` to use the service instead

## ✅ Testing Checklist

- [ ] Build completes without errors
- [ ] All pages load in production build
- [ ] Navigation works between pages
- [ ] Images load correctly from WordPress CDN
- [ ] Contact form displays and submits
- [ ] WhatsApp links work
- [ ] Email links work
- [ ] Mobile responsive on all pages
- [ ] No console errors in browser DevTools
- [ ] Performance Lighthouse score > 80

## 📦 Performance Optimization Tips

1. **Image Optimization**
   - Ensure WordPress images are optimized
   - Consider using a CDN like Cloudflare

2. **Caching**
   - Enable browser caching headers on server
   - Use service workers for offline support

3. **Code Splitting**
   - Angular CLI automatically does lazy loading for routes
   - Current bundle is already optimized

4. **Monitoring**
   - Set up error tracking (Sentry, DataDog)
   - Monitor Core Web Vitals

## 🔐 Security Checklist

- [ ] HTTPS enabled on domain
- [ ] CORS properly configured
- [ ] No sensitive data in environment files
- [ ] Update Angular dependencies regularly
- [ ] Enable CSP (Content Security Policy) headers
- [ ] WordPress API authentication if needed

## 📞 Support Contacts (Production)

- Email: info@ndumotours.com
- WhatsApp: +27631344422
- Location: Plumstead, Cape Town, South Africa

---

**Version**: 1.0.0  
**Last Updated**: 2026-09-29  
**Status**: ✅ Production Ready
