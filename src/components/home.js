import fashionVid from "../vid/fashionvideo.mp4"
import "../styles/home.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";
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
     
      
    </div>

  )
}

export default Home;