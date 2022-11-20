import React, { useReducer } from "react";
import productoReducer from "./productoReducer";
import ProductoContext from "./productoContext";
/* import { v4 as uuidv4 } from "uuid"; */

import {
  OBTENER_PRODUCTOS,
  AGREGAR_PRODUCTO,
  VALIDAR_FORMULARIO,
  PRODUCTO_ACTUAL,
  ACTUALIZAR_PRODUCTO,
  AGREGAR_CARRITO,
  ELIMINAR_CARRITO,
  MOSTRAR_CARRITO
} from "../../../types";
import clienteAxios from "../../config/axios";

const ProductoState = ({ children }) => {
 
  const initialState = {
    productos: [],
    cart: [],
    formulario: false,
    errorformulario: false,
    productoseleccionado: null,
    mensaje: null,
  };
  //discpatch para ejecutar las acciones
  const [state, dispatch] = useReducer(productoReducer, initialState);

  //serie de funciones para el CRUD
  //obtener productos
  const obtenerProductos = async () => {
    try {
      const resultado = await clienteAxios.get('api/productos');
      console.log(resultado.data.productos);
      //insertar producto state
      dispatch({
        type: OBTENER_PRODUCTOS,
        payload: resultado.data.productos,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //AGREGAR NUEVO PROYECTO
  const agregarProducto = async producto => {
    //producto.id = uuidv4();
    //agregar los proyectos
    try {
      const resultado = await clienteAxios.post('/api/productos', producto);
      console.log(resultado);
    } catch (error) {
      console.log(error.response.data);
    }
  };
   //Validar formulario por errores
   const mostrarError = () => {
    dispatch({
        type: VALIDAR_FORMULARIO,
    })
}
//extrae un producto para editar
const editarProducto = async producto => {

  try {
    const resultado = await clienteAxios.put(`/api/productos/${producto.uid}`, producto);
    console.log(resultado.data.producto);
    dispatch({
      type: PRODUCTO_ACTUAL,
      payload: resultado.data.producto
    })
  } catch (error) {
    console.log(error);
  }
}
//editar un producto
const actualizarProducto = async producto => {
  try {
    const resultado = await clienteAxios.put(`/api/productos/${producto.uid}`, producto);
    console.log(producto);
    console.log(resultado.data.producto);
    dispatch({
      type: ACTUALIZAR_PRODUCTO,
      payload: resultado.data.producto
    })
  } catch (error) {
    console.log(error.response);
  }
}
  //agregar al carrito
  const addToCart = id => {
    dispatch({
      type: AGREGAR_CARRITO,
      payload: id,
    })
  }
  //eliminar del carrito
  const deleteToCart = id => {
    dispatch({
      type: ELIMINAR_CARRITO,
      payload: id
    })
  }
  //serie de funciones para el CRUD
  const mostrarCarrito = () => {
    dispatch({
        type: MOSTRAR_CARRITO
    })
}

  return (
    <ProductoContext.Provider
      value={{
        productos: state.productos,
        cart: state.cart,
        formulario: state.formulario,
        productoseleccionado: state.productoseleccionado,
        errorformulario: state.errorformulario,
        obtenerProductos,
        agregarProducto,
        mostrarError,
        editarProducto,
        actualizarProducto,
        addToCart,
        deleteToCart,
        mostrarCarrito,
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
};

export default ProductoState;
