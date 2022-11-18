
import axios from 'axios';





// conexion con el backend
const url = 'http://localhost:5000/api/productos'
const carrosTodos = async (state) =>{
    const peticion = await axios.get(url);
    state(peticion.data.productos);
}

export {
    carrosTodos,
}