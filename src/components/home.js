import fashionVid from "../vid/fashionvideo.mp4"
import "../styles/home.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";

import rusModel from "../homeImg/rus-beige.jpeg"
import rusModel2 from "../homeImg/rus-beige2.jpeg"

const Home = () =>{
  useEffect(()=>{
    //onload
    window.scrollTo(0,0)
    
    
    
  }, [])
  
  return(
    <div className="homeContainer">
      <div className="homeVideo">
        <video className="vid" playsInline autoPlay loop muted>
          <source src={fashionVid} type="video/mp4"/>
        </video>
        
      </div>
     
      <button className="homeShopButton">
        <Link className="link" to="/shop">
          <div className="shopButtonText">Shop Now</div>
        </Link>
        
      </button>
      <div className="homeFirstTextBox">
        <div>
          
          <span style={{color: 'black'}}><em>" Really cringe and pretentious </em></span>
          <span><em>inspirational quotes go here "</em></span>
          
        </div>
      </div>
      <div className="firstHomeImgCon">
        <div className="homePicCon">
          <div className="homePic one">
            <Link className="homePicLink one" to="/shop">
              <img src={rusModel} alt=""/>
            </Link>
          </div>
          <div className="homePic two">
            <Link className="homePicLink two" to="/shop">
              <img src={rusModel2} alt=""/>
            </Link>
          </div>
          
          

        </div>
        
      </div>
     
      
    </div>

  )
}

export default Home;