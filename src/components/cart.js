import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shop from "./shop";
import styles from "./styles";
import "../styles/cart.css"
import QuantityContext from "./context"

const Cart = () =>{
  const { quantity, setQuantity } = useContext(QuantityContext);

  const cartStyles = styles.filter(s => s.cart === true);


  const ifCartEmpty = () =>{
    if(cartStyles.every(s => s.quantity === 0)){
      return 'Cart is empty!'
    }
  }

  const getTotal = () =>{
    cartStyles.reduce()
  }
  useEffect(()=>{
    console.log('useeffect');
  }, [styles])
  const removeHandler = (s) =>{
    const element = document.getElementById(`${s.styleN}`)
    element.style.opacity = 0;
    element.addEventListener('transitionend', function(event){
      styles.forEach(style =>{
        if(style.name === s.name){
          setQuantity(quantity - style.quantity)
          style.cart = false;
          style.quantity = 0;
          console.log(styles)
        }
      })

    })
    
  }
  
  return(
    <div className="cartContainer">
      <div className="cartItemContainer">
        {cartStyles.map(s => 
          <div className="cartItem" id={s.styleN} key={s.styleN}>
            <div>{s.name}</div>
            <img className="cartItemImg" src={s.colorImg[0].images[0]}/>
            <div className="itemPrice">$ {s.quantity * s.price}</div>
            <div>{s.quantity} pcs.</div>
            <button className="removeItem" onClick={()=> removeHandler(s)}>remove</button>
          </div>
        )}
        <div className="cartEmpty">{ifCartEmpty()}</div>
      </div>

    </div>
    
    
      
  )
}

export default Cart;