import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cart from "../icons/cart.svg"
import wishlist from "../icons/heart.svg"
import "../styles/nav.css"
import styles from "./styles";

const Nav = () => {
  
  const cartQuantity = () =>{
    let count = 0;
    styles.forEach(s =>{
      count += s.quantity;
    })
    
    return count;
  }
  
  return(
    <nav className="nav">
      <Link className="link" to="/">
        <div className="home">Home</div>
      </Link>
      <Link className="link" to="/shop">
        <div className="shop">Shop</div>
      </Link>
      <Link className="link" to="/wishlist">
        <div className="wishlist">
          <img className="wishlistSvg" src={wishlist}/>
        </div>
      </Link>
      <Link className="link" to="/cart">
        <div className="cart">
          <img className="cartSvg" src={cart}/>
          <span className="quantity">{cartQuantity()}</span>
        </div>
      </Link>
      
      
    </nav>
  )
}

export default Nav;