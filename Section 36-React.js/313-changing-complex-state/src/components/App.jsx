import React, { useState } from "react";

function App() {
  const [fullname, setFullName] = useState({
    fname: "",
    lname: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: prevValue.lname,
        };
      } else if (name === "lName") {
        return {
          fname: prevValue.fname,
          lname: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullname.fname} {fullname.lname}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullname.fname}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullname.lname}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
