# cPanel Database Setup Guide for Ndumo Tours

This guide walks you through setting up the Ndumo Tours backend with a cPanel-hosted MySQL database.

## Prerequisites

- Active cPanel hosting account (Bluehost, HostGator, SiteGround, Namecheap, etc.)
- SSH access (optional, for command-line setup)
- MySQL 5.7 or higher

## Step 1: Create MySQL Database in cPanel

### Method A: Using cPanel Database Wizard

1. **Log in to cPanel**
   - Go to your hosting provider's control panel
   - Enter your cPanel username and password

2. **Create Database**
   - Navigate to **Databases** section
   - Click **MySQL Databases** or **Database Wizard**
   - Enter a database name (e.g., `ndumo_tours`)
   - cPanel will prefix it with your username (e.g., `user_ndumo_tours`)
   - Click **Create Database**

3. **Create Database User**
   - In the **MySQL Users** section, click **Add User**
   - Username: Create a username (e.g., `ndumoadmin`)
   - Password: Generate a strong password or create one
   - Save the credentials in a secure location
   - Click **Create User**

4. **Assign User to Database**
   - In **MySQL User Privileges** section
   - Select the user and database you just created
   - Give all privileges (check ALL boxes) or at least:
     - SELECT, INSERT, UPDATE, DELETE
     - CREATE, ALTER, DROP
     - INDEX
   - Click **Change Privileges**

### Method B: Using phpMyAdmin

1. **Access phpMyAdmin**
   - In cPanel, find **phpMyAdmin** in the Databases section
   - Click to open phpMyAdmin

2. **Create Database**
   - Click **New** on the left sidebar
   - Enter database name (e.g., `ndumo_tours`)
   - Leave Collation as default
   - Click **Create**

3. **Create User**
   - Go to **User accounts** tab
   - Click **Add user account**
   - Fill in:
     - User name: `ndumoadmin`
     - Host name: `localhost`
     - Password: Generate strong password
     - Repeat password: Confirm
   - Under **Database for user account**, select your database
   - Give database-specific privileges (ALL)
   - Click **Go**

## Step 2: Get Your Database Credentials

From cPanel, note down:

```
Database Host: localhost
Database Name: user_ndumo_tours (from cPanel)
Database User: user_ndumoadmin (from cPanel)
Database Password: your_strong_password
Database Port: 3306 (default)
```

**Important:** The full database name and user will be prefixed with your cPanel username.

## Step 3: Import Database Schema

### Option A: Using phpMyAdmin

1. Open phpMyAdmin
2. Select your database from the left sidebar
3. Click the **Import** tab
4. Click **Choose File**
5. Select `/db/schema.sql` from your backend folder
6. Click **Go/Import**
7. Wait for the import to complete (you should see all tables created)

### Option B: Using SSH Command Line

If you have SSH access:

```bash
# Connect via SSH
ssh username@yourdomainname.com

# Navigate to backend directory
cd /home/username/your-backend-path

# Import schema
mysql -h localhost -u user_ndumoadmin -p user_ndumo_tours < db/schema.sql

# Enter password when prompted
```

### Option C: Upload via File Manager

1. In cPanel, go to **File Manager**
2. Navigate to your backend directory
3. Use phpMyAdmin in cPanel to import the schema.sql file (Option A)

## Step 4: Configure Environment Variables

### Create `.env` File

In your backend root directory, create or update `.env` file with:

```env
# MySQL Database Configuration (cPanel)
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=user_ndumoadmin
DATABASE_PASSWORD=your_strong_password
DATABASE_NAME=user_ndumo_tours

# Server Configuration
NODE_ENV=production
PORT=3000

# JWT Configuration
JWT_SECRET=your_very_secure_random_secret_key_here_min_32_chars
JWT_EXPIRE=7d

# Frontend Configuration (CORS)
FRONTEND_URL=https://yourdomain.com
FRONTEND_DEV_URL=http://localhost:4200

# Yoco Payment Gateway (optional)
YOCO_API_KEY=your_yoco_api_key
YOCO_SECRET_KEY=your_yoco_secret_key
```

