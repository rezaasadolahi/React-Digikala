import { combineReducers } from 'redux'
import { Searchee, Email, Password, WhichPage, Get_Favorit } from './Reducer'




const MainReducer = combineReducers({
    Main_search: Searchee,
    Email: Email,
    Password: Password,
    WhichPage: WhichPage,
    Get_Favorit: Get_Favorit
})

export default MainReducer