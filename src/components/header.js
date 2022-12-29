import React from "react"
import { Component, useState } from "react"
import { Link } from "react-router-dom";
import "../styles/header.css"
import Nav from "./nav"
import Menu from "./menu";
import styles from "./styles";
import QuantityContext from "./context";
import ItemContext from "./itemContext";
const Header = (props) =>{
  const {quantity, setQuantity} = props;
  
  console.log(props);
  return(
    
    <QuantityContext.Provider value={{quantity, setQuantity}}>
      <div className="header">
        <div className="logoContainer">
        <Link className="link" to="/">
          <div className="logoText">
            FDLA.
          </div>
        </Link>
        </div>
        
        <Nav quantity={quantity} setQuantity={setQuantity}/>
        
        
      </div>
    </QuantityContext.Provider>
    
    
  )
}

export default Header;