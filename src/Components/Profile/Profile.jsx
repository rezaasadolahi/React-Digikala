import React from 'react'
//* image
import inviteFriend from './Image/InviteFriend.jpg'
//* CSS
import './CSS/Profile.css'





function Profile() {
    return (
        <div id='ManageProfile'>
            <section className='box1'>
            </section>

            <section className='box2'>
                <img src={inviteFriend} alt="" />
                <section id='information-account'>

                </section>
            </section>
        </div>
    )
}


export default Profile