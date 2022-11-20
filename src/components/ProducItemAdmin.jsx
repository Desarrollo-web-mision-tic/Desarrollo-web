import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import ProductoContext from "./context/productos/productoContext";
import SpinnerCarga from "./SpinnerCarga";

const ProducItemAdmin = ({ product }) => {
  
  //extraer productos de stateInitial
  const productoContext = useContext(ProductoContext);
  const { productos, obtenerProductos } = productoContext;
  //obtener productos cuando carga el componente
  useEffect(() => {
    obtenerProductos();
    // eslint-disable-next-line
  }, []);
  //revisar si tiene productos
  if (productos.length === 0) return <SpinnerCarga />;
  return (
    <>
      {productos != null ? (
        productos.map((carro) => (
          <div key={carro.uid} className="col-lg-4 col-md-4 col-sm-4 card">
            <img src={carro.img} alt={carro.marca} />
            <div className="card-body">
              <h5 className="card-title">
                <b>Marca:</b>&nbsp;{carro.marca}
              </h5>
              <h5 className="card-title">
                <b>Modelo:</b>&nbsp;{carro.modelo}
              </h5>
              <div className="tagsCard d-flex justify-content-around">
                <h4>
                  <b>{carro.km}</b>&nbsp;Km
                </h4>
                <h4>
                  <b>Stock:</b>&nbsp;{carro.stock}
                </h4>
                <h4>
                  <b>Año:</b>&nbsp;{carro.year}
                </h4>
              </div>
              <p className="card-text">
                <b>$ {carro.precio}</b>
              </p>
              <div className="text-center"></div>
            </div>
          </div>
        ))
      ) : (
        <SpinnerCarga />
      )}
    </>
  );
};

export default ProducItemAdmin;
