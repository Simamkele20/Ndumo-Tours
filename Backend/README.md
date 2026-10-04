# Ndumo Tours Backend API

Node.js/Express backend for Ndumo Tours with JWT authentication, booking system, and Yoco payment integration.

## Features

✅ JWT-based authentication (register, login, refresh token)  
✅ MySQL database with schema for users, tours, bookings, payments  
✅ Error handling and validation middleware  
✅ CORS configured for Angular frontend  
✅ cPanel/Shared hosting compatible  

## Prerequisites

- **Node.js** 18+ 
- **MySQL** 5.7+ (cPanel, Bluehost, or local)
- **npm** or **yarn**

## Local Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create `.env` file (copy from `.env.example`):

```bash
cp .env.example .env
```

Update `.env` with your cPanel MySQL credentials:

```
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=cpanel_username_dbname
DATABASE_PASSWORD=your_strong_password
DATABASE_NAME=cpanel_username_dbname

JWT_SECRET=your_secret_key_min_32_characters
YOCO_API_KEY=your_yoco_key

NODE_ENV=development
PORT=3000
```

### 3. Create MySQL Database

**Option A: cPanel File Manager**
1. Log into your cPanel account
2. Go to **MySQL Databases** or **Database Wizard**
3. Create a new database (e.g., `cpanel_ndumo_tours`)
4. Create a database user with a strong password
5. Add the user to the database with ALL privileges
6. Use these credentials in your `.env` file

**Option B: phpMyAdmin (in cPanel)**
1. Open phpMyAdmin from cPanel
2. Create a new database
3. Select the database and import the schema:
   - Go to the "Import" tab
   - Choose `db/schema.sql`
   - Click "Go"

**Option C: Command Line (if SSH access available)**
```bash
mysql -h localhost -u your_user -p your_database < db/schema.sql
```

### 4. Start Development Server

```bash
npm run dev
```

Server runs on `http://localhost:3000`  
Health check: `http://localhost:3000/api/health`

## Build for Production

```bash
npm run build
npm start
```

## Deployment to cPanel

### 1. Prepare cPanel Hosting

- Get cPanel hosting (Bluehost, HostGator, SiteGround, etc.)
- Create MySQL database in cPanel
- Create database user with strong password
- Note the credentials (database name, user, password)

### 2. Upload Backend via cPanel File Manager

1. **Connect via SFTP** or use **File Manager** in cPanel
2. Create folder for backend (e.g., `/public_html/api/` or `/home/username/ndumo-api/`)
3. Upload all files from `ndumo-tours-backend/`:
   ```
   src/
   db/
   package.json
   tsconfig.json
   .env
   ```

### 3. Install Node Packages

If cPanel supports Node.js:

1. Go to cPanel → **Node.js Selector** or **Setup Node.js App**
2. Select the directory where backend is located
3. Choose Node.js version 18+
4. Run `npm install`

Or via SSH:
```bash
cd /path/to/backend
npm install
```

### 4. Set Environment Variables

Create `.env` file with your cPanel MySQL credentials:

```
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=cpanel_db_user
DATABASE_PASSWORD=your_strong_password
DATABASE_NAME=cpanel_database_name

NODE_ENV=production
PORT=your_port_number
JWT_SECRET=your_very_secure_secret_key_here
FRONTEND_URL=https://yourdomain.com
```

### 5. Test Live API

```bash
curl https://yourdomain.com/api/health
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh JWT token

**Request Example (Login):**
```json
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe",
    "isAdmin": false
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Project Structure

```
ndumo-tours-backend/
├── src/
│   ├── config/
│   │   └── database.ts       # PostgreSQL connection pool
│   ├── controllers/
│   │   └── auth.ts           # Auth logic (register, login)
│   ├── middleware/
│   │   ├── auth.ts           # JWT verification
│   │   └── errorHandler.ts   # Error handling
│   ├── routes/
│   │   └── auth.ts           # Auth endpoints
│   ├── app.ts                # Express app setup
│   └── server.ts             # Server entry point
├── db/
│   └── schema.sql            # Database schema
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## Database Schema

### Tables

- **users** - User accounts (email, password, profile)
- **tours** - Tour offerings (name, price, capacity, duration)
- **bookings** - Tour bookings (user, tour, date, status)
- **payments** - Payment records (booking, amount, Yoco reference, status)
- **audit_logs** - Admin actions log

### Admin User (Default)

- **Email:** admin@ndumotours.com
- **Password:** admin123 (change on first login)

## Next Steps (Phase 2)

- [ ] Create Tours API endpoints (GET, POST, PUT, DELETE)
- [ ] Create Bookings API endpoints
- [ ] Integrate Yoco payment gateway
- [ ] Create Admin dashboard endpoints
- [ ] Add email notifications
- [ ] Add validation and rate limiting

## Troubleshooting

**Connection refused error:**
- Ensure PostgreSQL is running locally or Render instance is active

**JWT verification failed:**
- Check JWT_SECRET in .env matches deployment config

**CORS errors:**
- Verify FRONTEND_URL in .env includes your Angular app domain

## Support

For issues or questions, contact: info@ndumotours.com
