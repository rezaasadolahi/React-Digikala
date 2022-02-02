import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useSelector } from 'react-redux'
//* Components
import Card from './Card'
//* CSS
import './FirstElastic.css'






const FirstElastic = React.memo(() => {
    const DataProduct = useSelector(state => state.Get_Data_Product.DataProduct)

    const setting = {
        // itemsToShow: 1,
        itemsToShow: 5,
        itemsToScroll: 4,
        pagination: false,
        initialActiveIndex: 0,
        isRTL: true,
        enableAutoPlay: false,
        autoPlaySpeed: 8000,
        itemPadding: [0],
    }




    return (
        <>
            <section className='title-elastic-carousel'>
                <p>محصولات مرتبط</p>
            </section>
            <hr className='line-hr-One' />
            <hr className='line-hr-Two' />

            <Carousel {...setting}>
                {
                    DataProduct.splice(0, Math.random() * 10 + 5).map((item, index) => {
                        return (
                            <div key={index}>
                                <Card id={item.id} address={item.imgsrc} price={item.price} title={item.MoshakhasatKamel} />
                            </div>
                        )
                    })
                }
            </Carousel>
        </>
    )
})


export default FirstElastic