import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
//* Icon
import { AiOutlineHeart } from "react-icons/ai"
import { BsShareFill, BsListUl, BsSquareHalf, BsStarFill, BsFillCircleFill } from "react-icons/bs"
import { BiBell } from "react-icons/bi"
import { RiLineChartFill } from "react-icons/ri"
import { FiAlertCircle } from "react-icons/fi"
//* DATA
import { dataCenter } from '../Product/DATA/DATA'
//* CSS
import './CSS/ProductDetain.css'







function ProductDetail() {
    const { id } = useParams()

    let objectProduct = dataCenter.getProductById(id)
    console.log(objectProduct)

    // vaqti ruye rang haye kala click mikonim esmesho minevise
    const [colorNamePersian, setcolorNamePersian] = useState('')






    return (
        <div className='manage-all-productdetail'>
            <div className='productDetail-top'>
                <section>
                    <img src={objectProduct.imgsrc} alt="" />

                    <section className='icons-rightImage'>
                        <p aria-label="افزودن به علاقه مندی">
                            <AiOutlineHeart id="icon-heart" />
                        </p>

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
                                                objectProduct.color.map(item => Object.values(item.name)).pop()
                                            ) : colorNamePersian
                                        }
                                    </span>
                                </section>
                                <section id='box-color'>
                                    {
                                        objectProduct.color.map((item, index) =>
                                            <>
                                                <input type="radio" id={index} name='color' defaultChecked={true} />
                                                <label
                                                    htmlFor={index}
                                                    tabIndex={1}
                                                    aria-label={item.name}
                                                    style={{ backgroundColor: item.color }}
                                                    onClick={() => setcolorNamePersian(item.name)}
                                                >
                                                </label>
                                            </>
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

                            <hr />
                            
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}


export default ProductDetail