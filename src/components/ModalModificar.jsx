import React, { useContext } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ProductoContext from "./context/productos/productoContext";

function ModalModificar() {
  let navigate = useNavigate();
  
  //extraer productos de stateInitial
  const productoContext = useContext(ProductoContext);
  const { errorformulario, agregarProducto, mostrarError } = productoContext;

  //state para productos
  const [producto, guardarProductos ] = useState({
      img: '',
      marca: '',
      modelo: '',
      stock: '',
      km: '',
      year: '',
      precio: '',
  });
  //extraer nombre del productos
  const { img, marca, modelo, stock, km, precio, year } = producto;
  //lee los contenidos del input
  const onChangeProducto = e => {
    guardarProductos({
      ...producto,
      [e.target.name]: e.target.value
    });
  }
  //cuando se envia un proyecto
  const onSubmitProducto = e => {
    e.preventDefault();

    //validar
    if (marca === '' || modelo === '' || 
    stock === '' || km === '' || precio === '' || year === '' ) {
      mostrarError();
      return;  
    }
    //agregar Producto
    agregarProducto(producto)
    //reiniciar el form
    guardarProductos({
      img: '',
      marca: '',
      modelo: '',
      stock: '',
      km: '',
      year: '',
      precio: '',
    })

    navigate('/modificar');
  }

  return (
    <>
          { errorformulario ? <p className="mensaje error">Todos los campos son obligatorios</p> : null}
      <form className="formulario"
        onSubmit={onSubmitProducto}
      >
        <div className="forma-input">
          <label className="form-label">
            Imagen
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="img"
            value={img}
            onChange={onChangeProducto}
          />
        </div>
        <div className="forma-input">
          <label className="form-label">
            Marca
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="marca"
            value={marca}
            onChange={onChangeProducto}
          />
        </div>
        <div className="forma-input">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Modelo
          </label>
          <input
            type="text"
            className="form-control"
            name="modelo"
            value={modelo}
            onChange={onChangeProducto}
          />
        </div>
        <div className="forma-input">
        </div>
        <div className="forma-input">
          <label className="form-label">
            Stock
          </label>
          <input
            type="number"
            className="form-control"
            name="stock"
            value={stock}
            onChange={onChangeProducto}
          />
        </div>
        <div className="forma-input">
          <label className="form-label">
            Km
          </label>
          <input
            type="text"
            className="form-control"
            name="km"
            value={km}
            onChange={onChangeProducto}
          />
        </div>
        <div className="forma-input">
          <label className="form-label">
            Año
          </label>
          <input
            type="text"
            className="form-control"
            name="year"
            value={year}
            onChange={onChangeProducto}
          />
        </div>
        <div className="forma-input">
          <label className="form-label">
            Precio
          </label>
          <input
            type="text"
            className="form-control"
            name="precio"
            value={precio}
            onChange={onChangeProducto}
          />
        </div>
        <div className="btn-botones">
        <input type="submit" className="btn-modificar"
          value='Agregar'
        />
        <NavLink to={'/modificar'} className="btn btn-success btn-regresar">
          Regresar
        </NavLink>
        </div>
      </form>
    </>
  );
}

export { ModalModificar };
