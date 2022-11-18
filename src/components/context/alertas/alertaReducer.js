import { MOSTRAR_ALERTAS, OCULTAR_ALERTAS } from '../../../types/index';


// eslint-disable-next-line import/no-anonymous-default-export
export default ( state, action ) => {
    switch (action.type) {
        case MOSTRAR_ALERTAS:
            return {
                alerta: action.payload
            }
        case OCULTAR_ALERTAS:
            return {
                alerta: null
            }
        default:
            return state;
    }
}

