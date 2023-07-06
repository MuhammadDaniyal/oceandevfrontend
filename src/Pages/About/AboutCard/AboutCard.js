import React from 'react'
import './AboutCard.css'

const AboutCard = ({ heading, para, img }) => {
    return (
        <>
            <div className="col-11 col-lg-6 col-md-6 mx-auto">
                <div className="about-card-div mx-auto">
                    <h2 className="about-card-heading">{heading}</h2>
                    <p className="about-card-para">
                        {para}
                    </p>
                    <div className="about-card-image">
                        <img className="about-card-image" src={img} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCard