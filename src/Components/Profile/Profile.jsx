import React from 'react'
//* image
import inviteFriend from './Image/InviteFriend.jpg'






function Profile() {
    return (
        <>
            <div id='ManageProfile'>
                <div className='box1'>
                </div>

                <div className='box2'>
                    <img src={inviteFriend} alt="Invite Friend" />
                </div>
            </div>
        </>
    )
}


export default Profile