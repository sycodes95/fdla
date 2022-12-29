import Cart from "./cart";
import styles from "./styles";
import "../styles/shop.css"
import { useState, useContext, createContext } from "react";
import { Link } from "react-router-dom";
import ItemContext from "./itemContext";



const Shop = (props) =>{
  const { item, setItem } = useContext(ItemContext);

  const checkBestSeller = (best) =>{
    if(best) return 'Best Seller';
  }
  //const { item, setItem } = useContext(ItemContext);
  const handleClick = (style) =>{
    setItem(style)
    console.log(item)
  }
  
  return(
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
                <img className="styleImg" src={style.colorImg[0].images[0]} onClick={()=>handleClick(style)}/>
              </Link>
              
              <div className="shopItemDetail">
                <span>{style.name}</span>
                <span>$ {style.price}</span>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </ItemContext.Provider>
  )
}
export default Shop;