import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import cart from "../icons/cart.svg"
import wishlist from "../icons/heart.svg"
import "../styles/nav.css"
import QuantityContext from "./context"

const Nav = (props) => {
  const {quantity, setQuantity} = props;
  console.log(props)
  return(
    <QuantityContext.Provider value={{quantity, setQuantity}}>
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
            <span className="quantity">{quantity}</span>
          </div>
        </Link>
        
        
      </nav>
    </QuantityContext.Provider>
  )
}

export default Nav;