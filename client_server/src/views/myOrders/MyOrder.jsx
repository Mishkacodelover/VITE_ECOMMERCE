import {Link} from 'react-router-dom'
import './myorders.css'
import Header from '../../components/Header/Header'

export default function MyOrder(){
    return(
        <>
        <Header/>
        <div className="misPedidos">
            <h1>Mis pedidos</h1>
            <div className="orders">
                <p>Tu último pedido fue.....</p>
            </div>
         
        </div>
        </>
    )
}