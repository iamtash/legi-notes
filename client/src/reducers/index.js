import { combineReducers } from 'redux'
import authReducer from './authReducer.js'
import billsReducer from './billsReducer.js'

export default combineReducers({
    auth: authReducer,
    bills: billsReducer
})