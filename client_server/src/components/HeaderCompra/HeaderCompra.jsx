import Logo from "../Logo/Logo";
import CartButton from "../CartButton/CartButton";
import { BsArrowRightCircle } from "react-icons/Bs";
import { BsCreditCard } from "react-icons/Bs";
import { TfiWallet } from "react-icons/Tfi";
import Button from '../Button/Button'
import './headerCompra.css'

export default function HeaderCompra() {
  return (
    <header className="headerCompra">
      <div className="compraIzq">
        <Logo className="logo" id="logo" title="Perfumes Amanatti" />
      </div>
      <div className ="compraDrch">
        <div><CartButton /></div>
        <div> <BsArrowRightCircle /></div>

       
        <div>
        <button type="button" className="button">
          Forma de pago <BsCreditCard />
        </button>
        </div>
       
        <div> <BsArrowRightCircle /></div>
       
        <div>
        <button type="button" className="button">
          Finalizar pedido <TfiWallet />
        </button>
        </div>
       
      </div>
    </header>
  );
}
