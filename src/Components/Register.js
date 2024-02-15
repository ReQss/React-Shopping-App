import React from "react";
import '../styles/Login.css'
import { Link } from "react-router-dom";
function Register() {
    const login = React.useState();
    return(
        <div className="login">
           <h2>Register</h2>
            <hr className="solid" />
            <form className="userForm" >
                <h4>REGISTRATION FORM</h4>
                <input placeholder="First name" type="email" />
                <input placeholder="Last name" type="email"/>
                <input placeholder="Email" type="email"/>
                <input placeholder="Password" type="password" />
                <input type="button" value="SIGN IN" className="submit-input" />
             <p>By clicking Register, you aree on our <Link to="/React-Shopping-App/register">Privacy Policy</Link></p>
      
            </form>
            </div>
    )
}export default Register;