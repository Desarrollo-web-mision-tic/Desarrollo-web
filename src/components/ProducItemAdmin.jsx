import React, { useState } from "react";
import { useEffect } from "react";
import { carrosTodos } from "../auth";
import NotFount from "./NotFount";

const ProducItemAdmin = ({ product }) => {
  const [carros, setCarros] = useState(null);

  useEffect(() => {
    carrosTodos(setCarros);
  }, []);

  return (
    <>
      {carros != null ? (
        carros.map((carro) => (
          <div key={carro.id} className="col-lg-4 col-md-4 col-sm-4 card">
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
                  <b>Año:</b>&nbsp;{carro.año}
                </h4>
              </div>
              <p className="card-text">
                <b>$ {carro.año}</b>
              </p>
              <div className="text-center">
              <h3>Stock</h3>
              <p>{carro.stock}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <NotFount />
      )}
    </>
  );
};

export default ProducItemAdmin;
