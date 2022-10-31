import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";

import { Productos } from "../pages/Productos";
import ModificarProducto from "../pages/ModificarProducto";
import Ventas from "../pages/Ventas";
import Account from "../pages/Account";
import ProductosAdmin from "../pages/ProductosAdmin";
import Logout from "../components/Logout";

const Navigation = ({ rol }) => {
  return (
    <Routes>
      { rol === "admin" ? (
      <Fragment>
        <Route path="/" element={ <ProductosAdmin />} />
        <Route path="/modificar" element={ <ModificarProducto />} />
        <Route path="/ventas" element={ <Ventas />} />
        <Route path="/logout" element={ <Logout />} />
      </Fragment>
      ) : (
      <Fragment>
        <Route path="/" element={ <Productos />} />
        <Route path="/account" element={ <Account />} />
        <Route path="/carrito" element={ <Ventas />} />
      </Fragment>
      )
    }
    </Routes>
  );
}

export { Navigation };
