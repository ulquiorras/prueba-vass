import React from 'react'

import "../styles/Contact.scss"

export const Contact = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className="container bg-dark py-5">
                <div className="contact-form row">
                    <div className="form-field my-4 col-lg-6">
                        <input id="name" className="input-text d-block" type="text" />
                        <label htmlFor="name" className="label">Nombre y apellidos</label>
                    </div>
                    <div className="form-field my-4 col-lg-6">
                        <input id="email" className="input-text d-block" type="email" />
                        <label htmlFor="email" className="label">Email</label>
                    </div>
                    <div className="form-field my-4 col-lg-6">
                        <input id="company" className="input-text d-block" type="text" />
                        <label htmlFor="company" className="label">Empresa / Organismo</label>
                    </div>
                    <div className="form-field my-4 col-lg-6">
                        <input id="country" className="input-text d-block" type="text" />
                        <label htmlFor="country" className="label">Pais</label>
                    </div>
                    <div className="form-field my-4 col-lg-6">
                        <input id="phone" className="input-text d-block" type="text" />
                        <label htmlFor="phone" className="label">Telefono</label>
                    </div>
                    <div className="form-field my-4 col-lg-6">
                        <label htmlFor="message" className="labelmessage">Mensaje:</label>
                        <textarea id="message" className="input-textarea d-block" type="text" />
                        
                    </div>
                    <div className="form-btn my-2 col-lg-6 d-flex justify-content-end">
                        <div className="submit_container m-2 d-flex justify-content-around align-items-center">
                            <a href="#" className="text-white" type="submit-btn" type="submit" value="submit">Enviar</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
