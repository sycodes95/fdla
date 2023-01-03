

import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import cart from "../icons/cart.svg"
import wishlist from "../icons/heart.svg"
import "../styles/nav.css"
import QuantityContext from "./context"
import { createContext } from "react";
import OffcanvasContext from "./offcanvasContext";
import Cart from "./cart";
const Nav = (props) => {
  const {quantity, setQuantity} = props;
  const {isOpen, setIsOpen} = useContext(OffcanvasContext)
  const [isCartEmpty, setIsCartEmpty] = useState('')
  console.log(quantity);
  const handleCartClick = () =>{
    setIsOpen(true)
    if(quantity < 1){
      console.log('empty');
      setIsCartEmpty('Cart is Empty!')
    } else {
      setIsCartEmpty('')
    }
   
  }

  useEffect(()=>{
    
  },[quantity])
  return(
    <OffcanvasContext.Provider value={{isOpen, setIsOpen}}>
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
          
          <div className="cart">
            <img className="cartSvg" src={cart} onClick={handleCartClick}/>
            <span className="quantity">{quantity}</span>
          </div>
          
          <Cart empty={isCartEmpty} setIsCartEmpty={setIsCartEmpty}/>
          
          
        </nav>
      </QuantityContext.Provider>
    </OffcanvasContext.Provider>
  )
}

export default Nav;