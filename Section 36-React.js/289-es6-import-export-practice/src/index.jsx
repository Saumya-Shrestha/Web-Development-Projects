import React from "react";
import { createRoot } from "react-dom/client";
import { add, multiply, subtract, divide } from "./calculator";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

createRoot(document.getElementById("root")).render(
  <div>
    <ul>
      <li>{add(1, 2)}</li>
      <li>{multiply(2, 3)}</li>
      <li>{subtract(7, 2)}</li>
      <li>{divide(5, 2)}</li>
    </ul>
  </div>
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
