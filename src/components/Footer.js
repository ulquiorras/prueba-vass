import React from 'react'

import "../styles/Footer.scss"

import Logo from "../assets/logo-vass-blanco.png";
import Aenor1 from "../assets/1.png";
import Aenor2 from "../assets/2.png";
import Aenor3 from "../assets/3.png";
import Aenor4 from "../assets/4.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedinIn, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <>
        <div className="container-fluid bg-gray">
            <div className="container py-4 bg-gray">
                <div className="row">
                    <div className="content_first col-12 col-sm-3 col-lg-2 mr-lg-5 d-flex justify-content-end">
                        <p className="text_container_1 text-white">Complex made simple</p>
                    </div>
                    <div className="content_center col-12 col-sm-6 d-flex justify-content-between">
                        <div className="content_1 col-6">
                            <p className="text_title text-white">Sitemap VASS</p>
                            <li><a href="#" className="item_list text-white">Home</a> </li>
                            <li><a href="#" className="item_list text-white">Casos exito</a> </li>
                            <li><a href="#" className="item_list text-white">Somos VASS</a> </li>
                            <li><a href="#" className="item_list text-white">Impactos</a> </li>
                            <li><a href="#" className="item_list text-white">Metodo</a> </li>
                            <li><a href="#" className="item_list text-white">Tecnologias</a> </li>
                            <li><a href="#" className="item_list text-white">Proyectos I+D+i</a> </li>
                            <li><a href="#" className="item_list text-white">Insights</a> </li>
                            <li><a href="#" className="item_list text-white">Noticias</a> </li>
                            <li><a href="#" className="item_list text-white">VASS Reseach</a> </li>
                            <li><a href="#" className="item_list text-white">Canal de denuncias</a> </li>
                            <li><a href="#" className="item_list text-white">Contacto</a> </li>
                            
                        </div>

                        <div className="content_2 col-6">
                            <p className="text_title text-white">Sitemap Talento</p>
                            <li><a href="#" className="item_list text-white">Talento</a> </li>
                            <li><a href="#" className="item_list text-white">#LifeVASS</a> </li>
                            <li><a href="#" className="item_list text-white">Beneficios</a> </li>
                            <li><a href="#" className="item_list text-white">Planes para ti</a> </li>
                            <li><a href="#" className="item_list text-white">Proyectos</a> </li>
                            <li><a href="#" className="item_list text-white">Smartworking</a> </li>
                            <li><a href="#" className="item_list text-white">Ofertas</a> </li>
                        </div>
                    </div>
                    <div className="mt-4 mt-sm-0 col-12 col-sm-3">
                        <div className="col-6">
                            <p className="text_title text-white">Empresas</p>
                            <li><a href="#" className="item_list text-white">VASS</a> </li>
                            <li><a href="#" className="item_list text-white">Nateevo</a> </li>
                            <li><a href="#" className="item_list text-white">Serbatic</a> </li>
                            <li><a href="#" className="item_list text-white">vdSHOP</a> </li>
                            
                        </div>
                    </div> 
                    <div className="d-flex justify-content-between col-lg-12">
                        <div className="logo">
                            <img src={Logo} />
                        </div>

                        <div className="images">
                        <img src={Aenor1} className="mr-2"/>
                        <img src={Aenor2} className="mr-2"/>
                        <img src={Aenor3} className="mr-2"/>
                        <img src={Aenor4} className="mr-2"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid bg-gray pb-5 copy_container">
            <div className="row mt-4">
                <div className="copyright_container col-12 col-lg-4">
                    <p className="text-white text-center">Copyright © 2021 Todos los derechos reservados</p>
                </div>
                <div className="politics_container text-white text-center mt-3 mt-lg-0 col-12 col-lg-4">
                    <p><a href="#" className="text-white">Memoria ambiental</a> | <a href="#" className="text-white">Politica de cookies</a> | <a href="#" className="text-white">Politica de privacidad</a> | <a href="#" className="text-white">Politica de calidad y medio ambiente</a></p>
                </div>  
                <div className="social_media d-flex justify-content-center mt-4 col-12 mt-lg-0 col-lg-4">
                    <span className="icon_social mr-3"><FontAwesomeIcon icon={faTwitter}/></span>
                    <span className="icon_social mr-3"><FontAwesomeIcon icon={faLinkedinIn}/></span>
                    <span className="icon_social mr-3"><FontAwesomeIcon icon={faInstagram}/></span>
                    <span className="icon_social mr-3"><FontAwesomeIcon icon={faYoutube}/></span>
                    
                </div>
            </div>
        </div>
        </>
    )
}
