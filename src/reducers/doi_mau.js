// // @flow
import { handleActions } from 'redux-actions'
import * as ActionTypes from '../actions/action_types'

export const initialState = {
    color: 'red'
}

const doiMau = handleActions({
  [ActionTypes.DOI_MAU]: (state: any, action: any): any => {
    let _state = { ...state, ahihi: "oke", color: action.payload.color }
    console.log(_state)
    return _state
  }
}, initialState)

export default doiMau
