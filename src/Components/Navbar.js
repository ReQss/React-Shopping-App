import React, { useRef } from "react";
import  { useState, useEffect } from 'react';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import nav_dropdown from '../Assets/dropdown.png'
function Navbar(props){
    const [searchText,setSearchText] = React.useState("");
    const [menuState, setMenuState] = React.useState(true);
    const [menu,setMenu] = useState("");
    const menuRef = useRef();
    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return(
        <div className="navbar">
          <div  onClick={() => { setMenu("") }} className="nav-logo">
           <Link to="/"> <img 
            width="49"
            height="30"
            src={logo}></img>
            </Link>
          </div>
          <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
          <ul ref={menuRef} className="nav-menu" >
          <li onClick={() => { setMenu("shop") }}><Link className="nav-link" to="/shop">Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
          
          
          <li onClick={()=>{setMenu("contact")}}><Link   className="nav-link" to="/contact">Contact</Link> {menu==="contact" ? <hr/> :<></> }</li>
          <li onClick={()=>{setMenu("about")}}><Link   className="nav-link" to="/about">About us</Link>{menu==="about" ? <hr/> :<></> }</li>
         
          </ul>

          <div className="nav-login-cart">
          <Link to="/Login"><button>Login</button></Link>
            
            <img src={cart_icon}></img>
            <div className="nav-cart-count">0</div>
          </div>
    </div>
    )
}export default Navbar;