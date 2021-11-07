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
                        <li className="nav-item dropdown menu-area">
                            <a className="dropdown-toggle nav-link" href="" id="mega-one" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mercados</a>
                            <div className="dropdown-menu mega-area bg-dark" aria-labelledby="mega-one">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-2">
                                        <a href="#" className="dropdown-item">AAPP</a>
                                    </div>
                                    <div className="col-sm-12 col-lg-2 border-left">
                                        <a href="#" className="dropdown-item">BANCA</a>
                                    </div>
                                    <div className="col-sm-12 col-lg-2 border-left">
                                        <a href="#" className="dropdown-item">EU&E</a>
                                    </div>
                                    <div className="col-sm-12 col-lg-2 border-left">
                                        <a href="#" className="dropdown-item">INDUSTRIA</a>
                                    </div>
                                    <div className="col-sm-12 col-lg-2 border-left">
                                        <a href="#" className="dropdown-item">SEGUROS</a>
                                    </div>
                                    <div className="col-sm-12 col-lg-2 border-left">
                                        <a href="#" className="dropdown-item">TELCO & MEDIA</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown menu-area">
                            <a className="dropdown-toggle nav-link" href="" id="mega-one" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Paises</a>
                            <div className="dropdown-menu mega-area bg-dark" aria-labelledby="mega-one">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-2">
                                        <a href="#" className="dropdown-item">Chile</a>
                                    </div>
                                    <div className="col-sm-12 col-lg-2 border-left">
                                        <a href="#" className="dropdown-item">Colombia</a>
                                    </div>
                                    <div className="col-sm-12 col-lg-2 border-left">
                                        <a href="#" className="dropdown-item">Mexico</a>
                                    </div>
                                    <div className="col-sm-12 col-lg-2 border-left">
                                        <a href="#" className="dropdown-item">Peru</a>
                                    </div>
                                    <div className="col-sm-12 col-lg-2 border-left">
                                        <a href="#" className="dropdown-item">Reino Unido</a>
                                    </div>
                                    <div className="col-sm-12 col-lg-2 border-left">
                                        <a href="#" className="dropdown-item">Benelux</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="nav-item dropdown menu-area">
                            <a className="dropdown-toggle nav-link" href="" id="mega-one" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Somos VASS</a>
                            <div className="dropdown-menu mega-area bg-dark" aria-labelledby="mega-one">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-3">
                                        <a href="#" className="dropdown-item">Equipo</a>
                                    </div>
                                    <div className="col-sm-12 col-lg-3 border-left">
                                        <a href="#" className="dropdown-item">Nosotros</a>
                                    </div>
                                    <div className="col-sm-12 col-lg-3 border-left">
                                        <a href="#" className="dropdown-item">RSC</a>
                                    </div>
                                    <div className="col-sm-12 col-lg-3 border-left">
                                        <a href="#" className="dropdown-item">Directorio</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown menu-area">
                            <a className="dropdown-toggle nav-link" href="" id="mega-one" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Como lo hacemos</a>
                            <div className="dropdown-menu mega-area bg-dark" aria-labelledby="mega-one">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-4">
                                        <a href="#" className="dropdown-item">¿QUE LOGRAMOS?</a>
                                    </div>
                                    <div className="col-sm-12 col-lg-4 border-left">
                                        <a href="#" className="dropdown-item">¿COMO LO LOGRAMOS?</a>
                                    </div>
                                    <div className="col-sm-12 col-lg-4 border-left">
                                        <a href="#" className="dropdown-item">¿CON QUE LO LOGRAMOS?</a>
                                    </div>
                                </div>
                            </div>
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
