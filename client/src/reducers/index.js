import { combineReducers } from 'redux'
import authReducer from './authReducer.js'
import billsReducer from './billsReducer.js'
import currentUserReducer from './currentUserReducer'
import loadingReducer from './loadingReducer'
import casesReducer from './casesReducer'
import selectedBillReducer from './selectedBillReducer'

export default combineReducers({
    auth: authReducer,
    bills: billsReducer,
    currentUser: currentUserReducer,
    loading: loadingReducer,
    cases: casesReducer,
    selectedBill: selectedBillReducer
})