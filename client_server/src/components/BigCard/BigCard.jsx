import './bigCard.css'
import Button from '../Button/Button'

import {TbShoppingCart} from 'react-icons/Tb'
export default function BigCard({id,src,alt,name,price,description}) {
    return (
      
          <article key={id}>
       
          <div className="cardBig">
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
            <Button text = "Añadir al carrito" className = "button"/>
            <input type="number" name="number" min="1" placeholder="1" />
            
            </div>
          
          </div>
        </article>    
     
    );
  }
