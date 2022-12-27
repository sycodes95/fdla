
import React from "react";
import Header from "./components/header"
import Nav from "./components/nav"
import Home from "./components/home"
import Shop from "./components/shop"
import Cart from "./components/cart"
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      
    </div>
    </BrowserRouter>

  );
}

export default App;
