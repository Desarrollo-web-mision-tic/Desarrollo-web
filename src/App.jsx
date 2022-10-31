import Navbar from "./components/Navbar";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import ProductosAdmin from "./pages/ProductosAdmin";
import ModificarProducto from "./pages/ModificarProducto";
import Ventas from "./pages/Ventas";
import Logout from "./components/Logout";
import Productos from "./pages/Productos";
import Account from "./pages/Account";
import { AuthProvider, AuthRoute } from "./auth";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<ProductosAdmin />} />
            <Route path="/modificar" element={<ModificarProducto />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/user" element={<Productos />} />
            <Route path="/account" element={
              <AuthRoute>
                <Account />
              </AuthRoute>
            } />
            <Route path="/carrito" element={<Ventas />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<p>Not Fount</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
};

export { App };
