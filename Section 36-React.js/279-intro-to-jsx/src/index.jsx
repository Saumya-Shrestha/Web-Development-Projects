// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react";
import { createRoot } from "react-dom/client";

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<h1>Hello World!</h1>);
