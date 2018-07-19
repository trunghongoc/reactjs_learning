// // @flow
import { handleActions } from 'redux-actions'
import * as ActionTypes from '../actions/action_types'

export const initialState = {
    data: {
      lanes: [
        {
          id: 'lane1',
          title: 'Lane mặc định 1',
          label: 'test',
          cards: []
        },
        {
          id: 'lane2',
          title: 'Lane mặc định 2',
          label: 'test',
          cards: []
        },
        {
          id: 'lane3',
          title: 'Lane mặc định 3',
          label: 'test',
          cards: []
        }
      ]
    }
}

const trelloReducer = handleActions({
  [ActionTypes.GET_DATA_TRELLO]: (state: any, action: any): any => {
    return state
  },
  [ActionTypes.UPDATE_DATA_TRELLO]: (state: any, action: any): any => {
    return {state, ...{data: action.payload} }
  },
}, initialState)

export default trelloReducer