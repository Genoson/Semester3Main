// a simple header for the app

import React from 'react';
import { Link} from 'react-router-dom';

const Header = (props) => {
    if (!props.user) {
        return (
            <header>
                <div>a header</div>
            <nav>
                <Link to="/">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/binarytree">Binary Tree</Link>
                {/* <Link to="/search">Search</Link> this page is only accessible if logged in  */}
            </nav>
            </header>
        )
    } else {
        return (
            <header>
                <div>a header</div>
            <nav>
                <Link to="/">Logout</Link>
                <Link to="/search">Search</Link>
            </nav>
            </header>
        )
    }
  
}

export default Header;