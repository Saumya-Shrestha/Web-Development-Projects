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

CREATE TABLE world_food (
  id SERIAL PRIMARY KEY,
  country VARCHAR(45),
  rice_production DOUBLE,
  wheat_production DOUBLE
);

SELECT * FROM world_food;

SELECT country FROM world_food;

SELECT country, wheat_production FROM world_food;

SELECT rice_production FROM world_food WHERE country = 'United States';

SELECT country FROM world_food WHERE wheat_production > 20;

SELECT country FROM world_food WHERE country LIKE 'U' || '%';

SELECT country FROM world_food WHERE country LIKE '%' || 'a';