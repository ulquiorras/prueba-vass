import React from 'react'
import "../styles/Navbar.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

import Logo from "../assets/logo-vass-blanco.png";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">
                    <img src={Logo}/>
                </a>

                <div className="">
                    
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#buscador" aria-controls="buscador" aria-expanded="false">
                        <span className="text-white"><FontAwesomeIcon icon={faSearch}/></span>
                    </button>

                    <button type="button" className="navbar-toggler ml-2" data-toggle="collapse" data-target="#menu-principal" aria-controls="menu-principal" aria-expanded="false">
                        <span className="text-white"><FontAwesomeIcon icon={faBars}/></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="buscador">
                    <input type="text" className=" divBuscador d-lg-none mt-2"/>
                </div>

                <div className=" collapse navbar-collapse" id="menu-principal">
                    <ul className="textUl navbar-nav ml-auto">                        
                        <li className="nav-item"><a href="#" className="nav-link">Casos de exito</a></li>
                        <li className="nav-item dropdown">
                            <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mercados</a>
                            <ul className="dropdown-menu bg-dark" role="menu">
                                <div className="divsubmenu">
                                    <li className="nav-item border-left"><a href="#" className="nav-link">AAPP</a></li>
                                    <li className="nav-item border-left"><a href="#" className="nav-link">BANCA</a></li>
                                    <li className="nav-item border-left"><a href="#" className="nav-link">EU&E</a></li>
                                    <li className="nav-item border-left"><a href="#" className="nav-link">INDUSTRIA</a></li>
                                    <li className="nav-item border-left"><a href="#" className="nav-link">SEGUROS</a></li>
                                    <li className="nav-item border-left"><a href="#" className="nav-link">TELCO & MEDIA</a></li>
                                </div>
                            </ul>                                
                        </li>
                        <li className="nav-item dropdown">
                            <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Paises</a>
                            <ul className="dropdown-menu bg-dark" role="menu">
                                <div className="divsubmenu">
                                    <li className="nav-item border-left"><a href="#" className="nav-link">Chile</a></li>
                                    <li className="nav-item border-left"><a href="#" className="nav-link">Colombia</a></li>
                                    <li className="nav-item border-left"><a href="#" className="nav-link">Mexico</a></li>
                                    <li className="nav-item border-left"><a href="#" className="nav-link">Peru</a></li>
                                    <li className="nav-item border-left"><a href="#" className="nav-link">Reino Unido</a></li>
                                    <li className="nav-item border-left"><a href="#" className="nav-link">Benelux</a></li>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Somos VASS</a>
                            <ul className="dropdown-menu bg-dark" role="menu">
                                <div className="divsubmenu">
                                    <li className="nav-item border-left"><a href="#" className="nav-link">Equipo</a></li>
                                    <li className="nav-item border-left"><a href="#" className="nav-link">Nosotros</a></li>
                                    <li className="nav-item border-left"><a href="#" className="nav-link">RSC</a></li>
                                    <li className="nav-item border-left"><a href="#" className="nav-link">Directorio Oficinas</a></li>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Como lo hacemos</a>
                            <ul className="dropdown-menu bg-dark" role="menu">
                                <div className="divsubmenu">
                                    <li className="nav-item border-left"><a href="#" className="nav-link">¿QUE LOGRAMOS?</a></li>
                                    <li className="nav-item border-left"><a href="#" className="nav-link">¿COMO LO LOGRAMOS?</a></li>
                                    <li className="nav-item border-left"><a href="#" className="nav-link">¿CON QUE LO LOGRAMOS?</a></li>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item"><a href="#" className="nav-link">Insights</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Noticias</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">VASS Research</a></li>
                        <li className="nav-item"><a href="#" className="nav-link ml-lg-3">EN</a></li>
                        <li className="nav-item"><a data-toggle="collapse" href="#buscador2" role="button" aria-expanded="false" aria-controls="buscador2" id="searchIcon" className="nav-link"><span><FontAwesomeIcon icon={faSearch}/></span></a></li>
                        <div className="collapse mt-1" id="buscador2">
                            <input type="text"/>
                        </div>
                        <li className="nav-item"><a href="#" className="itemTalento nav-link ml-lg-4 text-primary">Talento</a></li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}
