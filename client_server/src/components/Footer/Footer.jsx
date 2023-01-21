import Redes_sociales from "../Redes_sociales/Redes_sociales";
import FooterForm from "../FooterForm/FooterForm";
import Frases_footer from "../Frases_footer/Frases_footer";
import Logo from "../Logo/Logo";
import Ventajas_tarjetas from '../Ventajas_tarjetas/Ventajas_tarjetas'
import './footer.css'

export default function Footer() {
  return (
<>
    <Ventajas_tarjetas/>
  
    <footer>
      <div className="footer">
        <div className="izq">
          <Logo className="milogo" title="Perfumes Amanatti" />

          <Frases_footer
            tx_one="Centro de ayuda"
            tx_two="Servicio al consumido"
            tx_three="Escríbenos"
            tx_four="Servicio telefónico"
            tx_five=" Políticas de privacidad"
            tx_six="Condiciones de compra"
            tx_seven="Opiniones de clientes"
            tx_eight="Avisos de privacidad y cookies"
          />
        </div>
        <div className="drch">
          <FooterForm
            text="Únete a nuestra newsletter y recibe ofertas diarias"
            errorText="El email es incorrecto"
            buttonText="Suscribirme" />
          <Redes_sociales text ="Síguenos en redes sociales" />
        </div>
      </div>
    </footer>
    </>
  );
}
