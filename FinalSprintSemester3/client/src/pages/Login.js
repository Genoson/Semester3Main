import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//will need many more imports including useEffect and useState
const Login = (props) => {
  // a useState to store the user object on successful login will be required
  // ^^ will also need to be based forward to the search page
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //a use effect to ensure the user object is reset to null on returning to the login page
  useEffect(() => {
    props.setUser(null);
    props.setIsLoggedIn(false);
  }, []);

  // i think i want a use effect to grab an index of usernames from the database
  // thus I can quickly compare usernames to see if they exist before querying
  // the database to compare passwords
  // ^^ both usernames and passwords will be received from the database as hashed values

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log(userName);
    // console.log(password);
    if (userName === "" || password === "") {
      setError("Please enter a username and password");
    }
    // code to send value to server to check if user exists

    await fetch(`http://localhost:5000/users/${userName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status === 200) {
        console.log(response);
        console.log(response.json());
        
      } else {
        setError("User does not exist");
      }
    });

    // if user exists, set user object to the user object

    props.setUser(userName);
    props.setIsLoggedIn(true);
    navigate("/search");
    setUserName("");
    setPassword("");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Login" />
      </form>
      {error ? <p className="error">{error}</p> : null}
      <div>
        <p>
          Don't have an account? <Link to="/register"> Register here.</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
