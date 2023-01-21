export default function NuevaTarjeta(){
    return(
        <div class="caja2">
                 <h3>Añadir nueva tarjeta</h3>
                   <form>
                       
                       <div class="input-grp">
                       <label for="tarjeta">Tarjeta</label>
                       <input type="number" name="numerotarjeta" placeholder=" &#128179; Número de tarjeta" id="tarjeta"/>
                       </div>
                       <div class="input-grp">
                       <label for="titular">Titular</label>
                       <input type="text" name="titular de tarjeta" placeholder=" &#128100; Titular de la tarjeta"  id="titular"/>
                      </div>
                      <div class="input-grp">
                       <label for="caducidad">Caducidad</label>
                       <input type="number" name="caducidad" placeholder="&#128467; Caducidad" id="caducidad"/>
                     </div>
                       <div class="input-grp">
                       <label for="csv">csv</label>
                       <input type="number" name="csv" placeholder="&#128272;  Código seguro" id="csv"/>
                     </div>
                       <button type="button" class="button">Añadir a mis tarjetas</button>
                       
   
                   </form>
               </div>
    )
}