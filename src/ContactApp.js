import React from 'react'
import { Banner } from './components/Banner'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Information } from './components/Information'
import { Navbar } from './components/Navbar'

export const ContactApp = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <Information/>
            <Contact/>
            <Footer/>
        </>
    )
}
