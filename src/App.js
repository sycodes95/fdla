
import React from "react";
import Header from "./components/header"
import Nav from "./components/nav"
import Home from "./components/home"
import Shop from "./components/shop"
import Cart from "./components/cart"
import Menu from "./components/menu"
import Footer from "./components/footer";
import styles from "./components/styles";
import ItemDetails from "./components/itemsComponents/itemDetails";
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";
import { useState } from "react";
import "./styles/app.css"
import QuantityContext from "./components/context";
import ItemContext from "./components/itemContext";
import ColorContext from "./components/colorContext";
import CartContext from "./components/cartContext";

const App = () => {
  const [item, setItem] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [color, setColor] = useState([])
  const [cartAdded, setCartAdded] = useState({items:[]})
  
  return (
    <BrowserRouter>
    <div className="main">
      <CartContext.Provider value={{cartAdded, setCartAdded}}>
        <ColorContext.Provider value={{color, setColor}}>
          <ItemContext.Provider value={{item, setItem}}>
            <QuantityContext.Provider value={{quantity, setQuantity}}>
              <Header quantity={quantity} setQuantity={setQuantity}/>
              <Menu/>

                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/shop" element={<Shop/>}/>
                  <Route path={item.path} element={<ItemDetails/>}/>
                  <Route path="/cart" element={<Cart/>}/>
                  {styles.map(s =>(
                    <Route path={s.path} key={s.styleN} element={<ItemDetails/>}/>
                  ))}
                  
                </Routes>

              <Footer/>
            </QuantityContext.Provider>

          </ItemContext.Provider>
        </ColorContext.Provider>
      </CartContext.Provider>
      
    </div>
    </BrowserRouter>

  );
}

export default App;
