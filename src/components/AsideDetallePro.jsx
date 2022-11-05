import React from 'react'
import '../styles/AsideCarrito.css'

const AsideDetallePro = () =>{
    return(
        <aside id="productDetail" className="inactive">
      <div className="product-datail-close">
          <img src="./icons/icon_close.png" alt="Cerrar"/>
      </div>
      <img src="./carros/ferre.jpg" alt="ferrari"/>

      <div className="product-info">
          <p>$260,00</p>
          <p>Ferrari</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui iure officiis
               natus minima obcaecati in sit ut a quae adipisci, 
              tempora veritatis deserunt vel ipsam pariatur facilis, aliquam nostrum earum?</p>

          <button className="primary-button add-to-card">
              <img src="./icons/bt_added_to_cart.svg" alt="Add"/> Add to cart
          </button>
      </div>
  </aside>
    )
}

export {AsideDetallePro};