// // @flow
import { handleActions } from 'redux-actions'
import * as ActionTypes from '../actions/action_types'

export const initialState = {
    text: ''
}

const doiChu = handleActions({
  [ActionTypes.DOI_CHU]: (state: any, action: any): any => {
    let _state = { ...state, text: action.payload.text }
    console.log(_state)
    return _state
  }
}, initialState)

export default doiChu
