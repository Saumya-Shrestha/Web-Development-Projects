// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react";
import { createRoot } from "react-dom/client";

const fName = "Saumya";
const lName = "Shrestha";
const num = 13;

createRoot(document.getElementById("root")).render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {num}!</p>
  </div>
);
