import * as ActionTypes from './action_types';

export function actGetTrelloData(value = null) {
    return {
        type: ActionTypes.GET_DATA_TRELLO,
        payload: value
    }
}

export function actUpdateTrelloData(value) {
  return {
      type: ActionTypes.UPDATE_DATA_TRELLO,
      payload: value
  }
}
