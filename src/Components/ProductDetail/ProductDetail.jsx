import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
//* Icon
import { AiOutlineHeart } from "react-icons/ai"
import { BsShareFill, BsListUl, BsSquareHalf, BsStarFill, BsFillCircleFill, BsShieldCheck, BsShop } from "react-icons/bs"
import { BiBell } from "react-icons/bi"
import { RiLineChartFill, RiHeartFill } from "react-icons/ri"
import { FiAlertCircle } from "react-icons/fi"
import { MdKeyboardArrowLeft } from "react-icons/md"
//* DATA
import { dataCenter } from '../Product/DATA/DATA'
//* CSS
import './CSS/ProductDetain.css'
//* Reducer
import { WhichPage, GetFavorit, RemoveFavorit } from '../Redux/ActionCreator/ActionCreator'
//* Image
import alert_1 from './Images/alert_1.png'
//* Components
import FirstElastic from './Body ProductDetail/Slider Elastic/FirstElastic/FirstElastic'





 
const ProductDetail = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const { id } = useParams()

    let objectProduct = dataCenter.getProductById(id)

    //* below state use for reload component
    const [reloadLocation, setReloadLocation] = useState()

    //* vaqti ruye rang haye kala click mikonim esmesho minevise
    const [colorNamePersian, setcolorNamePersian] = useState('')

    //* Sign up / in
    const Email = useSelector(state => state.Email.EmailUser)
    const Password = useSelector(state => state.Password.PasswordUser)


    //* Add to favorit account and check productDetail object with Redux
    const favorites = useSelector(state => state.Get_Favorit.obj_product)
    //* Check mikonim ke product tuye favorite account bashe va age bud icon heart ghermez mishe
    let FavoritFilter = favorites.filter(item => item === objectProduct).find(item => item)
    let statusHeart = FavoritFilter === objectProduct ? true : false

    //* when click on heart icon
    const handleFavorit = () => {
        if (!statusHeart) {
            dispatch(GetFavorit(objectProduct))
        } else {
            dispatch(RemoveFavorit(objectProduct))
            setReloadLocation({})
        }
    }

    //* NavTabs
    const [clicked, setClicked] = useState(0)
    const handleToggleTab = (index) => {
        clicked === index ? setClicked(index) : setClicked(index)
    }


    useEffect(() => {
        dispatch(WhichPage(location.pathname))
    }, [])








    return (
        <div className='manage-all-productdetail'>
            <div className='productDetail-top'>
                <section>
                    <img src={objectProduct.imgsrc} alt="" />

                    <section className='icons-rightImage'>
                        {Email === '' && Password === '' ? (
                            <span title='برای اضافه کالا به لیست مورد علاقه اول ثبت نام کنید یا وارد حساب کاربری خود شوید'>
                                <AiOutlineHeart id="icon-heart1" />
                            </span>
                        ) : (
                            <p aria-label="افزودن به علاقه مندی" onClick={handleFavorit}>
                                {Email !== '' && Password !== '' & statusHeart ?
                                    <RiHeartFill id="icon-heart2" /> :
                                    <AiOutlineHeart id="icon-heart1" />
                                }

                            </p>
                        )
                        }


                        <p aria-label="ااشتراک گذاری">
                            <BsShareFill id='icon-network' />
                        </p>

                        <p aria-label="اطلاع رسانی شگفت انگیز">
                            <BiBell id="icon-bell" />
                        </p>

                        <p aria-label="نمودار قیمت">
                            <RiLineChartFill id="icon-chart" />
                        </p>

                        <p aria-label="مقایسه">
                            <BsSquareHalf id="icon-SquareHalf" />
                        </p>

                        <p aria-label="لیست های عمومی">
                            <BsListUl id='icon-ulList' />
                        </p>
                    </section>

                    <section id='box-images'>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <img src="" alt="" />
                        </div>

                        <div>
                            <img src="" alt="" />
                        </div>

                        <div>
                            <img src="" alt="" />
                        </div>

                        <div>
                            <img src="" alt="" />
                        </div>
                    </section>
                </section>


                <section className='box-left'>
                    <div className='head'>
                        <h4>{objectProduct.MoshakhasatKamel}</h4>
                        <section>
                            <span>{objectProduct.MoshaKhasat_EN}</span>
                            <hr />
                        </section>
                    </div>

                    <section className='box-left-bottom'>
                        <div className='box1'>
                            <section className='amareMahsul'>
                                <BsStarFill id='icon-star' />
                                <span>{objectProduct.Ratestar}</span>
                                <span className='mx-2'>|</span>
                                <span className='text-primary mx-1' style={{ cursor: 'pointer' }}>359 نظر</span>
                                <span className='mx-2'>|</span>
                                <span className='text-primary mx-1' style={{ cursor: 'pointer' }}>70 پرسش و پاسخ</span>
                            </section>
                            <div className='color-product pt-5'>
                                <section className='mx-1'>
                                    <span>رنگ :</span>
                                    <span className='mx-3'>
                                        {colorNamePersian === '' ?
                                            setcolorNamePersian(
                                                objectProduct.color.map(item => Object.values(item.name)).pop().join('')
                                            ) : colorNamePersian
                                        }
                                    </span>
                                </section>
                                <section id='box-color'>
                                    {
                                        objectProduct.color.map((item, index) =>
                                            <React.Fragment key={index}>
                                                <input type="radio" id={index} name='color' defaultChecked={true} />
                                                <label
                                                    htmlFor={index}
                                                    tabIndex={1}
                                                    aria-label={item.name}
                                                    style={{ backgroundColor: item.color }}
                                                    onClick={() => setcolorNamePersian(item.name)}
                                                >
                                                </label>
                                            </React.Fragment>
                                        )
                                    }
                                </section>
                            </div>
                            <section id='vizhegiKala'>
                                <p className='mx-1'>{objectProduct.Product_characteristics}</p>
                                <div>
                                    <section>
                                        <BsFillCircleFill className='icon-circlefill' />
                                        <span>{objectProduct.title_internal_memory}</span>
                                        <span>{objectProduct.internal_memory}</span>
                                    </section>
                                    <section>
                                        <BsFillCircleFill className='icon-circlefill' />
                                        <span>{objectProduct.title_Screen_size}</span>
                                        <span>{objectProduct.Screen_size}</span>
                                    </section>
                                    <section>
                                        <BsFillCircleFill className='icon-circlefill' />
                                        <span>{objectProduct.title_communication_networks}</span>
                                        <span>{objectProduct.communication_networks}</span>
                                    </section>
                                </div>
                            </section>
                            <section id="Alert-Samane-Hamta">
                                <FiAlertCircle id='icon-alert' />
                                <p>{objectProduct.Samane_Hamta}</p>
                            </section>
                        </div>



                        <div className='box2'>
                            <section id='head'>
                                <p>{objectProduct.title_Seller}</p>
                            </section>
                            <section id='product-salar'>
                                <img src={objectProduct.Salar_pic} alt="" width="22" height="22" />
                                <section id='product-some-content'>
                                    <p>{objectProduct.Seller_name}</p>
                                    <article>
                                        <span>{objectProduct.title_rezayat_kharidaran}</span>
                                        <span>{objectProduct.rezayat_kharidaran}</span>
                                    </article>
                                </section>
                                <span id='Vertical'></span>
                                <section id='AmalKard'>
                                    <span>{objectProduct.title_AmalKard}</span>
                                    <span>{objectProduct.AmalKard}</span>
                                </section>
                            </section>
                            <section id='product-salar-hidden-right'>
                                <section id='box1'>
                                    <img src={objectProduct.Salar_pic} alt="" width="24" height="24" />
                                    <p>دیجی کالا</p>
                                </section>
                                <section id='box2'>
                                    <h1>{objectProduct.rezayat_kharidaran}</h1>
                                    <h3>رضایت خریداران از کیفیت کالا</h3>
                                    <div id='progress'>
                                        <section id='progress1'></section>
                                        <section id='progress2'></section>
                                    </div>
                                    <hr />
                                    <section id='boxAkhar'>
                                        <h1>{objectProduct.AmalKard}</h1>
                                        <p>عملکرد کلی فروشنده</p>
                                        <ul>
                                            <li>
                                                <p>{objectProduct.BeduneSabtMarjui}</p>
                                                <p>بدون ثبت مرجوعی</p>
                                            </li>
                                            <li>
                                                <p>{objectProduct.TahodErsal}</p>
                                                <p>تعهد ارسال</p>
                                            </li>
                                            <li>
                                                <p>{objectProduct.TaminBeMoqe}</p>
                                                <p>تامین به موقع</p>
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                            </section>
                            <hr />
                            <section id='Garanti'>
                                <BsShieldCheck id='icon-ShieldCheck' />
                                <p>{objectProduct.Garanti}</p>
                            </section>
                            <hr />
                            <section id='MojudiDarAnbar'>
                                <BsShop id='icon-StockShop' />
                                <p>{objectProduct.MojudiKala}</p>
                            </section>
                            <hr />
                            <section id='KharidVaqeimat'>
                                <section id='qeimat'>
                                    <bdo dir='ltr'>{objectProduct.price}</bdo>
                                    <bdo dir="rtl">تومان</bdo>
                                </section>
                                <bdo id='TedadKalayeMojudDarAnbar' dir="rtl">
                                    تنها {objectProduct.TedadKalaDarAnbar} عدد در انبار باقی مانده
                                </bdo>
                                <button
                                    className='btn btn-block p-2 text-light'
                                    id='box-EzafeKardanBeSabadKharid'
                                    disabled={Email === '' && Password === '' ? true : false}
                                    title={Email === '' && Password === '' ? 'برای خرید کالا اول ثبت نام کنید یا وارد حساب کاربری خود شوید' : null}
                                >
                                    افزودن به سبد خرید
                                </button>
                            </section>
                        </div>
                    </section>
                </section>
            </div>
            <div id='between-box'>
                <section id='alert1'>
                    <img src={alert_1} alt="image-alert" id='alert_1' />
                    <button className='btn'>
                        <p>شرکت در قرعه کشی</p>
                        <MdKeyboardArrowLeft id='icon-Arrowleft' />
                    </button>
                </section>
                <section className='slider-swiper-One'>
                    <FirstElastic />
                </section>
            </div>
            <div id='end-box'>
                <nav id="navbar">
                    <button onClick={() => handleToggleTab(0)} className={clicked === 0 ? 'buttonActive' : null}>
                        <p>نقد و بررسی</p>
                    </button>
                    <button onClick={() => handleToggleTab(1)} className={clicked === 1 ? 'buttonActive' : null}>
                        <p>بررسی تخصصی</p>
                    </button>
                    <button onClick={() => handleToggleTab(2)} className={clicked === 2 ? 'buttonActive' : null}>
                        <p>مشخصات</p>
                    </button>
                    <button onClick={() => handleToggleTab(3)} className={clicked === 3 ? 'buttonActive' : null}>
                        <p>دیدگاه کاربران</p>
                    </button>
                    <button onClick={() => handleToggleTab(4)} className={clicked === 4 ? 'buttonActive' : null}>
                        <p>پرسش و پاسخ</p>
                    </button>
                </nav>
                <section>
                    {
                        clicked === 0 ? (<h1>Box 0</h1>) :
                            clicked === 1 ? (<h1>Box 1</h1>) :
                                clicked === 2 ? (<h1>Box 2</h1>) :
                                    clicked === 3 ? (<h1>Box 3</h1>) :
                                        clicked === 4 ? (<h1>Box 4</h1>) : null
                    }
                </section>

            </div>
        </div >
    )
}


export default ProductDetail