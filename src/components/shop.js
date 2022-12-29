import Cart from "./cart";
import styles from "./styles";
import "../styles/shop.css"

import { Link } from "react-router-dom";

import { useState } from "react";


const Shop = () =>{
  const checkBestSeller = (best) =>{
    if(best) return 'Best Seller';
  }
 
  
  
  return(
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
              <img className="styleImg" src={style.colorImg[0].images[0]}/>
            </Link>
            
            <div className="shopItemDetail">
              <span>{style.name}</span>
              <span>$ {style.price}</span>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  )
}
export default Shop;