import * as ActionTypes from './action_types';

export function actFetchData(value) {
    console.log('fetch data 1')
    return {
        type: ActionTypes.FETCH_DATA_BY_SAGA,
        payload: value
    }
}

export function actFetchDataAlertOK(value) {
    console.log('fetch data 2, value:', value)
    return {
        type: ActionTypes.FETCH_DATA_BY_SAGA_ALERT_OK,
        payload: value
    }
}

export function actFetchDataAlertFail(value) {
    console.log('fetch data 3')
    return {
        type: ActionTypes.FETCH_DATA_BY_SAGA_ALERT_FAIL,
        payload: value
    }
}
