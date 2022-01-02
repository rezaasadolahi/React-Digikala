import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
//* CSS
import './CSS/Sign-in.css'
//* Icons
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'
//* Image
import Logo from '../Images/digikala logo.svg'
//* Redux
import { PasswordUser } from '../../Redux/ActionCreator/ActionCreator'









function Signup() {
    const dispatch = useDispatch()
    const [valueBox, setValueBox] = useState('')
    const [StatusEye, setStatusEye] = useState(false)

    const handleChange = (e) => {
        setValueBox(e.target.value)
    }

    const handleSignClick = () => {
        dispatch(PasswordUser(valueBox))
    }




    
    return (
        <>
            <div className='sign-in-web'>
                <section className='card-Login'>

                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>

                    <h3>رمز عبور خود را وارد کنید</h3>
                    <p>رمز عبور حساب کاربری خود را وارد کنید</p>
                    <form action="">
                        <input
                            type={StatusEye ? "text" : "password"}
                            onChange={handleChange}
                            value={valueBox}
                        />
                        <Link to="/">
                            <input
                                type="submit"
                                onClick={handleSignClick}
                                value="ادامه"
                                disabled={valueBox !== '' ? false : true}
                            />
                        </Link>
                    </form>

                    {StatusEye === false ?
                        <RiEyeOffLine onClick={() => setStatusEye(!StatusEye)} className='eyePass' />
                        :
                        <RiEyeLine onClick={() => setStatusEye(!StatusEye)} className='eyePass' />
                    }


                </section>
            </div>
        </>
    )
}


export default Signup