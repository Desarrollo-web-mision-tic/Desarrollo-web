import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { AsideProducto } from "./AsideProducto";
import AuthContext from "./autenticacion/authContext";

export const Navbar = ({ rol }) => {
  const [toggle, setToggle] = useState(false);
  
  //extraer la informacion autenticada
  const authContext = useContext(AuthContext);
  const { usuario } = authContext;
  

  const clickCarrito = () => {
    setToggle(!toggle);
  }

  return (
    <>
      <nav>
        <div className="navbar-left">
          <ul>
            {routes.map((route) => {
              if (route.publicOnly && usuario) return null;
              if (route.private && !usuario) return null;
              return (
                <li key={route.to} >
                  {route.div}

                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#acd9b2" : "#c7c7c7",
                    })}
                    to={route.to}
                  >
                    {route.img}
                    {route.text}
                  </NavLink>
                </li>
              );
            })}
            {routesCar.map((route) => {
              if (route.private && !usuario) return null;
              return(
                <li key={route.img} onClick={clickCarrito} className="navbar-shopping-cards">
                  <NavLink>
                    {route.img}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
       { toggle && <AsideProducto/>}
      </nav>
    </>
  );
};

const routesCar = [];
const routes = [];
routes.push({
  to: "/admin",
  text: "Lista de Productos",
  private: true,
});
routes.push({
  to: "/modificar",
  text: "Modificar Productos",
  private: true,
});
routes.push({
  to: "/ventas",
  text: "Lista de Ventas",
  private: true,
});
routes.push({
  to: "/user",
  text: "Lista de Productos",
  private: true,
});
routes.push({
  to: "/account",
  text: "Mi Perfil",
  private: true,
});
routesCar.push({
  div: <div>2</div>,
  img: (
    <img
      src="./icons/icon_shopping_cart.svg"
      alt="Shopping cards"
      className="carrito"
    />
  ),
  private: true,
});
routes.push({
  to: "/login",
  text: "Login",
  publicOnly: true,
  private: false,
});

export default Navbar;
