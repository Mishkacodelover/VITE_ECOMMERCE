import {Link} from 'react-router-dom'
import './botonPago.css'

export default function BotonPago({text,url,onclick}){
    return(
       
        <div className="pagar">
        <div className="total">
          <div>Total </div>
          <div id="total">0 </div>
          <div>€</div>
        </div>
        <div>
          <Link to={url}>
          <button type="button" className="buttonform" onclick = {onclick}>
           {text}
          </button></Link>
          
        </div>
      </div>

    )
}