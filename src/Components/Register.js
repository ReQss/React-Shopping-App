import React from "react";
function Register(){
    const [formData,setFormData] = React.useState({
        login:"",
        password:""
    })
  
   
    
    return(
        <div className="Login">
            <h1>Sign Up!</h1>
            <form className="userForm" >
            <p>Username:</p>
            <input 
            type="text"
            placeholder="Login"
            name = "login"
     //       onChange={handleChange}
        //     value={formData.login}
            />
            <p>Password:</p>
            <input 
            type="password" 
            name = "password"
            placeholder="Password" 
        //    onChange={handleChange}
        //    value={formData.password}
            />
            <br />
            <br />
            <button className="menu-button">Submit</button>
            </form>
        </div>
    )
}export default Register;