import React from 'react'
import { Link } from 'react-router-dom'
//* CSS
import './card.css'





const Card = ({ address, title, price }) => (
    <>
        <Link to="/" className='card'>
            <section className='main-card-img'>
                <img src={address} alt="" width="170px" height="170px" />
            </section>

            <section className='main-card-title'>
                <p>{title}</p>
            </section>

            <section className='main-card-price'>
                <p>{price}</p>
            </section>
        </Link>
    </>
)

export default Card