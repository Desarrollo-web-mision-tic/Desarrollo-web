import Navbar from "./components/Navbar";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import ProductosAdmin from "./pages/ProductosAdmin";
import ModificarProducto from "./pages/ModificarProducto";
import Ventas from "./pages/Ventas";
import Logout from "./components/Logout";
import Productos from "./pages/Productos";
import { Account } from "./pages/Account";
import Home from "./pages/Home";
import { ModalModificar } from "./components/ModalModificar";
import NotFount from "./components/NotFount";
import ProductoState from "./components/context/productos/productoState";
import EditarPro from "./components/EditarPro";
import Register from "./pages/Register";
import AlertaState from "./components/context/alertas/alertaState";
import { AuthState } from "./components/autenticacion/authState";
import tokenAuth from "./components/config/tokenAuth";
import AuthRoutes from "./components/autenticacion/routes";

//revisar si tenemos un token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

const App = () => {
  return (
    <ProductoState>
      <HashRouter>
        <AlertaState>
          <AuthState>
            <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route
                path="/admin"
                element={
                  <AuthRoutes>
                    <ProductosAdmin />
                  </AuthRoutes>
                }
              />
              <Route
                path="/modificar"
                element={
                  <AuthRoutes>
                    <ModificarProducto />
                  </AuthRoutes>
                }
              />
              <Route
                path="/ventas"
                element={
                  <AuthRoutes>
                    <Ventas />
                  </AuthRoutes>
                }
              />
              <Route path="/logout" element={<Logout />} />
              <Route
                path="/user"
                element={
                  <AuthRoutes>
                    <Productos />
                  </AuthRoutes>
                }
              />
              <Route
                path="/account"
                element={
                  <AuthRoutes>
                    <Account />
                  </AuthRoutes>
                }
              />
              <Route
                path="/editar-carro"
                element={
                  <AuthRoutes>
                    <EditarPro />
                  </AuthRoutes>
                }
              />
              <Route
                path="/ingresar-carro"
                element={
                  <AuthRoutes>
                    <ModalModificar />
                  </AuthRoutes>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/regirter" element={<Register />} />
              <Route
                path="*"
                element={
                  <AuthRoutes>
                    <NotFount />
                  </AuthRoutes>
                }
              />
            </Routes>
          </AuthState>
        </AlertaState>
      </HashRouter>
    </ProductoState>
  );
};

export { App };
