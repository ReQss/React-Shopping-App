import React from "react";
function Navbar(props){
    const [searchText,setSearchText] = React.useState("");
   
    return(
        <div className="navbar">
     
      <a href="home">
        <img 
        width="49"
        height="30"
        src="logo.png"></img>
      </a>
      <div>
      <ul className="nav-menu">
      <li><a href="contact">Kontakt</a></li>
      <li><a href="login">Login</a></li>
      <li><a href="register">Rejestracja</a></li>
      </ul>
      </div>
      <div className="mobile">
        <i className="fas fa-bars"></i>
      </div>
    </div>
    )
}export default Navbar;