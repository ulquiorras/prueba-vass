import React from 'react'

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
                    <button type="button" className="navbar-toggler mr-2" data-toggle="collapse" data-target="#menu-principal" aria-controls="menu-principal" aria-expanded="false">
                        <span className="text-white"><FontAwesomeIcon icon={faBars}/></span>
                    </button>

                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#buscador" aria-controls="buscador" aria-expanded="false">
                        <span className="text-white"><FontAwesomeIcon icon={faSearch}/></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="buscador">
                    <input type="text" className="d-lg-none"/>
                </div>

                <div className=" collapse navbar-collapse" id="menu-principal">
                    <ul className="navbar-nav ml-auto">                        
                        <li className="nav-item"><a href="#" className="nav-link">Casos de exito</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Mercados</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Paises</a></li>
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
                        <li className="nav-item"><a href="#" className="nav-link ml-lg-3 text-primary">Talento</a></li>
                    </ul>

                    
                </div>
            </div>
        </nav>
    )
}
