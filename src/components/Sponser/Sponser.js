import React from 'react'
import './Sponser.css'
import Slider from "react-slick";

const Sponser = () => {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                setting: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 520,
                setting: {
                    slidesToShow: 3,
                },
            },
        ],
    };
    return (
        <>
            <section className="container-fluid section-sponser mt-5">
                <div className='container mt-5'>
                    <h1 className='myheading fw-bold'>Our Sponsers</h1>
                </div>
                <Slider className="customer-logos slider" {...settings}>

                    <div className="slide"><img src="./images/spons.png" alt="logo" /></div>
                    <div className="slide"><img src="https://preview.colorlib.com/theme/evento/assets/img/brands/b2.png" alt="logo" /></div>
                    <div className="slide"><img src="https://preview.colorlib.com/theme/evento/assets/img/brands/b3.png" alt="logo" /></div>
                    <div className="slide"><img src="https://preview.colorlib.com/theme/evento/assets/img/brands/b4.png" alt="logo" /></div>

                    <div className="slide"><img src="./images/spons.png" alt="logo" /></div>
                    <div className="slide"><img src="https://preview.colorlib.com/theme/evento/assets/img/brands/b2.png" alt="logo" /></div>
                    <div className="slide"><img src="https://preview.colorlib.com/theme/evento/assets/img/brands/b3.png" alt="logo" /></div>
                    <div className="slide"><img src="https://preview.colorlib.com/theme/evento/assets/img/brands/b4.png" alt="logo" /></div>


                </Slider>
            </section>
        </>

    )
}

export default Sponser