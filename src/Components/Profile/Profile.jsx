import React from 'react'
import { useSelector } from 'react-redux'
//* CSS
import './CSS/Profile.css'
//* Components
import Box2 from './box2/Box2'





function Profile() {
    const Email = useSelector(state => state.Email.EmailUser)

    return (
        <>
            {
                Email !== '' ?
                    <div id='ManageProfile'>
                        <section className='box1'></section>

                        <Box2 />
                    </div>
                    :
                    null
            }
        </>
    )
}


export default Profile