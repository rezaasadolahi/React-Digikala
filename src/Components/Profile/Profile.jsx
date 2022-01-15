import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
//* image
import inviteFriend from './Image/InviteFriend.jpg'
import Icon_Profile from './Image/profile.svg'
//* CSS
import './CSS/Profile.css'
//* DATA
import DATA_USER from './DATA/DATA_USER'






function Profile() {
    const [data, setData] = useState('')
    const Email = useSelector(state => state.Email.EmailUser)


    useEffect(() => {
        // Etelate emaili ke sabt shode moqe vorud ya sabtenam va Emaily ke moqe vorud mizanim ra migirim
        let newSetData = DATA_USER.filter(item => item.Email_Address === Email).find(item => item)
        setData(newSetData)
    }, [data])

    


    return (
        <div id='ManageProfile'>
            <section className='box1'>
            </section>

            <section className='box2'>
                <img src={inviteFriend} alt="" />
                <div id='information-account'>
                    <section id='account_name'>
                        <section id='right'>
                            <img src={Icon_Profile} alt="" id='icon-profile' />
                            <section id='Vertical_1'></section>
                            <section id='Vertical_2'></section>
                        </section>
                        <section id='left'>
                            <section id='fullName'>
                                <p>{data.Full_name}</p>
                                <p>{data.phone}</p>
                            </section>
                            <section id='valet'>

                            </section>
                        </section>
                    </section>



                </div>
            </section>
        </div>
    )
}


export default Profile