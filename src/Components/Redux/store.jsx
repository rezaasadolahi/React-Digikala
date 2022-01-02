
import { createStore } from 'redux'
import MainReducer from './Reducer/MainReducer'





const store = createStore(MainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store