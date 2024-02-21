import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

import image from '../Assets/about.png'
function About() {
    return(
        <div className="about">
           <h2 >About</h2>
            <hr className="solid" />
            <div className="about-content">
            <div className="about-info">
                <h4>About us</h4>
                <h1>Heliping people succeed their dreams</h1>
             
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at rhoncus augue. Curabitur nec fringilla lacus. Quisque placerat convallis vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fermentum feugiat nisl, in varius quam. </p>
                
                    <Link className="newsletter-link" to="/React-Shopping-App/contact">
                        <div className="newsletter-btn">Newsletter</div>
                    </Link>
            </div>
            <div className="about-image">
                <img src={image } alt="" />
                </div>
            </div>
            
        </div>
    )
}export default About;