import React, { useState, useEffect } from 'react';
import './CSS/Box2.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//* Icon
import { MdKeyboardArrowLeft } from "react-icons/md"
import { BsMenuButtonWideFill, BsHeart, BsChat, BsSignpostSplit, BsCreditCard, BsClock, BsBoxArrowRight } from "react-icons/bs"
import { FiMail } from "react-icons/fi"
import { FaRegUser } from "react-icons/fa"
//* image
import inviteFriend from './Image/InviteFriend.jpg'
import Icon_Profile from './Image/profile.svg'
//* Redux
import { Emailuser, PasswordUser } from '../../Redux/ActionCreator/ActionCreator'
//* DATA
import DATA_USER from '../DATA/DATA_USER'






function Box2() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState('')
    const Email = useSelector(state => state.Email.EmailUser)


    const handleExitAccount = () => {
        navigate('/')
        dispatch(Emailuser(''))
        dispatch(PasswordUser(''))
    }


    useEffect(() => {
        // Etelate emaili ke sabt shode moqe vorud ya sabtenam va Emaily ke moqe vorud mizanim ra migirim
        let newSetData = DATA_USER.filter(item => item.Email_Address === Email).find(item => item)
        setData(newSetData)
        // Age Email khali shod bar migardim be safhe Home "/" 
        if (Email === '') {
            navigate("/")
        }
    }, [data, Email])





    return (
        <div className='box2'>
            <section>
                <img src={inviteFriend} alt="" />
                <div id='information-account'>
                    <section id='account_name'>
                        <section id='right'>
                            <img src={Icon_Profile} alt="" id='icon-profile' />
                            <section id='Vertical_1'></section>
                            <section id='Vertical_2'></section>
                        </section>
                        <section id='left'>
                            <section id='fullName'>
                                <p>{data.Full_name}</p>
                                <p>{data.phone}</p>
                            </section>
                            <section id='valet'>
                                <section id='box1'>
                                    <p>کیف پول</p>
                                    <p dir='rtl'>{data.valet} تومان</p>
                                </section>
                                <section id='box2'>
                                    <MdKeyboardArrowLeft />
                                    <span>افزایش موجودی</span>
                                </section>
                            </section>
                            <section id='digiclub'>
                                <p>دیجی کلاب</p>
                            </section>
                        </section>
                    </section>
                </div>
            </section>
            <div id='outher-informations'>
                <section>
                    <BsMenuButtonWideFill id='icon' />
                    <p>سفارش های من</p>
                </section>
                <section>
                    <BsHeart id='icon' />
                    <p>لیست ها</p>
                </section>
                <section>
                    <BsChat id='icon' />
                    <p>نظرات</p>
                </section>
                <section>
                    <BsSignpostSplit id='icon' />
                    <p>نشانی ها</p>
                </section>
                <section>
                    <BsCreditCard id='icon' />
                    <p>کارت های هدیه</p>
                </section>
                <section>
                    <FiMail id='icon' />
                    <p>پیغام‌ها</p>
                </section>
                <section>
                    <BsClock id='icon' />
                    <p>بازدید های اخیر</p>
                </section>
                <section>
                    <FaRegUser id='icon' />
                    <p>اطلاعات حساب</p>
                </section>
                <section onClick={handleExitAccount}>
                    <BsBoxArrowRight id='icon' />
                    <p>خروج</p>
                </section>
            </div>
        </div>
    )
}


export default Box2