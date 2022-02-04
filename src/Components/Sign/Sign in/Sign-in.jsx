import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//* CSS
import './CSS/Sign-in.css'
//* Icons
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'
//* Image
import Logo from '../Images/digikala logo.svg'
//* Redux
import { PasswordUser, Search } from '../../Redux/ActionCreator/ActionCreator'









function Signup() {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [valueBox, setValueBox] = useState('')
    const [StatusEye, setStatusEye] = useState(false)

    const handleChange = (e) => {
        setValueBox(e.target.value)
    }

    //* When click on logo Digikala
    const handleLogoClick = () => {
        dispatch(Search(''))
    }

    //* When click on the button page
    const pageName = useSelector(state => state.WhichPage.PageName)
    const handleSignClick = () => {
        dispatch(PasswordUser(valueBox))
        // khate zir dar asl undefined barmigardune , vaqti sabtenam mikonim va ruye button click mikonim dakhele hamun safhe i ke budim mimanim
        pageName.find(item => navigate(item, { replace: true }))
    }

    const Email = useSelector(state => state.Email.EmailUser)
    const Password = useSelector(state => state.Password.PasswordUser)




    return (
        <>
            <div className={Email !== '' && Password !== '' ? 'fill-Email-Password' : 'sign-in-web'}>
                <section className='card-Login'>

                    <Link to="/" onClick={handleLogoClick}>
                        <img src={Logo} alt="This is a logo website" />
                    </Link>

                    <h3>رمز عبور خود را وارد کنید</h3>
                    <p>رمز عبور حساب کاربری خود را وارد کنید</p>
                    <form action="">
                        <input
                            type={StatusEye ? "text" : "password"}
                            onChange={handleChange}
                            value={valueBox}
                        />
                        <input
                            type="submit"
                            onClick={handleSignClick}
                            value="ادامه"
                            disabled={valueBox !== '' ? false : true}
                        />
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