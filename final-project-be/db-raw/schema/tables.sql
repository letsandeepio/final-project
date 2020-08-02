-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users
CASCADE;
DROP TABLE IF EXISTS activities
CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
);

CREATE TABLE activities(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  duration INTEGER NOT NULL
  completed BIT
);
