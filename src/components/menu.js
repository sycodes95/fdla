import { render } from "@testing-library/react"
import "../styles/menu.css"
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return(
    <div className="menuContainer">
      <div className="menuItems newArr">
        <span>New Arrivals</span>
      </div>
      <div className="menuItems bestSell">
        <span>Best Sellers</span>
      </div>
      <div className="menuItems womens">
        <span>Women's</span>
      </div>
    </div>
  )
}

export default Menu;