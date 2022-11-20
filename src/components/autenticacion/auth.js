import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./authContext";


function AuthRoutes(props){
    //extraer la informacion autenticada
    const authContext = useContext(AuthContext);
    const { usuario } = authContext;
  
      if (!usuario) {
          return <Navigate to={'/login'}/>
      }
      return props.children;
  }

export default AuthRoutes;
