import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//* Icon
import { MdKeyboardArrowLeft } from "react-icons/md"
import { BsTrash } from "react-icons/bs"
//* Redux
import { RemoveFavorit } from '../Redux/ActionCreator/ActionCreator'
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

    //* Remove Favorit Product from account
    const handleRemove = (itemObj) => {
        dispatch(RemoveFavorit(itemObj))
    }



    return (
        <section id='manage-favoritBox'>
            {favorites.length !== 0 ?
                result.map(item => (
                    <div key={item.id} id="favorit-Item">
                        <ul>
                            <BsTrash onClick={() => handleRemove(item)} id="icon-trash" />
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
                :
                <h1 className='text-danger m-5 p-5 user-select-none'>هیچ موردی یافت نشد</h1>
            }
        </section>
    )
}


export default Favorit