import React from "react";
import { createRoot } from "react-dom/client";

const img = "https://picsum.photos/200";

createRoot(document.getElementById("root")).render(
  <div>
    <h1 className="heading" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img className="pizza" src={img} />
    </div>
  </div>
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
