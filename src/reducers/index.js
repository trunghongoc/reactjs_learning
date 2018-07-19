// @flow
import { combineReducers } from 'redux'
// import app from './app'
import doiMauReducer from './doi_mau'
import doiChuReducer from './doi_chu'
import fetchDataReducer from './fetch_data'
import trelloReducer from './trello'

const rootReducer = combineReducers({
    doiMauReducer,
    doiChuReducer,
    fetchDataReducer,
    trelloReducer
})

export default rootReducer
