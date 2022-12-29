import Cart from "./cart";
import styles from "./styles";
import "../styles/shop.css"
import Item from "./item";
import { Link } from "react-router-dom";

const Shop = () =>{
  const checkBestSeller = (best) =>{
    if(best) return 'Best Seller';
  }

  const handleClick = (style) =>{
    return (
      <Item props={style}/>
    )
  }
  
  
  return(
    <div className="shopContainer">
      <div className="shopHeader">
        <h2 className="shopTitle">All</h2>
        <nav className="shopFilter">
        </nav>
      </div>
      <div className="shopItemsContainer">
        {styles.map(style => (
          <div className="shopItems" key={style.styleN}>
            
            <img className="styleImg" src={style.colorImg[0].images[0]} onClick={() => handleClick(style)}/>
            
            <div className="shopItemDetail">
              <span>{style.name}</span>
              <span>$ {style.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Shop;