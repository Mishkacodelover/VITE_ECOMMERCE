import { useState } from "react";
import { useLoginContext } from "../../../contexts/LoginContext";




const usuario= {
  email: "",
  password: ""
}

export default function InicioSesion() {

  const [user, setUser] = useState(usuario)
  
  const { login } = useLoginContext();

 
  const handleInputs = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

 

  return (
    <div className="caja">
      <form onSubmit={(event) => login(event, user)}>
        <h3>Iniciar sesión</h3>
        <p>Accede con tus datos anteriores</p>
        <div className="input-grp">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={user.email}
            onChange={handleInputs}
          />
          <div className="error" id="errorUsuario">
            El email o contraseña no son correctos
          </div>
        </div>
        <div className="input-grp">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            id="passwordUser"
            value={user.password}
            onChange={handleInputs}
          />
          <div className="error" id="errorPass">
            El email o contraseña no son correctos
          </div>
        </div>
        <button className="buttonform" type="submit" onClick={toggleLogout}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
