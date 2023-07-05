import React, { useState } from 'react'
import './Carousel.css'

const CarouselData = [
    {
        src: "https://preview.colorlib.com/theme/evento/assets/img/bg/slider.png.webp",
    },
    {
        src: "https://preview.colorlib.com/theme/evento/assets/img/bg/bg-img.png.webp",
    },
    {
        src: "https://preview.colorlib.com/theme/evento/assets/img/bg/tickets.png.webp",
    }
]
const Carousel = () => {

    const [currentData, setCurrentData] = useState(CarouselData[0])

    return (
        <>
            <div className='main-carousel'>
                <div className='carousel-div'>
                    <img className='main-carousel-img' src={currentData.src} alt="" />
                    <div className='inner-text'>
                        <h3 className='carousel-h3'>Prepare yourself for the</h3>
                        <strong className='carousel-strong'>conference</strong>
                        <p className='carousel-p'>12-14 February 2018 - Los Angeles, CA.</p>
                        <button className='carousel-btn'>Register</button>
                    </div>
                </div>

                <div className="cover_nav">
                    <ul className="cover_dots">
                        <li
                            className={`${currentData.src === CarouselData[0].src ? 'active' : ''}`}
                            onClick={() => setCurrentData(CarouselData[0])}><span>1</span></li>
                        <li
                            className={`${currentData.src === CarouselData[1].src ? 'active' : ''}`}
                            onClick={() => setCurrentData(CarouselData[1])}><span>2</span></li>
                        <li
                            className={`${currentData.src === CarouselData[2].src ? 'active' : ''}`}
                            onClick={() => setCurrentData(CarouselData[2])}><span>3</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Carousel