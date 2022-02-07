import React from 'react'
import Carousel from 'react-elastic-carousel'
//* Components
import Card from './Card'
//* CSS
import './FirstElastic.css'






function FirstElastic() {

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
                <h3 className='mt-1'>گوشی موبایل</h3>
                <p className='title-elastic-carousel-p'>بر اساس بازدید های شما</p>
            </section>
            <hr className='line-hr-One' />
            <hr className='line-hr-Two' />

            <Carousel {...setting}>
                <Card
                    address="https://b2n.ir/p10605"
                    price="6,749,000 تومان"
                    title="گوشی موبایل سامسونگ مدل  A52s 5G SM-A528B/DS دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت"
                />


                <Card
                    address="https://b2n.ir/x72580"
                    price="28,000,000 تومان"
                    title="گوشی موبایل اپل مدل iPhone 13 A2634 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت"
                />

                <Card
                    address="https://b2n.ir/a83786"
                    price="43,500,000 تومان"
                    title="گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت"
                />


                <Card
                    address="https://b2n.ir/r59621"
                    price="10,699,000 تومان"
                    title="گوشی موبایل سامسونگ مدل  A52s 5G SM-A528B/DS دو سیم‌کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت"
                />


                <Card
                    address="https://b2n.ir/p54169"
                    price="7,149,000 تومان"
                    title="گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت"
                />


                <Card
                    address="https://b2n.ir/h34998"
                    price="4,120,000 تومان"
                    title="گوشی موبایل سامسونگ مدل Galaxy A12 Nacho SM-A127F/DS دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت"
                />


                <Card
                    address="https://b2n.ir/e03732"
                    price="11,749,000 تومان"
                    title="گوشی موبایل سامسونگ مدل Galaxy S20 FE SM-G780 دو سیم کارت ظرفیت 128 گیگابایت و 8 گیگابایت رم"
                />


                <Card
                    address="https://b2n.ir/u25507"
                    price="2,899,000 تومان"
                    title="گوشی موبایل شیائومی مدل Redmi 9A M2006C3LG دو سیم‌ کارت ظرفیت 32 گیگابایت"
                />


                <Card
                    address="https://b2n.ir/t87829"
                    price="6,066,000 تومان"
                    title="گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG دو سیم‌ کارت ظرفیت 128 گیگابایت و 6 گیگابایت رم"
                />


                <Card
                    address="https://b2n.ir/p28997"
                    price="4,545,000 تومان"
                    title="گوشی موبایل شیائومی مدل Redmi Note 8 2021 M1908C3JGG دو سیم‌ کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت"
                />


                <Card
                    address="https://b2n.ir/z93839"
                    price="24,880,000 تومان"
                    title="گوشی موبایل اپل مدل iPhone 11 A2223 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت"
                />


                <Card
                    address="https://b2n.ir/t25179"
                    price="12,790,000 تومان"
                    title="گوشی موبایل اپل مدل  iPhone SE 2020 A2275 ظرفیت 128 گیگابایت"
                />


                <Card
                    address="https://b2n.ir/e41171"
                    price="9,500,000 تومان"
                    title="گوشی موبایل سامسونگ مدل  A52s 5G SM-A528B/DS دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت"
                />


                <Card
                    address="https://b2n.ir/s37066"
                    price="3,800,000 تومان"
                    title="گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت - اکتیو"
                />


                <Card
                    address="https://b2n.ir/n05739"
                    price="436,000 تومان"
                    title="گوشی موبایل نوکیا مدل 105 - 2019 TA-1174 DS دو سیم‌ کارت"
                />

            </Carousel>
        </>
    )
}


export default FirstElastic