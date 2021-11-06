import React, { useEffect, useState } from 'react'

import "../styles/Contact.scss"

export const Contact = () => {

    const initialValues = {
        name: "",
        email: "",
        company: "",
        message: ""
    }

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues)
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {}
        if(!values.name){
            errors.name = "El nombre es obligatorio";
        }
        if(!values.email){
            errors.email = "El email es obligatorio";
        }
        if(!values.company){
            errors.company = "La Empresa es obligatoria";
        }
        if(!values.message){
            errors.message = "El mensaje es obligatorio";
        }
        return errors;
    }

    return (
        <div className="container-fluid bg-dark">
            <div className="container bg-dark py-5">
            <form onSubmit={handleSubmit}>
            <div className="contact-form row">
                    <div className="form-field my-4 col-lg-6">
                        <input 
                        name="name" 
                        className="input-text d-block" 
                        type="text"
                        value={formValues.name}
                        onChange={handleChange}
                        />

                        <label htmlFor="name" 
                        className="label">Nombre y apellidos
                        </label>                        
                    </div>  
                    <p className="ml-3 text-danger">{formErrors.name}</p>                  
                    <div className="form-field my-4 col-lg-6">
                        <input 
                        name="email" 
                        className="input-text d-block" 
                        type="email" 
                        value={formValues.email}
                        onChange={handleChange}     
                        />

                        <label 
                        htmlFor="email" 
                        className="label">Email
                        </label>
                    </div>
                    <p className="ml-3 text-danger">{formErrors.email}</p>
                    <div className="form-field my-4 col-lg-6">
                        <input 
                        name="company" 
                        className="input-text d-block" 
                        type="text" 
                        value={formValues.company}
                        onChange={handleChange}
                        />

                        <label 
                        htmlFor="company" 
                        className="label">Empresa / Organismo
                        </label>
                    </div>
                    <p className="ml-3 text-danger">{formErrors.company}</p>
                    <div className="form-field my-4 col-lg-6">
                        <input 
                        name="country" 
                        className="input-text d-block" 
                        type="text"                             
                        />

                        <label 
                        htmlFor="country" 
                        className="label">Pais
                        </label>
                    </div>
                    <div className="form-field my-4 col-lg-6">
                        <input 
                        name="phone" 
                        className="input-text d-block" 
                        type="text"                             
                        />
                        <label 
                        htmlFor="phone" 
                        className="label">Telefono
                        </label>
                    </div>
                    <div className="form-field my-4 col-lg-6">
                        <label 
                        htmlFor="message" 
                        className="labelmessage">Mensaje:
                        </label>
                        <textarea 
                        name="message" 
                        className="input-textarea d-block" 
                        type="text" 
                        value={formValues.message}
                        onChange={handleChange}                     
                        />
                        
                    </div>
                    <p className="ml-3 text-danger">{formErrors.message}</p>
                    <div className="form-btn my-2 col-lg-6 d-flex justify-content-end">
                        <div className="submit_container m-2 d-flex justify-content-around align-items-center">
                            <button 
                            className="btn-send text-white" 
                            type="submit" 
                            value="submit">Enviar
                            </button>
                        </div>
                        
                    </div>
                </div>
            </form>
                
            </div>
        </div>
    )
}
