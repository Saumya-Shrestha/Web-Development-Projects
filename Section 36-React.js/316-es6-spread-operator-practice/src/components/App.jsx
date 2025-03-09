import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState({
    items: [],
    currentItem: "",
  });

  function handleChange(event) {
    const { value } = event.target;
    setTodo((prevValue) => ({
      ...prevValue,
      currentItem: value,
    }));
  }

  function handleAdd() {
    if (todo.currentItem.trim()) {
      setTodo((prevValue) => ({
        ...prevValue,
        items: [...prevValue.items, prevValue.currentItem],
        currentItem: "",
      }));
    }
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
          value={todo.currentItem}
        />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todo.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
