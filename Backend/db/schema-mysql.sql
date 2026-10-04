-- Ndumo Tours Database Schema (MySQL/cPanel)
-- Run this script to initialize the MySQL database

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  is_admin TINYINT(1) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_users_email (email)
);

-- Tours Table
CREATE TABLE IF NOT EXISTS tours (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description LONGTEXT,
  price_rands DECIMAL(10, 2) NOT NULL,
  capacity INT NOT NULL,
  duration_days INT NOT NULL,
  image_url VARCHAR(500),
  highlights JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  tour_id INT NOT NULL,
  booking_date DATE NOT NULL,
  pax_count INT NOT NULL,
  status ENUM('pending', 'confirmed', 'cancelled', 'completed') DEFAULT 'pending',
  notes LONGTEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (tour_id) REFERENCES tours(id) ON DELETE CASCADE,
  INDEX idx_bookings_user_id (user_id),
  INDEX idx_bookings_tour_id (tour_id),
  INDEX idx_bookings_status (status)
);

-- Payments Table
CREATE TABLE IF NOT EXISTS payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  booking_id INT NOT NULL,
  amount_rands DECIMAL(10, 2) NOT NULL,
  yoco_reference VARCHAR(255),
  status ENUM('pending', 'success', 'failed', 'refunded') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE,
  INDEX idx_payments_booking_id (booking_id),
  INDEX idx_payments_status (status)
);

-- Audit Logs Table (for admin actions)
CREATE TABLE IF NOT EXISTS audit_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  admin_id INT,
  action VARCHAR(255) NOT NULL,
  entity_type VARCHAR(50),
  entity_id INT,
  description LONGTEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (admin_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_audit_logs_admin_id (admin_id)
);

-- Insert sample tours
INSERT INTO tours (name, description, price_rands, capacity, duration_days, highlights) VALUES
  ('Cape Town City & Culture', 'Explore the vibrant heart of Cape Town with guided heritage walks, local markets, and cultural experiences.', 1500.00, 8, 3, '["City tours", "Cultural immersion", "Local cuisine"]'),
  ('Garden Route Adventure', 'Experience the stunning Garden Route with stops at Hermanus, Mossel Bay, and Knysna.', 2500.00, 6, 5, '["Scenic drives", "Wildlife viewing", "Adventure activities"]'),
  ('Safari & Wildlife', 'Encounter Africa''s incredible wildlife in their natural habitat with expert guides.', 3500.00, 4, 7, '["Game drives", "Big Five", "Photography"]'),
  ('Winelands Tasting Tour', 'Discover world-class wines in Stellenbosch and Franschhoek with cellar visits and tastings.', 1200.00, 10, 2, '["Wine tastings", "Gourmet dining", "Vineyard tours"]'),
  ('Mountain Hiking Expeditions', 'Challenge yourself with guided hikes through stunning mountain ranges and trails.', 800.00, 12, 3, '["Hiking", "Mountain views", "Nature walks"]'),
  ('Coastal Beach Retreat', 'Unwind on pristine beaches with water activities, fresh seafood, and coastal charm.', 1000.00, 8, 4, '["Beach time", "Water sports", "Sunset views"]')
ON DUPLICATE KEY UPDATE id=id;

-- Insert initial admin user (password: admin123)
-- Hash: $2b$10$K/G8s.Gu8iNVgXvJm/0bPO4dIgDJBCk7YxKRXKh.7kp9VKCx6nKeC
INSERT INTO users (email, password_hash, name, is_admin) VALUES
  ('admin@ndumotours.com', '$2b$10$K/G8s.Gu8iNVgXvJm/0bPO4dIgDJBCk7YxKRXKh.7kp9VKCx6nKeC', 'Admin User', 1)
ON DUPLICATE KEY UPDATE id=id;
