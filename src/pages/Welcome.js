import React, { useCallback, useState } from "react";

const Welcome = () => {
  const [name, setName] = useState("");

  const handleNameChange = useCallback(({target}) => {
    setName(target.value);
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('navigate');
  }, []);

  const buttonStyle = {};
  buttonStyle.marginLeft = "auto";
  buttonStyle.marginRight = "auto";
  buttonStyle.display = "block";

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Greet User</h5>
        <form onSubmit={onSubmit} className="card-text">
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
          >
            Submit Name
          </button>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
