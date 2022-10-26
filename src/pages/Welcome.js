import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Welcome = () => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("enter key pressed");
    }
  };

  function GreetUser(name) {
    // function GreetUser(name) {
    // <Navigate to="/chat" state={{ data: name }} />
    <Navigate to="/chat" state={{ data: "name" }} />;
  }

  const buttonStyle = {};
  buttonStyle.marginLeft = "auto";
  buttonStyle.marginRight = "auto";
  buttonStyle.display = "block";

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Greet User</h5>
        <div className="card-text">
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={handleNameChange}
          />
          <button
            className="btn btn-primary"
            style={buttonStyle}
            onClick={() => GreetUser(name)}
            onKeyDown={handleKeyDown}
          >
            Submit Name
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
