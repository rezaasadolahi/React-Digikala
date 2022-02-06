import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import { Link } from 'react-router-dom'
//* Icons
import { BiTime } from "react-icons/bi";
//* CSS
import './CSS/style.css'






function Card({ data }) {

  const [time, setTime] = useState('')


  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 3,
    speed: 1100,
    autoplay: false,
    autoplaySpeed: 100,
    cssEase: 'linear',
    vertical: false,
    arrows: true,
  }


  // Time footer
  useEffect(() => {
    function clock() {
      let date = new Date()
      setTime(
        date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
      )
    }
    setInterval(clock(), 100)

    return () => { clearInterval(time) }
  }, [])




  return (
    <div className="card__container">
      <Slider {...settings} className="card__container--inner">
        {
          data.map((item, index) => {
            return (
              <Link to="/" className="card__container--inner--card" key={index}>
                <li>
                  <img loading="lazy" src={item.url} alt="hero img" />
                  <p>{item.tittle}</p>

                  {/* Count */}
                  <div className="No-discount">
                    <p className="percentage badge badge-pill badge-danger">{item.percentage}</p>
                    <p className="no_discount">{item.no_discount}</p>
                  </div>

                  {/* price */}
                  <div className="manage-price-unit">
                    <p className="unit">تومان</p>
                    <p className="price">{item.price}</p>
                  </div>

                  {/* Time */}
                  <footer className="timeFooter">
                    <BiTime className="icon-timer" />
                    <span className="timer">{time}</span>
                  </footer>
                </li>
              </Link>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default Card