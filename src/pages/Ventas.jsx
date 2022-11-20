import React from "react";
import "../styles/Ventas.css";

const Ventas = () => {


  return (
    <>
    <div className="tabla-ventas">
      <h1>Lista de carros vendidos</h1>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>ID Producto</th>
            <th>Marca</th>
            <th>Referencia</th>
            <th>Color</th>
            <th>Precio</th>
            <th>Usuario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11/10/2022</td>
            <td>167-2</td>
            <td>FORD</td>
            <td>FIESTA</td>
            <td>Azul celeste</td>
            <td>$35.000.000</td>
            <td>Juan carlos pol</td>
          </tr>
          <tr>
            <td>11/10/2022</td>
            <td>167-3</td>
            <td>FORD</td>
            <td>FIESTA</td>
            <td>Rojo</td>
            <td>$35.000.000</td>
            <td>Juan carlos pol</td>
          </tr>
          <tr>
            <td>15/10/2022</td>
            <td>115-4</td>
            <td>NISSAN</td>
            <td>SENTRA</td>
            <td>Gris</td>
            <td>$45.000.000</td>
            <td>Juan carlos pol</td>
          </tr>
          <tr>
            <td>16/10/2022</td>
            <td>178-2</td>
            <td>AUDI</td>
            <td>A3 SEDAN</td>
            <td>Negro</td>
            <td>$156.000.000</td>
            <td>Juan carlos pol</td>
          </tr>
          <tr>
            <td>16/10/2022</td>
            <td>124-8</td>
            <td>BMW</td>
            <td>X3 M</td>
            <td>Negro</td>
            <td>$320.000.000</td>
            <td>Juan carlos pol</td>
          </tr>
          <tr>
            <td>17/10/2022</td>
            <td>124-9</td>
            <td>BMW</td>
            <td>X3 M</td>
            <td>Azul oscuro</td>
            <td>$320.000.000</td>
            <td>Juan carlos pol</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Ventas;
