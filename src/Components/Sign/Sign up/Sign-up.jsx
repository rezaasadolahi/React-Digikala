import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//* CSS
import './CSS/Sign-up.css'
//* Icons
import { RiCloseCircleFill } from 'react-icons/ri'
//* Image
import Logo from '../Images/digikala logo.svg'
//* Redux
import { Emailuser, Search } from '../../Redux/ActionCreator/ActionCreator'







function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [valueBox, setValueBox] = useState('')

    const handleChange = (e) => {
        setValueBox(e.target.value)
    }

    const handleSignupClick = () => {
        dispatch(Emailuser(valueBox))
        navigate('/Signup/Login', { replace: true })
    }

    //* When click on logo Digikala
    const handleLogoClick = () => {
        dispatch(Search(''))
    }


    const Email = useSelector(state => state.Email.EmailUser)
    const Password = useSelector(state => state.Password.PasswordUser)



    return (
        <>
            <div className={Email !== '' && Password !== '' ? 'fill-Email-Password' : 'sign-up-web'}>
                <section className='card-signup'>

                    <Link to="/" onClick={handleLogoClick}>
                        <img src={Logo} alt="This is a logo website" />
                    </Link>

                    <h3>ورود / ثبت ‌نام</h3>
                    <p>شماره موبایل یا پست الکترونیک خود را وارد کنید</p>
                    <form action="">
                        <input
                            type="text"
                            onChange={handleChange}
                            value={valueBox}
                        />
                        <input
                            type="submit"
                            value="ورود به دیجی کالا"
                            disabled={valueBox !== '' ? false : true}
                            onClick={handleSignupClick}
                        />
                    </form>
                    {valueBox !== '' ?
                        <RiCloseCircleFill onClick={() => setValueBox('')} className='clearValueSignBox' />
                        : null
                    }


                    <section>
                        <p className='firstLine'>
                            با ورود و یا ثبت نام در دیجی‌کالا شما <span>شرایط و قوانین</span> استفاده از سرویس
                        </p>
                        <p className='TwoLine'>
                            های سایت دیجی‌کالا و <span>قوانین حریم خصوصی</span> آن را می‌پذیرید
                        </p>
                    </section>
                </section>
            </div>
        </>
    )
}


export default Signup