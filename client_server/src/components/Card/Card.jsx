import './card.css'
import Button from '../Button/Button'
import {Link} from 'react-router-dom'

import {TbShoppingCart} from 'react-icons/Tb'
export default function Card({id,src,alt,name,price,description,path,pathCarrito}) {
    return (
      
          <article key = {id}>
       
          <div className="card">
            <figure>
              <img
                src={src}
                alt={alt}/>
            </figure>
            <div className="card-content">
              <div className="card-title-grp">
                <a href="#"><h5>{name}</h5></a>

                <div className="price-grp">{price} €
                 
                  
                </div>
              </div>

              <div className="description">
                <p>{description}</p>
              </div>
              <div className="rating">
                <p className="filled">★</p>
                <p className="filled">★</p>
                <p className="filled">★</p>
                <p className="filled">★</p>
                <p>★</p>
              </div>
            </div>
            <div className="card-footer">
              <Link to={path}>
              <Button text = "Ver más" className = "button"/>
              </Link>
              <Link to={pathCarrito}>
              <Button text =  {<TbShoppingCart/>} className = "button" id = "carrito-fav"/>
              </Link>
           
           
            </div>
          
          </div>
        </article>    
     
    );
  }
