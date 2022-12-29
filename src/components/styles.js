import corduroyBlack0 from "../styleimg/corduroy_black_0.jpg"
import corduroyBlack1 from "../styleimg/corduroy_black_1.jpg"
import corduroyCamel0 from "../styleimg/corduroy_camel_0.jpg"
import corduroyCamel1 from "../styleimg/corduroy_camel_1.jpg"
import corduroyCamel2 from "../styleimg/corduroy_camel_2.jpg"
import plaidFleeceGreen0 from "../styleimg/plaid_fleece_green_0.jpg"
import plaidFleeceGreen1 from "../styleimg/plaid_fleece_green_1.jpg"
import plaidFleeceRust0 from "../styleimg/plaid_fleece_rust_0.jpg"
import plaidFleeceRust1 from "../styleimg/plaid_fleece_rust_1.jpg"
import leopardAccentCharcoal0 from "../styleimg/leopard_accent_hoodie_charcoal_0.jpg"
import leopardAccentGrey0 from "../styleimg/leopard_accent_hoodie_grey_0.jpg"

const styles = [
  {
    name:'Corduroy Jacket',
    path:'/shop/corduroy-jacket',
    styleN:'149-J8208',
    colors:['black', 'camel'],
    colorImg:[
      {
        color: 'black',
        images: [corduroyBlack0, corduroyBlack1]
      },
      {
        color: 'camel',
        images: [corduroyCamel0, corduroyCamel1, corduroyCamel2]
      }
    ],
    size:['XS','S','M','L','XL'],
    price: 22.75,
    best:true,
    new:true,
    wishlist:false,
    cart:false

  },
  {
    name:'Plaid Fleece Jacket',
    path:'/shop/plaid-fleece-jacket',
    styleN:'149-J8214',
    colors:['green', 'rust'],
    colorImg:[
      {
        color: 'green',
        images: [plaidFleeceGreen0, plaidFleeceGreen1]
      },
      {
        color: 'rust',
        images: [plaidFleeceRust0, plaidFleeceRust1]
      }
    ],
    size:['XS','S','M','L','XL'],
    price: 25.75,
    best:false,
    new:true,
    wishlist:false,
    cart:false

  },
  {
    name:'Leopard Accent Hoodie',
    path:'/shop/leopard-accent-hoodie',
    styleN:'7TH-T1802',
    colors:['charcoal', 'grey'],
    colorImg:[
      {
        color: 'charcoal',
        images: [leopardAccentCharcoal0]
      },
      {
        color: 'grey',
        images: [leopardAccentGrey0]
      }
    ],
    size:['XS','S','M','L','XL'],
    price: 32.50,
    best:false,
    new:true,
    wishlist:false,
    cart:false

  }
]

export default styles;