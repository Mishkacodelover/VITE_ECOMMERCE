import { BsCreditCard2Back } from "react-icons/Bs";
import {Link} from 'react-router-dom'

export default function Mastercard() {
  return (
    <div class="caja1">
      <h3>Mis tarjetas</h3>
      <form>
        <div class="input-grp radio">
          <label for="6545"> Mastercard ....6545</label>
          <input type="radio" name="mastercard" id="1" />
        </div>
        <div class="input-grp radio">
          <label for="7841">Mastercard ....7841</label>
          <input type="radio" name="mastercard" id="2" />
        </div>
        <div class="input-grp radio">
          <label for="6699">Mastercard ....6699</label>
          <input type="radio" name="mastercard" id="3" />
        </div>
        <Link to="/finalizar-compra">
        <button type="button" class="button">
          Pagar con esta tarjeta
        </button>
        </Link>
        
      </form>
    </div>
  );
}
