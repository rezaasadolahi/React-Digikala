import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//* Components
import Box2 from '../Profile/box2/Box2'
//* Icon
import { MdKeyboardArrowLeft } from "react-icons/md"
//* CSS
import './CSS/Favorit.css'





function Favorit() {
    const dispatch = useDispatch()

    const favorites = useSelector(state => state.Get_Favorit.obj_product).filter(Boolean)
    //* Remove Duplicate product Favorit
    let dataArr = favorites.map(item => {
        return [JSON.stringify(item), item]
    })
    let maparr = new Map(dataArr)
    let result = [...maparr.values()]





    return (
        <div id='ManageProfile' className='ManageFavorit'>
            <section id='box1-Favorit'>
                <section id='manage-favoritBox'>
                    {
                        result.map(item => (
                            <div key={item.id} id="favorit-Item">
                                <ul>
                                    <h2 tabIndex="1">...</h2>
                                    <li>حذف کالا</li>
                                </ul>
                                <article>
                                    <p>{item.MoshakhasatKamel}</p>
                                    <h3>{item.price} تومان</h3>
                                    <Link id="link-a" to={`/ProductDetail/${item.id}`}>
                                        مشاهده محصول
                                        <MdKeyboardArrowLeft className='icon-arrowleft' />
                                    </Link>
                                </article>
                                <img src={item.imgsrc} alt="" width="122px" height="130px" />
                            </div>
                        ))
                    }
                </section>
            </section>

            <Box2 />
        </div>
    )
}


export default Favorit