// a simple header for the app
// this needs some work, specific the login/ logout

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  //testing code
//   useEffect(() => {
//     console.log(props.user);
//   }, [props.user]);

  return (
    <header>
      <div>Search Animals</div>
      <nav>
        {/* Link for login becomes logout if user is defined */}
        {props.user===null ? <Link to="/" >Login</Link> : <Link to="/" >Logout</Link>}
        <Link to="/register">Register</Link>
        
        {/* <Link to="/search">Search</Link> this page is only accessible if logged in  */}
      </nav>
    </header>
  );
};

export default Header;
