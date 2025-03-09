import React, { useState } from "react";

function App() {
  const [currentItem, setCurrentItem] = useState("");
  const [todo, setTodo] = useState([]);

  function handleChange(event) {
    setCurrentItem(event.target.value);
  }

  function handleAdd() {
    setTodo((prevValue) => {
      return [...prevValue, currentItem];
    });
    setCurrentItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          name="currentItem"
          type="text"
          value={currentItem}
        />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todo.map((todoItem, index) => (
            <li key={index}>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
