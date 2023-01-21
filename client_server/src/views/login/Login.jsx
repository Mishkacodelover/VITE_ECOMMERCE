import './login.css'
import InicioSesion from './inicioSesion/InicioSesion'
import Registro from './registro/Registro'
import Header from '../../components/Header/Header'


export default function Login(){
  

    return(
      <>
      <Header/>
        <section className="formularios">
          <InicioSesion/>
          <Registro/>
        </section>
        </>
    )
}