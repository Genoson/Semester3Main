// a simple header for the app

import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <div>a header</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dataEntry">Data Entry</Link>
        <Link to="/binaryTree">Binary Tree</Link>
      </nav>
    </header>
  );
};

export default Header;
