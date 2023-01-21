import "./aboutUs.css";
import fotoLaboratorio from "../../assets/imagenes/ousa-chea-gKUC4TMhOiY-unsplash.jpg";
import fotoLab from "../../assets/imagenes/sieuwert-otterloo-AuR4z-edGAU-unsplash.jpg";
import Header from '../../components/Header/Header'

export default function AboutUs() {
  return (
    <>
    <Header/>
    <div className="sobreNosotros">
      <div className="fotos">
        <img src={fotoLaboratorio} />
        <img src={fotoLab} />
      </div>
      <div className="texto">
        <h1>NUESTRA EMPRESA</h1>
        <div>
          <p>
            "Nuestra empresa de perfumes se ha dedicado a la creación de
            fragrancias únicas y atemporales desde hace más de 10 años.
          </p>
          <p>
            Nos esforzamos por utilizar solo los mejores ingredientes y
            tecnologías disponibles para producir perfumes que sean tan
            elegantes como duraderos. Nuestra amplia variedad de opciones de
            perfumes incluye desde clásicos intemporales hasta ediciones
            limitadas y colaboraciones con diseñadores de renombre.
          </p>
        </div>
        <div>
          <p>
            Además, nos comprometemos a la sostenibilidad y a utilizar prácticas
            éticas en todas nuestras operaciones. Nos encanta poder ofrecer a
            nuestros clientes perfumes que reflejen su estilo único y
            personalidad.
          </p>
          <p>
            ¡Esperamos que encuentres tu próximo perfume favorito con nosotros!"
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
