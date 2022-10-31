import React from 'react';

const AsideProducto = () =>{
    return(
        <>
        <aside id="shoppingCartContainer" className="inactive">
      <div className="title-container">
        <img src="./icons/flechita.svg" alt="arrow"/>
        <p className="title">My order</p>
      </div>
  
      <div className="my-order-content">
        <div className="shopping-cart">
          <figure>
            <img src="./carros/ferre.jpg" alt="caroo"/>
          </figure>
          <p>Ferrari</p>
          <p>$300,00</p>
          <img src="./icons/icon_close.png" alt="close"/>
        </div>
  
        <div className="shopping-cart">
          <figure>
            <img src="./carros/audi2.jpg" alt="carro"/>
          </figure>
          <p>Audi</p>
          <p>$230,00</p>
          <img src="./icons/icon_close.png" alt="close"/>
        </div>
  
        <div className="shopping-cart">
          <figure>
            <img src="./carros/lambor.jpg" alt="carro"/>
          </figure>
          <p>Lamborguini</p>
          <p>$310,00</p>
          <img src="./icons/icon_close.png" alt="carro"/>
        </div>
  
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$760.00</p>
        </div>
  
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>
        </>
    )
}
export {AsideProducto};