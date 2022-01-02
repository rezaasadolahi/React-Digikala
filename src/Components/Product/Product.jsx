import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//* Icons
import { BsFilterLeft } from "react-icons/bs"
//* CSS
import './CSS/Product.css'
//* DATA
import { dataCenter } from './DATA/DATA'





function Product() {
    const searchValue = useSelector(state => state.Main_search.searche)
    // console.log(searchValue)
    const [getData, setGetData] = useState([])



    useEffect(() => {
        let newData = dataCenter.AllData.filter(item => item.phoneName.find(item => item.name.toLowerCase().includes(searchValue.toLowerCase())))
        setGetData(newData)
    }, [searchValue])



    //* Sort

    const [bishtarinBazdid, setBishtarinBazdid] = useState(false)
    const [geranTarin, setGeranTarin] = useState(false)
    const [arzanTarin, setArzanTarin] = useState(false)

    // Bla bordan tedad clickOnProduct dar data baraye filtere bishtarin bazdid
    const handleIncress = (ID) => {
        const newData = getData.map(item => {
            if (ID === item.id) {
                return {
                    ...item,
                    clickOnProduct: item.clickOnProduct++
                }
            } else {
                return item
            }
        })
        setGetData(newData)
    }

    // 'بیشترین بازدید'
    const handleBishtarinBazdid = () => {
        setBishtarinBazdid(!bishtarinBazdid)
        if (!bishtarinBazdid) { getData.sort((a, b) => b.clickOnProduct - a.clickOnProduct) }
    }
    if (bishtarinBazdid === true) { setTimeout(() => setBishtarinBazdid(!bishtarinBazdid), 1) }

    // 'گران ترین'
    const handleGeranTarin = () => {
        setGeranTarin(!geranTarin)
        if (!geranTarin) { getData.sort((a, b) => { return b.price - a.price }) }
    }
    if (geranTarin === true) { setTimeout(() => setGeranTarin(!geranTarin), 1) }

    // 'ارزان ترین'
    const handleArzanTarin = () => {
        setArzanTarin(!arzanTarin)
        if (!arzanTarin) { getData.sort((a, b) => { return a.price - b.price }) }
    }
    if (arzanTarin === true) { setTimeout(() => setArzanTarin(!arzanTarin), 1) }

    // 'مرتبط ترین'
    const handleMortabetTarin = () => {
        let newData = dataCenter.AllData.filter(item => item.phoneName.find(item => item.name.toLowerCase().includes(searchValue.toLowerCase())))
        setGetData(newData)
    }









    return (
        <main >

            {searchValue !== '' ?
                <section className='under-main'>
                    <p id='TedadKala'>{getData.length} کالا</p>

                    <div className='header-product'>
                        <section className='manageBoxMoratabSazi'>
                            <BsFilterLeft id="icon-filterLeft" />
                            <span>مرتب سازی بر اساس :</span>
                        </section>

                        <section className='buttons-Fliter'>

                            <input type="radio" name="filters" id="f1" defaultChecked={true} />
                            <label tabIndex={1} htmlFor='f1' onClick={handleMortabetTarin}>مرتبط ترین</label>

                            <input type="radio" name="filters" id="f2" />
                            <label tabIndex={1} htmlFor='f2' onClick={handleBishtarinBazdid}>بیشترین بازدید</label>

                            <input type="radio" name="filters" id="f3" />
                            <label tabIndex={1} htmlFor='f3' onClick={handleGeranTarin}>گران ترین</label>

                            <input type="radio" name="filters" id="f4" />
                            <label tabIndex={1} htmlFor='f4' onClick={handleArzanTarin}>ارزان ترین</label>

                        </section>
                    </div>


                    {
                        getData.map(item => {
                            return (
                                <Link
                                    to={`/ProductDetail/${item.id}`}
                                    onClick={() => handleIncress(item.id)}
                                    key={item.id}
                                    placeholder='you can type Samsung'
                                    className='card-product-a'
                                >
                                    <section className='content'>
                                        <section className='imgage'>
                                            <img src={item.imgsrc} alt="" width="190px" height="190px" />
                                        </section>
                                        <section className='title'><p>{item.title}</p></section>
                                        <section className='price'><h1 dir="ltr">تومان {item.price}</h1></section>
                                    </section>
                                </Link>
                            )
                        })
                    }
                </section>
                : null
            }

        </main >
    )
}


export default Product