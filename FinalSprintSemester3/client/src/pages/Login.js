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

  // a function to handle the login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // testing comments
    //console.log(userName);
    // console.log(password);
    if (userName === "" || password === "") {
      setError("Please enter a username and password");
      return
    }
    // code to send value to server to check if user exists

    await fetch(`http://localhost:5000/users/${userName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          // console.log(response);
          //console.log(response.json())
          return response.json();
        } else {
          setError("User does not exist");
          return
        }
      })
      .catch((error) => {
        setError("User does not exist" );
        return;
      })
      .then((data) => {
        //console.log(data);
        if (data.password === password) {
          //console.log("password is correct");
          // if user exists and passwords match, set user object to the user object
          props.setUser(userName);
          props.setIsLoggedIn(true);
          navigate("/search");
        } else {
          setError("Password is incorrect");
        }
      })
      .catch((error) => {
        setError("User does not exist");
        return;
      });

    // early testing code for ensuring React was working
    // props.setUser(userName);
    // props.setIsLoggedIn(true);
    // navigate("/search");
    // setUserName("");
    // setPassword("");
  };

  return (
    <div>
      <h1>Login</h1>
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
        <input id="submit" type="submit" value="Login" />
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
