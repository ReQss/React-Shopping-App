import React from "react";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <div className="footer">
            <div className="company-section">
                <div className="company-info">
                <h4>ELECTROGAMES</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at rhoncus augue. Curabitur nec fringilla lacus. Quisque placerat convallis vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fermentum feugiat nisl, in varius quam. </p>
                </div>
                    <div className="company-socials">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
            <div className="footer-links">
                <h4>Quick Links</h4>
                
                    <ul>
                    <Link to="/React-Shopping-App/"><li >Home</li></Link>
                    <Link to="/React-Shopping-App/about"><li >About</li></Link>
                    <Link to="/React-Shopping-App/contact"><li >Contact</li></Link>
                    <Link to="/React-Shopping-App/shop"><li >Shop</li></Link>
                    </ul>
               
            </div>
            <div className="footer-contact">
                <h4>Contact Info</h4>
                <div className="contact-info">
                <p><i class="fa-solid fa-phone-volume"></i> +48 111 111 111</p>
                <p><i class="fa-solid fa-envelope"></i> Electro@gmail.com</p>
                <p><i class="fa-solid fa-paper-plane"></i> Lodz, Poland.</p>
                </div>
            </div>
        </div>
    )
}export default Footer;