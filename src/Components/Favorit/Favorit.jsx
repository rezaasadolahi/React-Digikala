import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
//* Components
import Box2 from '../Profile/box2/Box2'
//* CSS
import './CSS/Favorit.css'





function Favorit() {
    const favorites = useSelector(state => state.Get_Favorit.obj_product)
    //* Remove Duplicate product Favorit
    let dataArr = favorites.map(item => {
        return [JSON.stringify(item), item]
    })
    let maparr = new Map(dataArr)
    let result = [...maparr.values()]


    useEffect(() => {

    }, [])


    


    return (
        <div id='ManageProfile' className='ManageFavorit'>
            <section id='box1-Favorit'>
                {
                    result.map(item => (
                        <div key={item.id}>
                            <h1>id: {item.id}</h1>
                            <img src={item.imgsrc} alt="" width="200px" height="180px" />
                        </div>
                    ))
                }
            </section>

            <Box2 />
        </div>
    )
}


export default Favorit