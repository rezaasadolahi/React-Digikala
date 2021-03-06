import React, { useState, useEffect, useRef } from 'react';
import './CSS/Box2.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
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
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const nameFavorit = useRef()
    const [getNameFavorit, setgetNameFavorit] = useState()
    const [data, setData] = useState('')
    const Email = useSelector(state => state.Email.EmailUser)


    const handleExitAccount = () => {
        navigate('/')
        dispatch(Emailuser(''))
        dispatch(PasswordUser(''))
    }


    useEffect(() => {
        //* Etelate emaili ke sabt shode moqe vorud ya sabtenam va Emaily ke moqe vorud mizanim ra migirim
        let newSetData = DATA_USER.filter(item => item.Email_Address === Email).find(item => item)
        setData(newSetData)
        //* Age Email khali shod bar migardim be safhe Home "/" 
        if (Email === '') {
            navigate("/")
        }
        //* get attribute item list
        setgetNameFavorit(nameFavorit.current.getAttribute("location"))
        //* scroll to top page
        window.scrollTo(0, 0)

    }, [location.pathname])







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
                                    <p>?????? ??????</p>
                                    <p dir='rtl'>{data.valet} ??????????</p>
                                </section>
                                <section id='box2'>
                                    <MdKeyboardArrowLeft />
                                    <span>???????????? ????????????</span>
                                </section>
                            </section>
                            <section id='digiclub'>
                                <p>???????? ????????</p>
                            </section>
                        </section>
                    </section>
                </div>
            </section>
            <div id='outher-informations'>
                <section>
                    <BsMenuButtonWideFill id='icon' />
                    <p>?????????? ?????? ????</p>
                </section>
                <button
                    onClick={() => navigate('/Profile/Lists')}
                    id="favorit-button"
                    disabled={getNameFavorit === location.pathname ? true : false}
                >
                    <BsHeart id='icon' />
                    <p ref={nameFavorit} location="/Profile/Lists">???????? ????</p>
                </button>
                <section>
                    <BsChat id='icon' />
                    <p>??????????</p>
                </section>
                <section>
                    <BsSignpostSplit id='icon' />
                    <p>?????????? ????</p>
                </section>
                <section>
                    <BsCreditCard id='icon' />
                    <p>???????? ?????? ????????</p>
                </section>
                <section>
                    <FiMail id='icon' />
                    <p>?????????????????</p>
                </section>
                <section>
                    <BsClock id='icon' />
                    <p>???????????? ?????? ????????</p>
                </section>
                <section>
                    <FaRegUser id='icon' />
                    <p>?????????????? ????????</p>
                </section>
                <section onClick={handleExitAccount}>
                    <BsBoxArrowRight id='icon' />
                    <p>????????</p>
                </section>
            </div>
        </div>
    )
}


export default Box2