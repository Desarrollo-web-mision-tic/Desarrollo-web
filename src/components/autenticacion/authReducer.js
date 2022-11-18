import { 
    REGISTRO_EXITOSO, 
    REGISTRO_ERROR, 
    OBTENER_USUARIO, 
    LOGIN_EXITOSO, 
    LOGIN_ERROR, 
    CERRAR_SESION } from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state, action) => {
    switch (action.type) {
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO: 
                localStorage.setItem('token', action.payload.token);
                return {
                    ...state,
                    autenticado: true,
                    mensaje: null,
                }
        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:   
                return {
                    ...state,
                    token: null,
                    usuario: null,
                    autenticado: false,
                    mensaje: action.payload
                }
        default:
            return state;
    }
}
