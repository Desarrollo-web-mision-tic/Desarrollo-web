import React, { useContext, useEffect, useState } from 'react';
import '../styles/OrdenItem.css';
import ProductoContext from './context/productos/productoContext';

const OrderItem = ({ data }) => {

	//extraer productos de stateInitial
	const productoContext = useContext(ProductoContext);
	const { deleteToCart } = productoContext;
	const { id, img, marca, modelo, precio } = data;
	//effect que detecta si hay un producto seleccionado
	

	return (
		<>
		<div className="OrderItem">
			<figure>
				<img src={img} alt={modelo} />
			</figure>
			<p>{marca}</p>
            <p>{precio}</p>
			<img className='cerrar' src="./icons/icon_close.png" alt="close" onClick={() => deleteToCart(id)} />
		</div>
		</>
	);
}

export default OrderItem;
