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
import CartContext from "../cartContext"
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
const ItemDetails = (props) =>{
 
  const { quantity, setQuantity } = useContext(QuantityContext);
  let { item, setItem } = useContext(ItemContext);
  let { cartAdded, setCartAdded} = useContext(CartContext)
  let { color, setColor} = useContext(ColorContext);
  console.log(item);
  if(item.name == null || item.name == undefined) item = JSON.parse(localStorage.getItem("item"));
  if(!color){
    color = item.colorImg[0]
  }
  
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  const addToBagRef = useRef(null)
  const itemPictureRef = useRef(null);
  const colorChoiceRefs = useRef([]);
  const leftArrowRef = useRef(null)
  const rightArrowRef = useRef(null)
  const dotRef = useRef(null)
  const [selectedColor, setSelectedColor] = useState(color.color);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImages, setSelectedImages] = useState(item.colorImg[0].images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItemDetails, setSelectedItemDetails] = useState(null)


  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  
  const addToCartClick = () =>{
    
    setSelectedItemDetails({
      style: item.name,
      path: item.path,
      price: item.price,
      color: selectedColor,
      image: selectedImages[0],
      size: selectedSize,
      quantity: 1
    })

    
    
    setQuantity(quantity + 1)
    styles.forEach(s => {
      if(s.name === item.name){
        s.cart = true;
        s.quantity++;
      }
    })
    
  }

  const addToCartMouseDown = () =>{
      addToBagRef.current.style.color = 'black'
  }

  const addToCartMouseUp = () =>{
    addToBagRef.current.style.color = 'white'
  }
  useEffect(()=>{
    //onload
    window.scrollTo(0,0)
    localStorage.setItem('item', JSON.stringify(item))
    
    
  }, [])

  useEffect(()=>{
    //cart adding logic
    
    console.log('select:',selectedItemDetails);
    if(selectedItemDetails){
      console.log(cartAdded.items.length);
      if(cartAdded.items.length < 1) {
        setCartAdded({items: [...cartAdded.items, selectedItemDetails]})
      } else {
        cartAdded.items.forEach(it =>{
          console.log(it);
          if(it.style == selectedItemDetails.style &&
            it.size == selectedItemDetails.size &&
            it.color == selectedItemDetails.color){
              console.log('hi');
              it.quantity++
          } 
        })
        if(!cartAdded.items.some(it =>
          it.style == selectedItemDetails.style &&
          it.size == selectedItemDetails.size &&
          it.color == selectedItemDetails.color
        )){
          setCartAdded({items: [...cartAdded.items, selectedItemDetails]})
        }
      }
    }
  },[selectedItemDetails])

  useEffect(()=>{
    if(selectedImages.length < 2) {
      leftArrowRef.current.hidden = true
      rightArrowRef.current.hidden = true
    }
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

  useEffect(()=>{
    
    const dots = document.querySelectorAll('.dot')
    
    dots.forEach(dot =>{
      
      if(selectedImages.length < 2) {
        dot.hidden = true;
      }
      
      if(parseInt(dot.id) !== currentIndex){
        dot.style.backgroundColor = 'white'
      } else if (parseInt(dot.id) === currentIndex){
        dot.style.backgroundColor = 'rgb(254, 225, 157)'
      }
    })
  },[currentIndex])

  useEffect(()=>{
    if(selectedColor !== undefined && selectedSize !== null){
      addToBagRef.current.disabled = false;
      addToBagRef.current.style.opacity = '1'
      addToBagRef.current.style.color = 'white'
      addToBagRef.current.textContent = 'Add To Bag'
      if(addToBagRef.current.disabled == false) addToBagRef.current.style.cursor = 'pointer';
    } else {
      addToBagRef.current.disabled = true;
    }
  }, [selectedSize, selectedColor])

  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  
  const handleColorClick = (color, obj) =>{
    setSelectedColor(color)
    setSelectedImages(obj)
    
  }
 
  const handleLeftArrow = () =>{
    itemPictureRef.current.style.opacity = '0.5'
    itemPictureRef.current.style.filter = 'grayscale(100%)'
    setTimeout(()=>{
      itemPictureRef.current.style.filter = 'grayscale(0%)'
      itemPictureRef.current.style.opacity = '1'
      const first = currentIndex === 0;
      const newIndex = first ? selectedImages.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex)
    }, 200)
    
  }
  const handleRightArrow = () =>{
    itemPictureRef.current.style.opacity = '0.5'
    itemPictureRef.current.style.filter = 'grayscale(100%)'
    
    setTimeout(()=>{
      itemPictureRef.current.style.filter = 'grayscale(0%)'
      itemPictureRef.current.style.opacity = '1'
      const last = currentIndex === selectedImages.length - 1;
      const newIndex = last ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex)
    }, 200)
    
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

  const handleDotClick = (event) =>{
    itemPictureRef.current.style.opacity = '0.5'
    itemPictureRef.current.style.filter = 'grayscale(100%)'

    const dots = document.querySelectorAll('.dot')
    dots.forEach(dot =>{
      if(parseInt(dot.id) !== parseInt(event.target.id)) dot.style.backgroundColor = 'white'
    })
    event.target.style.backgroundColor = 'rgb(221, 199, 169)'

    setTimeout(()=>{
      itemPictureRef.current.style.filter = 'grayscale(0%)'
      itemPictureRef.current.style.opacity = '1'
      setCurrentIndex(parseInt(event.target.id))
    }, 200)
    
  }

  const handleSizeClick = (size) =>{
    setSelectedSize(size)
    const s = document.querySelectorAll('.size')
    s.forEach(e =>{
      if(e.textContent !== size){
        e.style.borderBottom = ''

      } else if (e.textContent === size){
        e.style.borderBottom = 'solid 2px grey'
      }
    })
  }

  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  return(
    <ItemContext.Provider value={{item, setItem}}>
      <div className="itemMain">
        
        <div className="itemContainer">


          <div className="itemPicturesContainer">
            
            <button className="leftArrow" ref={leftArrowRef} onClick={handleLeftArrow}>{'<'}</button>
            <button className="rightArrow" ref={rightArrowRef} onClick={handleRightArrow}>{'>'}</button>


            <div className="picDiv">
              <div className="dotContainer">
                {selectedImages.map((ig, i) =>(
                  <button className="dot" key={i} id={i} ref={dotRef} onClick={handleDotClick}></button>
                ))}
              </div>
              
              <img className="itemPicture" ref={itemPictureRef} src={selectedImages[currentIndex]}
              onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}/>

            </div>
            
          </div>


          <div className="itemInfo">

            <div className="itemTitle">
              {item.name}
            </div>

            <div className="itemPrice">
              $ {item.price}
            </div>

            <div className="itemColor">
              <div className="selectedColor">COLOR: {selectedColor}</div>
              <div className="itemColorSelect">
                {item.colorImg.map(obj =>(
                  <div key={obj.color} className="colorChoiceContainer" id={`${obj.color}parent`}>
                    <img className="colorChoice" ref={colorChoiceRefs} id={obj.color} src={obj.colorPre} alt='' 
                    onClick={()=>handleColorClick(obj.color, obj.images)} onMouseDown={handleColorMouseDown}/>
                  </div>
                ))}
              </div>
            </div>

            <div className="itemSizeContainer">
              <div>SELECT A SIZE</div>
              <div className="itemSizeSelect">
                  {item.size.map(s => (
                    <button className="size" key={s}  onClick={()=>handleSizeClick(s)}>{s}</button>
                  ))}
              </div>
            </div>

            <button className="addToWish">Add To Wishlist</button>

            <button className="addToBag" ref={addToBagRef} onClick={addToCartClick} 
            onMouseDown={addToCartMouseDown} onMouseUp={addToCartMouseUp}
            >Select Options</button>

            <div className="extraInfo"></div>

          </div>


        </div>
      </div>
    </ItemContext.Provider>
  )
}



export default ItemDetails;