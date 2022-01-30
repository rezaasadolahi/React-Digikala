import React, { useState } from 'react'
//* Components
import Box2 from '../Profile/box2/Box2'
//* CSS
import './CSS/NavTabs.css'
//* Components
import Favorit from './Favorit'






function Lists() {
    const [clicked, setClicked] = useState(0)

    //* NavTabs
    const handleToggleTab = (index) => {
        if (clicked === index) {
            setClicked(index)
        } else {
            setClicked(index)
        }
    }




    return (
        <div id='ManageProfile' className='ManageFavorit'>
            <section id='box1-Favorit'>
                <nav id="navbar">
                    <button onClick={() => handleToggleTab(0)} className={clicked === 0 ? 'buttonActive' : null}>
                        <p>کالاهای مورد علاقه</p>
                    </button>
                    <button onClick={() => handleToggleTab(1)} className={clicked === 1 ? 'buttonActive' : null}>
                        <p>لیست های عمومی</p>
                    </button>
                    <button onClick={() => handleToggleTab(2)} className={clicked === 2 ? 'buttonActive' : null}>
                        <p>اطلاع رسانی ها</p>
                    </button>
                </nav>
                <div>
                    {
                        clicked === 0 ? <Favorit /> :
                            clicked === 1 ? (<h1>Box 1</h1>) :
                                clicked === 2 ? (<h1>Box 2</h1>) : null
                    }
                </div>
            </section>



            <Box2 />
        </div>
    )
}


export default Lists