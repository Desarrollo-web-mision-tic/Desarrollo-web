import React, { useContext } from 'react';
import '../styles/OrdenItem.css';
import ProductoContext from './context/productos/productoContext';

const OrderItem = ({ data }) => {
	
  
	//extraer productos de stateInitial
	const productoContext = useContext(ProductoContext);
	const { deleteToCart, productos } = productoContext;
	const { uid, img, marca, modelo, precio } = productos;
	//effect que detecta si hay un producto seleccionado
	

	return (
		<>
		<div className="OrderItem">
			<figure>
				<img src={img} alt={modelo} />
			</figure>
			<p>{marca}</p>
            <p>{precio}</p>
			<img className='cerrar' src="./icons/icon_close.png" alt="close" onClick={() => deleteToCart(uid)} />
		</div>
		</>
	);
}

export default OrderItem;
