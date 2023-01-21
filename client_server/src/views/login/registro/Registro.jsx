
import { Link } from "react-router-dom";
import {REGISTRO} from "../../../api/settings"
import {useState} from "react"



const registro= {
  name: "",
  surname:"",
  password: "",
  email:"",
}

export default function Registro() {
  const [user, setUser] = useState(registro);

  const handleInputs = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  async function validate(event,user) {
    event.preventDefault();
   const response = await fetch(REGISTRO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    });

    if (response.status !== 200) {
      document.getElementsByClassName("error")[1].style.display = "flex";
    } else {
      // window.location.href = "index.html";
      setUser(registro)
      alert("Usuario registrado")
    }
  }

  return (
    <div className="caja">
      <form onSubmit={(event) => validate(event, user)}>
        <h3>Regístrate</h3>
        <p>
          Crea una cuenta en Perfumes Amanatti y consigue tu primer descuento
          como cliente
        </p>
        <div className="input-grp ">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            id="nombre"
            value={user.name}
            onChange={handleInputs}
          />
        </div>
        <div className="input-grp ">
          <label for="apellidos">Apellidos</label>
          <input
            type="text"
            name="surname"
            placeholder="Apellidos"
            id="apellidos"
            value={user.surname}
            onChange={handleInputs}
          />
        </div>
        <div className="input-grp ">
          <label for="email1">Email</label>
          <input type="email"
           name="email"
            placeholder="Email"
             id="email1"
             value={user.email} 
             onChange={handleInputs}/>
          <div className="error" id="errorEmail">
            El email no es correcto
          </div>
        </div>
        <div className="input-grp ">
          <label for="contraseña">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            id="password"
            value={user.password}
            onChange={handleInputs}
          />
          <div className="error" id="errorPassword">
            La contraseña no es correcta
          </div>
        </div>
        <button type="submit" className="buttonform">
          Crea una cuenta ahora
        </button>
        <div className="checkbox">
          <label for="checkbox">
            <input type="checkbox" name="checkbox" id="checkbox" /> Acepto la
            <Link to="politicas-de-privacidad">
              <b> política de privacidad </b>
            </Link>
            de esta web.
          </label>
        </div>
      </form>
    </div>
  );
}
