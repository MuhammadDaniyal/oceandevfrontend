import React from 'react'
import './SideBarAbout.css'
import { FiCodesandbox } from "react-icons/fi";

const SideBarAbout = () => {
    return (
        <>
            <div className="sidebar-about">
                <div className='about-sidebar-div'>
                    <FiCodesandbox className='about-sidebar-icon' />
                    <p className='about-sidebar-para'> WHO&nbsp;WE&nbsp;ARE</p>
                    <h2 className='about-sidebar-heading'>Ingenuity and perfection, from ideation to creation!</h2>
                </div>
            </div>
        </>
    )
}

export default SideBarAbout