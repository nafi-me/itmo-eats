-- Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  phone VARCHAR(20) UNIQUE,
  default_campus INT,
  password VARCHAR(200),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Campuses
CREATE TABLE campuses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  address VARCHAR(200),
  lat NUMERIC,
  lng NUMERIC
);

-- Cafeterias
CREATE TABLE cafeterias (
  id SERIAL PRIMARY KEY,
  campus_id INT REFERENCES campuses(id),
  name VARCHAR(100),
  location VARCHAR(200),
  hours VARCHAR(100),
  contact_info VARCHAR(100),
  active BOOLEAN DEFAULT TRUE
);

-- Menu categories
CREATE TABLE menu_categories (
  id SERIAL PRIMARY KEY,
  cafeteria_id INT REFERENCES cafeterias(id),
  name VARCHAR(50),
  time_slot VARCHAR(20)
);

-- Items
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  cafeteria_id INT REFERENCES cafeterias(id),
  category_id INT REFERENCES menu_categories(id),
  name VARCHAR(100),
  description TEXT,
  price NUMERIC,
  photos TEXT[],
  available BOOLEAN DEFAULT TRUE,
  qty_limit INT,
  halal_flag BOOLEAN DEFAULT FALSE
);

-- Orders
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  cafeteria_id INT REFERENCES cafeterias(id),
  items JSONB,
  status VARCHAR(20) DEFAULT 'pending',
  pickup_time TIMESTAMP,
  total NUMERIC,
  payment_id VARCHAR(100),
  qr_code TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Reviews
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  item_id INT REFERENCES items(id),
  rating INT,
  comment TEXT,
  photos TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);

-- Payments
CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  order_id INT REFERENCES orders(id),
  amount NUMERIC,
  method VARCHAR(20),
  status VARCHAR(20),
  provider_ref VARCHAR(100)
);

-- Sample ITMO campuses
INSERT INTO campuses (name, address, lat, lng) VALUES
('Kronverkskiy Avenue, 49', 'Saint Petersburg, Russia', 59.9600, 30.3100),
('Lomonosova Street, 9', 'Saint Petersburg, Russia', 59.9400, 30.3200);
