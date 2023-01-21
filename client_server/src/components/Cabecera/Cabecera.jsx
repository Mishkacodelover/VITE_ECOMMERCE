import Logo from  "../Logo/Logo";
import Cabecera_drch from '../Cabecera_drch/Cabecera_drch';
import './cabecera.css'

export default function Cabecera() {
  return (
    <div className="cabecera">
      <Logo className="logo" id="logo" title="Perfumes Amanatti" />
      <Cabecera_drch />
    </div>
  )
}
