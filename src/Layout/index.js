import React from 'react'
import Header from '../components/Navbar/Header'
import Footer from '../components/Footer/Footer'
import BottomToTop from '../components/BottomToTop/BottomToTop'

const index = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <BottomToTop />
            <Footer />
        </>
    )
}

export default index