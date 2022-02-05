import React, { useState } from 'react'
//* CSS
import './Modal.css'
//* Icons
import { GrLocation } from "react-icons/gr"
import { BsArrowRight, BsFillCircleFill } from "react-icons/bs"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"
//* DATA
import County from './DATA/County'






function SelectProvince() {
    const [status, setStatus] = useState(false)
    const [city, setCity] = useState(false)
    const [namesCity, setNamesCity] = useState('')
    const [getTargetNameCity, setGetTargetNameCity] = useState('')


    const handleCounty = (id, name) => {
        let dataMatch = County.map(item => item.nameCity.map(item => item.nameMatch))[id][0] // nameMatch in DATA
        dataMatch === name ? setCity(true) : setCity(false)

        let getNamesCity = County.map(item => item.nameCity)[id]
        setNamesCity(getNamesCity)
    }


    const handleNameCity = (item) => {
        setGetTargetNameCity(item.name)
        getTargetNameCity !== '' ? setStatus(!status) : setStatus(!status)
    }





    return (
        <>
            <section className='bottom-open-modal' onClick={() => setStatus(!status)}>
                <GrLocation className='location' />
                <section>
                    {
                        getTargetNameCity === '' ?
                            <span>لطفا شهر و استان خود را انتخاب کنید</span>
                            :
                            <span>ارسال به {getTargetNameCity}</span>
                    }

                    {
                        getTargetNameCity === '' ?
                            <BsFillCircleFill id="icon-fill-circle" />
                            : null
                    }
                </section>
            </section>




            <section className={status ? 'On-modal' : 'Off-modal'}>
                <section className='box'>
                    <section className='title'>
                        <p>انتخاب استان</p>
                        <AiOutlineClose className='close' onClick={() => setStatus(!status)} />
                    </section>

                    {
                        County.map(item => item.nameCounty.map((item, index) => (
                            <section
                                key={index}
                                className='namesCounty'
                                onClick={() => handleCounty(item.id, item.name)}
                            >
                                <div>
                                    <p className='nameCounty'>{item.name}</p>
                                    <MdKeyboardArrowLeft id='icon-arrowleft' />
                                </div>
                            </section>
                        )))
                    }

                    {
                        city ?
                            <div className='cityT'>
                                <section className='back' onClick={() => setCity(!city)}>
                                    <BsArrowRight id='icon-back' />
                                    <span id="title">باز گشت به لیست استان ها</span>
                                </section>

                                {
                                    namesCity.map((item, index) => (
                                        <ul
                                            className="list-group"
                                            key={index}
                                            onClick={() => handleNameCity(item)}
                                        >
                                            <li className="list-group-item">{item.name}</li>
                                        </ul>
                                    ))
                                }
                            </div>
                            : null
                    }

                </section>
            </section>
        </>
    )
}


export default SelectProvince