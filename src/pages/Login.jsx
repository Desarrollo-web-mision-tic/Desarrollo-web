import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
import AuthContext from "../components/autenticacion/authContext";
import AlertaConext from "../components/context/alertas/alertaContext";
import '../styles/login.css'

const Login = () => {
  /* const auth = useAuth();
  const [username, setUsername] = useState('');

  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
    console.log(username);
  }; */

    //extraer los valores del context
     const alertaContext = useContext(AlertaConext);
     const { alerta, mostrarAlerta } = alertaContext;
 
     const authContext = useContext(AuthContext);
     const { mensaje, autenticado, iniciaSesion } = authContext;
    //si el usuariop O PASSWORD o no exista
    let navigate = useNavigate();
    useEffect(() => {
        if (autenticado) {
            navigate('/user');
        }
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje, autenticado, navigate, mostrarAlerta])

    //state para login
    const [ usuario, guardarUsuario ] = useState({
        email: '',
        password: '',
    })
    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
        
    }
    //cuando quiere hacer login
    const onSubmit = e => {
        e.preventDefault();

        //validar
        if (email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        }
        //accion
        iniciaSesion({ email, password });
    }

  return (
    <>
    <div className="login">
    { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null }
      <div className="form-container">
        <img src="./img/logo.jpg" alt="logo" className="logo"/>

        <form onSubmit={onSubmit} className="form">
          
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="email" 
            id='email'
            name='email'
            value={email}
            placeholder="example22@mail.com"
            className="input input-email"
            onChange={onChange}
          />
          
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password" 
            id='password'
            name="password"
            value={password}
            placeholder="************"
            className="input input-password"
            onChange={onChange}
          />

          <input
            type="submit"
            value="Log in"
            className="primary-button login-button"
          />

          <a href="/">Forgot my password</a>
        </form>
        <Link to={'/regirter'}>
        <button type="submit" className="secundary-button signup-button">Register</button>
        </Link>
      </div>
    </div>
    </>
  );
};

export { Login };
