import React from 'react';
import '../styles/OrdenItem.css';

const OrderItem = () => {
	

	const handleRemove = ()=> {
		console.log('Borrar')
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src="./carros/ferre.jpg" alt="caroo" />
			</figure>
			<p>Ferrari</p>
            <p>$300,00</p>
			<img src="./icons/icon_close.png" alt="close" onClick={() => handleRemove()} />
		</div>
	);
}

export default OrderItem;
