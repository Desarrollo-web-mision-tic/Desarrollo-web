import React from 'react';
import '../styles/Register.css'

const Register = () => {
    return (
        <div class="login">
      <div class="form-container">
        <h1 class="title">My account</h1>

        <form action="/" class="form">
          <div>
            <label for="name" class="label">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              class="input input-name"
            />

            <label for="email" class="label">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              class="input input-email"
            />

            <label for="password" class="label">Password</label>
            <input
              type="password"
              id="password"
              placeholder="**********"
              class="input input-password"
            />
          </div>

          <input
            type="submit"
            value="Create  "
            class="primary-button login-button"
          />
        </form>
      </div>
    </div>
    );
};

export default Register;