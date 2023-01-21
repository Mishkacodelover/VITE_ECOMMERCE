import Search from  "../Search/Search";
import CartButton from "../CartButton/CartButton";
import './cabecera_drch.css';

export default function Cabecera_drch() {
  return (
    <div className="cabecera_drch">
      <Search placeholder="Buscar productos" />
      <CartButton />
    </div>
  );
}
