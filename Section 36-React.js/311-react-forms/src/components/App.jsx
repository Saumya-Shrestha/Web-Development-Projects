import { event } from "jquery";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeadingText(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <h1>Hello {headingText}</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
