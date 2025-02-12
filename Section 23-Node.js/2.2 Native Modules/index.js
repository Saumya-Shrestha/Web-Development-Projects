import { writeFile } from "fs";
import { readFile } from "node:fs";

writeFile("message.txt", "Hello from Saumya!", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

readFile("./message.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
