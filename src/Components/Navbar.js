import React from "react";
import  { useState, useEffect } from 'react';

function Navbar(props){
    const [searchText,setSearchText] = React.useState("");
    const [menuState, setMenuState] = React.useState(true);
    
    return(
        <div className="navbar">
     
      <a href="home">
        <img 
        width="49"
        height="30"
        src="logo.png"></img>
      </a>
      <div >
      <ul className="nav-menu" style={{ display: menuState ? 'flex' : 'none' }}>
       
      <li><a href="contact">Kontakt</a></li>
      <li><a href="login">Login</a></li>
      <li><a href="register">Rejestracja</a></li>
      </ul>
      </div>
      <div className="mobile">
      <i
          className={menuState ? 'fas fa-times' : 'fas fa-bars'}
          onClick={() => setMenuState(!menuState)}
        ></i>
      </div>
    </div>
    )
}export default Navbar;