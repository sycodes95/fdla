import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shop from "./shop";
import styles from "./styles";
const Cart = () =>{
  const cartStyles = styles.filter(s => s.cart === true);
  useEffect(()=>{
    console.log('useeffect');
  }, [styles])
  const removeHandler = (s) =>{
    
    
    styles.forEach(style =>{
      if(style.name === s.name){
        style.cart = false;
        style.quantity = 0;
        let removeDiv = document.getElementById(`${s.styleN}`)
        let parent = removeDiv.parentNode
        parent.removeChild(removeDiv)
        console.log(styles)
      }
    })
  }
  
  return(
    <div className="cart">
      {cartStyles.map(s => 
        <div id={s.styleN} key={s.styleN}>
          <div>{s.name}</div>
          <button className="removeItem" onClick={()=> removeHandler(s)}>remove</button>
        </div>
        
      )}
    </div>
    
      
  )
}

export default Cart;