import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
//* Icons
import { BsFilterLeft } from "react-icons/bs"
import { MdKeyboardArrowLeft } from "react-icons/md"
import leftArrow from "./icons/left-arrow.svg"
import rightArrow from "./icons/right-arrow.svg"
//* CSS
import './CSS/Product.css'
import './CSS/Pagination.css'
//* DATA
import { dataCenter } from './DATA/DATA'
//* Reducer
import { Search, WhichPage, getDataInProduct } from '../Redux/ActionCreator/ActionCreator'





const Product = () => {
    const location = useLocation()
    const searchValue = useSelector(state => state.Main_search.searche)
    const dispatch = useDispatch()
    const [getData, setGetData] = useState([])

    //* Sort
    const [bishtarinBazdid, setBishtarinBazdid] = useState(false)
    const [geranTarin, setGeranTarin] = useState(false)
    const [arzanTarin, setArzanTarin] = useState(false)

    //* Bala bordan tedad clickOnProduct dar data baraye filtere bishtarin bazdid
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

    //* list pishnahad search mahsul
    const handlePishnahad = (e) => {
        dispatch(Search(e.target.innerText))
    }

    //* Send Data to Redux for use in ProductDetail 'Mahsul pishnahadi'
    setTimeout(() => {
        dispatch(getDataInProduct(getData))
    }, 1)



    //* Pagination
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPage = 32
    const pageNumberLimit = 5
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

    const indexOfLastItem = currentPage * itemsPage
    const indexOfFirstItem = indexOfLastItem - itemsPage
    const currentItems = getData.slice(indexOfFirstItem, indexOfLastItem)

    //* Pagination - data length
    const pages = []
    for (let i = 0; i <= Math.ceil(getData.length / itemsPage); i++) {
        pages.push(i)
    }


    //* Pagination - Render box numbers
    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id))
    }

    const renderPageNumbers = pages.map(number => {
        if (number > minPageNumberLimit && number <= maxPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? 'active' : null}
                >
                    {number}
                </li>
            )
        } else {
            return null
        }
    })


    //* Pagination - Prev and Next Button
    const handleNextbtn = () => {
        setCurrentPage(currentPage - 1)
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }

    const handlePrevbtn = () => {
        setCurrentPage(currentPage + 1)
        if (currentPage >= maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }

    //* Pagination - 3 dot box
    let pageIncrementBtn = null
    if (pages.length > maxPageNumberLimit) { pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li> }

    let pageDecrementBtn = null
    if (minPageNumberLimit >= 1) { pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li> }




    //* render Data to ul list 
    const renderData = (data) => {
        return (
            searchValue !== '' ?
                <section id='manage-product'>
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
                                data.map(item => {
                                    return (
                                        <Link
                                            to={`/ProductDetail/${item.id}`}
                                            onClick={() => handleIncress(item.id)}
                                            key={item.id}
                                            className='card-product-a'
                                            state={getData.length}
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
                                    className='btn btn-block btn-primary w-100'
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

                    {searchValue !== '' ?
                        <ul className="pageNumbers">
                            <li>
                                <button
                                    onClick={handleNextbtn}
                                    disabled={currentPage === 1 ? true : false}
                                >
                                    <img src={leftArrow} alt="" />
                                </button>
                            </li>

                            {pageDecrementBtn}
                            {renderPageNumbers}
                            {pageIncrementBtn}

                            <li>
                                <button
                                    onClick={handlePrevbtn}
                                    disabled={currentPage === pages[pages.length - 1] ? true : false}
                                >
                                    <img src={rightArrow} alt="" />
                                </button>
                            </li>
                        </ul>
                        : null
                    }

                </section>
                : null
        )
    }



    //* Effect
    useEffect(() => {
        dispatch(WhichPage(location.pathname))
        // vaqti search mikonim ke mahsuli ra peida konim khat zir ejra mishe
        const newData = dataCenter.AllData.filter(item => item.phoneName.find(item => item.name.toLowerCase().includes(searchValue.toLowerCase())))
        setGetData(newData)
        //* Scroll to top page
        window.scrollTo(0, 0)
    }, [searchValue, currentPage])




    return (
        <>
            {renderData(currentItems)}
        </>
    )
}


export default Product