INSERT INTO users(name, email, password)
  VALUES ('Sandeep', 'sandeepchopra7@gmail.com', 'password'),
  ('Iva Harrison', 'allisonjackson@mail.com', 'password');

INSERT INTO activity(user_id, title, category, duration, completed)
  VALUES (1, 'Shark', 'watch', '120', 0),
  (1, 'Superman', 'watch', '130', 0),
  (1, 'Mcdonalds', 'eat', '30', 0),
  (1, 'Popeyes', 'eat', '30', 1),
  (1, 'Burrate Chicken', 'cook', '100', 0),
  (1, 'Laundry', 'others', '15', 0);
