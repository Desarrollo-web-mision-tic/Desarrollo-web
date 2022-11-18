import React, { useContext, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../components/autenticacion/authContext';

const Account = () => {

    //extraer la informacion autenticada
  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

  //cerrar la session
  let navigate = useNavigate();
  const logout = () => {
      cerrarSesion();
      navigate('/login')
  }
  useEffect(() => {
    usuarioAutenticado();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
    

    return (
        <>
            <div className="login">
        <div className="form-container">
            <h1 className="title">My account</h1>

            <form action="/" className="form">
                <div>
                    <label htmlFor="name" className="label">Name</label>
                    { usuario ? <p className="value">{usuario.nombre}</p> : null}
                    
                    <label htmlFor="email" className="label">Email address</label>
                    { usuario ? <p className="value">{usuario.email}</p> : null }
    
                    <label htmlFor="password" className="label">Password</label>
                    <p className="value">***********</p>
                </div>

                <input type="submit" value="Edit  " className="secundary-button login-button" />
            </form>
        </div>
        <button type='submit'
            onClick={logout()}
        >Logout</button>
    </div>
            
        </>
    );
};

export {
    Account,
};