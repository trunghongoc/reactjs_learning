import * as ActionTypes from './action_types';

export function actFetchData(value) {
    return {
        type: ActionTypes.FETCH_DATA_BY_SAGA,
        payload: value
    }
}

export function actFetchDataAlertOK(value) {
    return {
        type: ActionTypes.FETCH_DATA_BY_SAGA_ALERT_OK,
        payload: value
    }
}

export function actFetchDataAlertFail(value) {
    return {
        type: ActionTypes.FETCH_DATA_BY_SAGA_ALERT_FAIL,
        payload: value
    }
}

export function actDeleteUser(value) {
    return {
        type: ActionTypes.DELETE_USER_BY_ID,
        payload: value
    }
}
