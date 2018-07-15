// // @flow
import { handleActions } from 'redux-actions'
import * as ActionTypes from '../actions/action_types'

export const initialState = {
    color: 'red'
}

const doiMau = handleActions({
  [ActionTypes.DOI_MAU]: (state: any, action: any): any => {
    return { ...state, ahihi: "oke", color: action.payload.color }
  }
}, initialState)

export default doiMau
