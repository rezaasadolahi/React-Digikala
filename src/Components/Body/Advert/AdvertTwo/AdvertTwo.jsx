import React from 'react'
import { Link } from 'react-router-dom'
//* images 
import pic1 from './image/pic1.jpg'
import pic2 from './image/pic2.jpg'
//* CSS
import './Advert.css'






function AdvertTwo() {
    return (
        <>
           <div className='Duo-Ad-Two'>
                <Link to="/" className='DuoAd-link-Two'>
                    <img src={pic1} alt="" />
                </Link>

                <Link to="/" className='DuoAd-link-Two'>
                    <img src={pic2} alt="" />
                </Link>
            </div>
        </>
    )
}


export default AdvertTwo