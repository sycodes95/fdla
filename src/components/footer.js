import "../styles/footer.css"
import flowers from "../footerImg/beigeflowers.jpg"
const Footer = () =>{
  return(
    <div className="footerMain">
      <div className="footerContainer">
        <div className="footerImg">
          <img className="flowers" src={flowers}/>
        </div>
        <div className="footerInfo">
          <div className="footerSection footerQuestion">
            <span className="footerInfoTitle">Question?</span>
            <p>213 420 6969</p>
            <p>someemail@gmail.com</p>
            <p>Mon - Fri 11am-5pm PST,</p>
            <p>excluding holidays.</p>
          </div>
          <div className="footerSection footerCustomer">
            <span className="footerInfoTitle">Customer Service</span>
            <p>Orders</p>
            <p>Returns</p>
            <p>Shipping</p>
            <p>Contact us</p>
          </div>
          <div className="footerSection footerAbout">
            <span className="footerInfoTitle">About Us</span>
            <p>About</p>
            <p>Terms of use</p>
            <p>Privacy</p>
            <p>Accessibility</p>
          </div>
          <div className="footerSection footerSocial">
            <span className="footerInfoTitle">Social Media</span>
            
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default Footer;