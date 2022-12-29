
import React from "react";
import Header from "./components/header"
import Nav from "./components/nav"
import Home from "./components/home"
import Shop from "./components/shop"
import Cart from "./components/cart"
import Menu from "./components/menu"
import Footer from "./components/footer";
import styles from "./components/styles";
import CorduroyJacket from "./components/itemsComponents/corduroyJacket";
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([])
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Menu/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/shop/corduroy-jacket" element={<CorduroyJacket/>}/>
        </Routes>

      <Footer/>
    </div>
    </BrowserRouter>

  );
}

export default App;
