import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const DataEntry = (params) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  let value = params.value;
  let setValue = params.setValue;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValue(value);
    if (value === "") {
      setError("Please enter a value");
    } else {
      setError(null);
      // code to send the value to the server
      console.log(value);

      await fetch("http://localhost:5000/trees/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: value }),
      }).catch((error) => {
        window.alert(error);
        return;
      });
      // setValue("");
      navigate("/binaryTree");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit"></input>
      </form>
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default DataEntry;
