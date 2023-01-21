import Tarjeta from '../Tarjeta/Tarjeta'
import pagoImg from '../../assets/iconos/resto_iconos/pago.png'
import envioImg from '../../assets/iconos/resto_iconos/envio.png'
import checkImg from '../../assets/iconos/resto_iconos/check.png'
import ofertasImg from '../../assets/iconos/resto_iconos/ofertas.png'
import './ventaja_tarjeta.css'

export default function Ventajas_compra(){
    return(
        <section className="tarjetas">
            <Tarjeta imagen = {pagoImg} description= "pagoseguro" textH5="Pago seguro" textP="100% garantizado"/>
            <Tarjeta imagen = {envioImg} description= "envio" textH5="Envío gratis" textP="En pedidos de + de 50€"/>
            <Tarjeta imagen = {checkImg} description= "2 años garantía" textH5="30 días de garantía" textP="En todos nuestros perfumes"/>
            <Tarjeta imagen = {ofertasImg} description= "ofertas únicas" textH5="Ofertas únicas" textP="Precios de mayorista"/>
      </section>
    )
}