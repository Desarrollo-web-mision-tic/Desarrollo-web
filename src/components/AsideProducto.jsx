import React, { useContext } from "react";
import { useAuth } from "../auth";
import { OBTENER_PRODUCTOS } from "../types";
import ProductoContext from "./context/productos/productoContext";
import OrderItem from "./OrdenItem";

const AsideProducto = () => {
  //extraer productos de stateInitial
  const productoContext = useContext(ProductoContext);
  const { cart } = productoContext;

  return (
    <>
      <aside className="MyOrder">
        <div className="title-container">
          <p className="title">My order</p>
        </div>

        <div className="my-order-content">
          {cart.map((item, index) => (
            <OrderItem key={index} data={item} />
          ))}
          <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>$760.00</p>
          </div>

          <button className="primary-button">Checkout</button>
        </div>
      </aside>
    </>
  );
};
export { AsideProducto };
