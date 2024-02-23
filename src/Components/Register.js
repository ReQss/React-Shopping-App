import React from "react";
import '../styles/Login.css'
import { Link } from "react-router-dom";
function Register(props) {
    const login = React.useState();
    return(
        <div className="login" style={{ background:  props.styles.background,color :props.styles.font_color  }}>
           <h2>Register</h2>
            <hr className="solid" />
            <form className="userForm"   style={{background:props.styles.extras}} >
                <h4>REGISTRATION FORM</h4>
                <input    style={{background:props.styles.mode? props.styles.extras:""}} placeholder="First name" type="email" />
                <input     style={{background:props.styles.mode? props.styles.extras:""}}placeholder="Last name" type="email"/>
                <input     style={{background:props.styles.mode? props.styles.extras:""}}placeholder="Email" type="email"/>
                <input     style={{background:props.styles.mode? props.styles.extras:""}}placeholder="Password" type="password" />
                <input     style={{background:props.styles.mode? props.styles.extras:""}} type="button" value="SIGN UP" className="submit-input" />
             <p>By clicking Register, you aree on our <Link to="/React-Shopping-App/register">Privacy Policy</Link></p>
      
            </form>
            </div>
    )
}export default Register;