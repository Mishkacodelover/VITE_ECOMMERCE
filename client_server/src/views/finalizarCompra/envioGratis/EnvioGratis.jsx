import { RiTruckLine } from "react-icons/Ri";
import { TbDiscount2 } from "react-icons/Tb";
import './envioGratis.css'

export default function EnvioGratis() {
  return (
    <div className="icono-grp">
      
      <div>
        <p> <b>Envío gratis <RiTruckLine />  </b></p>
        <p>Por comprar más de 100 €</p>
      </div>
       <div>
        <p><b> Descuento en tu siguiente compra <TbDiscount2 /></b></p>
        <p>Acumula el 1% de tus compras </p>
      </div>
    </div>
  );
}
