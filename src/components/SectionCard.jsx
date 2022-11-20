import React, { useContext, useEffect } from "react";
import "../styles/AsideCarrito.css";
import ProducItem from "./ProducItem";
import ProductoContext from "./context/productos/productoContext";
import SpinnerCarga from "./SpinnerCarga";

const SectionCard = () => {
  //extraer productos de stateInitial
  const productoContext = useContext(ProductoContext);
  const { productos, obtenerProductos, addToCart } = productoContext;
  //obtener productos cuando carga el componente
  useEffect(() => {
    obtenerProductos();
    // eslint-disable-next-line 
  }, []);

  //revisar si tiene productos
  if (productos.length === 0) return <SpinnerCarga />;

  return (
    <section className="container">
      <div className="containe-card">
        {productos.map((producto) => (
          <ProducItem key={producto.uid} producto={producto} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export { SectionCard };
