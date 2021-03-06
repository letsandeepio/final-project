DROP TABLE IF EXISTS users CASCADE;

DROP TABLE IF EXISTS activity CASCADE;

CREATE TABLE users (
  id serial PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL,
  email varchar(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE activity (
  id serial PRIMARY KEY NOT NULL,
  user_id integer REFERENCES users (id),
  title varchar(255) NOT NULL,
  category varchar(255) NOT NULL,
  duration integer NOT NULL,
  status varchar(255) DEFAULT 'incomplete',
  image_url varchar(255),
  completed_on varchar(255),
  expiry_date varchar(255)
);

