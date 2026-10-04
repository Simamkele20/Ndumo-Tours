# Ndumo Tours Angular Frontend

This is a modern Angular application that connects to the Ndumo Tours WordPress REST API.

## Project Structure

```
ndumo-tours-angular/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/           # Homepage component
│   │   │   ├── tours/          # Tours listing component
│   │   │   └── about/          # About page component
│   │   ├── services/
│   │   │   └── wordpress.service.ts  # WordPress API service
│   │   ├── app.component.ts    # Root component with navigation
│   │   └── app.routes.ts       # Route configuration
│   ├── index.html              # HTML template
│   ├── main.ts                 # Application entry point
│   └── styles.scss             # Global styles
├── angular.json                # Angular CLI configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure WordPress API

Edit `src/app/services/wordpress.service.ts` and update the `apiUrl`:

**For Production:**
```typescript
private apiUrl = 'https://ndumotours.com/wp-json/wp/v2';
```

**For Local Development:**
```typescript
private apiUrl = 'http://ndumo-tours.local/wp-json/wp/v2';
```

### 3. Start Development Server

```bash
npm start
```

The application will be available at `http://localhost:4200/`

## Building for Production

```bash
npm run build
```

The optimized build will be output to the `dist/` directory.

## Features

- **Standalone Angular Components** - Modern Angular 18+ standalone API
- **WordPress REST API Integration** - Seamlessly fetch pages, posts, and media
- **Responsive Design** - Mobile-first CSS styling
- **Type Safety** - Full TypeScript interfaces for WordPress data
- **Lazy Loading** - Components and routes are code-split by default
- **Error Handling** - Graceful error states with user feedback

## Components

### HomeComponent
Displays the home page content fetched from WordPress pages with slug "home".

### ToursComponent
Lists all WordPress posts with excerpt and title.

### AboutComponent
Displays the about page from WordPress.

## Service

### WordPressService
Provides methods to:
- Get all pages: `getPages()`
- Get page by slug: `getPageBySlug(slug)`
- Get all posts: `getPosts()`
- Get post by ID: `getPostById(id)`
- Get featured image: `getMediaById(id)`
- Get posts by category: `getPostsByCategory(categoryId)`

## CORS Note

If you get CORS errors when connecting to WordPress:

1. **Local Development**: CORS shouldn't be an issue since both Angular and WordPress run on localhost
2. **Production**: Ensure your WordPress server allows requests from your Angular domain

To enable CORS on WordPress, you might need to add to `wp-config.php`:

```php
header('Access-Control-Allow-Origin: *');
```

Or use a plugin like "CORS Headers" from WordPress.org.

## Environment Configuration

For different environments, create separate API configurations:

```typescript
// environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://ndumotours.com/wp-json/wp/v2'
};

// environment.dev.ts
export const environment = {
  production: false,
  apiUrl: 'http://ndumo-tours.local/wp-json/wp/v2'
};
```

## Troubleshooting

### Blank Page / No Content
- Check browser console for errors
- Verify WordPress REST API is enabled
- Confirm API URL is correct in `wordpress.service.ts`
- Check CORS headers if connecting to different domain

### Module Not Found
- Run `npm install` again
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Build Errors
- Ensure you have Node.js 18+ installed
- Check TypeScript version: `npm list typescript`

## Development Tips

1. **Hot Reload**: Changes are automatically reloaded during `npm start`
2. **Debug**: Use browser DevTools and Angular DevTools extension
3. **Styling**: Global styles in `src/styles.scss`, component styles in individual `.ts` files
4. **API Testing**: Use `curl` or Postman to test WordPress API endpoints directly

## Deployment

### Deploy to Netlify
```bash
npm run build
# Connect dist/ folder to Netlify
```

### Deploy to Vercel
```bash
npm run build
# Connect project to Vercel
```

### Self-Hosted
Copy contents of `dist/ndumo-tours-angular/` to your web server's public directory.

## License

This project is built for Ndumo Tours.
