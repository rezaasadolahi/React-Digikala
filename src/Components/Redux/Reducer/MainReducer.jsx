import { combineReducers } from 'redux'
import { Searchee, Email, Password, WhichPage, Get_Favorit, Get_Data_Product, GetProductDetail } from './Reducer'




const MainReducer = combineReducers({
    Main_search: Searchee,
    Email: Email,
    Password: Password,
    WhichPage: WhichPage,
    Get_Favorit: Get_Favorit,
    Get_Data_Product: Get_Data_Product,
    GetProductDetail: GetProductDetail
})

export default MainReducer