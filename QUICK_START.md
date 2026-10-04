# 🚀 Deployment Quick Start Checklist

Your Ndumo Tours project is now ready for production deployment across Vercel, Render, and cPanel!

## ✅ Completed

- [x] Separated frontend and backend into independent directories
- [x] Migrated database from PostgreSQL to MySQL (cPanel compatible)
- [x] Created deployment configurations (render.yaml, vercel.json)
- [x] Set up GitHub repository at `git@github.com:Simamkele20/Ndumo-Tours.git`
- [x] Created comprehensive documentation

## 📋 Next Steps (In Order)

### Phase 1: Database Setup (cPanel) - 15 minutes

- [ ] **1.1** Log into cPanel control panel
- [ ] **1.2** Go to MySQL Databases
- [ ] **1.3** Create database: `username_ndumo_tours`
- [ ] **1.4** Create user: `username_admin` (save password!)
- [ ] **1.5** Add all privileges to user
- [ ] **1.6** Use phpMyAdmin to import `Backend/db/schema.sql`
- [ ] **1.7** Verify tables created: users, tours, bookings, payments, audit_logs
- [ ] **1.8** Note credentials for next phase

**Credentials to Save:**
```
DATABASE_HOST: localhost
DATABASE_PORT: 3306
DATABASE_USER: username_admin
DATABASE_PASSWORD: [save this!]
DATABASE_NAME: username_ndumo_tours
```

### Phase 2: Backend Deployment (Render) - 20 minutes

