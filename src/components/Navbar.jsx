import { NavLink } from "react-router-dom";
import { useAuth } from "../auth";
import "../styles/Navbar.css";

export const Navbar = ({ rol }) => {
  const auth = useAuth();

  

  return (
    <nav>
      <div className="navbar-left">
        <ul>
          {routes.map( route => {
            if ( route.publicOnly && auth.user) return null;
            if( route.private && !auth.user) return null; 
            return (
              <li key={route.to}>
                <NavLink
                style={({ isActive }) => ({
                  color: isActive ? '#acd9b2' : '#c7c7c7',
                })}
                to={route.to}
                >{route.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <NavLink private={true} to={"/user"}>
              Lista de Productos
            </NavLink>
          </li>
          <li className="navbar-email">
            <NavLink private={true} to={"/account"}>
              {auth.user?.username}
            </NavLink>
          </li>
          <li className="navbar-shopping-cards">
            <div>2</div>
            <NavLink private={true} to={"/carrito"}>
              <img src="./icons/icon_shopping_cart.svg" alt="Shopping cards" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

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
  to: "/login",
  text: "Login",
  publicOnly: true,
  private: false,
});
routes.push({
  to: "/logout",
  text: "Logout",
  private: true,
});

export default Navbar;
