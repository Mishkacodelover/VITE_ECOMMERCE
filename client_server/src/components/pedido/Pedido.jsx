import './pedido.css'

export default function Pedido({price,name,src,alt,eliminar}){
    return(
        <div className="ped">
        <div className="card">
        <figure>
          <img src={src} alt={alt} />
        </figure>
        <div className="card-content">
          <div className="card-title-grp">
            <p>{name}</p>
          </div>
          <div className="price-grp">
            <div className="price">
              {price}
            </div>
            <div className="euro">€</div>
          </div>
        </div>
      </div>
        <div className="cantidad">
        <input
          type="number"
          name="number"
          min="1"
          placeholder="1"
          id="item1"
        />
      </div>
      <div className="eliminar">{eliminar}</div>
      </div>
    )
}