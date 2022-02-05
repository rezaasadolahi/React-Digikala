import React from 'react'
//* CSS
import './CSS/Body.css'
//* Images
import Top_p1 from './Images/under header/Top-p1.jpg'
import Top_p2 from './Images/under header/Top-p2.jpg'
//* Components
import Slider from './Slider-under-header/Slider'
import MainSliderSwiperOne from './Slider Swipper/Slider Swipper One/MainSliderSwiperOne'







function Body() {
    return (
        <main id='main'>

            <section className='under-head'>
                <div className='slider'>
                    <section className='ImageSlider'>
                        <Slider />
                    </section>

                    <picture>
                        <img src={Top_p1} alt="" width="218" height="" />
                        <img src={Top_p2} alt="" width="218" height="" />
                    </picture>
                </div>
            </section>

            <div className='slider-swiper-One'>
                <MainSliderSwiperOne />
            </div>

            

        </main>
    )
}


export default Body