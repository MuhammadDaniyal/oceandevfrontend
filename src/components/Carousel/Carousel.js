import React from 'react'
import './Carousel.css'

const Carousel = () => {
    return (
        <>
            <div className='main-carousel'>
                <img src="https://preview.colorlib.com/theme/evento/assets/img/bg/slider.png.webp" alt="" />
                <div class="cover_nav">
                    <ul class="cover_dots">
                        <li class="" data="0"><span>1</span></li>
                        <li data="1" class="active"><span>2</span></li>
                        <li data="2"><span>3</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Carousel