
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
import QuantityContext from "./components/context";
import ItemContext from "./components/itemContext";
const App = () => {
  const [item, setItem] = useState([])
  const [quantity, setQuantity] = useState(0)
  return (
    <BrowserRouter>
    <div>
      <ItemContext.Provider value={{item, setItem}}>
        <QuantityContext.Provider value={{quantity, setQuantity}}>
          <Header quantity={quantity} setQuantity={setQuantity}/>
          <Menu/>

            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path={item.path} element={<CorduroyJacket/>}/>
            </Routes>

          <Footer/>
        </QuantityContext.Provider>

      </ItemContext.Provider>
      
    </div>
    </BrowserRouter>

  );
}

export default App;
