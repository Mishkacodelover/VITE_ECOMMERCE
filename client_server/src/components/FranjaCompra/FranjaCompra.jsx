import './franjaCompra.css'


export default function FranjaCompra({text,buttonText}){
    return(
        <section class="comprar">
        <div>
          <h1>{text}</h1>
      </div>
       <div class="seguir_comprando">
        <button class="button" id="comprando">{buttonText}</button>
      </div>
      </section>
    )
}