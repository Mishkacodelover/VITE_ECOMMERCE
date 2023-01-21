import {useState} from "react";
import Header from '../../components/Header/Header'

export default function Ofertas(){

    const [text,setText] = useState(false);
    const[title,setTitle]= useState(false);
    const[change,setChange]=useState("Mes de diciembre");
   
    return(
        <>
        <Header/>
        <div>
            <h1>Ofertas{title&&(<h> de Diciembre</h>)}</h1>
            <h2> {change}</h2>
            
            {text&&(<p>Estoy funcionando</p>)}
            <button onClick={()=>setText(!text)}>Ver mensaje</button>
            <button onClick={()=>setTitle(!title)}>Cambia el título</button>
            <button onClick={()=>setChange("Mes de enero")}>Cambia el mes</button>

        </div>
        </>
    )
}
