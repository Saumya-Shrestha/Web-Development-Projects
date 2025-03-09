import React, { useState } from "react";

function App() {
  // console.log(time);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [pressed, setPressed] = useState(false);

  function showTime() {
    setPressed(true);
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(showTime, 1000);

  return (
    <div className="container">
      {pressed ? <h2>{time}</h2> : <h1>TIME</h1>}
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
