import React from 'react'
import "../styles/Navbar.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

import Logo from "../assets/logo-vass-blanco.png";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top">
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
                        <li className="nav-item"><a href="#" className="nav-link">Mercados</a></li>
                        <li className="nav-item dropdown">
                            <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Paises</a>
                            <ul class="dropdown-menu" role="menu">
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
                        <li className="nav-item"><a href="#" className="nav-link">Somos VASS</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Como lo hacemos</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Insights</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Noticias</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">VASS Research</a></li>
                        <li className="nav-item"><a href="#" className="nav-link ml-lg-3">EN</a></li>
                        <li className="nav-item"><a data-toggle="collapse" href="#buscador2" role="button" aria-expanded="false" aria-controls="buscador2" className="nav-link"><span><FontAwesomeIcon icon={faSearch}/></span></a></li>
                        <div className="collapse mt-1" id="buscador2">
                            <input type="text"/>
                        </div>
                        <li className="nav-item"><a href="#" className="itemLi nav-link ml-lg-4 text-primary">Talento</a></li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}
