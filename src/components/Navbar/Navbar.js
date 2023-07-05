import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiAlignRight, FiX } from "react-icons/fi";
import './Navbar.css'

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState()
    return (
        <>
            <nav>
                <div className={activeMenu ? "navbar active" : "navbar"}>
                    <ul className="navbar-lists">
                        <li>
                            <NavLink to='/' className='navbar-link home-link'
                                onClick={() => { setActiveMenu(false) }}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className='navbar-link home-link'
                                onClick={() => { setActiveMenu(false) }}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/events' className='navbar-link home-link'
                                onClick={() => { setActiveMenu(false) }}>Events</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className='navbar-link home-link'
                                onClick={() => { setActiveMenu(false) }}>Contact Us</NavLink>
                        </li>
                    </ul>

                    <div className="mobile-nav--btn">
                        <FiAlignRight
                            name='mobile-outline'
                            className='mobile-nav--icon'
                            onClick={() => { setActiveMenu(true) }}
                        />
                        <FiX
                            name='close-outline'
                            className='mobile-nav--icon close-outline'
                            onClick={() => { setActiveMenu(false) }}
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar