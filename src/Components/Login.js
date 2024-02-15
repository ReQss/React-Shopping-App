import React from "react";
import '../styles/Login.css'
import { Link } from "react-router-dom";
function Login() {
    const login = React.useState();
    return(
        <div className="login">
           <h2 >Login</h2>
            <hr className="solid" />
           
            <form className="userForm" >
                <input placeholder="Email" type="email"/>
                <input placeholder="Password" type="password" />
                <input type="button" value="SIGN IN" className="submit-input" />
              <p>Don't have an account? <Link to="/React-Shopping-App/register">Sign up</Link></p>
      
            </form>
            </div>
    )
}export default Login;