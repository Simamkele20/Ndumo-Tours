# Ndumo Tours - Deployment Guide

Complete step-by-step guide for deploying Ndumo Tours across Vercel, Render, and cPanel.

## Table of Contents
1. [GitHub Setup](#github-setup)
2. [cPanel Database Setup](#cpanel-database-setup)
3. [Backend Deployment (Render)](#backend-deployment-render)
4. [Frontend Deployment (Vercel)](#frontend-deployment-vercel)
5. [Domain Configuration](#domain-configuration)
6. [Post-Deployment Verification](#post-deployment-verification)

## GitHub Setup

### 1. Initialize Repository

```bash
cd ~/Local Sites/ndumo-tours
git init
git remote add origin git@github.com:Simamkele20/Ndumo-Tours.git
git branch -M main
```

### 2. Create .gitignore

Already created at root level. Covers:
- node_modules/
- .env files
- IDE settings
- Build artifacts

### 3. First Commit & Push

```bash
git add .
git commit -m "Initial commit: Separate frontend/backend, migrate PostgreSQL to MySQL"
git push -u origin main
```

## cPanel Database Setup

### Step 1: Create MySQL Database

1. Log into cPanel
2. Navigate to **MySQL Databases**
3. Create database: `username_ndumo_tours`
4. Create user: `username_admin` with strong password
5. Add all privileges to user

### Step 2: Import Schema

**Option A: Using phpMyAdmin**
1. Go to phpMyAdmin in cPanel
2. Select database
3. Click **Import** tab
4. Choose `Backend/db/schema.sql`
5. Click **Go**

**Option B: SSH Command**
```bash
ssh user@yourdomain.com
cd /path/to/ndumo-tours-backend
mysql -h localhost -u username_admin -p username_ndumo_tours < db/schema.sql
# Enter password when prompted
```

### Step 3: Note Credentials

Save these for Render deployment:
```
Database Host: localhost
Database Name: username_ndumo_tours
Database User: username_admin
Database Password: [saved_password]
Database Port: 3306
```

## Backend Deployment (Render)

### Step 1: Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up with GitHub account
3. Authorize Ndumo Tours repository

### Step 2: Connect Repository

1. Dashboard → **New** → **Web Service**
2. Connect GitHub repository: `Simamkele20/Ndumo-Tours`
3. Select GitHub account (authenticate if needed)
4. Choose repository

### Step 3: Configure Build Settings

- **Name:** `ndumo-tours-backend`
- **Environment:** `Node`
- **Branch:** `main`
- **Build Command:**
  ```
  npm install && npm run build
  ```
- **Start Command:**
  ```
  npm start
  ```
- **Root Directory:** `Backend` (if asked)

### Step 4: Set Environment Variables

In Render dashboard, add these:

| Key | Value | Sync |
|-----|-------|------|
| NODE_ENV | production | ❌ |
| DATABASE_HOST | localhost | ✅ |
| DATABASE_PORT | 3306 | ❌ |
| DATABASE_USER | username_admin | ✅ |
| DATABASE_PASSWORD | [password] | ✅ |
| DATABASE_NAME | username_ndumo_tours | ✅ |
| JWT_SECRET | [32+ char random string] | ✅ |
| FRONTEND_URL | https://yourdomain.com | ❌ |
| PORT | 3000 | ❌ |

**Generate JWT_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 5: Deploy

1. Click **Create Web Service**
2. Render will automatically build and deploy
3. Wait for "Your service is live" message
4. Note your Render URL: `https://ndumo-tours-backend.onrender.com`

### Step 6: Verify Backend

```bash
curl https://ndumo-tours-backend.onrender.com/api/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "Ndumo Tours API is running"
}
```

## Frontend Deployment (Vercel)

### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Authorize repository access

### Step 2: Import Project

1. Dashboard → **Add New** → **Project**
2. Import GitHub repository: `Simamkele20/Ndumo-Tours`
3. Select GitHub account

### Step 3: Configure Project

When prompted for project settings:

- **Project Name:** `ndumo-tours-frontend`
- **Framework:** `Angular`
- **Root Directory:** `Frontend`
- **Build Command:** `ng build --configuration production`
- **Output Directory:** `dist/ndumo-tours-angular`
- **Install Command:** `npm install`

### Step 4: Set Environment Variables

Add to Vercel:

| Key | Value |
|-----|-------|
| VITE_API_URL | https://ndumo-tours-backend.onrender.com/api |

Once you have your cPanel domain pointing to Vercel, update this to:
```
VITE_API_URL=https://yourdomain.com:3000/api
```

### Step 5: Deploy

1. Click **Deploy**
2. Wait for "Deployment Successful" message
3. Vercel provides temporary domain: `ndumo-tours-frontend.vercel.app`

### Step 6: Verify Frontend

1. Open `https://ndumo-tours-frontend.vercel.app` in browser
2. Should see Angular application
3. Try logging in (should connect to backend)

## Domain Configuration

### Step 1: Update DNS Records in cPanel

In cPanel → **DNS Zone Editor**, update these records:

```
Type      Name                    Value
-------   ----------------------  ---------------------
CNAME     www                     cname.vercel-dns.com
A         yourdomain.com         76.76.19.89 (Vercel IP)
```

Or use Vercel's recommended setup:

```
Type      Name                    Value
-------   ----------------------  ---------------------
CNAME     yourdomain.com          cname.vercel-dns.com
CNAME     www.yourdomain.com      cname.vercel-dns.com
```

### Step 2: Connect Domain in Vercel

1. In Vercel dashboard, go to project settings
2. **Domains** → Add domain
3. Enter `yourdomain.com`
4. Verify DNS changes (may take 5 min to 48 hours)

### Step 3: Update Backend CORS

Edit `.env` on Render (via Render dashboard):

```
FRONTEND_URL=https://yourdomain.com
FRONTEND_DEV_URL=https://yourdomain.com
```

Redeploy backend after updating.

### Step 4: Update Frontend API URL

In Vercel environment variables:
```
VITE_API_URL=https://yourdomain.com:3000/api
```

Redeploy frontend.

### Step 5: Test HTTPS Connection

```bash
# Test frontend
curl https://yourdomain.com/

# Test backend
curl https://yourdomain.com:3000/api/health
```

## Post-Deployment Verification

### Checklist

- [ ] Frontend accessible at `https://yourdomain.com`
- [ ] Backend API responds at `https://yourdomain.com:3000/api/health`
- [ ] HTTPS working on both services
- [ ] Login page loads
- [ ] Can submit login form
- [ ] CORS errors not appearing in console
- [ ] Database tables exist and are accessible
- [ ] Sample tour data loaded in database

### Test Endpoints

**Health Check:**
```bash
curl https://yourdomain.com:3000/api/health
```

**Register User:**
```bash
curl -X POST https://yourdomain.com:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "name": "Test User",
    "phone": "0123456789"
  }'
```

**Login:**
```bash
curl -X POST https://yourdomain.com:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@ndumotours.com",
    "password": "admin123"
  }'
```

## Continuous Deployment

### GitHub → Services

```
GitHub (main branch)
    ↓
    ├→ Render (watches Backend/)
    └→ Vercel (watches Frontend/)
```

Every time you push to GitHub:
1. Push changes: `git push origin main`
2. Vercel auto-deploys Frontend
3. Render auto-deploys Backend
4. Services are live within 1-5 minutes

### Monitoring Deployments

**Vercel:**
- Dashboard → Project → Deployments tab
- Shows build logs and deployment status

**Render:**
- Dashboard → Service → Logs tab
- Shows build and runtime logs

## Rollback Procedures

### If Frontend Breaks

1. In Vercel: Deployments → Select previous version → Click "Redeploy"
2. Or push rollback commit: `git revert HEAD && git push`

### If Backend Breaks

1. In Render: Logs → Find last successful build → Redeploy
2. Or push rollback commit and wait for auto-deployment

## Troubleshooting

### "Cannot reach backend API"
1. Verify backend running: `curl https://yourdomain.com:3000/api/health`
2. Check CORS headers: FRONTEND_URL must match domain
3. Check environment variables are set correctly

### "Database connection refused"
1. Verify cPanel MySQL running
2. Test connection: `mysql -h localhost -u user -p database`
3. Verify credentials in Render environment variables

### "CORS Error"
1. Check FRONTEND_URL in backend .env
2. Redeploy backend after updating
3. Wait for DNS propagation (up to 48 hours)

### "Domain not resolving"
1. DNS changes can take up to 48 hours
2. Test with: `nslookup yourdomain.com`
3. Check cPanel DNS Zone Editor for typos

### "SSL Certificate Error"
1. Vercel: Automatic (no action needed)
2. Backend: May need to wait for cert provisioning
3. Check Render dashboard for SSL status

## Performance Optimization

### Frontend
- Vercel provides global CDN (automatic)
- Production build enabled by default
- Enable caching in vercel.json

### Backend
- Use connection pooling (already configured)
- Add database indexes (included in schema)
- Enable gzip compression

### Database
- Regular backups via cPanel
- Monitor query performance
- Archive old data periodically

## Security Hardening

### Before Production
- [ ] Change admin password (in database)
- [ ] Rotate JWT_SECRET
- [ ] Enable HTTPS everywhere
- [ ] Update CORS whitelist
- [ ] Configure rate limiting
- [ ] Set up monitoring/alerts
- [ ] Enable database backups
- [ ] Review authentication flows

## Support

For issues, refer to:
- [Frontend README](../Frontend/README.md)
- [Backend README](../Backend/README.md)
- [cPanel Setup Guide](../Backend/CPANEL_SETUP.md)

---

**Last Updated:** October 2026
