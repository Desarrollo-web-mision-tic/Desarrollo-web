import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ProductoContext from './context/productos/productoContext';


const EditarPro = ({ product }) => {
  let navigate = useNavigate();
  //extraer productos de stateInitial
  const productoContext = useContext(ProductoContext);
  const { productoseleccionado, actualizarProducto, obtenerProductos } = productoContext;
  //detecta si hay un producto seleccionado
  useEffect(() => {
    if (productoseleccionado !== null) {
        guardarProductos(productoseleccionado)
    }else {
        guardarProductos({
            id: '',
            img: '',
            marca: '',
            modelo: '',
            stock: '',
            km: '',
            year: '',
            precio: '',
        });
    }
  }, [productoseleccionado])
  const [productos, guardarProductos ] = useState({
    id: '',
    img: '',
    marca: '',
    modelo: '',
    stock: '',
    km: '',
    year: '',
    precio: '',
});
  //leer formulario, valores
  const handleChange = e => {
    guardarProductos({
        ...productos,
        [e.target.name]: e.target.value
    })
}
  const { id, img, marca, modelo, stock, km, year, precio } = productos;
  const onSubmit = e => {
    e.preventDefault();

    //validar
    if (marca === '' || modelo === '' || 
    stock === '' || km === '' || precio === '' || year === '' ) {
      return;
    }
    
    //actualizar el producto seleccionado
    actualizarProducto(productos);
    
    //agregar al state
    obtenerProductos()
    //reiniciar form
    guardarProductos({
      id: '',
      img: '',
      marca: '',
      modelo: '',
      stock: '',
      km: '',
      year: '',
      precio: '',
    })
    navigate('/modificar')
  }

    return (
        <>
            <form className="formulario"
            onSubmit={onSubmit}
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
            onChange={handleChange}
            value={img}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
        <div className="forma-input">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Id Producto
          </label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={id}
            onChange={handleChange}
          />
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
        <div className="btn-botones">
        <input type="submit" className="btn btn-primary"
          Modificar
        />
        <NavLink to={'/modificar'} className="btn btn-success">
          Regresar
        </NavLink>
        </div>
      </form>
        </>
    );
};

export default EditarPro;