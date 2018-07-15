// // @flow
import { handleActions } from 'redux-actions'
import * as ActionTypes from '../actions/action_types'

export const initialState = {
    text: ''
}

const doiChu = handleActions({
  [ActionTypes.DOI_CHU]: (state: any, action: any): any => {
    return { ...state, text: action.payload.text }
  }
}, initialState)

export default doiChu
