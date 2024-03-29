import React from "react";
import hero_arrow from '../Assets/arrow.png'
import hero_image from '../Assets/playstation.png'
import { Link } from "react-router-dom";
function Home(props){
    return(
        <div className="hero" style={{ background:  props.styles.background,color :props.styles.font_color  }}>
        <div className="hero-left">
        <h2>Future of the games!</h2>
        <p>Check out our new content below</p>
       <Link className="nav-link" to="/React-Shopping-App/shop">
       
        <div className="hero-latest-btn">
       
        <p>Latest collection</p>
       <div>
        <img src={hero_arrow}/>
        </div>
        </div>
        
        </Link>
        </div>
        <div className="hero-right">   
            <img src={hero_image}></img>
        </div>
    </div>
    )
}export default Home;