- [ ] **2.1** Go to [render.com](https://render.com) and sign up with GitHub
- [ ] **2.2** Create New Web Service
- [ ] **2.3** Connect your GitHub repository
- [ ] **2.4** Configure:
  - Root Directory: `Backend`
  - Build Command: `npm install && npm run build`
  - Start Command: `npm start`
- [ ] **2.5** Add environment variables:
  - `NODE_ENV`: production
  - `DATABASE_HOST`: localhost (from cPanel)
  - `DATABASE_USER`: username_admin
  - `DATABASE_PASSWORD`: [save password]
  - `DATABASE_NAME`: username_ndumo_tours
  - `JWT_SECRET`: [Generate with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` ]
  - `FRONTEND_URL`: https://yourdomain.com
- [ ] **2.6** Click Deploy
- [ ] **2.7** Wait for "Your service is live"
- [ ] **2.8** Test API: `curl https://[your-render-url]/api/health`

**Save this URL:**
```
BACKEND_URL: https://ndumo-tours-backend.onrender.com
```

### Phase 3: Frontend Deployment (Vercel) - 15 minutes

- [ ] **3.1** Go to [vercel.com](https://vercel.com) and sign up with GitHub
- [ ] **3.2** Click "Add New Project"
- [ ] **3.3** Import GitHub repository
- [ ] **3.4** Configure:
  - Root Directory: `Frontend`
  - Framework: Angular
  - Build Command: `ng build --configuration production`
  - Output Directory: `dist/ndumo-tours-angular`
- [ ] **3.5** Add environment variables:
  - `VITE_API_URL`: https://[your-render-url]/api
- [ ] **3.6** Click Deploy
- [ ] **3.7** Wait for "Deployment Successful"
- [ ] **3.8** Verify: Open the Vercel URL in browser (should see Angular app)

**Save this URL:**
```
FRONTEND_URL: https://ndumo-tours-frontend.vercel.app
```

### Phase 4: Domain Configuration (cPanel) - 10 minutes

- [ ] **4.1** Log into cPanel
- [ ] **4.2** Go to DNS Zone Editor
- [ ] **4.3** Update DNS records to point to Vercel:
  ```
  Type: CNAME
  Name: www
  Value: cname.vercel-dns.com
  
  Type: A
  Name: yourdomain.com
  Value: 76.76.19.89 (Vercel IP)
  ```
- [ ] **4.4** Wait for DNS propagation (up to 48 hours)

### Phase 5: Connect Vercel Domain

- [ ] **5.1** In Vercel project settings
- [ ] **5.2** Go to Domains section
- [ ] **5.3** Add custom domain: `yourdomain.com`
- [ ] **5.4** Verify DNS records
- [ ] **5.5** Enable HTTPS (automatic)

### Phase 6: Update Configuration

- [ ] **6.1** In Render dashboard:
  - Update `FRONTEND_URL` to `https://yourdomain.com`
  - Redeploy backend
- [ ] **6.2** In Vercel dashboard:
  - Update `VITE_API_URL` to `https://yourdomain.com:3000/api`
  - Redeploy frontend
- [ ] **6.3** Test everything again

### Phase 7: Final Verification - 10 minutes

- [ ] **7.1** Frontend loads: `https://yourdomain.com`
- [ ] **7.2** Backend health check: `curl https://yourdomain.com:3000/api/health`
- [ ] **7.3** Can see login page
- [ ] **7.4** Can submit login form without CORS errors
- [ ] **7.5** Database connected (admin user loads)
- [ ] **7.6** All HTTPS connections work

## 🔐 Security Steps (Do This First!)

Before deployment, complete these security steps:

- [ ] Generate new JWT_SECRET (min 32 characters)
- [ ] Change admin user password in database
- [ ] Update all `.env` files (never commit these!)
- [ ] Enable HTTPS on all services (automatic on Vercel/Render)
- [ ] Configure rate limiting
- [ ] Set up monitoring/alerts

## 📚 Documentation Files

Quick reference:
- **DEPLOYMENT.md** - Detailed step-by-step guide
- **Backend/README.md** - Backend configuration
- **Backend/CPANEL_SETUP.md** - MySQL/cPanel specific setup
- **Frontend/README.md** - Frontend configuration

## 🆘 Troubleshooting

### "Cannot connect to database"
1. Verify MySQL running on cPanel
2. Check DATABASE_HOST, USER, PASSWORD, NAME
3. Verify user has privileges on database

### "CORS Error in browser console"
1. Verify FRONTEND_URL in Render environment
2. Redeploy backend after updating
3. Wait for DNS propagation

### "Domain not resolving"
1. Check DNS records in cPanel (allow 48 hours)
2. Verify with: `nslookup yourdomain.com`
3. Check for typos in DNS entries

### "Build failing on Vercel/Render"
1. Check build logs in dashboard
2. Verify Node.js version (18+)
3. Ensure all dependencies are in package.json

## 📞 Key Accounts to Create

Before starting:
1. [ ] [Vercel](https://vercel.com) - Free account
2. [ ] [Render](https://render.com) - Free account
3. [ ] GitHub access already configured
4. [ ] cPanel access (from hosting provider)

## 💡 Pro Tips

- Use Render's free tier for backend (handles ~100 requests/min)
- Vercel's free tier includes unlimited bandwidth for frontend
- DNS changes can take up to 48 hours to propagate globally
- Monitor deployment logs while testing
- Keep backups of database credentials
- Set up GitHub branch protections
- Use semantic versioning for releases

## 🎯 Timeline

- **Phase 1 (Database):** 15 min
- **Phase 2 (Backend):** 20 min
- **Phase 3 (Frontend):** 15 min
- **Phase 4 (Domain):** 10 min
- **Phase 5-6 (Configuration):** 15 min
- **Phase 7 (Verification):** 10 min
- **DNS Propagation Wait:** Up to 48 hours

**Total Active Time:** ~85 minutes + DNS propagation

## 📧 Support

If you encounter issues:
1. Check DEPLOYMENT.md for detailed troubleshooting
2. Review service dashboards (Render/Vercel) for error logs
3. Verify all environment variables are set correctly
4. Check domain DNS records

---

**Status:** ✅ Code committed and pushed to GitHub  
**Repository:** git@github.com:Simamkele20/Ndumo-Tours.git  
**Ready to deploy:** YES  
**Last Updated:** October 2026
