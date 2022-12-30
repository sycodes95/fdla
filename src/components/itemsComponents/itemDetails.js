import React from "react";
import Shop from "../shop";
import { useState, useContext, createContext } from "react";
import styles from "../styles";
import "../../styles/item.css"
import Nav from "../nav";
import Cart from "../cart";
import QuantityContext from "../context"
import ItemContext from "../itemContext";

const ItemDetails = (props) =>{
  
  const { quantity, setQuantity } = useContext(QuantityContext);
  const { item } = useContext(ItemContext)
  
  const addToCart = () =>{
    setQuantity(quantity + 1)
    styles.forEach(s => {
      if(s.name === item.name){
        s.cart = true;
        s.quantity++;
      }
    })
  }
  const handleMouseMove = (event) =>{
    const img = document.querySelector(".itemPicture");
    const x = event.clientX - event.target.offsetLeft;
    const y = event.clientY - event.target.offsetTop;
    img.style.transformOrigin = `${x}px ${y}px`
    img.style.transform = "scale(2.5)"
  }
  const handleMouseLeave = (event) =>{
    const img = document.querySelector(".itemPicture");
    img.style.transform = "scale(1)"
  }

  const handleColorClick = (color, item) =>{
    const colorChoiceImg = document.querySelectorAll('.colorChoice')
    const parentDiv = document.getElementById(`${color}parent`)
    colorChoiceImg.forEach(choice =>{
      if(choice.id !== color){
        choice.style.transform = 'rotate(0deg)';
        
        choice.parentElement.style.border = ''
      } 
      parentDiv.style.border = 'dotted 1px grey'
    })
  }

  const handleColorMouseDown = (event) =>{
    let imgTarget = event.target
    imgTarget.style.transform = 'rotate(45deg)';
  }
  
  return(
    //<ItemContext.Provider value={{item, setItem}}>
      <div className="container">
        
        <div className="itemContainer">
          <div className="itemPicturesContainer">
            <img className="itemPicture zoom" src={item.colorImg[0].images[0]} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}/>
          </div>

          <div className="itemInfo">
            <div className="itemTitle">
              {item.name}
            </div>
            <div className="itemPrice">
              $ {item.price}
            </div>
            <div className="itemColor">
              <span className="selectedColor">COLOR: {item.colors[0]}</span>
              <div className="itemColorSelect">
                {item.colorImg.map(color =>(
                  <div className="colorChoiceContainer"id={`${color.color}parent`}>
                    <img className="colorChoice" id={color.color}src={color.colorPre} alt='' 
                    onClick={()=>handleColorClick(color.color, item)} onMouseDown={handleColorMouseDown}/>

                  </div>
                  
                  
                  
                  
                ))}
              </div>
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
    //</ItemContext.Provider>
  )
}



export default ItemDetails;