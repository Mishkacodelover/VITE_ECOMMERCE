import "./carrito.css";
import Pedido from "../../components/pedido/Pedido";
import BotonPago from "../../components/botonPago/BotonPago"
import { products } from "../../components/constantes/products";

import { ImBin2 } from "react-icons/Im";
import HeaderCompra from '../../components/HeaderCompra/HeaderCompra';
import FranjaCompra from '../../components/FranjaCompra/FranjaCompra'

export default function Carrito() {
  const pedidoProducto = products.filter((item) => item.id <= 3);
  return (
    <>
    <HeaderCompra/>
    <FranjaCompra text="Mi carrito" buttonText="Seguir comprando"/>
    <div className="resumenCarrito">
      <div className="pedido">
        <h3>Mi carrito</h3>

        {pedidoProducto.map(({ src, alt, name, price }) => (
          <Pedido
            name={name}
            price={price}
            src={src}
            alt={alt}
            eliminar={
              <button>
                <ImBin2 />
              </button>
            }
          />
        ))}
      </div>
      <div className="pago">
         <h3>Resumen de pedido</h3>
        <p>Continúa con el proceso de compra</p>
      <BotonPago text="Proceder al pago" url="/forma-de-pago"/>
      </div>
    
    </div>
    </>
  );
}
