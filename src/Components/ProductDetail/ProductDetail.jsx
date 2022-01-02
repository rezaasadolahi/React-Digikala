import React from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineHeart } from "react-icons/ai"
import { BsShareFill, BsListUl, BsSquareHalf, BsStarFill } from "react-icons/bs"
import { BiBell } from "react-icons/bi"
import { RiLineChartFill } from "react-icons/ri";
//* DATA
import { dataCenter } from '../Product/DATA/DATA'
//* CSS
import './CSS/ProductDetain.css'







function ProductDetail() {
    const { id } = useParams()

    let objectProduct = dataCenter.getProductById(id)
    console.log(objectProduct)




    return (
        <>
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
                        <section className='box1'>
                            <section className='amareMahsul'>
                                <BsStarFill id='icon-star'/>
                                <span>{objectProduct.Ratestar}</span>
                            </section>


                        </section>

                        <section className='box2'></section>
                    </section>
                </section>
            </div>
        </>
    )
}


export default ProductDetail