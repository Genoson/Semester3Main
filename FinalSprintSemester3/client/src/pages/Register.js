import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// bcrypt is unhappy about react, there are work arounds... to be continued time allowing
//import bcrypt from "bcryptjs";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  class User {
    constructor(userName, password) {
      this.userName = userName;
      this.password = password;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (userName === "" || password === "" || passConfirm === "") {
      setError("Please enter a username and password");
    } else if (password !== passConfirm) {
      setError("Passwords do not match");
    } else {
      setError(null);
      let user = new User(userName, password);
      // bcrypt.hash(user.password, 10, (err, hash) => {})
      // ^^ this is where i would encode the password, unless server side encryption becomes my chosen solution
      await fetch("http://localhost:5000/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).catch((error) => {
        window.alert(error);
        return;
      });
      window.alert("User created, returning to login");
      setUserName("");
      setPassword("");
      setPassConfirm("");
      navigate("/");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form id="registerForm" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>Confirm Password:</label>
        <input
          type="password"
          name="password"
          value={passConfirm}
          onChange={(e) => setPassConfirm(e.target.value)}
        />
        <br />
        <input id="submit" type="submit" value="Register" />
      </form>
      {error ? <p className="error">{error}</p> : null}
      <div>
        <p>
          Already have an account? <Link to="/"> Login here.</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
