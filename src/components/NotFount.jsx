import React from "react";
import { Link } from "react-router-dom";
import '../styles/NotFount.css'

const NotFount = () => {
  return (
    <>
      <div className="container-error">
        <h2 className="titulo-error">Oops!!</h2>
        <p className="text-error">404 - Page not Fount</p>
        <img src="../img/error.png" alt="error" className="lost-img" />
        <Link to={'/home'} className='btn-error'>Take me to Homepage</Link>
        <div className="fill-up"></div>
      </div>
    </>
  );
};

export default NotFount;
