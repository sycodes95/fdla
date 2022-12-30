import React from "react";
import Shop from "../shop";
import { useState, useContext, createContext, useRef, useEffect } from "react";
import styles from "../styles";
import "../../styles/item.css"
import Nav from "../nav";
import Cart from "../cart";
import QuantityContext from "../context"
import ItemContext from "../itemContext";
import ColorContext from "../colorContext";
const ItemDetails = (props) =>{
  
  const { quantity, setQuantity } = useContext(QuantityContext);
  const { item } = useContext(ItemContext);
  const { color, setColor} = useContext(ColorContext);
  const itemPictureRef = useRef(null);
  const colorChoiceRefs = useRef([]);
  
  const [selectedColor, setSelectedColor] = useState(color.color);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImages, setSelectedImages] = useState(item.colorImg[0].images);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const addToCart = () =>{
    setQuantity(quantity + 1)
    styles.forEach(s => {
      if(s.name === item.name){
        s.cart = true;
        s.quantity++;
      }
    })
  }

  useEffect(()=>{
    
    console.log(selectedImages);
    if(color.images !== null && color.images !== undefined) setSelectedImages(color.images)
    //checks for color context, uses it as selectedImages if not null or undefined
    const colorChoiceImg = document.querySelectorAll('.colorChoice')
    const parentDiv = document.getElementById(`${selectedColor}parent`)

    colorChoiceImg.forEach(choice =>{
      if(choice.id !== selectedColor){
        choice.style.transform = 'rotate(0deg)';
        choice.parentElement.style.border = ''
      } else if (choice.id === selectedColor){
        parentDiv.style.border = 'solid 1px grey'
        choice.style.transform = 'rotate(45deg)'
      }
    })
    
    return ()=>{
      setColor([])
      //resets the color context so that the wrong item pic
      //and colors do not render on another page 
    }
    
  },[selectedColor, selectedImages])

  useEffect(()=>{
    
    setCurrentIndex(0)
  },[selectedColor])
  
  const handleColorClick = (color, obj) =>{
    setSelectedColor(color)
    setSelectedImages(obj)
    
  }
 
  const handleLeftArrow = () =>{
    const first = currentIndex === 0;
    const newIndex = first ? selectedImages.length - 1 : currentIndex - 1;
    
    setCurrentIndex(newIndex)
    
  }
  const handleRightArrow = () =>{
    const last = currentIndex === selectedImages.length - 1;
    const newIndex = last ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
    
  }
  
  const handleColorMouseDown = (event) =>{
    let imgTarget = event.target
    imgTarget.style.transform = 'rotate(45deg)';
  }

  const handleMouseMove = (event) =>{
    const img = itemPictureRef.current;
    const x = event.clientX - event.target.offsetLeft;
    const y = event.clientY - event.target.offsetTop;
    img.style.transformOrigin = `${x}px ${y}px`
    img.style.transform = "scale(2.5)"
  }
  const handleMouseLeave = (event) =>{
    const img = itemPictureRef.current;
    img.style.transform = "scale(1)"
  }
  
  return(
    //<ItemContext.Provider value={{item, setItem}}>
      <div className="container">
        
        <div className="itemContainer">
          <div className="itemPicturesContainer">
            <button className="leftArrow" onClick={handleLeftArrow}>L</button>
            <button className="rightArrow" onClick={handleRightArrow}>R</button>
            <img className="itemPicture" ref={itemPictureRef} src={selectedImages[currentIndex]} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}/>
          </div>

          <div className="itemInfo">
            <div className="itemTitle">
              {item.name}
            </div>
            <div className="itemPrice">
              $ {item.price}
            </div>
            <div className="itemColor">
              <span className="selectedColor">COLOR: {selectedColor}</span>
              <div className="itemColorSelect">
                {item.colorImg.map(obj =>(
                  <div className="colorChoiceContainer" id={`${obj.color}parent`}>
                    <img className="colorChoice" ref={colorChoiceRefs} id={obj.color} src={obj.colorPre} alt='' 
                    onClick={()=>handleColorClick(obj.color, obj.images)} onMouseDown={handleColorMouseDown}/>
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