import React from "react";
import '../styles/Login.css'
import { Link } from "react-router-dom";
function Login(props) {
    const login = React.useState();
    return(
        <div className="login" style={{ background:  props.styles.background,color :props.styles.font_color  }}>
           <h2 >Login</h2>
            <hr className="solid" />
           
        <form className="userForm"    style={{background:props.styles.extras}}>
                <h4>LOGIN FORM</h4>
                <input    style={{background:props.styles.mode? props.styles.extras:""}}placeholder="Email" type="email"/>
                <input  style={{background:props.styles.mode? props.styles.extras:""}}placeholder="Password" type="password" />
                <input type="button" value="SIGN IN" className="submit-input" />
              <p>Don't have an account? <Link to="/React-Shopping-App/register">Sign up</Link></p>
      
            </form>
            </div>
    )
}export default Login;