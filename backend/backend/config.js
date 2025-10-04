require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  db: {
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'itmo_eats',
    password: process.env.DB_PASSWORD || 'password',
    port: process.env.DB_PORT || 5432
  },
  jwtSecret: process.env.JWT_SECRET || 'itmo_secret'
};
