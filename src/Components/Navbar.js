import React, { useRef } from "react";
import  { useState, useEffect } from 'react';
import logo from '../Assets/logo2.png'
import cart_icon from '../Assets/cart_icon.png'
import settings_icon from '../Assets/settings.png'
import dark_mode_icon from '../Assets/dark_mode.png'
import { Link } from "react-router-dom";
import nav_dropdown from '../Assets/dropdown2.png'
function Navbar(props){
    const [menu,setMenu] = useState("");
    const menuRef = useRef();
    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return(
        <div className="navbar" style={{backgroundColor:props.styles.nav_color }}>
          <div  onClick={() => { setMenu("") }} className="nav-logo">
          <Link to="/React-Shopping-App/">
           <img 
            width="40"
            height="40"
            src={logo}
            />
            </Link>
          </div>
            <img className="nav-dropdown" style={{filter: props.styles.mode ? "invert(1)" : "invert(0)"}} onClick={dropdown_toggle} src={nav_dropdown} alt="" />
          <ul ref={menuRef} className="nav-menu" style={{background:props.styles.extras}}>
          <li onClick={() => { setMenu("shop") }}><Link   style={{color: props.styles.mode ?  "white" : "#626262"}}className="nav-link" to="/React-Shopping-App/shop">Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
          
          
          <li onClick={()=>{setMenu("contact")}}><Link style={{color: props.styles.mode ?  "white" : "#626262"}} className="nav-link" to="/React-Shopping-App/contact">Contact</Link> {menu==="contact" ? <hr/> :<></> }</li>
          <li onClick={()=>{setMenu("about")}}><Link   style={{color: props.styles.mode ?  "white" : "#626262"}} className="nav-link" to="/React-Shopping-App/about">About us</Link>{menu==="about" ? <hr/> :<></> }</li>
         
          </ul>

          <div className="nav-login-cart">
          <Link to="/React-Shopping-App/login"><button style={{ color:props.styles.font_color }}>Login</button></Link>
            
          <Link to="/React-Shopping-App/ShopCart"><img  style={{filter: props.styles.mode ?  "invert(1)" : "invert(0)"}} src={cart_icon}></img></Link>
          <div className="nav-cart-count">{props.totalQuantity}</div>
          <Link><img  style={{filter: props.styles.mode ?  "invert(1)" : "invert(0)"}} className="dark_mode_img" onClick={props.toggleDarkMode} src={dark_mode_icon}></img></Link>
          </div>
    </div>
    )
}export default Navbar;