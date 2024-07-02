import React from 'react'
import Hero from '../Hero/Hero'
import NavbarHome from '../NavbarHome/NavbarHome'
import Footer from '../../templates/Footer/Footer'
const Home = () => {
    return (
        <div className='Home'>
            <NavbarHome />
            <Hero />
            <Footer />
        </div>
    )
}

export default Home