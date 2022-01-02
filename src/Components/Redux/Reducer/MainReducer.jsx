import { combineReducers } from 'redux'
import { Searchee, Email, Password } from './Reducer'




const MainReducer = combineReducers({
    Main_search: Searchee,
    Email: Email,
    Password: Password,
})

export default MainReducer