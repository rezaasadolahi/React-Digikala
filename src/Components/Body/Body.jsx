import React from 'react'
//* CSS
import './CSS/Body.css'
//* Images
import Top_p1 from './Images/under header/Top-p1.jpg'
import Top_p2 from './Images/under header/Top-p2.jpg'
//* Components
import Slider from './Slider-under-header/Slider'
import MainSliderSwiperOne from './Slider Swipper/Slider Swipper One/MainSliderSwiperOne'
import AdvertOne from './Advert/AdvertOne/AdvertOne'
import MainSliderSwiperTwo from './Slider Swipper/Slider Swipper Two/MainSliderSwiperTwo'
import AdvertTwo from './Advert/AdvertTwo/AdvertTwo'
import FirstElastic from './Slider Elastic/FirstElastic/FirstElastic'







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

            {/* Slider Swiper 1 */}
            <div className='slider-swiper-One'>
                <MainSliderSwiperOne />
            </div>

            {/* Advert 1  */}
            <AdvertOne />

            {/* Slider Swiper 2 */}
            <div className='slider-swiper-Two'>
                <MainSliderSwiperTwo />
            </div>

            {/* Advert 2 */}
            <AdvertTwo />

            <div className='slider-swiper-Three'>
                <FirstElastic />
            </div>
        </main>
    )
}


export default Body