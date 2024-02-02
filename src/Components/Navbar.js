import React from "react";
function Navbar(props){
    const [searchText,setSearchText] = React.useState("");
   
    return(
        <div className="navbar">
     
      <a href="index.html">
        <img 
        width="49"
        height="45"
        src="logo.png"></img>
      </a>
      <div>
      <ul className="nav-menu">
      <li><a href="index.html">Kontakt</a></li>
      <li><a href="index.html">Login</a></li>
      <li><a href="index.html">Rejestracja</a></li>
      </ul>
      </div>
      <div className="mobile">
        <i className="fas fa-bars"></i>
      </div>
    </div>
    )
}export default Navbar;