import React from 'react'
import Header from '../components/Navbar/Header'
import Footer from '../components/Footer/Footer'

const index = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default index