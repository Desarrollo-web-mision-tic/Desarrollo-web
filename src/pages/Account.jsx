import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../components/autenticacion/authContext';
import Logout from '../components/Logout';

const Account = () => {

    //extraer la informacion autenticada
  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado } = authContext;
  //console.log(usuario)

  useEffect(() => {
    if(usuarioAutenticado()){
        usuarioAutenticado();
    }else{
        <Navigate to={'/login'}/>
    }

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
        <Logout />
    </div>
            
        </>
    );
};

export {
    Account,
};