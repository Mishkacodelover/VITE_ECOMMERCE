import {products} from '../../components/constantes/products'
import Card from '../../components/Card/Card'
import './allProducts.css'
import Header from '../../components/Header/Header'



export default function AllProducts(){

    return(
      <>
      <Header/>
        <div >
            <h1 >Todos nuestros perfumes</h1>
            
               <div className="categorias">
               <div><h3>Ver perfumes de mujer</h3></div>
               <div><h3>Ver perfumes de hombre</h3></div>
        </div>
          
           
            
           <div className= "todosProductos">
            {products.length > 0 ? (
            products.map(({ id, src, alt, name, price, description }) => (
              <Card
               
                id={id}
                src={src}
                alt={alt}
                name={name}
                price={price}
                description={description}
                path="/detalle-producto"
                pathCarrito="/carrito"
              />
            ))
          ) : (<p>No hay productos</p>)}
          </div>
        </div>
        </>
    )
}