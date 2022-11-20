import {
  OBTENER_PRODUCTOS,
  AGREGAR_PRODUCTO,
  VALIDAR_FORMULARIO,
  PRODUCTO_ACTUAL,
  ACTUALIZAR_PRODUCTO,
  AGREGAR_CARRITO,
  ELIMINAR_CARRITO,
  MOSTRAR_CARRITO,
} from "../../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
      };
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        productos: [...state.productos, action.payload],
      };
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorformulario: true,
      };
    case PRODUCTO_ACTUAL:
      return {
        ...state,
        productoseleccionado: action.payload,
      };
    case ACTUALIZAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.map(producto =>
          producto.uid === action.payload.uid ? action.payload : producto
        ),
      };
    case AGREGAR_CARRITO:
      let newItem = state.productos.find(
        (producto) => producto.id === action.payload
      );
      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    case ELIMINAR_CARRITO:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case MOSTRAR_CARRITO:
      return {
        ...state,
        formulario: true,
      };
    default:
      return state;
  }
};
