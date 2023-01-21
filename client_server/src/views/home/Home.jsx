import Card from "../../components/Card/Card";
import { products } from "../../components/constantes/products";
import Carousel from "./Carousel/Carousel";
import Opinion from "../../components/Opiniones/Opinion";
import { opiniones } from "../../components/constantes/opiniones";
import { RxDoubleArrowRight } from "react-icons/Rx";
import { RxDoubleArrowLeft } from "react-icons/Rx";
import Header from '../../components/Header/Header'
import "./home.css";


export default function Home() {
  const opinionDestacada =  opiniones.filter((opinion => opinion.destacada === 1));
  const productosFav = products.filter((product => product.id <= 5 ));
  return (
    <>
    <Header/>
      <>
        <Carousel />
      </>
      <section className="productos-favoritos">
        <div>
          <h1>Estos son nuestros productos favoritos</h1>
        </div>
      </section>
      <section className="favoritos">
        {productosFav.map(({ id, src, alt, name, price, description }) => (
          <Card
          
            key={id}
            src={src}
            alt={alt}
            name={name}
            price={price}
            description={description}
            path="/detalle-producto"
            pathCarrito="/carrito"
          />
        ))}
      </section>
      <section className="opinion">
      <div>
        <h3>Opiniones destacadas</h3>
        <p>Compradores verificados han dejado estas opiniones</p>
        <div className="todasOpiniones">
          <div> <RxDoubleArrowLeft/></div>
          <div> Ver más opiniones</div>
          <div><RxDoubleArrowRight/></div>
        </div>
      </div>
      
      <div className="usuarios">
       {opinionDestacada.map(({ id, rating, usuario, texto }) => (
          <Opinion
            id={id}
            rating={rating}
            usuario={usuario}
            texto={texto}
          />
        ))
        }
      </div>
      </section>

     
    </>
  );
}


