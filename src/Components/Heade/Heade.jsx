import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//* Icon
import { FiUser } from "react-icons/fi"
import { RiShoppingCartLine } from "react-icons/ri"
import { IoMdArrowDropdown } from "react-icons/io"
import { BsDot } from "react-icons/bs"
import { MdKeyboardArrowLeft } from "react-icons/md"
//* CSS
import './CSS/Header.css'
import './CSS/FindTextSearch.css'
//* Redux
import { Search, Emailuser, PasswordUser } from '../Redux/ActionCreator/ActionCreator'
//* DATA
import DATAFindText from './DATA/DATA'
//* Images
import Logo from './Images/digikala logo.svg'
import Profile from './Images/profile.svg'







function Heade() {
    const dispatch = useDispatch()
    const valPishnahad = useSelector(state => state.Main_search.searche)

    const [searchBox, setSearchBox] = useState('')

    const handleChanle = (e) => {
        setSearchBox(e.target.value)
        setStatusFindProduct(!statusFindProduct)
        dispatch(Search(e.target.innerText))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(Search(searchBox))
        setStatusFindProduct(!statusFindProduct)
    }



    //* help to find value

    const [getHelpToFindProduct, setGetFindData] = useState([])
    const [statusFindProduct, setStatusFindProduct] = useState(false)

    useEffect(() => {
        const newData = DATAFindText.filter(item => item.name.toLowerCase().includes(searchBox.toLowerCase()))
        setGetFindData(newData)
    }, [searchBox])


    const handleHepFindProduct = (name) => {
        setSearchBox(name)
        dispatch(Search(name))
        setStatusFindProduct(!statusFindProduct)
    }

    const handleLogoClick = () => {
        setSearchBox('')
        dispatch(Search(''))
    }


    //* When Sign in / up to website
    const Email = useSelector(state => state.Email.EmailUser)
    const Password = useSelector(state => state.Password.PasswordUser)


    const exiteAccount = () => {
        dispatch(Emailuser(''))
        dispatch(PasswordUser(''))
    }





    return (
        <header>
            <nav>
                <Link to="/" onClick={handleLogoClick}>
                    <img src={Logo} alt="Logo" id='logo' />
                </Link>

                <form onSubmit={handleSubmit}>
                    <i className="search icon search_icon"></i>
                    <input
                        type="text"
                        className='Head-search'
                        placeholder='جستجو در دیجی کالا'
                        onChange={handleChanle}
                        value={valPishnahad || searchBox}
                    />
                </form>


                {/* Help to find product */}

                {!statusFindProduct ?
                    <section className={searchBox !== '' ? 'onn' : 'off'}>
                        <div className='helo-to-find-value-searchBox'>
                            {searchBox !== '' ?
                                getHelpToFindProduct.map((item, index) => {
                                    return (
                                        <div
                                            className='all-text-findValue'
                                            key={index}
                                        >
                                            <h4 onClick={() => handleHepFindProduct(item.name)}>{item.name}</h4>
                                        </div>
                                    )
                                })
                                : null
                            }
                        </div>
                    </section>
                    : null
                }



                {/* Sign up */}

                <section className='sign-and-cart'>
                    {Email !== '' & Password !== '' ?
                        <>
                            <button className='boxlogin'>
                                <IoMdArrowDropdown />
                                <FiUser className='user-icon2' />



                                <div className='miniPageAccount'>
                                    <section>
                                        <article>
                                            <h5>UserName</h5>
                                            <section id='seeAccount'>
                                                <p>مشاهده حساب کاربری</p>
                                                <MdKeyboardArrowLeft className='icon-arrowleft' />
                                            </section>
                                            <section className='valet'>
                                                <p>کیف پول</p>
                                                <p>98800تومان</p>
                                            </section>
                                        </article>

                                        <section>
                                            <img src={Profile} alt="" className='icon-profile' />
                                            <hr className='Vertical' />
                                            <BsDot className='circle' />
                                        </section>
                                    </section>

                                    <hr width="174px" id='line-beine-box1' />

                                    <section className='box-2'>
                                        <MdKeyboardArrowLeft className='icon-arrowleft' />
                                        <p className='text'>فعال سازی دیجی کلاب</p>
                                        <span className='circle'></span>
                                    </section>

                                    <hr width="174px" id='line-beine-box2' />

                                    <section className='box-3'>
                                        <p>سفارش های من</p>
                                    </section>

                                    <hr width="174px" id='line-beine-box3' />

                                    <section className='box-4'>
                                        <p>جوایز دیجی کلاب</p>
                                    </section>

                                    <hr width="174px" id='line-beine-box4' />

                                    <section className='box-5' onClick={exiteAccount}>
                                        <p>خروج از حساب کاربری</p>
                                    </section>
                                </div>

                            </button>
                        </>
                        :
                        <Link to="/Signup" className='sign-up'>
                            <span>ورود به حساب کاربری</span>
                            <FiUser className='user-icon' />
                        </Link>
                    }
                    <span className='Vertical'>|</span>
                    <RiShoppingCartLine className='cart' />
                </section>


            </nav>
        </header>
    )
}


export default Heade