import React from "react";
import { useAuth } from "../auth";
import OrderItem from "./OrdenItem";

const AsideProducto = () => {
  const { user } = useAuth();
  return (
    <>
      <aside className="MyOrder">
        <div className="title-container">
          <p className="title">My order</p>
        </div>

        <div className="my-order-content">
          {user.cart.map((product) => {
            return <OrderItem product={product} /* key={} */ />;
          })}
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
