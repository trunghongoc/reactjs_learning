// @flow
import { combineReducers } from 'redux'
// import app from './app'
import doiMauReducer from './doi_mau'
import doiChuReducer from './doi_chu'

const rootReducer = combineReducers({
    doiMauReducer,
    doiChuReducer
})

export default rootReducer
