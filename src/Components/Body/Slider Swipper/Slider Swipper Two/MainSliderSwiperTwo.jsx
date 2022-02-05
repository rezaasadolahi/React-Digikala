import React from 'react'
import "./slick-carousel/slick/slick.css"
import "./slick-carousel/slick/slick-theme.css"
import { Link } from 'react-router-dom'
//* Components
import Card from './Swiper Slider/Card'
//* images
import AmazingOffer from '../../Images/Slider Swiper/slider-swipper.png'
//* CSS
import './Style.css'
//* Icon
import { FiChevronLeft } from "react-icons/fi"
//* DATA
import dataTop from './DATA/DATA.js'











function mainSliderSwiperTwo() {
    return (
        <>
            <Link to="/">
                <img
                    src={AmazingOffer}
                    alt="imag"
                    width="200px"
                    height="426px"
                    className='AmazingOffer'
                    loading="lazy"
                />
                <button id='button-swipper'>
                    <FiChevronLeft id='icon-arrowchevronleft' />
                    <span>مشاهده همه</span>
                </button>
            </Link>

            <Card data={dataTop} />
        </>
    )
}


export default mainSliderSwiperTwo