import React from 'react'
import { Link } from 'react-router-dom'
//* images 
import pic1 from './image/pic1.jpg'
import pic2 from './image/pic2.jpg'
import pic3 from './image/pic3.jpg'
import pic4 from './image/pic4.jpg'
import pic5 from './image/pic5.jpg'
import pic6 from './image/pic6.jpg'
//* CSS
import './Advert.css'






function AdvertOne() {
    return (
        <>
            <div className='ad'>
                <Link to="/" className='link-ad'>
                    <img src={pic1} alt="" />
                </Link>

                <Link to="/" className='link-ad'>
                    <img src={pic2} alt="" />
                </Link>

                <Link to="/" className='link-ad'>
                    <img src={pic3} alt="" />
                </Link>

                <Link to="/" className='link-ad'>
                    <img src={pic4} alt="" />
                </Link>
            </div>


            <div className='Duo-Ad-One'>
                <Link to="/" className='DuoAd-link-One'>
                    <img src={pic5} alt="" />
                </Link>

                <Link to="/" className='DuoAd-link-One'>
                    <img src={pic6} alt="" />
                </Link>
            </div>
        </>
    )
}


export default AdvertOne