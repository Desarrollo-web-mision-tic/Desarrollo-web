import React from "react";
import "../styles/Ventas.css";

const Ventas = () => {
  return (
    <>
      <div class="my-order">
      <div class="my-order-container">
        <h1 class="title">Lista de ventas</h1>

        <div class="my-order-content">
          <div class="order">
            <p>
              <span>15-10-2022</span>
              <span>6 article</span>
            </p>
            <p>$780,00</p>
          </div>

          <div class="order">
            <p>
              <span>16-10-2022</span>
              <span>2 article</span>
            </p>
            <p>$980,00</p>
          </div>

          <div class="order">
            <p>
              <span>25-10-2022</span>
              <span>6 article</span>
            </p>
            <p>$9080,00</p>
          </div>

          <div class="order">
            <p>
              <span>30-10-2022</span>
              <span>4 carros</span>
            </p>
            <p>$7280,00</p>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Ventas;
