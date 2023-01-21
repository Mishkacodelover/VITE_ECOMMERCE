import Layout from "./components/Layout/Layout";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

import Home from "./views/home/Home";
import AllProducts from "./views/allProducts/AllProducts";
import AboutUs from "./views/aboutUs/AboutUs";
import Contact from "./views/contact/Contact";
import Ofertas from "./views/ofertas/Ofertas";
import MyOrder from "./views/myOrders/MyOrder";
import Login from "./views/login/Login";
import DetalleProducto from "./views/detalleProducto/DetalleProducto";
import FinalizarCompra from "./views/finalizarCompra/FinalizarCompra";
import Politicas from "./views/politicas/Politicas"
import FormaDePago from "./views/formaDePago/FormaDePago"
import Carrito from './views/carrito/Carrito'
import {LoginContextProvider} from './contexts/LoginContext'

import "./App.css";



function App() {
  return (
    <LoginContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<AllProducts />}></Route>
          <Route path="detalle-producto" element={<DetalleProducto />} />

          <Route path="sobre-nosotros" element={<AboutUs />} />
          <Route path="contacto" element={<Contact />} />

          <Route path="ofertas" element={<Ofertas />} />
          <Route path="mis-pedidos" element={<MyOrder />} />

          <Route path="iniciar-sesion" element={<Login />} />
          <Route path="finalizar-compra" element={<FinalizarCompra />} />
          <Route path="forma-de-pago" element={<FormaDePago />} />
          <Route path="politicas-de-privacidad" element={<Politicas/>} />
          <Route path="carrito" element={<Carrito/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </LoginContextProvider>
  );
}

export default App;
