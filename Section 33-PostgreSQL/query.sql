CREATE TABLE capitals (
  id SERIAL PRIMARY KEY,
  country VARCHAR(45),
  capital VARCHAR(45)
);

CREATE TABLE flags (
  id SERIAL PRIMARY KEY,
  name TEXT,
  flag TEXT
);