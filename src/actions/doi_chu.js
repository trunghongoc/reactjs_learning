import * as ActionTypes from './action_types';

export function actDoiChu(value) {
    console.log('act doi chu')
    return {
        type: ActionTypes.DOI_CHU,
        payload: value
    }
}
