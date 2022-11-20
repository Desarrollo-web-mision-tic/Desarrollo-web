import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './autenticacion/authContext';

const Logout = () => {
    
    //extraer la informacion autenticada
  const authContext = useContext(AuthContext);
  const { cerrarSesion } = authContext;

    //cerrar la session
  let navigate = useNavigate();
  const logout = () => {
      cerrarSesion();
      navigate('/login')
  }

    return (
        <>
        <form >
            <button type='submit'
                onClick={logout}
            >Logout</button>
        </form>
        </>
    );
};

export default Logout;