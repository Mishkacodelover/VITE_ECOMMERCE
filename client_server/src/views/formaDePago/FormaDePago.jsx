import "./formaDePago.css";
import Mastercard from "./mastercard/Mastercard";
import NuevaTarjeta from "./nuevaTarjeta/NuevaTarjeta";
import HeaderCompra from '../../components/HeaderCompra/HeaderCompra';
import FranjaCompra from "../../components/FranjaCompra/FranjaCompra";

export default function FormaDePago() {
  return (
    <>
     <HeaderCompra />
      <FranjaCompra
        text="Forma de pago"
        buttonText="Seguir comprando"
      />
      <section class="cajas">
        <Mastercard />
        <NuevaTarjeta />
      </section>
    </>
  );
}
