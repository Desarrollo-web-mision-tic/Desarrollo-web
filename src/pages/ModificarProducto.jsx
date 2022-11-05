import React from "react";
import { ModalModificar } from "../components/ModalModificar";
import "../styles/ModalModificar.css";

const ModificarProducto = () => {
  return (
    <>
       <section className="container">
            <div className="col-lg-12 col-md-12 col-sm-12 d-block mt-5">
                <div className="col-lg-6 col-md-6 col-sm-6 d-flex mb-5">
                    <div className="col-lg-4 col-md-4 col-sm-4 card">
                        <img src='/carros/ford-fiesta-2012.svg' className="style-img-card" alt="Ford Fiesta"/>
                        
                        <div className="card-body">
                            <h5 className="card-title"><b>Marca:</b>&nbsp;Ford</h5>
                            <h5 className="card-title"><b>Modelo:</b>&nbsp;Fiesta</h5>
                            <div className="tagsCard d-flex justify-content-around">
                                <h4><b>76852</b>&nbsp;Km</h4>
                                <h4><b>Año:</b>&nbsp;2012</h4>
                            </div>
                            <p className="card-text"><b>$ 35.000.000</b></p>
                            <div className="text-center">
                            <ModalModificar/> 
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 card">
                        <img src='/carros/nissan-sentra-2015.svg' className="style-img-card" alt="Nissan Sentra"/>

                        <div className="card-body">
                            <h5 className="card-title"><b>Marca:</b>&nbsp;Nissan</h5>
                            <h5 className="card-title"><b>Modelo:</b>&nbsp;Sentra</h5>
                            <div className="tagsCard d-flex justify-content-around">
                                <h4><b>96525</b>&nbsp;Km</h4>
                                <h4><b>Año:</b>&nbsp;2015</h4>
                            </div>
                            <p className="card-text"><b>$ 45.000.000</b></p>
                            <div className="text-center">
                            <button  href="#" className="btn btn-success">Editar Carro</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 card">
                        <img src='/carros/audi-sedan.svg' className="style-img-card" alt="Audi Sedan"/>
                        
                        <div className="card-body">
                            <h5 className="card-title"><b>Marca:</b>&nbsp;Audi</h5>
                            <h5 className="card-title"><b>Modelo:</b>&nbsp;A3 Sedán</h5>
                            <div className="tagsCard d-flex justify-content-around">
                                <h4><b>25654</b>&nbsp;Km</h4>
                                <h4><b>Año:</b>&nbsp;2022</h4>
                            </div>
                            <p className="card-text"><b>$ 156.000.000</b></p>
                            <div className="text-center">
                            <button href="#" className="btn btn-success">Editar Carro</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 card">
                        <img src='/carros/ferrari-laferrari.svg' className="style-img-card" alt="LaFerrari"/>

                        <div className="card-body">
                            <h5 className="card-title"><b>Marca:</b>&nbsp;Ferrari</h5>
                            <h5 className="card-title"><b>Modelo:</b>&nbsp;LaFerrari</h5>
                            <div className="tagsCard d-flex justify-content-around">
                                <h4><b>123259</b>&nbsp;Km</h4>
                                <h4><b>Año:</b>&nbsp;2013</h4>
                            </div>
                            <p className="card-text"><b>$ 6.260.000.000</b></p>
                            <div className="text-center">
                            <button href="#" className="btn btn-success">Editar Carro</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 d-flex">
                    <div className="col-lg-4 col-md-4 col-sm-4 card">
                        <img src='/carros/bmw-x3-m.svg' className="style-img-card" alt="BMW X3 M"/>
                        
                        <div className="card-body">
                            <h5 className="card-title"><b>Marca:</b>&nbsp;BMW</h5>
                            <h5 className="card-title"><b>Modelo:</b>&nbsp;X3 M</h5>
                            <div className="tagsCard d-flex justify-content-around">
                                <h4><b>136478</b>&nbsp;Km</h4>
                                <h4><b>Año:</b>&nbsp;2021</h4>
                            </div>
                            <p className="card-text"><b>$ 320.000.000</b></p>
                            <div className="text-center">
                            <button href="#" className="btn btn-success">Editar Carro</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 card">
                        <img src='/carros/renault-symbol-2010.svg' className="style-img-card" alt="Renault Symbol"/>

                        <div className="card-body">
                            <h5 className="card-title"><b>Marca:</b>&nbsp;Nissan</h5>
                            <h5 className="card-title"><b>Modelo:</b>&nbsp;Sentra</h5>
                            <div className="tagsCard d-flex justify-content-around">
                                <h4><b>86385</b>&nbsp;Km</h4>
                                <h4><b>Año:</b>&nbsp;2010</h4>
                            </div>
                            <p className="card-text"><b>$ 24.000.000</b></p>
                            <div className="text-center">
                            <button href="#" className="btn btn-success">Editar Carro</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 card">
                        <img src='/carros/lamborghini-gallardo-2010.svg' className="style-img-card" alt="Lamborghini Gallardo"/>
                        
                        <div className="card-body">
                            <h5 className="card-title"><b>Marca:</b>&nbsp;Lamborghini</h5>
                            <h5 className="card-title"><b>Modelo:</b>&nbsp;Gallardo</h5>
                            <div className="tagsCard d-flex justify-content-around">
                                <h4><b>12475</b>&nbsp;Km</h4>
                                <h4><b>Año:</b>&nbsp;2010</h4>
                            </div>
                            <p className="card-text"><b>$ 1.170.000.000</b></p>
                            <div className="text-center">
                            <button href="#" className="btn btn-success">Editar Carro</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 card">
                        <img src='/carros/porsche-911-turbo-s-2021.svg' className="style-img-card" alt="Porsche 911"/>

                        <div className="card-body">
                            <h5 className="card-title"><b>Marca:</b>&nbsp;Porsche</h5>
                            <h5 className="card-title"><b>Modelo:</b>&nbsp;911 Turbo S</h5>
                            <div className="tagsCard d-flex justify-content-around">
                                <h4><b>16852</b>&nbsp;Km</h4>
                                <h4><b>Año:</b>&nbsp;2021</h4>
                            </div>
                            <p className="card-text"><b>$ 1.210.000.000</b></p>
                            <div className="text-center">
                            <button href="#" className="btn btn-success">Editar Carro</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ModificarProducto;
