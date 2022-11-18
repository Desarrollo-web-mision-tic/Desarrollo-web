import React, { useReducer } from "react";
import productoReducer from "./productoReducer";
import ProductoContext from "./productoContext";
import { v4 as uuidv4 } from "uuid";

import {
  FORMULARIO_PRODUCTO,
  OBTENER_PRODUCTOS,
  AGREGAR_PRODUCTO,
  VALIDAR_FORMULARIO,
  PRODUCTO_ACTUAL,
  ACTUALIZAR_PRODUCTO,
  AGREGAR_CARRITO,
  ELIMINAR_CARRITO,
  MOSTRAR_CARRITO
} from "../../../types";

const ProductoState = ({ children }) => {
  const productos = [
    {
      id: 1,
      img: "./carros/audi-sedan.svg",
      stock: 100,
      marca: "Mazda",
      modelo: "z-2000",
      km: "29282",
      year: "2010",
      precio: 36000000,
    },
    {
      id: 2,
      img: "./carros/ferrari.jpg",
      stock: 120,
      marca: "Ferrari",
      modelo: "z-3000",
      km: "34282",
      year: "2020",
      precio: 59000000,
    },
    {
      id: 3,
      img: "./carros/audi.jpg",
      stock: 130,
      marca: "Audi",
      modelo: "z-4000",
      km: "49282",
      year: "2034",
      precio: 65000000,
    },
    {
      id: 4,
      img: "./carros/toyota.jpg",
      stock: 140,
      marca: "Fords",
      modelo: "z-5000",
      km: "59282",
      year: "2042",
      precio: 345000000,
    },
    {
      id: 5,
      img: "./carros/renault-symbol-2010.svg",
      stock: 150,
      marca: "Chevrolet",
      modelo: "z-6000",
      km: "69282",
      year: "2020",
      precio: 96000000,
    },
    {
      id: 6,
      img: "./carros/jeep.jpg",
      stock: 160,
      marca: "BMW",
      modelo: "z-7000",
      km: "829282",
      year: "2030",
      precio: 326000000,
    },
    {
      id: 7,
      img: "./carros/ford-fiesta-2012.svg",
      stock: 170,
      marca: "Audi",
      modelo: "z-8000",
      km: "99282",
      year: "2040",
      precio: 76000000,
    },
    {
      id: 8,
      img: "./carros/lamborghini-Gallardo-2010.svg",
      stock: 180,
      marca: "Purchs",
      modelo: "z-9000",
      km: "59282",
      year: "2040",
      precio: 56000000,
    },
    {
      id: 9,
      img: "./carros/porsche-911-turbo-s-2021.svg",
      stock: 190,
      marca: "Jeep",
      modelo: "z-2300",
      km: "429282",
      year: "2003",
      precio: 46000000,
    },
  ];
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
  const obtenerProductos = () => {
    dispatch({
      type: OBTENER_PRODUCTOS,
      payload: productos,
    });
  };
  //AGREGAR NUEVO PROYECTO
  const agregarProducto = producto => {
    producto.id = uuidv4();

    //agregar los proyectos
    dispatch({
      type: AGREGAR_PRODUCTO,
      payload: producto,
    });
  };
   //Validar formulario por errores
   const mostrarError = () => {
    dispatch({
        type: VALIDAR_FORMULARIO,
    })
}
//extrae un producto para editar
const editarProducto = producto => {
  dispatch({
    type: PRODUCTO_ACTUAL,
    payload: producto
  })
}
//editar un producto
const actualizarProducto = producto => {
  dispatch({
    type: ACTUALIZAR_PRODUCTO,
    payload: producto
  })
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
