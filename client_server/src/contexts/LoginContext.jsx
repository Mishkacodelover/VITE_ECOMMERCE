import { createContext, useContext, useState } from "react";
import {LOGIN} from "../../../api/settings"

const LoginContext = createContext({
  authorization: null,
  login: () => {},
  logout: () => {},
});

export default LoginContext;

export function LoginContextProvider({ children }) {

  const [authorization, setAuthorization] = useState(window.localStorage.getItem(MY_AUTH_APP)?? null);
  const [errorMessage,SetErrorMessage]= useState(null);

  async function login(event,user) {
    event.preventDefault();
   const response = await fetch(LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       },
      body: JSON.stringify(user)
    });
  
    if (response.status !== 200) {
      document.getElementsByClassName("error")[0].style.display = "flex";
    } else {
      setUser(usuario)
     
      alert("Usuario registrado")
    
    }
  }

  function logout(){
    window.localStorage.removeItem(MY_AUTH_APP)
    setAuthorization(null);
  }

  const value={
    authorization,
    errorMessage,
    login,
  }
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}

export function useLoginContext() {
  return useContext(LoginContext);
}
