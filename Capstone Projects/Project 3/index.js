import express from "express";
import path from "path";
import bodyParser from "body-parser";
import blogRoutes from "./routes/blogRoutes.js";
import expressLayouts from "express-ejs-layouts";

const app = express();

app.set("layout", "layout");
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use(express.static(path.join(process.cwd(), "public")));

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
