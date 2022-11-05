import React from "react";
import { useState } from "react";
import { useAuth } from "../auth";
import '../styles/login.css'

const Login = () => {
  const auth = useAuth();
  const [username, setUsername] = useState('');

  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
    console.log(username);
  };

  return (
    <>
    <div className="login">
      <div className="form-container">
        <img src="./img/logo.jpg" alt="logo" className="logo"/>

        <form onSubmit={login} className="form">
          
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="example22@mail.com"
            className="input input-email"
          />
          
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="************"
            className="input input-password"
          />

          <input
            type="submit"
            value="Log in"
            className="primary-button login-button"
          />

          <a href="/">Forgot my password</a>
        </form>
        <button type="submit" className="secundary-button signup-button">Register</button>
      </div>
    </div>
    </>
  );
};

export { Login };
