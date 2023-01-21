import './cartButton.css'
import {TbShoppingCart} from 'react-icons/Tb'
import {Link} from 'react-router-dom'


export default function CartButton(){
    return(
      <Link to="/carrito">
        <button className="button carrito" type="button" id="carrito">
       Carrito <TbShoppingCart/><span className="circulo"></span>
        <span className="contador" id="contador">
          0
        </span>
      </button>
      </Link>
      
    )
}