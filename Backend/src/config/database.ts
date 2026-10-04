import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST || 'localhost',
  user: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || 'ndumo_tours',
  port: parseInt(process.env.DATABASE_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function connectDatabase() {
  try {
    const connection = await pool.getConnection();
    await connection.ping();
    console.log('✅ MySQL database connected successfully');
    connection.release();
  } catch (err) {
    console.warn('⚠️  Could not connect to database:', err instanceof Error ? err.message : err);
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
    console.log('ℹ️  Starting in development mode without database connection');
  }
}

export default pool;
