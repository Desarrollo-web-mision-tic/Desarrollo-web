import React, { useReducer } from 'react';
import alertaReducer from './alertaReducer';
import AlertaContext from './alertaContext';
import { MOSTRAR_ALERTAS, OCULTAR_ALERTAS } from '../../../types/index';

const AlertaState = props => {
    const initialState = {
        alerta: null,
    }

    const [ state, dispatch ] = useReducer(alertaReducer, initialState );
    //funciones
    const mostrarAlerta = ( msg, categoria ) => {
        dispatch({
            type: MOSTRAR_ALERTAS,
            payload: {
                msg, 
                categoria,
            }
        });
        //despues de 5 segundo oculta alerta
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTAS,
            })
        }, 5000);
    }

    return (
        <AlertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta,
            }}
        >
            {props.children}
        </AlertaContext.Provider>
    )
    
}


export default AlertaState;