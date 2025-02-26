import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

createRoot(document.getElementById("root")).render(
  <div>
    <App />
  </div>
);
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
