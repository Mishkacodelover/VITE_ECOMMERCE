import "./finalizarCompra.css";
import ResumenPedido from "./resumenPed/ResumenPedido";
import FormDireccion from "./formDireccion/FormDireccion";
import HeaderCompra from '../../components/HeaderCompra/HeaderCompra';
import FranjaCompra from '../../components/FranjaCompra/FranjaCompra'

export default function FinalizarCompra() {
  return (
    <>
      <HeaderCompra />
      <FranjaCompra
        text="Finalizar compra"
        buttonText="Mastercard .... 6545 seleccionada"
      />

      <section className="finalizar_compra">
        <FormDireccion />
        <ResumenPedido />
      </section>
    </>
  );
}
