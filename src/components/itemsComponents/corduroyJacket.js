import React from "react";
import Shop from "../shop";
import { useState, useContext, createContext } from "react";
import styles from "../styles";
import "../../styles/item.css"
import Cart from "../cart";
import { unstable_HistoryRouter } from "react-router-dom";

const CorduroyJacket = () =>{
  const CartContext = createContext()
  const [cart, setCart] = useState([])

  const addToCart = () =>{
    styles[0].cart = true;
    console.log(styles)
  }

  

  
  const style = styles[0];
  const images = style.colorImg[0].images.concat(style.colorImg[1].images);
  
  const handleMouseMove = (event) =>{
    const img = document.querySelector(".zoom");
    const x = event.clientX - event.target.offsetLeft;
    const y = event.clientY - event.target.offsetTop;
    img.style.transformOrigin = `${x}px ${y}px`
    img.style.transform = "scale(2.5)"
  }
  const handleMouseLeave = (event) =>{
    const img = document.querySelector(".zoom");
    img.style.transform = "scale(1)"
  }
  
  
  return(
    
    <div className="container">
      <div className="itemContainer">
        <div className="itemPicturesContainer">
          <img className="itemPicture zoom" src={images[0]} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}/>
        </div>

        <div className="itemInfo">
          <div className="itemTitle">
            {style.name}
          </div>
          <div className="itemPrice">
            $ {style.price}
          </div>
          <div className="itemColor">
            <span></span>
            <div className="itemColorSelect"></div>
          </div>
          <div className="itemSize">
            <span>Select A Size</span>
            <div className="itemSizeSelect"></div>
          </div>
          <div className="addToWish"></div>
          <button className="addToBag" onClick={()=>addToCart()}>Add To Bag</button>
          
          <div className="extraInfo"></div>
        </div>
      </div>

    </div>
    
    
  )
}



export default CorduroyJacket;