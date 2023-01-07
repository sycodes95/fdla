import "bootstrap/dist/css/bootstrap.css"
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
import { useState, useEffect } from "react";
import "./styles/app.css"
import QuantityContext from "./components/context";
import ItemContext from "./components/itemContext";
import ColorContext from "./components/colorContext";
import CartContext from "./components/cartContext";
import OffcanvasContext from "./components/offcanvasContext";
import { HashRouter } from "react-router-dom";
const App = () => {
  const [item, setItem] = useState([])
  const [quantity, setQuantity] = useState(null)
  const [color, setColor] = useState([])
  const [cartAdded, setCartAdded] = useState({items:[]})
  const [isOpen, setIsOpen] = useState(false)
  

  let lastScrollY = 0 
  const handleScroll = () =>{
    const header = document.querySelector('.header')
    
    if(header){
      let currentScrollY = window.scrollY;
      console.log(currentScrollY);
      if (currentScrollY < lastScrollY) {
        header.style.position = 'sticky'
        header.style.top = '0%'
        
      } else {
        header.style.position = 'relative'
        header.style.top = '0%'
      }
      lastScrollY = currentScrollY;

    }

  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  

  
  return (
    <HashRouter>
      <div className="main">
        <OffcanvasContext.Provider value={{isOpen, setIsOpen}}>
          <CartContext.Provider value={{cartAdded, setCartAdded}}>
            <ColorContext.Provider value={{color, setColor}}>
              <ItemContext.Provider value={{item, setItem}}>
                <QuantityContext.Provider value={{quantity, setQuantity}}>
                  <Header quantity={quantity} setQuantity={setQuantity}/>
                  

                    <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/home" exact element={<Home/>}/>
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
        </OffcanvasContext.Provider>
        
      </div>
    </HashRouter>

  );
}

export default App;
