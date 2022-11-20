import React, { useContext } from "react";
import ProductoContext from "./context/productos/productoContext";

const ProducItem = ({ producto }) => {


  //extraer productos de stateInitial
  const productoContext = useContext(ProductoContext);
  const { addToCart } = productoContext;

  
  
  return (
    <>
      
          <div key={producto.id} className="col-lg-4 col-md-4 col-sm-4 card">
            <img src={producto.img} alt={producto.marca} />
            <div className="card-body">
              <h5 className="card-title">
                <b>Marca:</b>&nbsp;{producto.marca}
              </h5>
              <h5 className="card-title">
                <b>Modelo:</b>&nbsp;{producto.modelo}
              </h5>
              <div className="tagsCard d-flex justify-content-around">
                <h4>
                  <b>{producto.km}</b>&nbsp;Km
                </h4>
                <h4>
                  <b>Stock:</b>&nbsp;{producto.stock}
                </h4>
                <h4>
                  <b>Año:</b>&nbsp;{producto.year}
                </h4>
              </div>
              <p className="card-text">
                <b>$ {producto.precio}</b>
              </p>
              <div className="text-center">
                <button
                  className="btn btn-success"
                  onClick={() => addToCart(producto.uid)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        
    </>
  );
};

export default ProducItem;