**⚠️ IMPORTANT:** Never commit `.env` file to GitHub. Keep it only on cPanel server.

## Step 5: Test Database Connection

### Command Line Test

```bash
# From SSH terminal
mysql -h localhost -u user_ndumoadmin -p user_ndumo_tours

# Once connected, test:
SHOW TABLES;
SELECT * FROM users LIMIT 1;
```

### Via Node.js

```bash
# Create a test file: test-db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'user_ndumoadmin',
  password: 'your_strong_password',
  database: 'user_ndumo_tours',
  port: 3306,
});

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    await connection.ping();
    console.log('✅ Database connected successfully!');
    connection.release();
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  }
}

testConnection();
```

Run it:
```bash
node test-db.js
```

## Step 6: Deploy Backend

### If Using cPanel Node.js Support

1. In cPanel, go to **Setup Node.js App**
2. Create new Node.js app pointing to your backend directory
3. Set Node.js version to 18+
4. Application startup file: `src/server.ts`
5. Once created, cPanel will show:
   - Application URL
   - Application Node.js version
   - Application root directory

### If Using Traditional Hosting (Manual Start)

```bash
# SSH into your server
ssh username@yourdomainname.com

# Navigate to backend
cd /path/to/ndumo-tours-backend

# Install dependencies
npm install

# Build TypeScript
npm run build

# Start server (with PM2 for persistence)
npm install -g pm2
pm2 start dist/server.js --name "ndumo-api"
pm2 startup
pm2 save
```

## Step 7: Verify API is Running

```bash
# Test health endpoint
curl https://yourdomain.com:3000/api/health

# Or from your frontend:
fetch('https://yourdomain.com:3000/api/health')
  .then(r => r.json())
  .then(data => console.log('API Status:', data))
```

## Troubleshooting

### Error: "Can't connect to MySQL server on 'localhost'"

- **Cause:** Database not created or wrong credentials
- **Solution:** 
  1. Double-check database and user exist in cPanel
  2. Verify password is correct
  3. Ensure user has privileges for the database

### Error: "Access denied for user"

- **Cause:** Wrong username or password
- **Solution:**
  1. Reset password in cPanel → MySQL Users
  2. Update `.env` file with new credentials
  3. Test connection again

### Error: "Unknown database 'user_ndumo_tours'"

- **Cause:** Database not created yet
- **Solution:**
  1. Go back to Step 1 and create database
  2. Verify the exact name with prefix (usually `username_dbname`)
  3. Update `.env` with correct name

### Error: "Table doesn't exist"

- **Cause:** Schema not imported
- **Solution:**
  1. Go to Step 3 and import schema.sql using phpMyAdmin
  2. Verify all tables exist: `SHOW TABLES;`

### API not accessible from frontend

- **Cause:** CORS not configured or wrong URL
- **Solution:**
  1. Update `FRONTEND_URL` in `.env`
  2. Ensure backend is running on correct port
  3. Check firewall rules allow traffic to backend port

## Additional Resources

- [cPanel Documentation](https://documentation.cpanel.net/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [phpMyAdmin Help](https://www.phpmyadmin.net/docs/)

## Security Checklist

- ✅ Use strong database password (16+ characters, mix of letters, numbers, symbols)
- ✅ Don't use default credentials
- ✅ Never commit `.env` file to version control
- ✅ Use HTTPS for all API endpoints
- ✅ Keep database user privileges minimal (only needed permissions)
- ✅ Regularly backup database
- ✅ Use strong JWT_SECRET (minimum 32 characters)
- ✅ Disable admin user in production or use very strong password

## Regular Maintenance

### Backup Database

In cPanel:
1. Go to **Backup Wizard**
2. Click **Backup** → **Download a Full Website Backup**
3. Or use phpMyAdmin → Export → Download SQL file

### Monitor Database Performance

```bash
# Check database size
SELECT 
    ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) as "Size in MB"
FROM information_schema.TABLES 
WHERE table_schema = 'user_ndumo_tours';

# Check slow queries
SHOW PROCESSLIST;
```

---

**Last Updated:** October 2026  
**Backend Version:** MySQL 5.7+  
**Maintained by:** Ndumo Tours Team
