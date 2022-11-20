import React, { useReducer } from 'react';
import authReducer from './authReducer';
import AuthContext from './authContext';

import tokenAuth from '../config/tokenAuth';
import clienteAxios from '../config/axios';
import { 
    REGISTRO_EXITOSO, 
    REGISTRO_ERROR, 
    OBTENER_USUARIO, 
    LOGIN_EXITOSO, 
    LOGIN_ERROR, 
    CERRAR_SESION } from "../../types";

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
    }
    const [ state, dispatch ] = useReducer(authReducer, initialState);
    //funciones
    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos)
            //console.log(respuesta.data.usuario); 
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data, 
            })
            //obtener el usuario
            usuarioAutenticado();
        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }
    //retorna al usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token);
            //console.log(token);
        }

        try {
            const respuesta = await clienteAxios.get('/api/login');
            //console.log(respuesta.data);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario, 
            })
        } catch (error) {
            console.log(error.response.data)
            dispatch({
                type: LOGIN_ERROR,
            })
        }
    }
    //cuando inicia sesion
    const iniciaSesion = async datos => {

        try {
            const respuesta = await clienteAxios.post('/api/login', datos)
            //console.log(respuesta.data)
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            })
            //obtener el usuario autenticado
            usuarioAutenticado();

        } catch (error) {
            console.log(error.response.data);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }
    //cuando cierra sesion
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION,
        })
    }
    

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario,
                iniciaSesion,
                usuarioAutenticado,
                cerrarSesion
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthState};
