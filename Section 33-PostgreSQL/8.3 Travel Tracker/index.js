import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "admin",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  console.log(countries);
  res.render("index.ejs", { countries: countries, total: countries.length });
});

app.post("/add", async (req, res) => {
  const userInput = req.body["country"];
  try {
    const result = await db.query(
      "SELECT country_name, country_code FROM countries"
    );
    let countryFound = false;

    for (let country of result.rows) {
      if (userInput === country.country_name) {
        countryFound = true;
        try {
          await db.query(
            "INSERT INTO visited_countries (country_code) VALUES ($1)",
            [country.country_code]
          );
          console.log("Inserted country:", country.country_name);
          res.redirect("/");
        } catch (error) {
          // console.log(error);
          const countries = await checkVisisted();
          res.render("index.ejs", {
            countries: countries,
            total: countries.length,
            error: "Country has already been added, try again.",
          });
        }
      }
    }

    if (!countryFound) {
      const countries = await checkVisisted();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country name does not exist, try again.",
      });
    }
  } catch (error) {
    // console.log(error);
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
