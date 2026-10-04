# Ndumo Tours - Full Stack Monorepo

A complete tour booking platform with separate frontend and backend deployed across multiple services.

## Project Structure

```
ndumo-tours/
├── Frontend/                # Angular frontend (Deploy to Vercel)
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   ├── vercel.json         # Vercel deployment config
│   └── tsconfig.json
├── Backend/                 # Node.js/Express backend (Deploy to Render)
│   ├── src/
│   ├── db/
│   ├── package.json
│   ├── render.yaml         # Render deployment config
│   ├── vercel.json         # Alternative deployment config
│   └── tsconfig.json
├── .gitignore
└── README.md
```

## Tech Stack

### Frontend
- **Angular** 18+
- **TypeScript**
- **SCSS**
- **Angular Material**
- **Deployed on:** Vercel

### Backend
- **Node.js** 18+
- **Express.js** 4.18+
- **TypeScript**
- **MySQL** 5.7+ (cPanel)
- **Deployed on:** Render

### Infrastructure
- **Database:** MySQL (cPanel Hosting)
- **Frontend Hosting:** Vercel
- **Backend Hosting:** Render
- **Domain Management:** cPanel
- **Authentication:** JWT
- **Payment Gateway:** Yoco (optional)

## Quick Setup

### Local Development

**1. Install Dependencies**
```bash
# Backend
cd Backend
npm install

# Frontend
cd ../Frontend
npm install
```

**2. Environment Setup**

Backend (.env):
```env
NODE_ENV=development
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=password
DATABASE_NAME=ndumo_tours
JWT_SECRET=your_secret_key_min_32_chars
PORT=3000
```

Frontend (environment.ts):
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

**3. Start Development Servers**
```bash
# Terminal 1 - Backend
cd Backend
npm run dev

# Terminal 2 - Frontend
cd Frontend
npm start
```

Access at:
- Frontend: http://localhost:4200
- Backend: http://localhost:3000
- Health check: http://localhost:3000/api/health

## Deployment

### Frontend → Vercel

1. **Connect Repository to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import GitHub repository
   - Select `Frontend` directory

2. **Build Settings**
   - Framework: Angular
   - Build Command: `ng build --configuration production`
   - Output Directory: `dist/ndumo-tours-angular`

3. **Environment Variables**
   ```
   VITE_API_URL=https://yourdomain.com:3000/api
   ```

4. **Domain Setup**
   - Add custom domain in Vercel settings
   - Update cPanel DNS to point to Vercel

### Backend → Render

1. **Create PostgreSQL Database** (Skip if using cPanel MySQL)
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Create → PostgreSQL
   - Note connection string

2. **Create Web Service**
   - Create → New Web Service
   - Connect GitHub repository
   - Select `Backend` directory (if in subdirectory)
   - Runtime: Node
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

3. **Environment Variables**
   ```
   NODE_ENV=production
   DATABASE_HOST=your_cpanel_host
   DATABASE_PORT=3306
   DATABASE_USER=cpanel_user
   DATABASE_PASSWORD=cpanel_password
   DATABASE_NAME=cpanel_dbname
   JWT_SECRET=your_strong_secret
   FRONTEND_URL=https://yourdomain.com
   ```

4. **Deploy**
   - Render will automatically deploy from GitHub

### Database → cPanel

1. **Create MySQL Database**
   - Log into cPanel
   - Go to MySQL Databases
   - Create database and user
   - Note credentials

2. **Import Schema**
   - Go to phpMyAdmin
   - Select database
   - Import `Backend/db/schema.sql`

3. **Update Backend Environment**
   - Set DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME
   - Deploy to Render

### Domain → cPanel

1. **Update DNS Records**
   - In cPanel → DNS Zone Editor
   - Add/Update CNAME record:
     ```
     www  CNAME  cname.vercel-dns.com
     ```
   - Add A record for root domain pointing to Vercel

2. **Configure CORS**
   - Update `Backend/.env`:
     ```
     FRONTEND_URL=https://yourdomain.com
     ```

## Deployment Architecture

```
┌─────────────────┐
│  yourdomain.com │
└────────┬────────┘
         │
    ┌────┴───────────────────┐
    │                         │
┌───▼──────────────┐   ┌─────▼─────────────┐
│ Vercel (CDN)     │   │ Render (Backend)  │
│ Angular Frontend │   │ Node.js API       │
└───────┬──────────┘   └────────┬──────────┘
        │                       │
        │    API Calls          │
        └──────────────────────┘
                       │
                  ┌────▼──────────┐
                  │ cPanel MySQL   │
                  │ Database       │
                  └────────────────┘
```

## Security Checklist

- ✅ Never commit `.env` files
- ✅ Use strong JWT_SECRET (32+ chars)
- ✅ Enable HTTPS on all services
- ✅ Configure CORS properly
- ✅ Use strong database passwords
- ✅ Keep dependencies updated
- ✅ Use environment variables for secrets
- ✅ Regular database backups

## Troubleshooting

### CORS Errors
- Check FRONTEND_URL in Backend .env
- Verify domain is whitelisted in app.ts

### Database Connection Errors
- Verify DATABASE_HOST, USER, PASSWORD
- Ensure cPanel MySQL is running
- Check firewall rules allow port 3306

### Build Failures
- Check Node.js version compatibility
- Verify all dependencies installed
- Check environment variables set

## File Structure Details

See individual README files:
- [Frontend README](Frontend/README.md)
- [Backend README](Backend/README.md)
- [cPanel Setup Guide](Backend/CPANEL_SETUP.md)

## Environment Variables

### Backend Required
- `NODE_ENV` - development/production
- `DATABASE_HOST` - MySQL host
- `DATABASE_PORT` - MySQL port (3306)
- `DATABASE_USER` - MySQL user
- `DATABASE_PASSWORD` - MySQL password
- `DATABASE_NAME` - Database name
- `JWT_SECRET` - JWT signing secret (32+ chars)
- `PORT` - Backend port (3000)

### Backend Optional
- `FRONTEND_URL` - Production frontend URL
- `YOCO_API_KEY` - Payment gateway key
- `YOCO_SECRET_KEY` - Payment gateway secret

### Frontend Required
- `VITE_API_URL` - Backend API URL

## Contributing

1. Create feature branch: `git checkout -b feature/my-feature`
2. Commit changes: `git commit -am 'Add feature'`
3. Push branch: `git push origin feature/my-feature`
4. Create Pull Request on GitHub

## Deployment Workflow

```bash
# 1. Make changes
git add .
git commit -m "Feature: description"
git push origin main

# 2. Services auto-deploy
# Vercel watches Frontend/ for changes
# Render watches Backend/ for changes

# 3. Verify deployment
curl https://yourdomain.com/api/health
curl https://yourdomain.com/
```

## Support & Documentation

- [Vercel Docs](https://vercel.com/docs)
- [Render Docs](https://render.com/docs)
- [cPanel Docs](https://documentation.cpanel.net/)
- [Angular Docs](https://angular.io/docs)
- [Express Docs](https://expressjs.com)
- [MySQL Docs](https://dev.mysql.com/doc/)

---

**Last Updated:** October 2026  
**Version:** 1.0.0  
**Maintained by:** Ndumo Tours Team
