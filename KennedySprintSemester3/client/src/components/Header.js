// a simple header for the app

import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <div>Binary Tree Entry and Json Formatted Review Utility</div>
      <hr/>
      <hr/>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dataEntry">Data Entry</Link>
        <Link to="/binaryTree">Binary Tree</Link>
      </nav>
      <hr/>
      <hr/>
    </header>
  );
};

export default Header;
