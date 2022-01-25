import React from 'react'
import { useSelector } from 'react-redux'
//* Components
import Box2 from '../Profile/box2/Box2'
//* CSS
import './CSS/Favorit.css'





function Favorit() {
    return (
        <div id='ManageProfile' className='ManageFavorit'>
            <section id='box1-Favorit'>

            </section>

            <Box2 />
        </div>
    )
}


export default Favorit