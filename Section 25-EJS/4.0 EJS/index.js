import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const d = new Date();
  let day = d.getDay();

  // console.log(day);

  let weekday = "";
  let advice = "";

  if (day === 0 || day === 6) {
    weekday = "the weekend";
    advice = "have fun!";
  } else {
    weekday = "a weekday";
    advice = "work hard!";
  }

  // console.log(weekday);
  // console.log(advice);

  res.render("index.ejs", {
    renderDay: weekday,
    renderAdvice: advice,
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}.`);
});
