import React, { useRef } from "react";
import  { useState, useEffect } from 'react';
import logo from '../Assets/logo2.png'
import cart_icon from '../Assets/cart_icon.png'
import settings_icon from '../Assets/settings.png'
import { Link } from "react-router-dom";
import nav_dropdown from '../Assets/dropdown.png'
function Navbar(props){
    const [menu,setMenu] = useState("");
    const menuRef = useRef();
    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return(
        <div className="navbar">
          <div  onClick={() => { setMenu("") }} className="nav-logo">
          <Link to="/React-Shopping-App/">
           <img 
            width="40"
            height="40"
            src={logo}
            />
            </Link>
          </div>
          <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
          <ul ref={menuRef} className="nav-menu" >
          <li onClick={() => { setMenu("shop") }}><Link className="nav-link" to="/React-Shopping-App/shop">Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
          
          
          <li onClick={()=>{setMenu("contact")}}><Link   className="nav-link" to="/React-Shopping-App/contact">Contact</Link> {menu==="contact" ? <hr/> :<></> }</li>
          <li onClick={()=>{setMenu("about")}}><Link   className="nav-link" to="/React-Shopping-App/about">About us</Link>{menu==="about" ? <hr/> :<></> }</li>
         
          </ul>

          <div className="nav-login-cart">
          <Link to="/React-Shopping-App/login"><button>Login</button></Link>
            
          <Link to="/React-Shopping-App/ShopCart"><img src={cart_icon}></img></Link>
            <div className="nav-cart-count">{props.totalQuantity}</div>
          <Link to="/React-Shopping-App/settings"><img src={settings_icon}></img></Link>
         
          </div>
    </div>
    )
}export default Navbar;