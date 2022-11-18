import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import ProductoContext from "../components/context/productos/productoContext";
import ProducItemEditar from "../components/ProducItemEditar";
import "../styles/ModalModificar.css";

const ModificarProducto = ({ producto }) => {

  //extraer productos de stateInitial
  const productoContext = useContext(ProductoContext);
  const { productos } = productoContext;


  return (
    <>
      <section className="container">
        <Link to={'/ingresar-carro'} className="btn-nuevo-carro btn btn-success">Nuevo Carro</Link>
        <div className="containe-card">
          { productos.map( producto =>(
            <ProducItemEditar
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ModificarProducto;
