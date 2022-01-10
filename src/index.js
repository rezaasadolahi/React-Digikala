import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
//* Components
import App from './App'
import store from './Components/Redux/store'
//* CSS index
import './CSS index/index.css'





ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')
)
