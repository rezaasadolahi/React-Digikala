import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
//* Icons
import { BsFilterLeft } from "react-icons/bs"
import { MdKeyboardArrowLeft } from "react-icons/md"
//* CSS
import './CSS/Product.css'
//* DATA
import { dataCenter } from './DATA/DATA'
//* Reducer
import { Search, WhichPage } from '../Redux/ActionCreator/ActionCreator'




function Product() {
    const searchValue = useSelector(state => state.Main_search.searche)
    const dispatch = useDispatch()
    const [getData, setGetData] = useState([])

    //* Sort

    const [bishtarinBazdid, setBishtarinBazdid] = useState(false)
    const [geranTarin, setGeranTarin] = useState(false)
    const [arzanTarin, setArzanTarin] = useState(false)

    // Bala bordan tedad clickOnProduct dar data baraye filtere bishtarin bazdid
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
        checkedRadio.current.defaultChecked = false
    }
    if (geranTarin === true) { setTimeout(() => setGeranTarin(!geranTarin), 1) }

    // 'ارزان ترین'
    const handleArzanTarin = () => {
        setArzanTarin(!arzanTarin)
        if (!arzanTarin) { getData.sort((a, b) => { return a.price - b.price }) }
        checkedRadio.current.defaultChecked = false
    }
    if (arzanTarin === true) { setTimeout(() => setArzanTarin(!arzanTarin), 1) }

    // 'مرتبط ترین'
    const handleMortabetTarin = () => {
        let newData = dataCenter.AllData.filter(item => item.phoneName.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())))
        setGetData(newData)
        setvalueSortTwo('')
        setvalueSortOne('')
        checkedRadio.current.defaultChecked = false
    }

    // 'Box Filter between 2 price'
    //* Ba raveshe zir mishe 2ta adad bedahim va beine in dota adad harchi price tuye data hasta begirim
    const [valueSortOne, setvalueSortOne] = useState('')
    const [valueSortTwo, setvalueSortTwo] = useState('')
    const checkedRadio = useRef()

    const handleBoxFilterAdadAval = (e) => setvalueSortOne(e.target.value)
    const handleBoxFilterAdadDovom = (e) => setvalueSortTwo(e.target.value)

    const handleFilterprice = () => {
        if (valueSortOne !== '' && valueSortTwo !== '') {
            checkedRadio.current.defaultChecked = true
            let newData = dataCenter.AllData.filter(item => item.price > valueSortOne).sort((a, b) => a.price - b.price).filter(item => item.price <= valueSortTwo)
            setGetData(newData)
        }
    }


    // list pishnahad search mahsul
    const handlePishnahad = (e) => {
        dispatch(Search(e.target.innerText))
    }



    // Effect
    useEffect(() => {
        dispatch(WhichPage("/Product"))
        // vaqti search mikonim ke mahsuli ra peida konim khat zir ejra mishe
        const newData = dataCenter.AllData.filter(item => item.phoneName.find(item => item.name.toLowerCase().includes(searchValue.toLowerCase())))
        setGetData(newData)
    }, [searchValue])










    return (
        <>
            {searchValue !== '' ?
                <main>
                    <section className='manage-Tags_product'>
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

                                    <input type="radio" name="filters" id="f4" ref={checkedRadio} />
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


                        <aside>
                            <div id='FilterBetween2price'>
                                <h3 id='title-between-twoPrice'>قیمت (تومان)</h3>
                                <div>
                                    <section>
                                        <span className='mt-3 text-center bg-white'>از</span>
                                        <input
                                            type="text"
                                            value={valueSortOne}
                                            onChange={handleBoxFilterAdadAval}
                                            placeholder='0'
                                            className='form-control mt-2'
                                        />
                                    </section>

                                    <section>
                                        <span className='mt-3 text-center bg-white'>تا</span>
                                        <input
                                            type="text"
                                            value={valueSortTwo}
                                            onChange={handleBoxFilterAdadDovom}
                                            placeholder='0'
                                            className='form-control mt-2'
                                        />
                                    </section>
                                </div>

                                <button onClick={handleFilterprice}
                                    className='btn btn-block btn-primary'
                                    disabled={valueSortOne !== '' && valueSortTwo !== '' ? false : true}
                                >
                                    اعمال فیلتر قیمت
                                </button>
                            </div>

                            <hr width="280" className='mx-auto mt-4 mb-4' />

                            <section className='pishnahadSearch'>
                                <section className='head'>
                                    <h2>جستجو های مرتبط</h2>
                                </section>

                                <section className='list'>
                                    <section onClick={handlePishnahad}>
                                        <p>گوشی</p>
                                        <MdKeyboardArrowLeft className='icon-leftArrow' />
                                    </section>
                                    <section onClick={handlePishnahad}>
                                        <p>گوشی هوآوی</p>
                                        <MdKeyboardArrowLeft className='icon-leftArrow' />
                                    </section>
                                    <section onClick={handlePishnahad}>
                                        <p>گوشی نوکیا</p>
                                        <MdKeyboardArrowLeft className='icon-leftArrow' />
                                    </section>
                                    <section onClick={handlePishnahad}>
                                        <p>گوشی آیفون</p>
                                        <MdKeyboardArrowLeft className='icon-leftArrow' />
                                    </section>
                                </section>
                            </section>

                            <hr width="280" className='mx-auto mt-4 mb-4' />
                        </aside>
                    </section>
                </main >
                : null
            }
        </>
    )
}


export default Product