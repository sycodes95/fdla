import { useState } from "react";
import { Link } from "react-router-dom";
import cart from "../icons/cart.svg"
import wishlist from "../icons/heart.svg"
import "../styles/nav.css"

const Nav = () => {
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
        </div>
      </Link>
      
      
    </nav>
  )
}

export default Nav;