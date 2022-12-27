import fashionVid from "../vid/fashionvideo.mp4"
import "../styles/home.css"
const Home = () =>{
  return(
    <div className="homeContainer">
      <div className="homeVideo">
        <video className="vid" controls={false} autoPlay loop>
          <source src={fashionVid} type="video/mp4"/>
          
        </video>
        
      </div>
      <button className="homeShopButton">
        <div className="shopButtonText">Shop Now</div>
      </button>
      
    </div>

  )
}

export default Home;