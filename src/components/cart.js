import { useContext, useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import Shop from "./shop";
import styles from "./styles";
import "../styles/cart.css"
import QuantityContext from "./context"
import CartContext from "./cartContext";
import ItemContext from "./itemContext";
import { Link } from "react-router-dom";
import {Offcanvas} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css'
import OffcanvasContext from "./offcanvasContext";

const Cart = (props) =>{
  let { quantity, setQuantity } = useContext(QuantityContext);
  let { cartAdded, setCartAdded} = useContext(CartContext)
  let { item, setItem} = useContext(ItemContext)
  const {isOpen, setIsOpen} = useContext(OffcanvasContext)
  console.log(isOpen);

  if(cartAdded.items.length < 1){
    cartAdded = JSON.parse(localStorage.getItem("cartAdded"));
  } 

  if(!quantity){
    console.log('quantity storage');
    quantity = JSON.parse(localStorage.getItem("quantity"))
  }

  
  const onHideHandler = () =>{
    setIsOpen(false)
  }
  useEffect(()=>{
    /*
    setTimeout(()=>{
      const handleClick = (event) =>{
        if(!event.target.closest('.cartContainer')){
          setIsOpen(false)
        }
      }
  
      document.addEventListener('click', handleClick)
  
      return ()=>{
        document.removeEventListener('click', handleClick)
      }
  
    }, 1000)
    */
  })
 
  useEffect(()=>{
    //keep cartAdded in sync with local storage
    localStorage.setItem('cartAdded', JSON.stringify(cartAdded))
    const cartItem = document.querySelectorAll('.cartItem')
    cartItem.forEach(i =>{
      i.style.opacity = '1'
    })
  }, [cartAdded])

  useEffect(()=>{
    //keep quantity in sync with local storage
    setQuantity(quantity)
    localStorage.setItem('quantity', JSON.stringify(quantity))
  },[quantity])

  const removeHandler = (it) =>{

    const element = document.getElementById(`${it.style} ${it.color} ${it.size}`)
    element.style.opacity = 0;
    setTimeout(()=>{
      setQuantity(quantity - it.quantity)
      it.quantity = 0
      let newItems = cartAdded.items.filter(item => item.quantity !== 0)
      console.log(newItems);
      setCartAdded({items: newItems })
      if(newItems.length < 1) {
        localStorage.removeItem('cartAdded')
        localStorage.removeItem('quantity')
      } 

    }, 700)
      
    
  }

  const handleCartItemClick = (it) =>{
    styles.forEach(s =>{
      if(s.path === it.path){
        setItem(s)
      }
    })
  }
  console.log(cartAdded);
  return(
    <Offcanvas show={isOpen}  onHide={onHideHandler} placement="end">
      <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      
        <div className="cartContainer">
          <div className="cartShippingDetails">

          </div>
          <div className="cartItemContainer">
            {cartAdded ? cartAdded.items.map(it => 
              <div className="cartItem" id={`${it.style} ${it.color} ${it.size}`} key={it.styleN}>
                <div className="cartPicAndQuantity">
                  <div className="cartItemQuantity">{it.quantity}</div>
                  <Link className='cartItemLink' to={it.path} >
                    <img className="cartItemImg" src={it.image} onClick={()=>handleCartItemClick(it)}/>
                  </Link>


                </div>
                
                <div className="cartItemDetails">
                  <div className="itemStyle">{it.style}</div>
                  <div className="itemDetails">{` ${it.color}/ ${it.size} `}</div>
                  <button className="removeItem" onClick={()=> removeHandler(it)}>remove</button>
                </div>
                
                <div className="cartItemPrice">$ {it.quantity * it.price}</div>
              </div>
              
            )
            : <div className="cartEmpty">Cart is empty!</div>}

          </div>

          <div className="subTotal"></div>

        </div>
      
    </Offcanvas>
  )
}

export default Cart;