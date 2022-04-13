import React from "react";
//will need many more imports including useEffect and useState
const Login = () => {
    // a useState to store the user object on successful login will be required
    // ^^ will also need to be based forward to the search page

    // i think i want a use effect to grab an index of usernames from the database
    // thus I can quickly compare usernames to see if they exist before querying 
    // the database to compare passwords
    // ^^ both usernames and passwords will be received from the database as hashed values
    return (
        
        <div>
        <h1>Login</h1>
        </div>
    );
}

export default Login;