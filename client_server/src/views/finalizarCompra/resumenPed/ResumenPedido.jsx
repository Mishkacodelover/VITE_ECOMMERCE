import "./resumenPedido.css";
import Pedido from "../../../components/pedido/Pedido";
import { products } from "../../../components/constantes/products";

import BotonPago from "../../../components/botonPago/BotonPago"


export default function ResumenPedido() {
  const pedidoProducto = products.filter((item) => item.id <= 3);
  function alerta(){
     alert("Tu pedido está confirmado. ¡Gracias por realizar tu compra!")
  };

  return (
  
    <>
  
    <div className="pedido">
      <h3>Resumen de pedido</h3>
     
        {pedidoProducto.map(({ src, alt, name, price }) => (
          <Pedido name={name} price={price} src={src} alt={alt} />
        ))}
          
          <BotonPago text="Confirmar compra" url="/mis-pedidos" onclick = {()=>alerta}/>
     
    </div>
    </>
  );
}
