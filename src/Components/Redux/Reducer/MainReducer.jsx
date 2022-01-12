import { combineReducers } from 'redux'
import { Searchee, Email, Password, WhichPage } from './Reducer'




const MainReducer = combineReducers({
    Main_search: Searchee,
    Email: Email,
    Password: Password,
    WhichPage: WhichPage
})

export default MainReducer