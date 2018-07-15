// // @flow
import { handleActions } from 'redux-actions'
import * as ActionTypes from '../actions/action_types'

export const initialState = {
    data: [],
    success: null,
    meta: ''
}

const fetchDReducer = handleActions({
  [ActionTypes.FETCH_DATA_BY_SAGA]: (state: any, action: any): any => {
    return { ...state }
  },
  [ActionTypes.FETCH_DATA_BY_SAGA_ALERT_OK]: (state: any, action: any): any => {
    return { ...state, ...action.payload  }
  },
  [ActionTypes.FETCH_DATA_BY_SAGA_ALERT_FAIL]: (state: any, action: any): any => {
    return { ...state, ...action.payload  }
  },
  [ActionTypes.DELETE_USER_BY_ID]: (state: any, action: any): any => {
    let data = state.data.filter((user) => {
        return user.id !== action.payload
    })
    return { ...state, data: data  }
  }
}, initialState)

export default fetchDReducer