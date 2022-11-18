import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css'
import AlertaContext from '../components/context/alertas/alertaContext'
import AuthContext from '../components/autenticacion/authContext';

const Register = () => {

  //extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registrarUsuario } = authContext;

  //en caso de autenticacion duplicada
  let navigate = useNavigate();
  useEffect(() => {
      if (autenticado) {
          navigate('/user');
      }
      if (mensaje) {
          mostrarAlerta(mensaje.msg, mensaje.categoria);
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mensaje, autenticado])

  //state para login
  const [ usuario, guardarUsuario ] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: '',
})
const { nombre, email, password, confirmar } = usuario;

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
    if( nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === ''){
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      return;
  }
  //password min 6 caracteres
  if (password.length < 6) {
      mostrarAlerta('La contraseña debe tener almenos 6 caracteres', 'alerta-error');
      return;
  }
  //password sean iguales
  if (password !== confirmar) {
      mostrarAlerta('Las contraseñas no coinciden', 'alerta-error');
      return;
  }
  //accion
  registrarUsuario({
    nombre,
    email,
    password,
});
}
    return (
        <div className="login">
        { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null }
      <div className="form-container">
        <h1 className="title">Register</h1>

        <form className="form"
          onSubmit={onSubmit}
          >
          <div>
            <label htmlFor="name" className="label">Name</label>
            <input
              type="text"
              id="nombre"
              name='nombre'
              placeholder="Enter your name"
              className="input input-name"
              value={nombre}
              onChange={onChange}
            />

            <label htmlFor="email" className="label">Email address</label>
            <input
              type="email"
              id="email"
              name='email'
              placeholder="Enter your email"
              className="input input-email"
              value={email}
              onChange={onChange}
            />

            <label htmlFor="password" className="label">Password</label>
            <input
              type="password"
              id="password"
              name='password'
              placeholder="**********"
              className="input input-password"
              value={password}
              onChange={onChange}
            />
            <label htmlFor="password" className="label">Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name='confirmar'
              placeholder="**********"
              className="input input-password"
              value={confirmar}
              onChange={onChange}
            />
          </div>

          <input
            type="submit"
            value="Create"
            className="primary-button login-button"
          />
        </form>
        <Link to={'/login'}>
        <button type="submit" className="secundary-button signup-button">Login</button>
        </Link>
      </div>
    </div>
    );
};

export default Register;