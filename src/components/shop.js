import Cart from "./cart";
import styles from "./styles";
import "../styles/shop.css"
import { useState, useContext, createContext } from "react";
import { Link } from "react-router-dom";
import ItemContext from "./itemContext";
import ColorContext from "./colorContext";


const Shop = (props) =>{
  const { item, setItem } = useContext(ItemContext);
  const { color, setColor } = useContext(ColorContext)

  const checkBestSeller = (best) =>{
    if(best) return 'Best Seller';
  }
  //const { item, setItem } = useContext(ItemContext);
  const handleClick = (style) =>{
    setItem(style)
  }

  const previewColorClick = (style, color) => {
    setColor(color)
    const img = document.getElementById(`${style.styleN}`)
    img.src = color.images[0]
  }
  
  return(
      <ColorContext.Provider value={{color, setColor}}>
        <ItemContext.Provider value={{item, setItem}}>
          <div className="shopContainer">
            <div className="shopHeader">
              <h2 className="shopTitle">All</h2>
              <nav className="shopFilter">
              </nav>
            </div>
            <div className="shopItemsContainer">
              {styles.map(style => (
                <div className="shopItems" key={style.styleN}>
                  <Link className="picLink" to={style.path}>
                    <img className="styleImg" id={style.styleN} 
                    src={style.colorImg[0].images[0]} onClick={()=>handleClick(style)}/>
                  </Link>
                  
                  <div className="shopItemDetail">
                    <span>{style.name}</span>
                    <span>$ {style.price}</span>
                  </div>
                  <div className="shopItemColors">
                    {style.colorImg.map(color => (
                      <img className="colorPreview" key={color.color}id="colorPreview{color.color}" src={color.colorPre} alt='' 
                      onClick={()=>previewColorClick(style, color)}/>
                    ))}
                  </div>
                  
                  
                </div>
              ))}
            </div>

          </div>
        </ItemContext.Provider>
      </ColorContext.Provider>
  )
}
export default Shop;