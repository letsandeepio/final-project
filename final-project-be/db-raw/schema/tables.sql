DROP TABLE IF EXISTS users CASCADE;

DROP TABLE IF EXISTS activities CASCADE;

CREATE TABLE users (
  id serial PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE activities (
  id serial PRIMARY KEY NOT NULL,
  user_id integer REFERENCES users (id),
  title varchar(255) NOT NULL,
  category varchar(255) NOT NULL,
  duration integer NOT NULL,
  completed integer
);

