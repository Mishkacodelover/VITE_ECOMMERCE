import Caracteristicas from "./Caracteriticas/Caracteristicas";
import Especificaciones from "./Especificaciones/Especificaciones";
import Opinion from "../../components/Opiniones/Opinion";
import BigCard from "../../components/BigCard/BigCard";
import { especificaciones } from "../../components/constantes/especificaciones";
import { caracteristicas } from "../../components/constantes/caracteristicas";
import { opiniones } from "../../components/constantes/opiniones";
import { products } from "../../components/constantes/products";
import { TbFlower } from "react-icons/Tb";
import { GiPlantRoots } from "react-icons/Gi";
import { GiDelicatePerfume } from "react-icons/Gi";
import {BsPatchCheck} from 'react-icons/Bs';
import Header from '../../components/Header/Header'

import './detalleProducto.css'

export default function DetalleProducto() {

  const icons = [<TbFlower />, <GiPlantRoots />, <GiDelicatePerfume />];
  const productosDet = products.filter((product) => product.id === 5);
  const opinionDestacada =  opiniones.filter((opinion => opinion.destacada === 1));

  //   function icon(icons, caracteristicas) {
  //     if (caracteristicas.name == "Notas olfativas") {
  //       image = icons[0];
  //     }
  //     if (caracteristicas.name == "Cultivo biológico") {
  //       image = icons[1];
  //     }
  //     if (caracteristicas.name == "Diseño exclusivo") {
  //       image = icons[2];
  //     }
  //     return image;
  //   }

  return (
    <>
    <Header/>
      <div className="detalleProducto">
        <div className="producto">
          {productosDet.map(({ id, src, alt, name, price, description }) => (
            <BigCard
            
              key={id}
              src={src}
              alt={alt}
              name={name}
              price={price}
              description={description}
            />
          ))}
          <div className="garantia">
          <p><BsPatchCheck/>  Incluye 30 días de garantía</p>
         </div>
         
        </div>
        

        <div className="detalles">
          <div className="caracteristicas">
            <h3>Características</h3>
            {caracteristicas.map(({ titulo, descripcion }) => (
              <Caracteristicas
                image={<TbFlower />}
                name={titulo}
                description={descripcion}
              />
            ))}
          </div>
          <div className="especificaciones">
            <h3>Especificaciones</h3>
            {especificaciones.map(({ etiqueta, valor }) => (
              <Especificaciones title={etiqueta} description={valor} />
            ))}
          </div>
        </div>
      </div>
      <div className="opinion">
      <div className="usuarios">
      {opinionDestacada.map(({ id, rating, usuario, texto }) => (
        <Opinion id={id} rating={rating} usuario={usuario} texto={texto} />
      ))}
      </div>
      </div>
     
      
    </>
  );
}
// opiniones.id === products.name
