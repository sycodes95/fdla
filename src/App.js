
import React from "react";
import Header from "./components/header"
import Nav from "./components/nav"
import Home from "./components/home"
import Shop from "./components/shop"
import Cart from "./components/cart"
import Menu from "./components/menu"
import Footer from "./components/footer";
import Item from "./components/item";
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Menu/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/item" element={<Item/>}/>
        </Routes>

      <Footer/>
    </div>
    </BrowserRouter>

  );
}

export default App;
