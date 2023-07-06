import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Navbar from './Navbar.js'
import './Navbar.css'

const Header = () => {

    const currentLoc = useLocation()
    console.log(currentLoc);

    const [isVisible, setVisible] = useState(false);

    const listenToScroll = () => {
        let heightScroll = 250; // apko kb ussy display krana woh value
        const windowScroll =
            (document.body.scrollTop || document.documentElement.scrollTop);
        if (windowScroll > heightScroll) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
        return () => window.removeEventListener('scroll', listenToScroll)
    }, [])

    return (
        <header className={
            `
            ${currentLoc.pathname === '/' ? '' : 'other-nav'}
            ${isVisible ? 'default-header  scroll-header' : 'default-header '}
            `}>
            <NavLink to={'/'}>
                <h2 className='nav-heading'>Ocean <span>Dev</span></h2>
            </NavLink>
            <Navbar />
        </header>
    )
}

export default Header