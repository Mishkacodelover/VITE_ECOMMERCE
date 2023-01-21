import EnvioGratis from '../envioGratis/EnvioGratis'
import './formDireccion.css'
import {FaStreetView} from 'react-icons/Fa'
import {MdOutlineStreetview} from 'react-icons/Md'
import {AiOutlineFieldNumber} from 'react-icons/Ai'
import {MdOutlineMapsHomeWork} from 'react-icons/Md'
import {RiMapPinUserLine} from 'react-icons/Ri'
import {BiHome} from 'react-icons/Bi'


export default function FormDireccion(){
    return(
        <div className="formulario">
          <div>
        
            <h3>Dirección de envío</h3>
            <form id="direccion">
                
            
                <div className="input-grp" >
                  <label for="calle">Calle</label>
                  <input type="text" name="Calle" placeholder="Calle" id="calle" />
                 
                </div> 
                <div className="input-grp" >
                  <label for="numero">Numero</label>
                  <input type="text" name="Numero" placeholder="Número" id="numero"/>
                </div>
                 <div className="input-grp" >
                  <label for="poblacion">Poblacion</label>
                  <input type="text" name="Poblacion" placeholder="Población" id="poblacion"/>
                </div>
                <div className="input-grp" >
                  <label for="provincia">Provincia</label>
                  <input type="text" name="Provincia" placeholder="Provincia" id="provincia"/>
                </div>
                <div className="input-grp" >
                  <label for="codigo">Codigo postal</label>
                  <input type="text" name="Codigo postal" placeholder="Código Postal" id="codigo"/>
                </div>
                <div className="input-grp" >
                  <label for="pais">Pais</label>
                  <input type="text" name="Pais" placeholder="País" id="pais"/>
                </div>
               
                <button type="button" className="buttonform" id="confirmar">Confirma dirección de envío</button>
                
               

            </form>
            <EnvioGratis/>
          </div>
       
          
       
        </div>
    )
}